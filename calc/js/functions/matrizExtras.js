function formatFloat(value) {
    const num = parseFloat(value); 
    if (num % 1 === 0) {
        return num.toString(); 
    }
    return parseFloat(num.toFixed(3)).toString(); 
}

export function matrizToString(matrizData) {
    return matrizData.map(row => 
        row.map(cell => formatFloat(cell)).join(' ') 
    ).join('\n');
}

export function calculateTranspose(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);
    const gridContainer = document.getElementById(`matrizGrid${index}`);
    if (!gridContainer) {
        console.error(`No se encontró el contenedor de la matriz con el índice ${index}`);
        return;
    }

    // array con los valores de los inputs
    let matrizData = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            const value = parseFloat(document.getElementById(`matriz${index}_${r}_${c}`).value);
            row.push(value);
        }
        matrizData.push(row);
    }

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
    if (rows !== cols) {
        document.getElementById(`resultDeterminant${index}`).innerHTML = `<h3>Error: la matriz no es cuadrada.</h3>`;
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
        let determinant = calcDeterminant(matrizData);
        document.getElementById(`resultDeterminant${index}`).innerHTML = `<h3>Determinante:</h3><pre>${determinant}</pre>`;
    } catch (error) {
        document.getElementById(`resultDeterminant${index}`).innerHTML = `<h3>Error: ${error.message}</h3>`;
    }
}

export function calcDeterminant(matriz) {
    if (matriz.length === 1) return matriz[0][0];
    if (matriz.length === 2) return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];

    return matriz[0].reduce((acc, val, i) => 
        acc + val * calcDeterminant(matriz.slice(1).map(row => row.filter((_, j) => j !== i))) * (i % 2 === 0 ? 1 : -1), 0);
}



