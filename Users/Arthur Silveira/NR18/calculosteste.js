
let volumetotal1 =[];

function calcular() {
let inputComprimento = document.getElementById("comprimento");
let inputLargura = document.getElementById("largura");
let inputPavimento = document.getElementById("pavimento");
let inputCasaMaqLargura = document.getElementById("CasaMaqLarg");
let inputCasaMaqComprimento = document.getElementById("CasaMaqComp");

let valorComprimento = inputComprimento.value;
let valorLargura = inputLargura.value;
let valorPavimento = inputPavimento.value;
let valorCasaMaqLargura = inputCasaMaqLargura.value;
let valorCasaMaqComprimento = inputCasaMaqComprimento.value;

let area = valorComprimento * valorLargura;
let areaMaq = valorCasaMaqComprimento * valorCasaMaqLargura;
let n = valorPavimento - 1;
const dados = [];




    var calculos = [];
    var fundacoes = area * 0.25;
    calculos.push(fundacoes);
    var pavTipo = area * 0.20 * n;
    calculos.push(pavTipo);
    var Coberta = area * 0.15;
    calculos.push(Coberta);
    var casaMaquinaAgua=  areaMaq * 0.20
    calculos.push(casaMaquinaAgua);
    var volumetotal = fundacoes + pavTipo + Coberta + casaMaquinaAgua;
    calculos.push(volumetotal);
    volumetotal1.push(volumetotal)
    dados.push(calculos);

    document.getElementById("resultado").innerHTML = 
        "<table>" +
            "<tr>" +
                "<td>Fundações</td>" +
                "<td>" + dados[0][0] + "</td>" +
            "</tr>" +
            "<tr>" +
                "<td>Pavimentos Tipo</td>" +
                "<td>" + dados[0][1] + "</td>" +
            "</tr>" +
            "<tr>" +
                "<td>Coberta</td>" +
                "<td>" + dados[0][2] + "</td>" +
            "</tr>" +
            "<tr>" +
                "<td>Casa de Maquina e e caixa d'agua</td>" +
                "<td>" + dados[0][3] + "</td>" +
            "</tr>" +
            "<tr>" +
                "<td>Volume total</td>" +
                "<td>" + dados[0][4] + "</td>" +
            "</tr>" +
            "<tr>" +
        "</table>"
        return volumetotal1
};

export {calcular,volumetotal1};