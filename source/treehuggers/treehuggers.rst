Tree Huggers, One Pair
======================

These are simple treehuggers used to set up a hammock, consisting of 2 meter lengths of webbing with sew 10cm loops in both ends.


.. image:: treehuggers0.jpg




Materials
---------

The materials are listed for one pair, as it seldom makes sense to only make one treehugger.

.. raw:: html

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
            bom.materials.webbing.quantity = (bom.pattern.length.value + 0.2)*2
            bom.make_bom_table(bom.materials)
            make_cut_svg(bom.pattern)
            make_corners_svg(bom.pattern)
            make_channel_svg(bom.pattern)

        }


        pattern = {
            "length": {
                "value": 2,
                "unit": "meter",
                "step": 0.1,
                "min": 1,
                "max": 10,
            },
        }

        materials = {
            "webbing": {
                "item":         "Webbing, 25mm, Savotta PES",
                "quantity":     (pattern.length.value + 0.2)*2,
                "unit":         "meter",
                "unit_cost":    1.7,
            },
            "thread": {
                "item":         "Gutermann Zwilon or Coats Nylbond. #60, bonded nylon",
                "quantity":     1,
                "unit":         "small amount",
                "unit_cost":    0,
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

Typically sold treehuggers are 2 meters end-to-end, but can also be a bit longer, e.g DD hammocks XL huggers are 3 meters. Reserve 10cm of loop allowance in both ends of you webbing. 

For 2 meter long treehuggers, cut 2.2 meter lengths of webbing

Construction
------------

Just bartak loops in the ends of both lengths of webbing:

1. Make a fold 10 cm from the end of the webbing. 
2. Make three parallel bartacks across the webbing to secure the loop

Since this needs to hold up quite a lot of weight, make sure your bartacks are properly made, and with thread that is strong enough.



.. image:: treehuggers1.jpg

Accessories
-----------

- Make a hammock, else what will you hang up?  :doc:`../hammock/hammock`
- Make a :doc:`../ridgeline/ridgeline` with :doc:`soft-shackle,-prusik/soft-shackle,-prusik` for you hammock office


.. image:: treehuggers2.jpg


