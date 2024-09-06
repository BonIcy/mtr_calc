import { matrizMultiply, matrizToString } from './matrizUtils.js';
import { calculateTranspose, calculateDeterminant, calcDeterminant } from './matrizExtras.js';

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
                row.push(parseFloat(document.getElementById(`matriz${i}_${r}_${c}`).value));
            }
            matrizData.push(row);
        }

        matrices.push(matrizData);
    }

    let result = '';
    let response = '';
    // segun la operación elegida por el usuario
    switch (operation) {
        case '+':
            // comprueba si es cuadrada la matriz
            if (matrices.every(m => m.length === matrices[0].length && m[0].length === matrices[0][0].length)) {
                // reduce() acumula los resultados de las operaciones hechas y con map iteramos cada fila y columna para realizar la operación del actual con el iterado
                result = matrices.reduce((acc, matrizData) => matrizData.map((row, i) => row.map((val, j) => val + acc[i][j])));
                response += `<h3>Resultado de la Suma:</h3><pre>${matrizToString(result)}</pre>`;
            } else {
                response += `<h3>No es posible sumar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        case '-':
            // comprueba si es cuadrada la matriz para la resta
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
            response += `<h3>Operación no reconocida.</h3>`;
    }

    if (result) {
        // botones para calcular transpuesta y determinante de resultado
        response += `
            <button type="button" onclick="TransResult()">Transpuesta del Resultado</button>
            <button type="button" onclick="DeteResult()">Determinante del Resultado</button>
            <div id="resultTransposeFromResult"></div>
            <div id="resultDeterminantFromResult"></div>
        `;

        // globaliza el resultad
        window.resultMatrix = result;
    }

    document.getElementById('response').innerHTML = response;
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
