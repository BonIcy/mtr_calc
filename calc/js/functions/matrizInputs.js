// segun la cantidad de matrices ingresada por el usuario
export function matrizInputs() {
    const numMatrices = parseInt(document.getElementById('numMatrices').value);
    let matrizInputsHTML = '';

    for (let i = 0; i < numMatrices; i++) {
        matrizInputsHTML += `<h3>Entrada de Matriz ${i + 1}</h3>`;
        matrizInputsHTML += `<label for="rows${i}"># de filas de la Matriz ${i + 1}:</label>`;
        matrizInputsHTML += `<input type="number" id="rows${i}" name="rows${i}" min="1" required>`;
        matrizInputsHTML += `<label for="cols${i}"># de columnas de la Matriz ${i + 1}:</label>`;
        matrizInputsHTML += `<input type="number" id="cols${i}" name="cols${i}" min="1" required>`;
        matrizInputsHTML += `<div id="matrizGrid${i}" class="matriz-grid"></div>`;
        matrizInputsHTML += `<button type="button" onclick="generateGrid(${i})">Generar Matriz</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateTranspose(${i})">Transpuesta</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateDeterminant(${i})">Determinante</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateInverse(${i})">Inversa</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateAdjunta(${i})">Adjunta</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateGauss(${i})">Reducción Gauss</button>`;
        matrizInputsHTML += `<button type="button" onclick="calculateGaussJordan(${i})">Reducción Gauss-Jordan</button>`;
        matrizInputsHTML += `<div id="resultTranspose${i}"></div>`;
        matrizInputsHTML += `<div id="resultDeterminant${i}"></div>`;
        matrizInputsHTML += `<div id="resultInverse${i}"></div>`;
        matrizInputsHTML += `<div id="resultAdjunta${i}"></div>`;
        matrizInputsHTML += `<div id="resultGauss${i}"></div>`;
        matrizInputsHTML += `<div id="resultGaussJordan${i}"></div>`;
    }

    document.getElementById('matrizInputs').innerHTML = matrizInputsHTML;
}

// generacion de cuadricula (input de matrices)
export function generateGrid(index) {
    const rows = parseInt(document.getElementById(`rows${index}`).value);
    const cols = parseInt(document.getElementById(`cols${index}`).value);

    let gridHTML = `<div class="grid-container" style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 10px;">`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            gridHTML += `<input type="text" id="matriz${index}_${i}_${j}" class="grid-item" required>`;
        }
    }

    gridHTML += '</div>';
    document.getElementById(`matrizGrid${index}`).innerHTML = gridHTML;
}