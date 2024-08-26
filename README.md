# 📊 Calculadora de Matrices
## 📝 Descripción General

La Calculadora de Matrices es una aplicación web que permite realizar operaciones básicas como suma, resta y multiplicación entre matrices. Los usuarios pueden ingresar múltiples matrices de diferentes dimensiones y seleccionar la operación que desean realizar. La aplicación valida las dimensiones de las matrices para asegurarse de que las operaciones sean válidas y muestra el resultado o un mensaje de error según corresponda.

## 📂 Estructura del Proyecto

El proyecto está organizado en varios archivos JavaScript que manejan diferentes aspectos de la funcionalidad:

    index.html: La interfaz de usuario de la calculadora.
    index.js: Gestiona la interacción entre la interfaz de usuario y las funciones de la calculadora.
    app.js: Punto de entrada para las funciones principales.
    matrizInputs.js: Genera los campos de entrada para las matrices según la cantidad indicada por el usuario.
    matrizOperations.js: Realiza las operaciones seleccionadas (suma, resta, multiplicación) entre las matrices.
    matrizUtils.js: Contiene funciones auxiliares, como la multiplicación de matrices y la conversión de matrices a cadenas de texto para mostrar los resultados.

### ⚙️ Funcionamiento de la Calculadora
##### 🛠️ Paso a Paso

    Ingreso de Matrices:
        El usuario ingresa el número de matrices que desea operar.
        La función matrizInputs() genera los campos de entrada necesarios (filas, columnas y valores de la matriz) para cada matriz.

    Selección de Operación:
        El usuario selecciona la operación que desea realizar: suma (+), resta (-), o multiplicación (x).

    Cálculo:
        Al hacer clic en "Calcular", la función operation() toma las matrices ingresadas, valida sus dimensiones, y realiza la operación seleccionada.
        El resultado de la operación se muestra en pantalla, o si las dimensiones no son compatibles, se muestra un mensaje de error.

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