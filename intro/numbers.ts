/*
 A partir de un arreglo de números enteros calcular el número mayor, el menor y el
 promedio.
*/ 
const numbers1 = [1, 2, 3, 4, 5]

function max_min_avg(numbers: number[]): number[] {
    const max_number = Math.max(...numbers)
    const min_number = Math.min(...numbers)
    const sum_numbers = numbers.reduce((prev, current) => prev + current)
    const average_number = sum_numbers/numbers.length


    return [max_number, min_number, average_number]
}

console.log(max_min_avg(numbers1))

export {}
