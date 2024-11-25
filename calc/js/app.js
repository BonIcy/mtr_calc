import { matrizInputs, generateGrid } from './functions/matrizInputs.js';
import { operation } from './functions/matrizOperations.js';
import { calculateTranspose, calculateDeterminant } from './functions/matrizExtras.js';
import { solveSystem } from './functions/corte3/system.js';
import { matrizAdjunta, calculateAdjunta } from './functions/corte2/adjunta.js';
import { matrizGauss, calculateGauss } from './functions/corte2/gauss.js';
import { matrizGaussJordan, calculateGaussJordan } from './functions/corte2/gaussJordan.js';
import { matrizInverse, calculateInverse } from './functions/corte2/inversa.js';

export { matrizInputs, generateGrid, operation, solveSystem, calculateTranspose, calculateDeterminant, matrizInverse, matrizAdjunta, matrizGauss, matrizGaussJordan, calculateAdjunta, calculateGauss, calculateInverse,calculateGaussJordan };
