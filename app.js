
//Web storage API is provided by browser
//to set key and value we need to use setItem("key_name", "some_value")
//to get them we use getItem()

localStorage.setItem('name', "Jasurbek")
localStorage.setItem('surname', "Aripov")
localStorage.setItem('age', "20")
//we've set name surname and age

const name = localStorage.getItem('name')
const surname = localStorage.getItem('surname')
const age = localStorage.getItem('age')
//we assigned them to constants to use them in a console
//for this, getItam("key_name") helped us to get 

console.log(`I'm ${name} ${surname}, I'm ${age} years old`)
//to remove key from storage we use removeItem("key_name")
localStorage.removeItem('name')
const anotheName = localStorage.getItem('name')
console.log(anotheName)//if we remove it and try to print it shows us null

localStorage.clear()
//it cleans storage at all

//now lets try localstorage with multiple values
const myFriends = ['Talib', ' Murad', ' Bilal']

localStorage.setItem("friends", JSON.stringify(myFriends))
const names = JSON.parse(localStorage.getItem('friends'))
console.log(names[2])

//for this we needed JSON.stringigy() and JSON.parse()
//set items as a string to local storage
//convert it with JSON.parse() as a form of array
//and print it according to the index of it
