# 05-scope-closure
En este curso se trabajará conceptos relacionados al scope (alcance) de las variables y funciones

## Tipos de Scope en JavaScript

### Global Scope
Este Scope ocurre cuando de manera global se declara una variable, de igual manera sucede en el caso que dentro de una función la variable no sea declarada sino solo asignada.

### Function Scope
Este Scope permite que una variable que sea definida o declarada dentro de una función solo enste disponible para la función, esto quiere decir que la variable no tendrá Scope Global. Es de resaltar que las variables con Function Scope pueden ser accedidas desde bloques o funciones anidadas a la función donde se declaró dicha variable.