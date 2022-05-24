// http request methods REST-API response codes
// GET POST PUT DELETE



//  console.log(  ( false && 3 )  ||  4    )

// console.log(    2   &&   (3||4)   )

// console.log(    2  ||  3   &&  4    )



    //    true   && data // return data
    //    false && data // return false
    //    false  ||  data // return data
    //    true  || data  // return true



// let log = 7 // ++ инкремент = + 1
// console.log(++log)
// console.log(log++)
// console.log(log)




// let name = 'Alex';
// (function (){
//     const name = 'Seva'
//     console.log(name)
// })()
// name = 'Evgen'
// console.log(name)



// function odd(arr){

// }
// odd([1,2,3,4,5,6,7,8,9])



// // Mutabe UnMutable
//  // X0124f8  [][][][][][][][][][][][][][][b][1]

// const a = {}
// let b;
// a.b = 1
// b = a
// b.a = 2
// console.table(a) // {  b : 1  }
// console.table(b) // { b : 1 , a : 2}




// immidietly invoke function expression aka iife
// <!-- arrow function create context  -->
// <!-- bind call apply -->
// <!-- class and prototype this -->
// call bind apply


// class Fedoseev {
//     // context 
//     constructor(name){
//         this.name = name
//     }
//     display(str = ' hi'){

//        const  foo = () => {
//             console.log(this.name + str)
//         }

//     }
// }
// class Svirin {
//     constructor(name){
//         this.name = name
//     }
// }

// const Sev = new Fedoseev('Seva')
// const Evg = new Svirin('Evg')


// Sev.display()
// const newf = Sev.display.bind(Evg)

// newf()


// const app = document.querySelector('#app')
// const createElement = (props)=>{
//     const {text,chindren,attributes} = props
//     const element = document.createElement()
//     element.classList('green')
//     element.innerText = 'efiuewbi'
//     return element
// }
// app.append(element)
