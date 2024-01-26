

# Size callouts in Inkscape

![](Pasted%20image%2020240126184736.png)
in inkscape
1. Select the object
2. open  *Path* > *Path* *Effect* panel
3. press `+`
4. add "*Measure Segments*" effect

For readability, in the **General** tab, set:

1. Unit: mm
3. Font: Monospace Regular, 28
4. Position: 10
5. Line width: 0.50

In the **Options** tab:

1. Precision: 0
2. Blacklist segments
	1. use separate indexes with comma
	2. check *invert blacklist* to whitelist segments

# Visual styles


The visual style guide in buckles.svg has slowly evolved to ensure that the SVG files are readable in as many contexts as possible.

- do not use 'hairline' stroke. It is very inconsistent with how it's rendered. Instead use e.g a 0.5mm stroke width.  Set Inkscape to use the bounding box of the pure path geometry, not the rendered geometry. Otherwise the stroke width will be added as padding to the shape bounding box, and cause misalignments in the illustrations
- avoid using transparency. Browsers and image viewers are inconsistent in how they display transparent objects. It may difficult to understand images.


![buckles](../buckles.svg)