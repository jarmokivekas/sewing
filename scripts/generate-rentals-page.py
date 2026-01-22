import sqlite3
from pathlib import Path
from jinja2 import Environment, FileSystemLoader, select_autoescape

# Paths
REPO_ROOT = Path(__file__).parent.parent
DB_PATH = REPO_ROOT / "database/products.sqlite"
TEMPLATE_DIR = REPO_ROOT / "templates"

SOURCES_DIR = REPO_ROOT / "source"
RST_TEMPLATE = TEMPLATE_DIR / "rentals.rst.jinja"
OUTPUT_RST = SOURCES_DIR / "rentals.rst"

# Public-facing columns only
PUBLIC_COLUMNS = """
    name,
    rent_1_day_eur,
    rent_3_days_eur,
    rent_1_week_eur,
    condition,
    hyperlink
"""

def fetch_public_equipment():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute(f"""
        SELECT {PUBLIC_COLUMNS}
        FROM equipment
        ORDER BY name
    """)

    rows = [dict(row) for row in cur.fetchall()]
    conn.close()
    return rows

def indent_for_rst(text: str, spaces: int = 3) -> str:
    prefix = " " * spaces
    return "\n".join(
        prefix + line if line.strip() else ""
        for line in text.splitlines()
    )

def main():
    items = fetch_public_equipment()

    env = Environment(
        loader=FileSystemLoader(TEMPLATE_DIR),
        autoescape=select_autoescape(enabled_extensions=("html",))
    )

    table_template = env.get_template("rental-inventory-table.html.jinja")
    html_table = table_template.render(items=items)
    html_table = indent_for_rst(html_table)
    

    rst_template_text = RST_TEMPLATE.read_text(encoding="utf-8")

    output = rst_template_text.replace(
        "{{ rental_inventory }}",
        html_table
    )


    OUTPUT_RST.write_text(output, encoding="utf-8")
    print(f"Wrote {OUTPUT_RST}")

if __name__ == "__main__":
    main()
