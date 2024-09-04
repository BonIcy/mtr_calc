import { matrizInputs, generateGrid, operation, calculateTranspose, calculateDeterminant } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button[onclick="matrizInputs()"]').addEventListener('click', matrizInputs);
    document.querySelector('button[onclick="operation()"]').addEventListener('click', operation);
    
    // globalizar 
    window.generateGrid = generateGrid;
    window.calculateTranspose = calculateTranspose;
    window.calculateDeterminant = calculateDeterminant;
});