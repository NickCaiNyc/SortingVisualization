import React, { useState } from 'react';


function Sorting(props) {
  const initialValueOfArrayWhenFirstComingIn = 20

  const [array, setArray] = useState([...Array(initialValueOfArrayWhenFirstComingIn)].map(() => Math.floor(Math.random() * 100)))
  const [sorting, setSorting] = useState(false)
  const general_Length_variable = array.length
  const propLength = parseInt(props.lengthOf) //This needs to be combined, they are the same thing
  

////////////////////////////////////////////////////////////////////
  const bubbleSort = async () => {
    setSorting(true);
    let counter = 0
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Add CSS class to indicate comparison
        document.querySelector(`#bar-${j}`).classList.add('compare')
        document.querySelector(`#bar-${j + 1}`).classList.add('compare')
        // Delay for animation
        await new Promise(resolve => setTimeout(resolve, 10))
        if (array[j] > array[j + 1]) {
          counter++
          // Swap values in array
          
          [array[j], array[j + 1]] = [array[j + 1], array[j]]

          // Add CSS class to indicate swap
          document.querySelector(`#bar-${j}`).classList.add('swap')
          document.querySelector(`#bar-${j + 1}`).classList.add('swap')
          // Delay for animation
          await new Promise(resolve => setTimeout(resolve, 10))
          // Update state to reflect new array order
          setArray([...array]);
        }
        // Remove CSS classes
        document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap')
        document.querySelector(`#bar-${j + 1}`).classList.remove('compare', 'swap')
      }
    }
    for (let i = 0; i < n; i++) {
      document.querySelector(`#bar-${i}`).classList.add('done')
      await new Promise(resolve => setTimeout(resolve, 10))
    }
    setSorting(false);
  }
//   const selectionSort = () => {
//   const n = array.length;

//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < n; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       // Swap  elements at positions i and minIndex
//       const temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   console.log(array)
//   setArray([...array])
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

  const selectionSort = async() => {
    setSorting(true)
    let counter
    
      for(var i = 0; i < general_Length_variable - 1;i++){
        let lowestPos = i

        document.querySelector(`#bar-${lowestPos}`).classList.add('compare')

          for(var j = i + 1; j < general_Length_variable;j++){

            document.querySelector(`#bar-${j}`).classList.add('compare')
            await new Promise(resolve => setTimeout(resolve, 10));
            document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap')

            if(array[j] < array[lowestPos]){
              lowestPos = j



              document.querySelector(`#bar-${j}`).classList.add('compare')
              document.querySelector(`#bar-${i}`).classList.add('compare')
              await new Promise(resolve => setTimeout(resolve, 10));
              document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap')



            }
            setArray([...array])
          }
        if (lowestPos !== i) {
          counter++



            for(let k = 0; k < general_Length_variable - 1; k++){
              document.querySelector(`#bar-${k}`).classList.remove('compare', 'swap')
            }
            document.querySelector(`#bar-${lowestPos}`).classList.add('swap')
            document.querySelector(`#bar-${i}`).classList.add('swap')
            await new Promise(resolve => setTimeout(resolve, 10));


            [array[i], array[lowestPos]] = [array[lowestPos], array[i]]


            document.querySelector(`#bar-${lowestPos}`).classList.add('swap')
            document.querySelector(`#bar-${i}`).classList.add('swap')
            await new Promise(resolve => setTimeout(resolve, 10));

        }


        document.querySelector(`#bar-${lowestPos}`).classList.remove('compare', 'swap')
        document.querySelector(`#bar-${i}`).classList.remove('compare', 'swap')


      }
      setArray([...array])


    
      for (let i = 0; i < general_Length_variable; i++) {
        document.querySelector(`#bar-${i}`).classList.add('done')
        await new Promise(resolve => setTimeout(resolve, 10))
      } 
    setSorting(false)
  }

  // function insertionSort(array) {
  //   const n = array.length;
  
  //   for (let i = 1; i < n; i++) {
  //     const currentValue = array[i];
  //     let j = i - 1;
  
  //     while (j >= 0 && array[j] > currentValue) {
  //       array[j + 1] = array[j];
  //       j--;
  //     }
  
  //     array[j + 1] = currentValue;
  //   }
  
  //   return array;
  // }
  ///////////////////////////////////////////////////////////////////////////////////////////
  const insertSort = async() => {
    setSorting(true)
    const n = array.length;

    for (let i = 1; i < n; i++) {
      
      const usedToCompare = array[i];
      
      let j = i - 1;
      

      while (j >= 0 && array[j] > usedToCompare) {

        await new Promise(resolve => setTimeout(resolve, 10))
        for(let k = 0; k < general_Length_variable; k++){
          document.querySelector(`#bar-${k}`).classList.remove('compare', 'swap')
        }
        document.querySelector(`#bar-${j}`).classList.add('compare')
        document.querySelector(`#bar-${j+1}`).classList.add('compare')
        await new Promise(resolve => setTimeout(resolve, 10))


        array[j + 1] = array[j];


        document.querySelector(`#bar-${j}`).classList.add('swap')
        document.querySelector(`#bar-${j+1}`).classList.add('swap')
        await new Promise(resolve => setTimeout(resolve, 10))


        j--;
        
        setArray([...array])
      }
      
      array[j + 1] = usedToCompare;
      
    }
    

    for (let i = 0; i < general_Length_variable; i++) {
      document.querySelector(`#bar-${i}`).classList.add('done')
      await new Promise(resolve => setTimeout(resolve, 10))
    } 
    setSorting(false)
  }
  // console.log(array)
  /////////////////////////////////////////////////////////////////////////////////////////////
  const mergeSort = async(inputArray, wholeArray, start = 0) => {
    setSorting(true)
    const n = inputArray.length;
    if(wholeArray !== inputArray)
    if (n <= 1) {
      return inputArray;
    }

    const mid = Math.floor(n / 2)
    const leftArray = inputArray.slice(0, mid)

    const rightArray = inputArray.slice(mid)

    const sortedLeftArray = await mergeSort(leftArray, wholeArray, start)

    const sortedRightArray = await mergeSort(rightArray, wholeArray, start + mid)
    
    const sortingDoneFromBottomToUpFromMerge = await merge(sortedLeftArray, sortedRightArray)

    const sortedPart = sortingDoneFromBottomToUpFromMerge.slice(0, n);

    for(let i = 0; i < wholeArray.length;i++){
      document.querySelector(`#bar-${i}`).classList.remove('compare', 'swap')
    }
    await new Promise(resolve => setTimeout(resolve, 10))
    for(let i = start; i < start+n;i++){
      document.querySelector(`#bar-${i}`).classList.add('compare')
    }
    await new Promise(resolve => setTimeout(resolve, 10))
    for(let i = start; i < start+n;i++){
      document.querySelector(`#bar-${i}`).classList.add('swap')
    }


    setArray(prev => {
      const a = [...prev.slice(0, start), ...sortedPart, ...prev.slice(start + n)]
      console.log(a)
      return a
    });
    
    return sortingDoneFromBottomToUpFromMerge
  }
///
  const merge = async (left, right) =>{
    let i = 0;
    let j = 0;
    const mergedArray = [];

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }
    await new Promise(resolve => setTimeout(resolve, 50))
    return mergedArray.concat(left.slice(i)).concat(right.slice(j)); //change// basically the remainding of one end goes to this
  }
///
  const handleMergeSort = async() =>  {
    const newArray = array
    const sortedArray = await mergeSort(array,newArray)

    setArray(sortedArray)
    for (let i = 0; i < general_Length_variable; i++) {
      document.querySelector(`#bar-${i}`).classList.add('done')
      await new Promise(resolve => setTimeout(resolve, 50))
    } 
    setSorting(false)
  }
//////////////////////////////////////////////////////////////////////////////////////////
const quickSort = async (inputArray, wholeArray, start = 0, end = inputArray.length - 1) => {
  setSorting(true)
  if (start >= end) {
    return
  }

  const pivotIndex = await partition(inputArray, wholeArray, start, end) //basically does all the swapping
  await Promise.all([
    quickSort(inputArray, wholeArray, pivotIndex + 1, end),
    quickSort(inputArray, wholeArray, start, pivotIndex - 1)
    
  ])

  return wholeArray
}

const partition = async (inputArray, wholeArray, start, end) => {
  const pivot = inputArray[end]
  document.querySelector(`#bar-${end}`).classList.add('pivot') //need pivot color
  let i = start
  for (let j = start; j < end; j++) {



    document.querySelector(`#bar-${i}`).classList.add('compare')
    document.querySelector(`#bar-${j}`).classList.add('compare')
    await new Promise(resolve => setTimeout(resolve, 10))



    if (inputArray[j] < pivot) {
      await swap(inputArray, j, i)
      i++
    }



    document.querySelector(`#bar-${i}`).classList.remove('compare', 'swap','pivot')
    document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap','pivot')
   
  }
  await swap(inputArray, i, end)

  // Update whole array with the array made from the swap
  for (let k = start; k <= end; k++) {
    wholeArray[k] = inputArray[k]
  }


  document.querySelector(`#bar-${end}`).classList.remove('compare', 'swap','pivot')
    
  return i
}

const swap = async (array, i, j) => {
  
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp



  document.querySelector(`#bar-${i}`).classList.remove('compare', 'swap')//rid of these
  document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap')
  // Update UI
  document.querySelector(`#bar-${i}`).classList.add('swap')
  document.querySelector(`#bar-${j}`).classList.add('swap')
  
  
  const bar1 = document.querySelector(`#bar-${i}`)
  const bar2 = document.querySelector(`#bar-${j}`)


  
  const tempHeight = bar1.style.height //swapping the heights here
  bar1.style.height = bar2.style.height
  bar2.style.height = tempHeight



  await new Promise(resolve => setTimeout(resolve, 10))
  document.querySelector(`#bar-${i}`).classList.remove('compare', 'swap')
  document.querySelector(`#bar-${j}`).classList.remove('compare', 'swap')
    
  await new Promise(resolve => setTimeout(resolve, 10))
}

const handleQuickSort = async () => {
  const newArray = [...array]
  const quickArray = await quickSort(newArray, array)
  setArray(quickArray)
  for (let i = 0; i < general_Length_variable; i++) {
    document.querySelector(`#bar-${i}`).classList.add('done')
    await new Promise(resolve => setTimeout(resolve, 10))
  } 
  setSorting(false)
  
}
//   const quickSort = async (inputArray, wholeArray, start = 0, end = inputArray.length-1) => {
//     if (inputArray.length <= 1) {
//       return inputArray
//     }
    
//     const pivot = inputArray[inputArray.length - 1]
//     console.log(pivot)
//     const left = []
//     const right = []

//     for (let i = 0; i < inputArray.length - 1; i++) {
//       if (inputArray[i] < pivot) {
//         left.push(inputArray[i])
//       } else {
//         right.push(inputArray[i])
//       }
//     }
//     console.log(left)
//     console.log(right)
//     const a = await quickSort(left, wholeArray, start, pivot-1)
//     const b = await quickSort(right, wholeArray, pivot+1, end)

//     setArray([...a, pivot, ...b])
//     await new Promise(resolve => setTimeout(resolve, 100));
//     return [...a, pivot, ...b]
//   }
// ///
//   const handleQuickSort = async() =>  {
//     const wholeArray = array
//     const sortedArray = await quickSort(array,wholeArray)

//     setArray(sortedArray)
//     for (let i = 0; i < general_Length_variable; i++) {
//       document.querySelector(`#bar-${i}`).classList.add('done')
//       await new Promise(resolve => setTimeout(resolve, 10))
//     } 
//   }
//////////////////////////////////////////////////////////////////////////////////////////////////////


  
  function NewBar(){  //resets the bars //needs a try catch here for when the thing first starts
    for (let i = 0; i < general_Length_variable; i++) {
      document.querySelector(`#bar-${i}`).classList.remove('done')
      document.querySelector(`#bar-${i}`).classList.remove('swap')
      document.querySelector(`#bar-${i}`).classList.remove('compare')
      document.querySelector(`#bar-${i}`).classList.remove('pivot')
      document.querySelector(`#bar-${i}`).classList.add('bar')
    }
    if(isNaN(propLength)){
      setArray([...Array(initialValueOfArrayWhenFirstComingIn)].map(() => Math.floor(Math.random() * 100)))
    }else{
      setArray([...Array(propLength)].map(() => Math.floor(Math.random() * 100)))
    }
  }

  return (
    <div className="App">
      <div className="bars">
        {array.map((num, i) => (
          <div key={i} id={`bar-${i}`} className="bar" style={{ height: `${num*4}px` , width:`${800/general_Length_variable}px`}}></div>
        ))}
      </div>
      <div className="button-container">
        <button className="buttons" disabled={sorting} onClick={bubbleSort}>Bubble Sort</button>
        <button className="buttons" disabled={sorting} onClick={selectionSort}>Selection Sort</button>
        <button className="buttons" disabled={sorting} onClick={insertSort}>Insertion Sort</button>
        <button className="buttons" disabled={sorting} onClick={handleMergeSort}>Merge Sort</button>
        <button className="buttons" disabled={sorting} onClick={handleQuickSort}>Quick Sort</button>
         <button className="buttons" disabled={sorting} onClick={NewBar}>RESET</button>
      </div>
      
    </div>
  )
}

export default Sorting;