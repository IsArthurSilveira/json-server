   import {volumetotal1} from './calculosteste.js';
   
   function calcular (){ 
    
    
    var exibir = []
    var volumes = [];
    var cimento = (volumetotal1 *  350) /50;
    volumes.push(cimento);
    
    var areia = (volumetotal1 * 0.60);
    volumes.push(areia);
    var brita =  volumetotal1 * 0.80
    volumes.push(brita);
    var forma =  volumetotal1 * 12
    volumes.push(forma);
    var aco = volumetotal1 * 80
    volumes.push(aco);
    var agua = volumetotal1 * 200
    volumes.push(agua);
    exibir.push(volumes);


    document.getElementById("resultado").innerHTML = 
    "<table>" +
    "<td>" + exibir[0][0] + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>areia</td>" +
    "<td>" + exibir[0][1] + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Brita</td>" +
    "<td>" + exibir[0][2] + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Forma</td>" +
    "<td>" + exibir[0][3] + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Aço</td>" +
    "<td>" + exibir[0][4] + "</td>" +
    "</tr>" +
    "<td>agua</td>" +
    "<td>" + exibir[0][5] + "</td>" +
    "</tr>"+
    "</table>"
        
}