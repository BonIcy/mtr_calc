import { matrizInputs, generateGrid, operation, calculateTranspose, calculateDeterminant, matrizInverse, matrizAdjunta, matrizGauss, matrizGaussJordan, calculateAdjunta, calculateGauss, calculateInverse,calculateGaussJordan } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateMatrices').addEventListener('click', matrizInputs);
    document.querySelector('button[onclick="operation()"]').addEventListener('click', operation);
    
    // globalizar funciones
    window.generateGrid = generateGrid;
    window.calculateTranspose = calculateTranspose;
    window.calculateDeterminant = calculateDeterminant;
    window.calculateInverse = calculateInverse;
    window.calculateAdjunta = calculateAdjunta; 
    window.calculateGauss = calculateGauss;
    window.calculateGaussJordan = calculateGaussJordan;
    window.operation = operation;
});