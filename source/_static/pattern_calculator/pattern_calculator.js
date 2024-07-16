
const INCH = 25.4
const METER = 1000
// draw a rectangular panel of fabric + the seam allowance. May have rounded corners
// x,y,width,height refer to the fabric without the seam allowance.

function assert(assert_passed, message) {

    if (!assert_passed) {
        alert("Assert Failure: " + message)
    }

    return assert_passed
}


function webbing_rect(svg,x,y,width,height) {
    let webbing =  document.createElementNS("http://www.w3.org/2000/svg", "rect");
    webbing.setAttribute("x",x)
    webbing.setAttribute("y", y)
    webbing.setAttribute("width", width)
    webbing.setAttribute("height", height)
    webbing.setAttribute("rx", 0)
    webbing.setAttribute("ry", 0)
    webbing.setAttribute("fill", "#9d8c41") // webbing color
    webbing.setAttribute("stroke", "black")
    webbing.setAttribute("stroke-width", 1)

    svg.appendChild(webbing)
    retval = {
        viewbox: [x, y, width, height]
    }
    return retval;
}

function pad_svg_viewbox(viewbox, padding_mm){
    assert(viewbox.length == 4)
    assert(typeof viewbox[0] == "number")
    assert(typeof viewbox[1] == "number")
    assert(typeof viewbox[2] == "number")
    assert(typeof viewbox[3] == "number")
    assert(typeof(padding_mm) == "number")

    newbox = viewbox
    // this is the top-left corner of the bounding box
    newbox[0] -= padding_mm
    newbox[1] -= padding_mm
    // we are adding padding * 2 because this is the width and height
    // of the bounding box. We are adding padding on both left and right side, so double
    newbox[2] += padding_mm * 2
    newbox[3] += padding_mm * 2

    return newbox
}


function fabric_rect(svg,x,y,width_mm,height_mm,corner_radius_mm = 0,seam_allowance = 0) {

    let allowance_rect =  document.createElementNS("http://www.w3.org/2000/svg", "rect");
    allowance_rect.setAttribute("x", x-seam_allowance);
    allowance_rect.setAttribute("y", y-seam_allowance);
    allowance_rect.setAttribute("width", width_mm+2*seam_allowance);
    allowance_rect.setAttribute("height", height_mm+2*seam_allowance);
    allowance_rect.setAttribute("rx", corner_radius_mm+seam_allowance),
    allowance_rect.setAttribute("ry", corner_radius_mm+seam_allowance),
    allowance_rect.setAttribute("fill", "#998");
    allowance_rect.setAttribute("stroke", "black");
    allowance_rect.setAttribute("stroke-width", "0.5%")
    svg.appendChild(allowance_rect)

    let main_rect = document.createElementNS("http://www.w3.org/2000/svg", "rect"); 
    main_rect.setAttribute("x", x);
    main_rect.setAttribute("y", y);
    main_rect.setAttribute("width", width_mm);
    main_rect.setAttribute("height", height_mm);
    main_rect.setAttribute("rx", corner_radius_mm),
    main_rect.setAttribute("ry", corner_radius_mm),
    main_rect.setAttribute("fill", "#665");
    main_rect.setAttribute("stroke", "black");
    main_rect.setAttribute("stroke-width", "0.5%")
    svg.appendChild(main_rect)


    let retval = {
        "viewbox": [
        x-seam_allowance,
        y-seam_allowance,
        width_mm+2*seam_allowance,
        height_mm+2*seam_allowance
    ]};
    return retval

}

/**
 * enable and disable the onchange event of the form.
 * returns the previous value of the attribute so that calling funcitons
 * can easily restore the onchange functionality after temporerily disabling it
 * 
 * @param {string} onchange_value - the html onchange attribute value to set for the pattern form
 * @returns the previous value of the attribute. 
 */
function set_form_onchange(onchange_value){
    pattern_form = document.getElementById("pattern_form")
    previous_value = pattern_form.getAttribute("onchange")
    document.getElementById("pattern_form").setAttribute("onchange", onchange_value)
    return previous_value
}

function set_query_string_parameter(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
}


/**
 * update the pattern form with new pattern parameters.
 * onchange updating of the form is disabled during this function
 * to prevent flickering of the screen.
 */ 
function set_pattern_params_to_form(pattern) {
    
    previous_onchange = set_form_onchange("")
    for (const [key, value] of Object.entries(pattern)) {
        document.getElementById(key).value = value;
    }
    set_form_onchange(previous_onchange)
}

/**
 * Read pattern form using Form data, and update all those data to the 
 * URL GET parameters. Assumes form data is sane.
 */
function set_pattern_params_to_url(pattern) {
    const params = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(pattern)) {
        params.set(key, value);
    }
    // replace state will change the window.location url without forcing
    // the browser to loat. This prevents e.g. the widnow from scrolling on update
    // or the website UI from flickering. 
    window.history.replaceState(
        {},
        "",
        decodeURIComponent(`${window.location.pathname}?${params}`)
    );
}   


// read the GET parameters into easier to use values.
function get_pattern_params_from_url(){
    console.debug("getting parameters from GET url")
    let params = (new URL(window.location)).searchParams;
    var pattern = {}
    for (const [key, value] of params.entries()) {
        // if there is an <input> with the same id, use it to typecast variable
        // else numbers will be interpreted as strings
        if (document.querySelector("input#" + key).type == "number"){
            pattern[key] = Number(value)
        }
        else {
            pattern[key] = value;
        }
    }
    return pattern;
}
function get_pattern_params_from_form(){
    var form = document.getElementById('pattern_form');
    var data = new FormData(form);
    var pattern = {}
    for (const [key, value] of data) {
        if (document.querySelector("input#" + key).type == "number"){
            pattern[key] = Number(value)
        }
        else {
            pattern[key] = value;
        }
    }
    return pattern;
}


function resubmit_form() {
    document.getElementById('pattern_form').submit()
    return true
}