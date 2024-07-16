Stuff Sack, PLCE Style 35x60cm
==============================

This is a pattern based on the british PLCE (Personal Load Carrying Equipment) rucksac side pouch insertsion bag, aptly named "*Bag, Insertion, Pouch, Side, Rucksack.*"

A stuff sack does not get much simpler than this. When laid flat, the bag is 60cm x 35cm in size. 

.. raw:: html

    <form action="" id="pattern_form"></form>
    <table id="bill_of_materials" class="table"></table>
    <script type="text/javascript" src="../_static/pattern_calculator/pattern_calculator.js"></script>
    <script type="text/javascript" src="../_static/pattern_calculator/bill_of_materials.js"></script>

    <script>
        var bom = new BillOfMaterials();
       
        function pattern_onchange() {
            bom.pattern = get_pattern_params_from_form()
            bom.materials
        }


        bom.pattern = {
            "width_m": 0.35,
            "height_m": 0.60
        }

        bom.materials = [
            {
                "item":         "main fabric",
                "quantity":     bom.pattern.height_m,
                "unit":         "meter",
                "unit_cost":    4.9,
            },{
                "item":         "cord",
                "quantity":     bom.pattern.width_m * 2 + 0.15,
                "unit":         "meter",
                "unit_cost":    0.6,
            },{
                "item":         "cord lock",
                "quantity":     1,
                "unit":         "pcs",
                "unit_cost":    2.0,
            },
        ] 
                
        bom.make_bom_table(bom.pattern, bom.materials)
        bom.make_pattern_form(bom.pattern)
        document.getElementById("pattern_bom").onchange = pattern_onchange;
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





