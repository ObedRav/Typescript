/**
Tome como referencia el siguiente arreglo de objetos
    let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
    ];
Usando la función map itere el arreglo y cree un nuevo arreglo denominado userFullNames que guarde en cada posición el nombre completo de casa usuario.
Al imprimir por consola el contenido del arreglo userFullNames se debería obtener la siguiente salida:

console.log(userFullnames);
// ["Susan Steward", "Daniel Longbottom", "Jacob Black"]
 */
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
];

const userFullNames = users.map((user) => `${user.firstName} ${user.lastName}`)

console.log(userFullNames)

export {}
