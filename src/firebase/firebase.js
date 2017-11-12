import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDHPTrW4o2vCtlbUSCF19NFizBMydgsNJo",
    authDomain: "expensify-557e8.firebaseapp.com",
    databaseURL: "https://expensify-557e8.firebaseio.com",
    projectId: "expensify-557e8",
    storageBucket: "expensify-557e8.appspot.com",
    messagingSenderId: "597461510963"
}

firebase.initializeApp(config)
const database = firebase.database()
// database.ref().set({
//     name: 'Bharat Ruparel',
//     age: 62,
//     isSingle: false,
//     location: {
//         city: 'Sugar Land',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })
