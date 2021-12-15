function scalerMatrix (arr1,arr2){

    let dotProduct = 0

    for (i=0; i<arr1.length; i++){
      for (i=0; i<arr2.length; i++) {
        dotProduct+=arr1[i]*arr2[i]
      }
  
    }
    if (dotProduct === 0){
      return ('the two arrays are orthagonal, and the dot product is : '+ dotProduct)
    } else {
      return ('the two arrays are not orthagonal, and the dot product is : '+ dotProduct)
    }
  
   
 }
  
   console.log(scalerMatrix([3,-1], [7,5]))
   console.log(scalerMatrix([1,2,0], [2,-1,10]))

