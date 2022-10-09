const cargarDatos = (arreglo) => {

  let p = `<thead>
     <th>Name</th>
     <th>Telephone</th>
    </thead>`; 
    for (let index = 0; index < arreglo.length ; index++) {
        p  = p+ ` <tr>
        <td>` + arreglo[index].nombre+ `</td>
        <td>` + arreglo[index].Tel+ `</td>
   </tr>`;
    }
    return p; 
};

fetch("./datos.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    document.querySelector(".table").innerHTML = cargarDatos(jsondata);
});
  
















/*  const fs = require("fs"); 
const n = [
    {"nombre":"manzana", "Tel":"987654" }
]; 
fs.writeFile('datos.json' , n);  */
