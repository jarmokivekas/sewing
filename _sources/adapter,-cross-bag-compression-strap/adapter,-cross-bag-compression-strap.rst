Adapter, Cross Bag Compression Strap
====================================

This is a simple adapter that consists of a short piece of webbing with a sewn-in side-release buckle receptacle in both ends.
The purpose of the cross-bag compression strap adapter is to change typical side compression straps to on long compression strap that goes across the entire width of a pack.




A cross-bag compression strap is convenient when carrying bulky items like boxes or canisters on the outside of a larger pack.
Or they can be used to compress a smaller daypack to the back of a larger rucksack. 

Cross-bag compression straps also function very well on smaller packs, where sinching the side compression straps all the way down is still not enough at times if there is no room for the buckle to tighen anymore. 


.. image:: adapter0.jpg


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
            bom.materials.webbing.quantity = bom.pattern.adapter_length.value + 0.10


        }


        pattern = {
            "adapter_length": {
                "value": 0.10,
                "unit": "meter",
                "step": 0.05,
                "min": 0.1,
                "max":1,
            },
        }

        materials = {
            "webbing": {
                "item":         "Webbing, 25mm",
                "quantity":     pattern.adapter_length.value + 0.10,
                "unit":         "meter",
                "unit_cost":    1.8,
            },
            "buckle, receptacle": {
                "item":         "ITW Classic SR buckle, black",
                "quantity":     2,
                "unit":         "pcs",
                "unit_cost":    0.65,
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

The length of the webbing is :

.. code::

    webbing_length = adapter_length + 2 * 5 cm 

The additional webbing is to account for the folded ends for the sewn-in buckles.

Construction
------------

1. If you're making short adapters, mark the center of the webbing, and make the folded and meet in the middle.
2. Insert the buckles into the folds
3. Double bartack both folds to secure the buckles
4. The adapter is finished.


Usage
-----

Typically you would have two of these adapters: one for the top pair of compression straps, and another for the bottom pair.
In the below picture the adapers are used to keep a small daypack (:doc:`../backpack,-small,-rolltop,-utility-shoulder-strap` ) on the back of a Savotta Jääkäri XL rucksack.


.. image:: adapter1.jpg


Of course its also just an piece of webbing with some buckles, so there are probably lots of creative ways to use one of these.

.. image:: adapter4.jpg