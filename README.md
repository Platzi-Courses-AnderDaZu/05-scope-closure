# 05-scope-closure
En este curso se trabajará conceptos relacionados al scope (alcance) de las variables y funciones

## Tipos de Scope en JavaScript

### Global Scope
Este Scope ocurre cuando de manera global se declara una variable, de igual manera sucede en el caso que dentro de una función la variable no sea declarada sino solo asignada.

### Function Scope
Este Scope permite que una variable que sea definida o declarada dentro de una función solo este disponible para la función, esto quiere decir que la variable no tendrá Scope Global. Es de resaltar que las variables con Function Scope pueden ser accedidas desde bloques o funciones anidadas a la función donde se declaró dicha variable.

### Blcok Scope
Este Scope permite que las variables declaradas o definidas con let y const en un bloque determinado solo puedan ser gestionadas (inicializadas/reinicializadas) desde dicho bloque. Las variables definidas con var dentro de un Block Scope, pueden ser accedidas y gestionadas desde el Scope anterior al que se encuentra el Block Scope.