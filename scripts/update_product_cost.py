#!/usr/bin/env python3

import argparse
import sqlite3
import sys


PRICE_MULTIPLIER = 2
HOURLY = 5

def calculate_overhead_cost(conn, product_sku):
    """
    Returns total material cost for a given product SKU.
    """
    
    query = """
    SELECT
        shipping_cost,
        overhead_cost,
        labor_hours
    FROM products
    WHERE sku = ?
    """

    cursor = conn.execute(query, (product_sku,))
    rows = cursor.fetchall()

    if not rows:
        raise ValueError(f"No BOM items found for product SKU '{product_sku}'")

    total_overhead_cost = 0.0

    print("Overhead breakdown:")
    for shipping_cost, overhead_cost, labor_hours in rows:
        line_cost = shipping_cost + overhead_cost
        labor_overhead = labor_hours * HOURLY
        line_cost += labor_overhead
        total_overhead_cost += line_cost
        print(f"""   - shipping cost: {shipping_cost} €
   - labor: {labor_overhead} €
   - other overhead: {overhead_cost} €
        """)
    return total_overhead_cost


def calculate_material_cost(conn, product_sku):
    """
    Returns total material cost for a given product SKU.
    """
    query = """
    SELECT
        b.quantity,
        b.usage,
        m.price_per_unit,
        m.name,
        m.unit
    FROM bom_items b
    JOIN materials m ON b.material_id = m.id
    WHERE b.product_sku = ?
    """



    cursor = conn.execute(query, (product_sku,))
    rows = cursor.fetchall()

    if not rows:
        raise ValueError(f"No BOM items found for product SKU '{product_sku}'")

    total_material_cost = 0.0

    print("BOM breakdown:")
    for quantity, usage, price_per_unit, name, unit in rows:
        line_cost = quantity * price_per_unit
        total_material_cost += line_cost
        print(f"""  - {usage}:
        {name}:
        {quantity} {unit} × {price_per_unit:.2f} € = {line_cost:.2f} €""")

    return total_material_cost


def update_product(conn, product_sku, material_cost, overhead_cost, dry_run):
    price = material_cost * PRICE_MULTIPLIER
    price += overhead_cost

    print(f"\nComputed totals:")
    print(f"  Material cost: {material_cost:.2f} €")
    print(f"  Product price ({PRICE_MULTIPLIER}×): {price:.2f} €")

    if dry_run:
        print("\n--dry-run enabled, database will NOT be modified.")
        return

    update_query = """
    UPDATE products
    SET material_cost = ?, price = ?
    WHERE sku = ?
    """

    cur = conn.execute(update_query, (material_cost, price, product_sku))
    if cur.rowcount == 0:
        raise ValueError(f"Product with SKU '{product_sku}' does not exist")

    conn.commit()
    print("\nDatabase updated successfully.")


def main():
    parser = argparse.ArgumentParser(
        description="Recalculate material cost and price for a product"
    )
    parser.add_argument(
        "sku",
        help="Product SKU to update"
    )
    parser.add_argument(
        "--db",
        default="database/products.sqlite",
        help="Path to SQLite database (default: database/products.sqlite)"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Calculate but do not write changes to the database"
    )

    args = parser.parse_args()

    try:
        conn = sqlite3.connect(args.db)
        conn.execute("PRAGMA foreign_keys = ON")

        material_cost = calculate_material_cost(conn, args.sku)
        overhead_cost = calculate_overhead_cost(conn, args.sku)
        update_product(conn, args.sku, material_cost, overhead_cost, args.dry_run)

    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

    finally:
        conn.close()


if __name__ == "__main__":
    main()
