// let todo=[]
// let cb=prompt('What would you like?')
// function todoList(cb){
// 	if (cb==='new') return newtodo()
// 	if (cb==='list') return display()
// }



// function newtodo(task){
//   todo.push(task)
//   display()
//   todoList()
// }
// function display(){
// 	console.log(todo)
// }
// let task=prompt('What task do you want to add?')

// newtodo(task)
// function repeatTodo(){
// while(cb!='quit'){
// 	todoList()
// }
// }
// repeatTodo
//hign order fail
// let todos=[]
// let input=prompt('what do you want?')
// while(input!='quit'){
// if(input==='list') console.log(todos)
// if(input==='new'){
// 	let newTodo=prompt('what task?')
// 	todos.push(newTodo)
// 	console.log(todos)
// }
// }

//array set im gonna use foreach because
let arr=[1,2,3,4,5]
function printReverse(arr){
	let nArr=[]
	for (var i = arr.length - 1; i >= 0; i--) {   //cant use foreach in reverse lol
		nArr.push(arr[i])
	}
	console.log(nArr)
}
//printReverse(arr)

function isUni(arr){
	let test=arr[0]
	for(let i=0;i<arr.length;i++){
		if(arr[i]!==arr[0])return false
	}
return true
}
let test=[1,1,1]

console.log(isUni(test));

function sumArr(arr){
	// let sum=0
	// arr.forEach(el=>{
	// 	sum+=el
	// })
	// return sum
	return arr.reduce((a,b)=>{   //a is sum and value is b
          return a+b
	},0)
}
console.log(sumArr(test));

//Own forEach


Array.prototype.RevForEach = function(func) {      //arrow functions dont work on prototype
    for (var i = this.length - 1; i >= 0; i--) {  
        func(this[i])
    }
}

let newArrrr = [1, 2, 3]
let other = []
newArrrr.RevForEach(el => {
    other.push(el)
})

other