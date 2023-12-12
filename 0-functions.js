/**
 * function declaration
 *
 * !function nameOfYourFunction (param1, param2) {
 *   ? Whatever needs to happen
 * !}
 */

// mySayHiFunction("Bob")
// const mySayHiFunction = function (name) {
// 	return `Hi ${name}`
// }

// console.log(test)
// let test = "Oops"

function sumLong(a, b) {
	return a + b
}

// const sum = (a, b) => a + b
// sum(3, 5)

const mySayHi = (name) => {
	console.log(name)
	return `Hi ${name}`
}

const cat = {
	name: "Illiu",
	isHungry: false,
	talk: function () {
		// function move() {
		// 	console.log(this)
		// }
		// move()
		const move = () => console.log(this)
		move()
	},
	age: 1,
	getOlder: function () {
		setInterval(() => {
			this.age++
			console.log(`${this.name} just got older, he is now ${this.age}`)
		}, 1000)
	},
}

// getOlder: function () {
//   const incrementAgeAndNotify = () => {
//     this.age++
//     console.log(`${this.name} just got older, he is now ${this.age}`)
//   }
//   setInterval(incrtementAgeAndNotify, 1000)
// },
cat.talk()
// cat.getOlder()
// console.log(global)
const sum = (...allNumbers) => {
	// console.log(''allNumbers)
	let total = 0
	for (const num of allNumbers) {
		total += num
	}
	return total
}

console.log(sum(5, 2, 754, 1))

function displayUserActivities(userObject, ...activities) {
	// console.log(arguments)
	console.log(`${userObject.name} likes to: ${activities.join("! ")}`)
}
displayUserActivities({ name: "Alice" }, "Skate", "Code", "Diving")

function morningRoutine(callback1, callback2, callback3, callback4) {
	callback1()
	callback2()
	callback3()
	callback4()
}

morningRoutine(
	complain(5),
	getOutOfBed,
	prepareBreakfast,
	dressUp
	// eatSomething
)

function complain(temp) {
	return () => {
		console.log(`Gosh, it's only ${temp} Celsius again!`)
		console.log(`ZZZzzzZZZ`)
	}
}

function getOutOfBed() {
	console.log(`Getting out of bed.`)
	return "out of bed"
}

function prepareBreakfast() {
	console.log(`Cutting bread and opening some Jam, Putting the beard to toast`)
}

function showerTime(temp) {
	if (temp < 20) {
		complain(temp)
	} else {
		console.log(`Feels good moment`)
	}
}

function dressUp() {
	console.log(`Picking my OOTD`)
}
function eatSomething() {
	console.log(`eating the now toasted Bread`)
}

function addingToWallet(amount) {
	let startingWallet = 100
	return function () {
		startingWallet += amount
		console.log(`Added ${amount} to my wallet.
    Current total: ${startingWallet}`)
	}
}
const updateWallet = addingToWallet(25)
updateWallet()
updateWallet()
updateWallet()
