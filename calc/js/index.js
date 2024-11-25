import { matrizInputs, generateGrid, operation,solveSystem, calculateTranspose, calculateDeterminant, matrizInverse, matrizAdjunta, matrizGauss, matrizGaussJordan, calculateAdjunta, calculateGauss, calculateInverse,calculateGaussJordan } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateMatrices').addEventListener('click', matrizInputs);
    document.querySelector('button[onclick="operation()"]').addEventListener('click', operation);
    document.getElementById('verifySystemBtn').addEventListener('click', () => {
        document.getElementById('verifySystemModal').style.display = 'flex';
    });
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('verifySystemModal').style.display = 'none';
    });
    
    document.getElementById('solveSystemBtn').addEventListener('click', () => {
        const systemInput = document.getElementById('systemInput').value.trim();
        const equations = systemInput.split('\n').map(eq => eq.replace(/\s/g, ''));
        const result = solveSystem(equations);
        document.getElementById('systemResult').innerHTML = result;
    });
    
    // globalizar funciones
    window.generateGrid = generateGrid;
    window.matrizInputs = matrizInputs;
    window.calculateTranspose = calculateTranspose;
    window.calculateDeterminant = calculateDeterminant;
    window.calculateInverse = calculateInverse;
    window.calculateAdjunta = calculateAdjunta; 
    window.calculateGauss = calculateGauss;
    window.calculateGaussJordan = calculateGaussJordan;
    window.operation = operation;
    window.solveSystem = solveSystem;
});