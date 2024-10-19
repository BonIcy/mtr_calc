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
