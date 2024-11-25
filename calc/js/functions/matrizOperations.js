import {  matrizToString } from './corte2/utils.js';

export function operation() {
    const numMatrices = parseInt(document.getElementById('numMatrices').value);
    const operation = document.getElementById('operation').value;

    let matrices = [];
    for (let i = 0; i < numMatrices; i++) {
        const rows = parseInt(document.getElementById(`rows${i}`).value);
        const cols = parseInt(document.getElementById(`cols${i}`).value);
        let matrizData = [];

        for (let r = 0; r < rows; r++) {
            let row = [];
            for (let c = 0; c < cols; c++) {
                const inputValue = document.getElementById(`matriz${i}_${r}_${c}`).value.trim();
                const value = parseFloat(inputValue); 
                row.push(value);
            }
            matrizData.push(row);
        }

        matrices.push(matrizData);
    }

    let result = '';
    let response = '';

    switch (operation) {
        case '+':
            if (matrices.every(m => m.length === matrices[0].length && m[0].length === matrices[0][0].length)) {
                result = matrices.reduce((acc, matrizData) => matrizData.map((row, i) => row.map((val, j) => val + acc[i][j])));
                response += `<h3>Resultado de la Suma:</h3><pre>${matrizToString(result)}</pre>`;
            } else {
                response += `<h3>No es posible sumar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        case '-':
            if (matrices.every(m => m.length === matrices[0].length && m[0].length === matrices[0][0].length)) {
                result = matrices.reduce((acc, matrizData) => matrizData.map((row, i) => row.map((val, j) => acc[i][j] - val)));
                response += `<h3>Resultado de la Resta:</h3><pre>${matrizToString(result)}</pre>`;
            } else {
                response += `<h3>No es posible restar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        case 'x':
            if (matrices.every((m, i) => i === 0 || m.length === matrices[i - 1][0].length)) {
                result = matrices.reduce((acc, matrizData) => matrizMultiply(acc, matrizData));
                response += `<h3>Resultado de la Multiplicación:</h3><pre>${matrizToString(result)}</pre>`;
            } else {
                response += `<h3>No es posible multiplicar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        default:
            response += `<h3>Operación no válida.</h3>`;
            break;
    }

    document.getElementById('result').innerHTML = response;
}



// funciones para calcular la transpuesta y el determinante del resultado
window.TransResult = function () {
    let transpose = window.resultMatrix[0].map((_, colIndex) => window.resultMatrix.map(row => row[colIndex]));
    document.getElementById('resultTransposeFromResult').innerHTML = `<h3>Transpuesta:</h3><pre>${matrizToString(transpose)}</pre>`;
}

window.DeteResult = function () {
    if (window.resultMatrix.length !== window.resultMatrix[0].length) {
        document.getElementById('resultDeterminantFromResult').innerHTML = `<h3>Error: la matriz no es cuadrada.</h3>`;
        return;
    }

    let determinant = calcDeterminant(window.resultMatrix);
    document.getElementById('resultDeterminantFromResult').innerHTML = `<h3>Determinante:</h3><pre>${determinant}</pre>`;
}

