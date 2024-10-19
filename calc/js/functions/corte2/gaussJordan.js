import { matrizToString } from './utils.js';

export function matrizGaussJordan(matriz) {
    const n = matriz.length;
    const m = matriz[0].length;
    const identidad = Array.from({ length: n }, (_, i) => 
        Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    );

    const pasos = []; 

    for (let i = 0; i < n; i++) {
        pasos.push({
            paso: `Paso ${i + 1}: Usando el pivote en la fila ${i + 1}`,
            matriz: matrizToString(matriz),
            identidad: matrizToString(identidad)
        });

        for (let j = i + 1; j < n; j++) {
            const factor = matriz[j][i] / matriz[i][i];
            for (let k = 0; k < m; k++) {
                matriz[j][k] -= matriz[i][k] * factor;
                identidad[j][k] -= identidad[i][k] * factor;
            }

            pasos.push({
                paso: `Reduciendo la fila ${j + 1} usando el pivote de la fila ${i + 1}`,
                matriz: matrizToString(matriz),
                identidad: matrizToString(identidad)
            });
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        const pivot = matriz[i][i];
        if (pivot === 0) {
            return "Pivote es cero, no se puede continuar.";
        }
        for (let j = i - 1; j >= 0; j--) {
            const factor = matriz[j][i] / pivot;
            for (let k = 0; k < m; k++) {
                matriz[j][k] -= matriz[i][k] * factor;
                identidad[j][k] -= identidad[i][k] * factor;
            }

            pasos.push({
                paso: `Reduciendo la fila ${j + 1} usando el pivote de la fila ${i + 1}`,
                matriz: matrizToString(matriz),
                identidad: matrizToString(identidad)
            });
        }
    }

    const resultado = matriz.map(row => row.map(cell => cell / matriz[row.indexOf(cell)][row.indexOf(cell)]));

    return { resultado, identidad, pasos };
}

export function calculateGaussJordan(index) {
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

    const { resultado, identidad, pasos } = matrizGaussJordan(matrizData);
    
    //
    const resultContainer = document.getElementById(`resultGaussJordan${index}`);
    let resultHtml = `<h3>Reducción Gauss-Jordan:</h3>`;
    
    pasos.forEach(step => {
        resultHtml += `<h4>${step.paso}</h4><pre>Matriz:</pre><pre>${step.matriz}</pre><pre>Matriz Identidad:</pre><pre>${step.identidad}</pre>`;
    });
    
    resultHtml += `<h4>Matriz Resultante:</h4><pre>${matrizToString(resultado)}</pre>
                   <h4>Matriz Identidad Final:</h4><pre>${matrizToString(identidad)}</pre>`;
    resultContainer.innerHTML = resultHtml;
}