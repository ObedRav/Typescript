/*
 Dado el array a: number[] = [0, 2, 4, 6, 8, 10] y el array b: string[] = [“a”, “b”, “c”, “d”, “e”, “f”], crear un nuevo array c en el cual se concatenen los elementos así: c: string[]
 = [“a0”, “b2”, “c4”, “d6”, “e8”, “f10”];
*/
const a = [0, 2, 4, 6, 8, 10]
const b = ['a', 'b', 'c', 'd', 'e', 'f']

const c = a.map((value, index) => b[index] + value.toString())

console.log(c)

export {}
