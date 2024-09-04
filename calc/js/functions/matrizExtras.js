export function calculateTranspose(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);
    let matrizData = document.getElementById(`matriz${index}`).value.trim().split('\n').map(row => row.split(/\s+/).map(Number));

    if (matrizData.length !== rows || matrizData[0].length !== cols) {
        document.getElementById(`resultTranspose${index}`).innerHTML = `<h3>Error: las dimensiones no coinciden.</h3>`;
        return;
    }

    let transpose = matrizData[0].map((_, colIndex) => matrizData.map(row => row[colIndex]));
    document.getElementById(`resultTranspose${index}`).innerHTML = `<h3>Transpuesta:</h3><pre>${matrizToString(transpose)}</pre>`;
}

export function calculateDeterminant(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);
    let matrizData = document.getElementById(`matriz${index}`).value.trim().split('\n').map(row => row.split(/\s+/).map(Number));

    if (rows !== cols) {
        document.getElementById(`resultDeterminant${index}`).innerHTML = `<h3>Error: la matriz no es cuadrada.</h3>`;
        return;
    }

    let determinant = calcDeterminant(matrizData);
    document.getElementById(`resultDeterminant${index}`).innerHTML = `<h3>Determinante:</h3><pre>${determinant}</pre>`;
}

export function calcDeterminant(matriz) {
    if (matriz.length === 1) return matriz[0][0];
    if (matriz.length === 2) return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];

    return matriz[0].reduce((acc, val, i) => 
        acc + val * calcDeterminant(matriz.slice(1).map(row => row.filter((_, j) => j !== i))) * (i % 2 === 0 ? 1 : -1), 0);
}

function matrizToString(matrizData) {
    return matrizData.map(row => row.join(' ')).join('\n');
}