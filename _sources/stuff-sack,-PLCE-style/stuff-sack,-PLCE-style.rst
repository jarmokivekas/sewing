Stuff Sack, PLCE Style
======================

This is a very simplistic draw-cord sack pattern based on the british PLCE (Personal Load Carrying Equipment) rucksac side pouch insertsion bag, aptly named "*Bag, Insertion, Pouch, Side, Rucksack.*"

A stuff sack does not get much simpler than this. The original pattern is for a sack 60cm x 35cm in size.
That size is optimized so that the width of the cut fabric is 35*2 = 70 cm. 
When adding some seam allowance, it will perfectly use half the width of a 1.5m wide roll of fabric.
So make two, and there won't be any excess fabric left.

Materials
---------

Although the original pattern is for a 35x60 cm sack, you can use the form below to make adjustments to the pattern size.

:width: the width of the completed sack when laid flat. The circumference of the opening is 2x this value.
:height: the size of the sack measured from the opening to the bottom of the sack.


.. raw:: html

    <p>Pattern parameters</p>
    <form action="" id="materials_form"></form><br>
    <form action="" id="pattern_form"></form><br>
    <table id="bill_of_materials" class="table"></table>
    <script type="text/javascript" src="../_static/pattern_calculator/pattern_calculator.js"></script>
    <script type="text/javascript" src="../_static/pattern_calculator/bill_of_materials.js"></script>

    <script>
       
        function pattern_onchange() {
            let pattern_params = get_params_from_form("pattern_form")
            for (const [key,value] of Object.entries(pattern_params)){
                bom.pattern[key].value = value
            }

            let material_unit_costs = get_params_from_form("materials_form")
            for (const [material_key,unit_cost] of Object.entries(material_unit_costs)){
                bom.materials[material_key].unit_cost = unit_cost
            }
            // specific material and pattern calculations for this type of 
            // stuff sack
            bom.materials.main_fabric.quantity = bom.pattern.height.value
            bom.materials.cord.quantity = bom.pattern.width.value * 2 + 0.15
            bom.make_bom_table(bom.materials)
        }


        pattern = {
            "width": {
                "value": 0.35,
                "unit": "meter",
                "step": 0.05,
            },
            "height": {
                "value": 0.60,
                "unit": "meter",
                "step": 0.05,
            }
        }

        materials = {
            "main_fabric": {
                "item":         "Main fabric",
                "quantity":     pattern.height.value,
                "unit":         "meter",
                "unit_cost":    4.9,
            },
            "cord": {
                "item":         "Paracord Type III",
                "quantity":     pattern.width.value * 2 + 0.15,
                "unit":         "meter",
                "unit_cost":    0.6,
            },
            "cord_lock": {
                "item":         "Savotta cord lock",
                "quantity":     1,
                "unit":         "pcs",
                "unit_cost":    2.0,
            },
        }
        var bom = new BillOfMaterials(pattern, materials)
        
        bom.make_bom_table()
        bom.make_pattern_form()
        bom.make_material_form()
        document.getElementById("pattern_form").onchange = pattern_onchange;
        document.getElementById("materials_form").onchange = pattern_onchange;
    </script>



Cut
---

The pattern is designed to take up exactly half of a 150cm wide length of fabric. So make two of these and you will not have any odd-shaped leftover fabric on your roll


.. raw:: html

    <script type="text/javascript" src="../_static/pattern_calculator/turtle_svg.js"></script>
    <div id="cut_svg"></div>
    <script>
        function make_cut_svg(pattern){
            turtle = new TurtleSVG()
            turtle.start(0,0)
                .line(pattern.width.value*1000, 0)
                .line(0, pattern.height.value*2000)
                .line(-pattern.width.value*1000, 0)
                .close()
            turtle.path.setAttribute("style", turtle.style.od_green)
            turtle.end()
            turtle.svg.setAttribute("viewbox", turtle.get_viewbox())
            turtle.svg.setAttribute("xmlns", turtle.xmlns)
            // turtle.svg.setAttribute("height", 500)
            document.querySelector("div#cut_svg").appendChild(turtle.svg)
        }
        make_cut_svg(pattern)
    </script>

Construction
------------


![Roll the top left and right coners, and stich]()


![insert the cord, and make the sinch cord channel along the top edge]()


![Fold the fabric along the center, and sew the side and bottom seam]()





