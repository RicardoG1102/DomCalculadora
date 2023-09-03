// Una variable es un espacio de almacenamiento en memoria para guardar datos.

// Un lenguaje flexiblemente tipado.
// NumÃ©ricas,texto,colecciones de datos, objetos


let tittle = document.querySelector ('h1')
tittle.style = 
`color: #f59121 ;
font-size: 5rem;
margin: 2rem
`


// llamar por medio de id

let number1 =document.getElementById('number1')
let number2 =document.getElementById('number2')


let result = document.querySelector('#result')

let btnSum = document.querySelector('#Sum')


btnSum.addEventListener('click',sumNumbers)


function sumNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1+data2;
}

let btnRest = document.querySelector('#Rest')


btnRest.addEventListener('click',restNumbers)


function restNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1-data2;
}


let btnMul = document.querySelector('#Mul')


btnMul.addEventListener('click',mulNumbers)


function mulNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1*data2;
}


let btnDivi = document.querySelector('#Divi')


btnDivi.addEventListener('click',diviNumbers)


function diviNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1/data2;
}



