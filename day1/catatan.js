// STRING
var color = 'blue'
console.log(color[2])
console.log(color.slice(1, 3))
color[2] = 'p' // tidak akan berubah
console.log(color.indexOf('u'))


// ARRAY

// push
// pop
// unshift
// shift
// slice
// splice
// sort

var students = ["Arnold", "Edwin", "Nadhil"]
console.log(students[2])
console.log(students.slice(1, 2))

students[1] = 'Elizabeth'
students[students.length] = 'Singgit'

console.log(students)

students.splice(2, 0, 'Devitasari', 'Evan')
console.log(students)

students.push('Rizki', 'Dimas')
// students.push()

console.log(students)

students.pop()
students.unshift('Risan')

console.log(students)

var indexOfArnold = students.indexOf('Arnold')
console.log(indexOfArnold)

students.splice(indexOfArnold, 1)

console.log(students)

students.sort()

console.log(students)


var numbers = [100, 3, 45, 12, 92, 5]

numbers.sort(function(a, b) {return a - b})

console.log(numbers)