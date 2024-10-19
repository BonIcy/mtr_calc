import { matrizToString } from './utils.js';

export function matrizGauss(matriz) {
    const n = matriz.length;
    const m = matriz[0].length;
    const steps = [];

    for (let i = 0; i < n; i++) {
        steps.push({
            paso: `Paso ${i + 1}: Usando el pivote en la fila ${i + 1}`,
            matriz: matrizToString(matriz)
        });

        for (let j = i + 1; j < n; j++) {
            const factor = matriz[j][i] / matriz[i][i]; 
            for (let k = i; k < m; k++) {
                matriz[j][k] -= matriz[i][k] * factor;  
            }
            steps.push({
                paso: `Reduciendo la fila ${j + 1} usando el pivote de la fila ${i + 1}`,
                matriz: matrizToString(matriz)
            });
        }
    }

    return { resultado: matriz, pasos: steps }; 
}

export function calculateGauss(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);

    let matrizData = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            const value = parseFloat(document.getElementById(`matriz${index}_${r}_${c}`).value);
            row.push(new Fraction(value));
        }
        matrizData.push(row);
    }

    const { resultado, pasos } = matrizGauss(matrizData);
    const resultContainer = document.getElementById(`resultGauss${index}`);
    let resultHtml = `<h3>Reducción Gauss:</h3>`;
    
    pasos.forEach(step => {
        resultHtml += `<h4>${step.paso} (si el pivote es 0 se detiene)</h4><pre>${step.matriz}</pre>`;
    });
    
    resultHtml += `<h4>Matriz Resultante:</h4><pre>${matrizToString(resultado)}</pre>`;
    resultContainer.innerHTML = resultHtml;
}