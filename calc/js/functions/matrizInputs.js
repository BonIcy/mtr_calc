// segun la cantidad de matrices declarada anteriormente (por el usuario) genera los campos de datos de matrices
export function matrizInputs() {
    const numMatrices = parseInt(document.getElementById('numMatrices').value);
    let matrizInputs = '';

    for (let i = 0; i < numMatrices; i++) {
        matrizInputs += `<h3>entrada de Matriz ${i + 1}</h3>`;
        matrizInputs += `<label for="rows${i}"># de filas de la Matriz ${i + 1}:</label>`;
        matrizInputs += `<input type="number" id="rows${i}" name="rows${i}" min="1" required>`;
        matrizInputs += `<label for="cols${i}"># de columnas de la Matriz ${i + 1}:</label>`;
        matrizInputs += `<input type="number" id="cols${i}" name="cols${i}" min="1" required>`;
        matrizInputs += `<textarea id="matriz${i}" placeholder="Ingrese la matriz ${i + 1}"></textarea>`;
    }

    document.getElementById('matrizInputs').innerHTML = matrizInputs;
}