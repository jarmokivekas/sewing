Stuff Sack, PLCE Style 35x60cm
==============================

This is a pattern based on the british PLCE (Personal Load Carrying Equipment) rucksac side pouch insertsion bag, aptly named "*Bag, Insertion, Pouch, Side, Rucksack.*"

A stuff sack does not get much simpler than this. When laid flat, the bag is 60cm x 35cm in size. 

Materials
---------

.. raw:: html

    <p>Pattern parameters</p>
    <form action="" id="materials_form"></form><br>
    <form action="" id="pattern_form"></form><br>
    <table id="bill_of_materials" class="table"></table>
    <script type="text/javascript" src="../_static/pattern_calculator/pattern_calculator.js"></script>
    <script type="text/javascript" src="../_static/pattern_calculator/bill_of_materials.js"></script>

    <script>
        var bom = new BillOfMaterials();
       
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


        bom.pattern = {
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

        bom.materials = {
            "main_fabric": {
                "item":         "Main fabric",
                "quantity":     bom.pattern.height.value,
                "unit":         "meter",
                "unit_cost":    4.9,
            },
            "cord": {
                "item":         "Paracord Type III",
                "quantity":     bom.pattern.width.value * 2 + 0.15,
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
                
        bom.make_bom_table(bom.materials)
        bom.make_pattern_form(bom.pattern)
        bom.make_material_form(bom.materials)
        document.getElementById("pattern_form").onchange = pattern_onchange;
        document.getElementById("materials_form").onchange = pattern_onchange;
    </script>



Cut
---

The pattern is designed to take up exactly half of a 150cm wide length of fabric. So make two of these and you will not have any odd-shaped leftover fabric on your roll


![Cut a 65 x 70cm rectangle of fabric]()

Construction
------------


![Roll the top left and right coners, and stich]()


![insert the cord, and make the sinch cord channel along the top edge]()


![Fold the fabric along the center, and sew the side and bottom seam]()





