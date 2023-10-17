// studentobj = {

//     'yash': 26,
    
//     'vaibhav': 24,
    
//     'rajesh' : 25,
    
//     };

// function findStudent(obj, age){
//     let data = Object.entries(obj)
//     for(let values of data){
//         if(values[1] >= age){
//             console.log(values[0]);
//         }
//     }
    
// }

// findStudent(studentobj, 25)


// const posts = [{title: 'POST1'}];
// //Do not touch this function
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             resolve()
//         }, 3000)
//     }) 
// }
// //Do not touch this function
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000)
//     }) 
// }

// //Do not touch this function
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 // console.log(poppedElement.title);
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }
//

//Modify the lines below and use .then and .catch smartly to get the correct output.
// create2ndPost()

//     .then(()=> {

//         deletePost().then((deletedPost1) => {

//             console.log(deletedPost1.title)

//             create3rPost()

//                 .then(() => {

//                         deletePost().then((deletedpost2) => {

//                             console.log(deletedpost2.title)

//                             deletePost().then((deletedpost3) => {

//                                 console.log(deletedpost3.title)

//                                 deletePost().catch((msg) => console.log(msg))

//                             })

//                     })

//                 })

//             })

//         })

// create2ndPost()
//         .then(()=>{

//             deletePost().then((deletedPost1)=>{
//                     console.log(deletedPost1.title);
//             })

//         })

// promise

// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// }); 

// const getButter = getPopcorn.then((t) => {
//     console.log('wife: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// getButter.then((t) => {
//     console.log(t);
// })

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovies = async () => {

//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    
//     const addbutter = new Promise((resolve, reject) => resolve(`butter`));

//     const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrinks`));

//     let ticket = await promiseWifeBringingTicks;

//     console.log(`wife: I have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn;
    
//     console.log(`wife: I got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');

//     let butter = await addbutter;

//     console.log(`wife: I got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling?`);

//     let coldDrink = await getColdDrinks;

//     console.log(`wife: I got some ${coldDrink}.`);
//     console.log(`husband: Here is your cold Drinks`);
//     console.log(`wife: lets go we are getting late`);
//     console.log(`husband: thank you for reminder`);

//     return ticket;
// }

// preMovies().then((msg) => console.log(`person3: show ${msg}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');




console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovies = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    
    const addbutter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrinks`));

    let ticket = await promiseWifeBringingTicks;

    let [popcorn, butter, coke] = await Promise.all([getPopcorn,addbutter,getColdDrinks]);

    console.log(`${popcorn}, ${butter}, ${coke}`);
    return ticket;
}

preMovies().then((msg) => console.log(`person3: show ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
