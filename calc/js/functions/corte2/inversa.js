import { matrizToString } from './utils.js';

export function matrizInverse(matriz) {
    const n = matriz.length;
    if (n === 0 || matriz[0].length !== n) {
        return { error: "La matriz no es cuadrada" };
    }

    const augmented = matriz.map((row, i) => [...row, ...Array(n).fill(0).map((_, j) => (i === j ? 1 : 0))]);

    for (let i = 0; i < n; i++) {
        const pivot = augmented[i][i];
        if (pivot === 0) {
            return { error: "La matriz no tiene inversa (pivote cero)" };
        }

        for (let j = 0; j < augmented[i].length; j++) {
            augmented[i][j] /= pivot;
        }

        for (let k = 0; k < n; k++) {
            if (k !== i) {
                const factor = augmented[k][i];
                for (let j = 0; j < augmented[k].length; j++) {
                    augmented[k][j] -= augmented[i][j] * factor;
                }
            }
        }
    }

    return augmented.map(row => row.slice(n));
}

export function calculateInverse(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);
    if (rows !== cols) {
        document.getElementById(`resultInverse${index}`).innerHTML = `<h3>Error: la matriz no es cuadrada.</h3>`;
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

    try {
        const inversa = matrizInverse(matrizData);
        document.getElementById(`resultInverse${index}`).innerHTML = `<h3>Inversa:</h3><pre>${matrizToString(inversa)}</pre>`;
    } catch (error) {
        document.getElementById(`resultInverse${index}`).innerHTML = `<h3>Error: ${error.message}</h3>`;
    }
}