Backpack, small, rolltop
========================

Essentially a rolltop sack with a couple of buckles so it can be converted into a small backpack by adding a utility pair of utility straps as the shoulder hanrness. Also has an outer pocket that can be used for foam padding to increase carrrying comfort.

This bag is somewhat insipred by Savotta Hatka and Varusteleka's DP10 daypacks. This version is kept intentionally simple, and does not include features such as PALS webbing of modular attachment points to use the bag a a clamshell or larger packs.



.. image:: IMG_20230601_001823.jpg


Materials
---------


.. raw:: html

    <p>Pattern parameters</p>
    <table id="bill_of_materials" class="table"></table>
    <script type="text/javascript" src="../_static/pattern_calculator/pattern_calculator.js"></script>
    <script type="text/javascript" src="../_static/pattern_calculator/bill_of_materials.js"></script>

    <script>
       
        //function pattern_onchange() {
        //    let pattern_params = get_params_from_form("pattern_form")
        //    for (const [key,value] of Object.entries(pattern_params)){
        //        bom.pattern[key].value = value
        //    }
        //
        //    let material_unit_costs = get_params_from_form("materials_form")
        //    for (const [material_key,unit_cost] of Object.entries(material_unit_costs)){
        //        bom.materials[material_key].unit_cost = unit_cost
        //    }
        //    // specific material and pattern calculations for this type of 
        //    // stuff sack
        //    bom.materials.main_fabric.quantity = bom.pattern.height.value
        //    bom.materials.cord.quantity = bom.pattern.width.value * 2 + 0.15
        //    bom.make_bom_table(bom.materials)
        //}


        pattern = {
            "width": {
                "value": 0.35,
                "unit": "meter",
                "step": 0.05,
                "min": 0.1,
                "max":0.75,
            },
            "height": {
                "value": 0.60,
                "unit": "meter",
                "step": 0.05,
                "min": 0.10,
                "max": 2,
            },
            "allowance": {
                "value": 10,
                "unit": "millimeter",
                "step": 1,
                "min": 1,
                "max": 50,

            },
            "corner": {
                "value": 50,
                "unit": "millimeter",
                "step": 1,
                "min": 10,
                "max": 100,

            }
        }

        materials = {
            "main_fabric": {
                "item":         "Main fabric",
                "quantity":     0.5,
                "unit":         "meter",
                "unit_cost":    18,
            },
            "webbing": {
                "item":         "Webbing, 25mm",
                "quantity":     1.2*2 + 0.1*4 + 0.27 + 0.37 + 0.21,
                "unit":         "meter",
                "unit_cost":    1.6,
            },
            "d_ring": {
                "item":         "D-ring, 25mm, steel",
                "quantity":     2,
                "unit":         "pcs",
                "unit_cost":    0.99,
            },
            "tensionlock": {
                "item":         "Tension lock buckle, 25mm",
                "quantity":     2,
                "unit":         "pcs",
                "unit_cost":    0.5,
            },
            "tri_glide": {
                "item":         "Tri-glide bukcle, 25mm",
                "quantity":     2,
                "unit":         "pcs",
                "unit_cost":    0.5,
            },
            "side_release_male": {
                "item":         "Side release buckle, 25mm, male",
                "quantity":     1,
                "unit":         "pcs",
                "unit_cost":    0.65,
            },
            "side_release_female": {
                "item":         "Side release bukcle, 25mm, female",
                "quantity":     1,
                "unit":         "pcs",
                "unit_cost":    0.65,
            },


        }
        var bom = new BillOfMaterials(pattern, materials)
        
        bom.make_bom_table()
        // bom.make_pattern_form()
        // bom.make_material_form()
        // document.getElementById("pattern_form").onchange = pattern_onchange;
        // document.getElementById("materials_form").onchange = pattern_onchange;
    </script>


The pack consists of one main fabric that functions as both the posterior and medial sections of the pack. The anterior panel is made up of two layers: the main section and the pocket section that creates the exterior pocket where the foam pad and carrying harness can be stowed.


.. image:: overview.png






Cut
---

Suggested cut pattern for 140cm wide fabric rolls

.. image:: cut.png

Construction
------------

Finish the top edge of the pocket section with a folded edge. Fold the seam allowance to the wrong side of the fabric. Similarly finish the bottom corners of the pocket panel by folding off a 6x6cm triangle from each of the corners. The adjustment strap buckles will stow through the holes that the triangles will create.

.. image:: pocket.png


.. image:: anterior-panel-main-section.png



.. image:: IMG_20230601_090145.jpg



Accessories 
-----------

You may consider using 
:doc:`../adapter,-cross-bag-compression-strap/adapter,-cross-bag-compression-strap`
to attach this type of bag to the exterios of a larger rucksack to use as a daypack.
