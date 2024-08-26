import { matrizMultiply, matrizToString } from './matrizUtils.js';
export function operation() {
    const numMatrices = parseInt(document.getElementById('numMatrices').value);
    const operation = document.getElementById('operation').value;

    let matrices = [];
    for (let i = 0; i < numMatrices; i++) {
        // numero de filas y columnas de la matriz y el contenido(matriz) ingresado por el usuario
        const rows = parseInt(document.getElementById(`rows${i}`).value);
        const cols = parseInt(document.getElementById(`cols${i}`).value);
        let matrizData = document.getElementById(`matriz${i}`).value.trim().split('\n').map(row => row.split(/\s+/).map(Number));
        // validación de las dimensiones 
        if (matrizData.length !== rows || matrizData[0].length !== cols) {
            document.getElementById('response').innerHTML = `<h3>Error en la matrizData ${i + 1}: las dimensiones no coinciden.</h3>`;
            return;
        }

        matrices.push(matrizData);
    }

    let response = '';
    // según la operacion (elegida por el usuario)
    switch (operation) {
        case '+':
            // verifica si es cuadrada la matriz
            if (matrices.every(m => m.length === matrices[0].length && m[0].length === matrices[0][0].length)) {
                //reduce acumula los resultados de las operaciones hechas y con map iteramos cada fila y columna para realizar la operacion del actual con el iterado
                let resultAdd = matrices.reduce((acc, matrizData) => matrizData.map((row, i) => row.map((val, j) => val + acc[i][j]))); // acc = acumulador, matrizData= dato iterado actualmente
                response += `<h3>Resultado de la Suma:</h3><pre>${matrizToString(resultAdd)}</pre>`;
            } else {
                response += `<h3>No es posible sumar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        case '-':
            // verifica si es cuadrada la matriz para la resta
            if (matrices.every(m => m.length === matrices[0].length && m[0].length === matrices[0][0].length)) {
                let resultSubtract = matrices.reduce((acc, matrizData) => matrizData.map((row, i) => row.map((val, j) => acc[i][j] - val)));
                response += `<h3>Resultado de la Resta:</h3><pre>${matrizToString(resultSubtract)}</pre>`;
            } else {
                response += `<h3>No es posible restar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        case 'x':
            if (matrices.every((m, i) => i === 0 || m.length === matrices[i - 1][0].length)) {
                let resultMul = matrices.reduce((acc, matrizData) => matrizMultiply(acc, matrizData));
                response += `<h3>Resultado de la Multiplicación:</h3><pre>${matrizToString(resultMul)}</pre>`;
            } else {
                response += `<h3>No es posible multiplicar las matrices: dimensiones incompatibles.</h3>`;
            }
            break;
        
        default:
            response += `<h3>Operacion no reconocida.</h3>`;
    }

    document.getElementById('response').innerHTML = response;
}