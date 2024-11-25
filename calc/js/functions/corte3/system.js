
export function solveSystem(equations) {
    const parseEquation = eq => {
        const [left, right] = eq.split('=');
        const coefficients = [];
        let terms = left.match(/[+-]?\d*\.?\d*[a-z]/g);
        terms.forEach(term => {
            let [_, coef, varName] = term.match(/([+-]?\d*\.?\d*)([a-z])/);
            coef = coef === '' || coef === '+' ? 1 : coef === '-' ? -1 : parseFloat(coef);
            coefficients.push(coef);
        });
        const independent = -parseFloat(right || 0);
        return [...coefficients, independent];
    };

    const matrix = equations.map(parseEquation);
    const augmentedMatrix = matrix.map(row => row.slice());
    const result = performGaussJordan(augmentedMatrix);

    return interpretSolution(result);
}

function performGaussJordan(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        let maxRow = i;
        for (let k = i + 1; k < rows; k++) {
            if (Math.abs(matrix[k][i]) > Math.abs(matrix[maxRow][i])) maxRow = k;
        }
        [matrix[i], matrix[maxRow]] = [matrix[maxRow], matrix[i]]; 

        const pivot = matrix[i][i];
        if (Math.abs(pivot) < 1e-10) continue; 

        // Normalizar la fila pivote
        for (let j = i; j < cols; j++) {
            matrix[i][j] /= pivot;
        }


        for (let k = 0; k < rows; k++) {
            if (k === i) continue;
            const factor = matrix[k][i];
            for (let j = i; j < cols; j++) {
                matrix[k][j] -= factor * matrix[i][j];
            }
        }
    }

    return matrix;
}



function interpretSolution(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const solutions = Array(cols - 1).fill(0); 

    let isDetermined = true;

    for (let i = 0; i < rows; i++) {
        const row = matrix[i];
        const allZeros = row.slice(0, cols - 1).every(val => Math.abs(val) < 1e-10); 

        if (allZeros && Math.abs(row[cols - 1]) > 1e-10) {
            return `<h3>Sistema Incompatible: No tiene solución.</h3>`;
        } else if (allZeros && Math.abs(row[cols - 1]) < 1e-10) {
            isDetermined = false;
        } else {
            // Resolver la variable
            const pivotCol = row.findIndex(val => Math.abs(val) > 1e-10); 
            if (pivotCol !== -1) {
                solutions[pivotCol] = row[cols - 1] / row[pivotCol];
            }
        }
    }

    if (isDetermined) {
        return `<h3>Sistema Compatible Determinado</h3><pre>Soluciones: ${solutions.map(s => s.toFixed(2)).join(', ')}</pre>`;
    } else {
        return `<h3>Sistema Compatible Indeterminado</h3><pre>Hay infinitas soluciones <br>dependiendo de un parámetro.</pre>`;
    }
}
