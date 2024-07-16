class BillOfMaterials{

    constructor(pattern, materials) {
        this.materials = materials
        this.pattern = pattern
    }


    make_bom_table() {
        
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
        for (const [key, material] of Object.entries(this.materials)) {
            let row = document.createElement('tr')
            let td = document.createElement('td'); td.innerText = material.item; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.quantity.toFixed(2); row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.unit; row.appendChild(td)
            td = document.createElement('td'); td.innerText = material.unit_cost; row.appendChild(td)
            // total cost is rounded to 2 decimal places to keep it looking consistent
            td = document.createElement('td'); td.innerText = (material.unit_cost * material.quantity).toFixed(2); row.appendChild(td)
            bom_table.appendChild(row)
        }
    }
    
    make_pattern_form() {
        
        let pattern_form = document.querySelector("form#pattern_form")
        let fieldset =  document.createElement('fieldset')

        for (const [key, param] of Object.entries(this.pattern)){
            let label = document.createElement("label")
            label.setAttribute('for', key)
            label.innerText = `${key} [${param.unit}]: ` 

            let input = document.createElement("input")
            input.id = key
            input.name = key
            input.value = param.value
            if (typeof param.value == "number"){
                input.type = "number"
                input.step = param.step
            }
            fieldset.appendChild(label)
            fieldset.appendChild(document.createElement('br'))
            fieldset.appendChild(input)
            fieldset.appendChild(document.createElement('br'))
        }
        // overwrite any possible existing fieldset in the form
        // se we don't just keep appending stuff
        pattern_form.replaceChildren(fieldset)
    }

    get_total_material_cost(){
        this.materials
    }

    make_material_form() {

        let materials_form = document.querySelector("form#materials_form")
        let fieldset =  document.createElement('fieldset')

        for (const [key, material] of Object.entries(this.materials)){
            let label = document.createElement("label")
            label.setAttribute('for', key)
            label.innerText = `${key} unit cost [${material.unit}]: ` 

            let input = document.createElement("input")
            input.id = key
            input.name = key
            input.value = material.unit_cost
            input.type = "number"
            input.step = 0.1
            fieldset.appendChild(label)
            fieldset.appendChild(document.createElement('br'))
            fieldset.appendChild(input)
            fieldset.appendChild(document.createElement('br'))
        }
        // overwrite any possible existing fieldset in the form
        // se we don't just keep appending stuff
        materials_form.replaceChildren(fieldset)
    }
}
