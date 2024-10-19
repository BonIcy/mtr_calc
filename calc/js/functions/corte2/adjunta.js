import { matrizToString } from './utils.js';
import { calcDeterminant } from '../matrizExtras.js';

export function matrizAdjunta(matriz) {
    const n = matriz.length;
    let adjunta = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const minor = matriz
                .map((row, rowIndex) => 
                    row.filter((_, colIndex) => colIndex !== j)
                )
                .filter((_, rowIndex) => rowIndex !== i);
                
            adjunta[j][i] = calcDeterminant(minor) * ((i + j) % 2 === 0 ? 1 : -1);
        }
    }
    return adjunta;
}

export function calculateAdjunta(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);
    if (rows !== cols) {
        document.getElementById(`resultAdjunta${index}`).innerHTML = `<h3>Error: la matriz no es cuadrada.</h3>`;
        return;
    }

    let matrizData = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            const value = parseFloat(document.getElementById(`matriz${index}_${r}_${c}`).value);
            row.push(value); 
        }
        matrizData.push(row);
    }

    const adjunta = matrizAdjunta(matrizData);
    document.getElementById(`resultAdjunta${index}`).innerHTML = `<h3>Adjunta:</h3><pre>${matrizToString(adjunta)}</pre>`;
}