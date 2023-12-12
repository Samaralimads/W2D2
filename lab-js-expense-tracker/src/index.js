// Entry
class Entry {
	constructor(date, amount, description, tax) {
		this.date = date
		this.amount = amount
		this.description = description
		this.tax = tax
	}
	getFormattedAmount() {
		return `+${this.amount} €`
	}
}

// Income
class Income extends Entry {
	constructor(date, amount, description, tax) {
		super(date, amount, description, tax)
		this.type = "income"
	}
}

const myIncome = new Income(new Date(), 13543, "new screen low brightness", 20)

// Expense
class Expense extends Entry {
	constructor(date, amount, description, tax, paid) {
		super(date, amount, description, tax)
		this.type = "expense"
		this.paid = paid
	}
	getFormattedAmount() {
		return `-${this.amount} €`
	}
}

// Budget
class Budget {
	constructor() {
		this.entries = []
	}

	addEntry(entry) {
		this.entries.push(entry)
	}
	getTotalIncome() {
		let sum = 0
		// for (const element of this.entries) {}

		this.entries.forEach((entry) => {
			// console.log(entry.date)
			if (entry.type === "income") {
				sum += entry.amount
			}
		})

		return sum
	}
	getTotal(type) {
		let sum = 0
		// for (const element of this.entries) {}

		this.entries.forEach((entry) => {
			// console.log(entry.date)
			if (entry.type === type) {
				sum += entry.amount
			}
		})

		return sum
	}
	getTotalExpense() {
		let sum = 0
		this.entries.forEach((entry) => {
			// console.log(entry.date)
			if (entry.type === "expense") {
				sum += entry.amount
			}
		})

		return sum
	}

	getCurrentBalance() {
		if (!this.entries.length) {
			return 0
		}
		return this.getTotalIncome() - this.getTotal("expense")
	}

	getFormattedEntries() {
		let formattedArray = []
		for (const entry of this.entries) {
			const formattedString = `${entry.date} | ${
				entry.description
			} | ${entry.getFormattedAmount()}`

			formattedArray.push(formattedString)
		}
		return formattedArray
	}
}

const myBudget = new Budget()

const lotteryTime = new Income(
	"21-12-2023",
	2_000_000,
	"Won at the lottery",
	15
)
const vintedSales = new Income("24-12-2023", 50, "Sold my tv", 15)
const boughtACar = new Expense(
	"12-12-2023",
	13_000,
	"It's red, it goes fast.",
	15,
	false
)

myBudget.addEntry(lotteryTime)
myBudget.addEntry(boughtACar)
myBudget.addEntry(vintedSales)
console.log(myBudget.getCurrentBalance())
console.log(myBudget.getFormattedEntries())
