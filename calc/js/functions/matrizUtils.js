// multiplica 2 matrices
export function matrizMultiply(a, b) {
    const result = Array.from({ length: a.length }, () => Array(b[0].length).fill(0)); 
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < a[0].length; k++) {
                result[i][j] += a[i][k] * b[k][j];  
            }
        }
    }
    return result;
}
function formatFloat(value) {
    return parseFloat(value).toFixed(3); 
}
export function matrizToString(matrizData) {
    return matrizData.map(row => 
        row.map(cell => formatFloat(cell)).join(' ') 
    ).join('\n');
}
