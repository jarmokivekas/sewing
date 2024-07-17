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
            make_cut_svg(bom.pattern)
            make_corners_svg(bom.pattern)
            make_channel_svg(bom.pattern)

        }


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
            let w = pattern.width.value *1000
            let h = pattern.height.value *1000
            let allowance = pattern.allowance.value
            
            
            turtle = new TurtleSVG()
            // allowance rect
            turtle.start(-allowance, -allowance)
                  .line(2*w + 2*allowance,  0)
                  .line(0,                  2*allowance + h)
                  .line(- 2*w - 2*allowance,  0)
                  .close()
                  turtle.path.setAttribute("style", turtle.style.allowance)
            turtle.end()


            // main rect
            turtle.start(0,0)
                .line(2*w, 0)
                .line(0, h)
                .line(- 2*w, 0)
                .close()
            turtle.path.setAttribute("style", turtle.style.od_green)
            turtle.end()
            
                        turtle.svg.setAttribute("viewbox", turtle.get_viewbox())
            turtle.svg.setAttribute("xmlns", turtle.xmlns)
            turtle.svg.setAttribute("height", turtle.viewbox.height)
            turtle.svg.setAttribute("width", turtle.viewbox.width)
            document.querySelector("div#cut_svg").replaceChildren(turtle.svg)
        }
        make_cut_svg(bom.pattern)
    </script>



Construction
------------


Start by folding/rolling the top left and right corners to remove a triangle of fabric

.. raw:: html

    <div id="corners_svg"></div>
    <script>
        function make_corners_svg(pattern){
            let w = pattern.width.value *1000
            let h = pattern.height.value *1000
            let allowance = pattern.allowance.value
            let corner = pattern.corner.value
            
            turtle = new TurtleSVG()
            // allowance rect
            turtle.start(-allowance, -allowance)
                .line(2*w + 2*allowance,  0)
                .line(0,                  2*allowance + h)
                .line(- 2*w - 2*allowance,  0)
                .close()
                turtle.path.setAttribute("style", turtle.style.allowance)
            turtle.end()


            // corner main rect
            turtle.start(0,0)
                .move(corner, 0)
                .line(2*w - 2*corner, 0) // start of top right corner
                .line(corner,corner)
                .line(-15,0)
                .line(-(corner-15), -(corner-15))
                .line(0, -15) // back to start of top-right corner
                .line(corner, corner) //end of top-right corer fold
                .line(0, h - corner) //bottom right corner
                .line(- 2*w, 0)
                .line(0, -(h - corner)) //start of top-left fold
                .line(corner, -corner)
                .line(0, 15)
                .line(-(corner-15), corner-15)
                .line(-15, 0)
                .move(corner, -corner)
                .close()
            turtle.path.setAttribute("style", turtle.style.od_green)
            turtle.end()
            



            turtle.svg.setAttribute("viewbox", turtle.get_viewbox())
            turtle.svg.setAttribute("xmlns", turtle.xmlns)
            turtle.svg.setAttribute("height", turtle.viewbox.height)
            turtle.svg.setAttribute("width", turtle.viewbox.width)
            document.querySelector("div#corners_svg").replaceChildren(turtle.svg)
        }
        make_corners_svg(bom.pattern)
    </script>





Next, lay down the cord along the top edge of the fabric and make the sinch cord channel along the top edge. Having the cord already there
lets you skip having to thread it in along the channe later. We can just make the channel with the cord already inside it.
It also makes it very easy to get a straight stitch line for the channel, as you can use the cord as a physical guide for the presser foot on you sewing machine.



.. raw:: html

    <div id="channel_svg"></div>
    <script>
        function make_channel_svg(pattern){
            let w = pattern.width.value *1000
            let h = pattern.height.value *1000
            let allowance = pattern.allowance.value
            let corner = pattern.corner.value
            

            turtle = new TurtleSVG()
            // allowance rect
            turtle.start(-allowance, -allowance)
                .line(2*w + 2*allowance,    0)
                .line(0,                    2*allowance + h)
                .line(- 2*w - 2*allowance,  0)
                .close()
            turtle.path.setAttribute("style", turtle.style.allowance)
            turtle.end()

            let hc = corner /2

            // corner main rect
            turtle.start(2*w -hc,           hc)
                .line(hc,                   hc)             // efge of the fole
                .line(0,                    h - corner)     // to bottom right corner ||||||||V
                .line(- 2*w,                0)              // <--------
                .line(0,                    -(h - corner))  //start of top-left fold
                .line(hc,                   -hc)
                .close()
            turtle.path.setAttribute("style", turtle.style.od_green)
            turtle.end()

            // channel fold trapezoid
            turtle.start(hc, hc)
                // channel top edge
                .line(2*w - 2*hc,           0)       // -------->
                .line(-hc,                  hc)
                .line(-(2*w - 2*corner),    0)      // <---------
                .close()
            turtle.path.setAttribute("style", turtle.style.od_green)
            turtle.end()
            
            // channe stich line
            turtle.start(corner, corner)
                .move(0, -5)
                .line(2*w - 2*corner, 0)
            turtle.path.setAttribute("style", turtle.style.stitch)
            turtle.end()

            

            turtle.svg.setAttribute("viewbox", turtle.get_viewbox())
            turtle.svg.setAttribute("xmlns", turtle.xmlns)
            turtle.svg.setAttribute("height", turtle.viewbox.height)
            turtle.svg.setAttribute("width", turtle.viewbox.width)
            document.querySelector("div#channel_svg").replaceChildren(turtle.svg)
        }
        make_channel_svg(bom.pattern)
    </script>



![Fold the fabric along the center, and sew the side and bottom seam]()





