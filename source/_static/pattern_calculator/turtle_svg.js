class TurtleSVG {

    style = {
        "od_green": "fill:#8e7c23;stroke:black;stroke-width:0.5mm",
        "allowance": "fill:gray;stroke:black;stroke-width:0.5mm",
        "stitch" : "fill:none;stroke:black;stroke-width:0.5mm;stroke-dasharray: 4mm"
    }


    constructor() {
        this.xmlns = "http://www.w3.org/2000/svg"
        this.svg = document.createElementNS(this.xmlns, "svg");
        this.x = null
        this.y = null
        this.path = null
        this.viewbox = null

    }

    _setx(x){
        assert(x!=null, "turtle x coordinate is not set (null)")

        if (x < this.viewbox.xmin){
            this.viewbox.xmin = x
        }
        if (x > this.viewbox.xmax){
            this.viewbox.xmax = x
        }
        this.viewbox.width = this.viewbox.xmax - this.viewbox.xmin
        this.x = x
    }
    
    _sety(y){
        assert(y!=null, "turtle y coordinate is not set (null)")
        if (y < this.viewbox.ymin){
            this.viewbox.ymin = y
        }
        if (y > this.viewbox.ymax){
            this.viewbox.ymax = y
        }
        this.viewbox.height = this.viewbox.ymax - this.viewbox.ymin
        this.y = y
    }

    _append_d(directive) {
        this.path.setAttribute(
            'd',
            this.path.getAttribute('d') + ` ${directive}`
        )
    }

    /** return the viewbox of the turtle-ed graphics so far
     * formatted as a <svg viewbox=""> attribute string: "xmin ymin width height"  
     */
    get_viewbox() {
        let viewbox = ""
        viewbox += this.viewbox.xmin + " "
        viewbox += this.viewbox.ymin + " "
        viewbox += this.viewbox.width + " "
        viewbox += this.viewbox.height
        return viewbox
    }

    /**
     * create the svg path element, and move the turlte to the x,y start position
     * */
    start(x, y) {
        assert(this.path == null, "can't start if a path is already active")
        assert(this.x == null, "turtle x coordiante is not null, make sure a trutle is not already active")
        assert(this.y == null, "turtle y coordiante is not null, make sure a trutle is not already active")
        this.path = document.createElementNS(this.xmlns, "path")

        // in case this is not the first turtle-line don't reset the viewbox
        if (this.viewbox == null) {
            this.viewbox = {}
            this.viewbox.xmin = x
            this.viewbox.ymin = y
            this.viewbox.xmax = x
            this.viewbox.ymax = y
        }
        // we need to set 'd' to "", otherwise it will be interpreted as the string "null"
        this.path.setAttribute('d', "") 
        // we manually add an absolute move direcitve, since we don't have a current position
        // to use for the relative this.move() function
        this._setx(x)
        this._sety(y)
        this._append_d(`M ${this.x} ${this.y}`)
        return this
    }

    move(dx, dy) {
        assert(this.path != null, "path is not set (there is no turtle")
        this._setx(this.x + dx)
        this._sety(this.y + dy)
        this._append_d(`M${this.x} ${this.y}`)
        return this
    }

    line(dx,dy) {
        assert(this.path != null, "the turtle is not present :) ")
        this._setx(this.x + dx)
        this._sety(this.y + dy)
        this._append_d(`L${this.x} ${this.y}`)
        return this
    }

    close() {
        this._append_d('Z')
        return this
    }

    end() {
        this.svg.appendChild(this.path)
        this.svg
        this.x = null
        this.y = null
        this.path = null
        return this
    }
    
}