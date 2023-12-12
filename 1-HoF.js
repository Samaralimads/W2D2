/**
 * Higher order functions
 * are functions that takes an other function as argument (callback)
 * most of them exist as Arrays methods
 * such as :
 *
 * forEach, map, filter, sort, toSorted, find, reduce, reduceRight
 *
 */

const myArray = [9, 2, 4, 4, 5]

// const something = myArray.forEach((number, i, arr) => {
// 	console.log(number)
// 	return number
// })

Array.prototype.myForEach = function (callback) {
	// console.log(this)
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

// myArray.myForEach((number, index, currentArray) => {
// 	console.log(number, index, currentArray)
// })
myArray.myForEach((number) => {
	console.log(number)
})
// console.log(something)

/**
 * map
 * make a copy of an array and modify that copy
 */

Array.prototype.myMap = function (callback) {
	const returnedArray = []
	for (let i = 0; i < this.length; i++) {
		const modification = callback(this[i], i, this)
		returnedArray.push(modification)
	}
	return returnedArray
}

const multipliedNumbers = myArray.myMap((num) => {
	return num * 2
})

console.log(myArray)
console.log(multipliedNumbers)

const wizards = require("./wizards.json")
console.log(wizards)

const newerWizards = wizards.map((oneWizard) => {
	const firstName = oneWizard.name.split(" ")[0]
	const lastName = oneWizard.name.split(" ")[1]
	const newWizard = {
		id: oneWizard.id,
		firstName: firstName,
		lastName: lastName || "",
		description: oneWizard.description,
		age: Math.floor(Math.random() * 82) + 18,
	}
	return newWizard
})

console.log(newerWizards)

/**
 * You might want to try to implement our own version of filter
 * Just to have a better understanding of how it works under the hood
 * @param {Array} array
 * @param {string} lastName
 * @returns
 */
function filterByLastName(array, lastName) {
	const lastNameAsRegeExp = new RegExp(lastName, "gi")
	const filteredWizards = array.filter((oneElement) => {
		// console.log(oneElement)
		return oneElement.lastName.match(lastNameAsRegeExp)
	})
	console.log(filteredWizards)
	return filteredWizards.length
}

console.log(filterByLastName(newerWizards, "potter"))

function sortByAge(array) {
	const sortedArray = array.sort((elementA, elementB) => {
		console.log(elementA, elementB)
		return elementB.age - elementA.age
		// if (elementA.age > elementB.age) {
		// 	return 1
		// } else if (elementA.age < elementB.age) {
		// 	return -1
		// } else {
		// 	return 0
		// }
	})
	console.log(sortedArray)
}

sortByAge(newerWizards)

function sortByLastName(array) {
	const sortedArray = array.sort((a, b) => {
		return b.lastName.localeCompare(a.lastName, undefined, {
			sensitivity: "base",
		})
	})
	console.log(sortedArray)
	return sortedArray
}

sortByLastName(newerWizards)

/**
 * Reduce
 *
 */

const arrOfNums = [5, 92, 45, -20, 13]
/**
 * Array.reduce((acc, val) => {}, 0)
 */

const total = arrOfNums.reduce((acc, val) => {
	return acc + val
	/**
   
  iteration 0
  acc : 0
  val : 5
  => acc + val -> 5
  Iteration 1
  acc: 5
  val: 92
  => acc + val -> 97
  Iteration 2
  acc: 97
  val: 45
  => acc + val -> 142
  ITeration 3
  acc: 142
  val: -20
  => acc + val -> 122
   */
}, 0)

const sum = arrOfNums.reduce((acc, val) => acc + val, 0)
const totalAge = newerWizards.reduce((acc, val) => acc + val.age, 0)
console.log(totalAge)
console.log(totalAge / newerWizards.length)

/**
 * {
 *  "Weasley": ['Ron', 'Fred', ...]
 * }
 */

const objectByLastName = newerWizards.reduce((acc, val) => {
	if (acc[val.lastName]) {
		acc[val.lastName].push(val.firstName)
	} else {
		acc[val.lastName] = [val.firstName]
	}
	console.log(acc)
	return acc
}, {})
