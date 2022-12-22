// STATS APP


const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const button = document.getElementById('btn')
const clearBtn = document.getElementById('clearBtn')

const meanBtn = document.getElementById('mean-Btn')
const modeBtn = document.getElementById('mode-Btn')
const medianBtn = document.getElementById('median-Btn')
const standardDevBtn = document.getElementById('standard-Dev')
const varianceBtn = document.getElementById('variance-Btn')

const square1 = document.getElementById('square-1')
const square2 = document.getElementById('square-2')
const square3 = document.getElementById('square-3')
const square4 = document.getElementById('square-4')
const square5 = document.getElementById('square-5')
const square6 = document.getElementById('square-6')
const square7 = document.getElementById('square-7')
const square8 = document.getElementById('square-8')
const square9 = document.getElementById('square-9')
const square10 = document.getElementById('square-10')
const showMean = document.getElementById('showMean')
const showMedian = document.getElementById('showMedian')
const showMode = document.getElementById('showMode')
const showVariance = document.getElementById('showStandardDeviation')
const showStandardDeviation = document.getElementById('showVariance')
const allInputs = document.querySelectorAll('input')
    
    


const handleInput = (e) =>{
    const input = e.target;
    if(input.nextElementSibling && input.value.length == 4){
        input.nextElementSibling.focus()
        input.nextElementSibling.select()
    } 
}  
form.addEventListener("input",handleInput);

// get Values from DOM
const getValues = ()=>{
const values =[square1.value,square2.value,square3.value,square4.value,square5.value
    ,square6.value,square7.value,square8.value,square9.value,square10.value]
    const numbersArray = values.map(function(str){
        return parseInt(str)
    })
    return numbersArray
}
meanBtn.onclick=()=>{
    showMean.innerText = `Mean: ${getMean(getValues())}`
}
medianBtn.onclick=()=>{
    showMedian.innerText = `Median: ${getMedian(getValues())}`
}
modeBtn.onclick=()=>{
    showMode.innerText = `Mode: ${getMode(getValues())}`

}
varianceBtn.onclick=()=>{
    showVariance.innerText = `Variance: ${getVariance(getValues())}`
}
standardDevBtn.onclick=()=>{
    showStandardDeviation.innerText = `StandardDeviation: ${getStandardDeviation(getValues())}`
}
clearBtn.onclick = () =>{
    square1.value = 0,square2.value= 0,square3.value = 0, square4.value = 0,square5.value = 0,square6.value = 0,
    square7.value = 0, square8.value = 0, square9.value =0, square10.value =0
   }

button.onclick=()=>{
   showResult()
   console.log(getVariance(getValues()))
}

// showResult
const showResult = () =>{
   showMean.innerText = `Mean: ${getMean(getValues())}`
   showMedian.innerText = `Median: ${getMedian(getValues())}`
   showMode.innerText = `Mode: ${getMode(getValues())}`
   showVariance.innerText = `Variance: ${getVariance(getValues())}`
   showStandardDeviation.innerText = `StandardDeviation: ${getStandardDeviation(getValues())}`
}

// Mean
function getMean(numbers) {
    let sum = numbers.reduce(function(previousValue, currentValue){
        return previousValue+currentValue
    })
    const mean = sum / numbers.length
    
    return mean.toFixed(2)
    }
    

// Median
const getMedian = (numbers) =>{
    let median;

    const result = numbers.sort(function (a,b){return a - b})
    const numbersAmount = result.length
    const  oddMedianIndex = Math.floor(numbersAmount / 2)

    // calculating for odd numbers
    if(numbersAmount % 2 == 1){
      median = result[oddMedianIndex]
    //   calculating for even numbers
    }else if(numbersAmount % 2 == 0){
        const evenMedianIndex = oddMedianIndex - 1
        const medianTotal = result[oddMedianIndex]+result[evenMedianIndex] 
        median = medianTotal / 2
    }
    return `${median}`
}

// Mode
const getMode = (array) =>{
    const obj = {}
    for (number of array){
       if(number in obj){
        obj[number] +=1
       }else{
        obj[number]=1
       }
    }
let highestValue = 0
let highestValueKey = -Infinity
    for (key in obj){
        let value = (obj[key])
        if(value >= highestValue && key > highestValueKey ){
            highestValue = value
            highestValueKey = key
        }
    }
return highestValueKey
}


//Variance

const getVariance = (numbers) => {
    const numsLength = numbers.length-1
    
      const newArr = numbers.map(number=>
    (number-getMean(getValues())).toFixed(2))
  
    const multiplied = newArr.map(num=>
      Number((num**2).toFixed(2)))
  
      const sumMultiplied = multiplied.reduce(function(a,b)
      {return a+b})
         const result = sumMultiplied / numsLength

         return (result).toFixed(2)
  }

//Standard Deviation
  const getStandardDeviation = (numbers) => {
    const numsLength = numbers.length-1
    
      const newArr = numbers.map(number=>
    (number-getMean(getValues())).toFixed(2))
    const multiplied = newArr.map(num=>
      Number((num**2).toFixed(2)))
  
      const sumMultiplied = multiplied.reduce(function(a,b)
      {return a+b})
      const standardDeviation = Math.sqrt(sumMultiplied / numsLength)

      return standardDeviation.toFixed(2)
    }
console.log(getStandardDeviation([]))

