// multiplica 2 matrices
export function matrizMultiply(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    let result = Array(rowsA).fill().map(() => Array(colsB).fill(0));
    //formula en la que me baso para la operación: C[i][j]= n-1∑k=0 ​A[i][k]⋅B[k][j]
     //tenemos uun triple bucle que hace el calculo de la multiplicacion, el bucle más interno acumula la suma de productos para cada elemento de la matriz resultante
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}
// convierte a string para mostrar la response
export function matrizToString(matrizData) {
    return matrizData.map(row => row.join(' ')).join('\n');
}
