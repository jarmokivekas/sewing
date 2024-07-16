class BillOfMaterials{

    constructor() {
        this.materials = []
        this.pattern = {}
    }


    make_bom_table(materials) {
        
        console.log("making the bom")
        let bom_table = document.querySelector("table#bill_of_materials")
        let header = document.createElement('tr')
        let col = document.createElement('th'); col.innerText = 'item'; header.appendChild(col)
        col = document.createElement('th'); col.innerText = 'quantity'; header.appendChild(col)
        col = document.createElement('th'); col.innerText = 'unit'; header.appendChild(col)
        col = document.createElement('th'); col.innerText = 'unit cost'; header.appendChild(col)
        col = document.createElement('th'); col.innerText = 'total cost'; header.appendChild(col)

        // clear out any existing table headers and rows by overwriting them
        bom_table.replaceChildren(header)

        console.log
        for (const [key, material] of Object.entries(materials)) {
            let row = document.createElement('tr')
            let td = document.createElement('td'); td.innerText = material.item; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.quantity; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.unit; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.unit_cost; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.unit_cost * material.quantity; row.appendChild(td)
            bom_table.appendChild(row)
        }
    }
    
    make_pattern_form(pattern) {
        
        let pattern_form = document.querySelector("form#pattern_form")
        let fieldset =  document.createElement('fieldset')

        for (const [key, value] of Object.entries(pattern)){
            let label = document.createElement("label")
            label.setAttribute('for', key)
            label.innerText = key

            let input = document.createElement("input")
            input.id = key
            input.name = key
            input.value = value
            if (typeof value == "number"){
                input.type = "number"
            }
            fieldset.appendChild(label)
            fieldset.appendChild(input)
        }
        // overwrite any possible existing fieldset in the form
        // se we don't just keep appending stuff
        pattern_form.replaceChildren(fieldset)
    }
}
