// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name, age } = person
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// const address = ['1299 S Juniper Street', 'Philadelphia', 'PA', '19147']

// const [, city, state = 'New York'] = address

// console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75']
const [coffee, , medium_amount] = item
console.log(`A medium ${coffee} costs ${medium_amount}`)