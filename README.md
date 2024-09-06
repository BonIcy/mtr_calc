# 📊 Calculadora de Matrices

## 📝 Descripción General

La Calculadora de Matrices es una aplicación web que permite realizar operaciones básicas como suma, resta y multiplicación entre matrices. Los usuarios pueden ingresar múltiples matrices de diferentes dimensiones y seleccionar la operación que desean realizar. La aplicación valida las dimensiones de las matrices para asegurarse de que las operaciones sean válidas y muestra el resultado o un mensaje de error según corresponda.

Además de las operaciones básicas, ahora la aplicación también permite calcular la transpuesta y el determinante de cada matriz ingresada por el usuario, así como de la matriz resultante de las operaciones.

## 📂 Estructura del Proyecto

El proyecto está organizado en varios archivos JavaScript que manejan diferentes aspectos de la funcionalidad:

- `index.html`: La interfaz de usuario de la calculadora.
- `index.js`: Gestiona la interacción entre la interfaz de usuario y las funciones de la calculadora.
- `app.js`: Punto de entrada para las funciones principales.
- `matrizInputs.js`: Genera los campos de entrada para las matrices según la cantidad indicada por el usuario.
- `matrizOperations.js`: Realiza las operaciones seleccionadas (suma, resta, multiplicación) entre las matrices.
- `matrizExtras.js`: Contiene funciones adicionales para calcular la transpuesta y el determinante de las matrices.

## ⚙️ Funcionamiento de la Calculadora

### 🛠️ Paso a Paso

1. **Ingreso de Matrices**:
    - El usuario ingresa el número de matrices que desea operar.
    - La función `matrizInputs()` genera los campos de entrada necesarios (filas, columnas y valores de la matriz) para cada matriz.

2. **Selección de Operación**:
    - El usuario selecciona la operación que desea realizar: suma (+), resta (-), o multiplicación (x).

3. **Cálculo**:
    - Al hacer clic en "Calcular", la función `operation()` toma las matrices ingresadas, valida sus dimensiones, y realiza la operación seleccionada.
    - El resultado de la operación se muestra en pantalla, o si las dimensiones no son compatibles, se muestra un mensaje de error.

4. **Funciones Adicionales**:
    - **Transpuesta**: Permite calcular la transpuesta de cada matriz ingresada y del resultado de la operación.
    - **Determinante**: Permite calcular el determinante de cada matriz ingresada y del resultado de la operación (solo para matrices cuadradas).

## 📚 Funciones Adicionales

### 🔄 Transpuesta

- **Funciones Involucradas**:
    - `calculateTranspose()`

- **Proceso**:
    - La función `calculateTranspose()` toma la matriz ingresada por el usuario y calcula su transpuesta. La transpuesta de una matriz se obtiene intercambiando sus filas por columnas.

- **Datos de Entrada**:
    - Una matriz cuadrada o rectangular.

- **Datos de Salida**:
    - La transpuesta de la matriz ingresada.

### 🔢 Determinante

- **Funciones Involucradas**:
    - `calculateDeterminant()`
    - `calcDeterminant()`

- **Proceso**:
    - La función `calculateDeterminant()` calcula el determinante de una matriz cuadrada. La función `calcDeterminant()` realiza el cálculo real, usando la eliminación de Laplace para matrices de dimensiones mayores a 2x2.

- **Datos de Entrada**:
    - Una matriz cuadrada.

- **Datos de Salida**:
    - El valor del determinante de la matriz.

## 📌 Ejemplos

- **Cálculo de la Transpuesta**:
    - Para una matriz de entrada: 
      ```
      1 2
      3 4
      ```
    - La transpuesta sería:
      ```
      1 3
      2 4
      ```

- **Cálculo del Determinante**:
    - Para una matriz 2x2:
      ```
      1 2
      3 4
      ```
    - El determinante sería:
      ```
      (1*4) - (2*3) = -2
      ```

## 🛠️ Notas Adicionales

- La transpuesta y el determinante solo están disponibles para matrices ingresadas por el usuario y para el resultado de la operación, si las dimensiones lo permiten.
- Los resultados de la transpuesta y el determinante se muestran junto a las matrices correspondientes en la interfaz de usuario.

##  Operaciones Disponibles
 ### ➕ Suma

    Funciones Involucradas:
        matrizInputs()
        operation()
        matrizToString()
    Proceso:
        Se verifica que todas las matrices tengan las mismas dimensiones.
        Se realiza la suma elemento por elemento utilizando la función reduce para acumular los resultados.
    Fórmula:
        C[i][j]=A[i][j]+B[i][j]+…+N[i][j]
    Datos de Entrada:
        Matrices con las mismas dimensiones.
    Datos de Salida:
        Una matriz resultante de la suma de las matrices ingresadas.

 ### ➖ Resta

    Funciones Involucradas:
        matrizInputs()
        operation()
        matrizToString()
    Proceso:
        Se verifica que todas las matrices tengan las mismas dimensiones.
        Se realiza la resta elemento por elemento utilizando la función reduce para acumular los resultados.
    Fórmula:
        C[i][j]=A[i][j]−B[i][j]−…−N[i][j]
    Datos de Entrada:
        Matrices con las mismas dimensiones.
    Datos de Salida:
        Una matriz resultante de la resta de las matrices ingresadas.

### ✖️ Multiplicación

    Funciones Involucradas:
        matrizInputs()
        operation()
        matrizMultiply()
        matrizToString()
    Proceso:
        Se verifica que el número de columnas de la primera matriz coincida con el número de filas de la segunda matriz.
        Se realiza la multiplicación utilizando un triple bucle para calcular la suma de productos.
    Fórmula:
        C[i][j]= ∑k=0n−1 A[i][k]⋅B[k][j]
    Datos de Entrada:
        Dos matrices, donde el número de columnas de la primera coincida con el número de filas de la segunda.
    Datos de Salida:
        Una matriz resultante de la multiplicación de las matrices ingresadas.

## Explicación de variables y formulas

En la operación de matrices, las variables i, j, y k son índices que se utilizan para recorrer las filas y columnas de las matrices:

    i: Es el índice de la fila en la matriz resultante C. También es el índice de la fila de la matriz A durante la multiplicación.

    j: Es el índice de la columna en la matriz resultante C. También es el índice de la columna de la matriz B durante la multiplicación.

    k: Es el índice que recorre los elementos a lo largo de la fila de la matriz A y la columna de la matriz B para calcular el valor de un solo elemento en la matriz resultante C[i][j].

### Contexto en la Fórmula de Multiplicación de Matrices

Cuando multiplicamos dos matrices A y B para obtener una matriz resultante C, cada elemento C[i][j] se calcula como la suma de los productos de los elementos correspondientes en la fila i de A y la columna j de B:

    C[i][j]= ∑k=0n−1 A[i][k]⋅B[k][j]

        i: Selecciona la fila i en la matriz A y la fila i en la matriz C.
        j: Selecciona la columna j en la matriz B y la columna j en la matriz C.
        k: Recorre los elementos de la fila de A y la columna de B y los multiplica para luego sumarlos y obtener el valor de C[i][j].

Por ejemplo, si A es una matriz de 2×3 y B es una matriz de 3×2, entonces para calcular el valor de C[0][0]C[0][0], se hace:
    C[0][0]=A[0][0]×B[0][0]+A[0][1]×B[1][0]+A[0][2]×B[2][0]

Aquí, i=0 (primera fila de A), j=0 (primera columna de B), y k recorre de 0 a 2 para multiplicar los elementos correspondientes de A y B.