
DESCRIPTION:
// We have a square matrix M of dimension n x n that has positive and negative numbers in the ranges [-9,-1] and [0,9],( the value 0 is excluded).

// We want to add up all the products of the elements of the diagonals UP-LEFT to DOWN-BOTTOM, that is the value ofsum1; and the elements of the diagonals UP-RIGHT to LEFT-DOWN and that is sum2. Then, as a final result, the value of sum1 - sum2.

// E.g.

// M = [[ 1,  4, 7,  6,  5],
//      [-3,  2, 8,  1,  3],
//      [ 6,  2, 9,  7, -4],
//      [ 1, -2, 4, -2,  6],
//      [ 3,  2, 2, -4,  7]]
//Let's see how to get this result in the image below:
//http://imgur.com/MHfydrP
// So the value of sum1 - sum2 is equal to:

// 1164 - 66 = 1098

function sum(matrix) {
    let s1 = 0;
    let s2 = 0;
    let temp = 1;
  // this first part will be calculation for s1
  // run s1 from center to the right side
  for (let i = 0; i <matrix.length; i++){ 
    temp = 1;
    for (j = 0; j< matrix.length; j++){
      if(matrix[j][i+j] != undefined){
        // console.log(matrix[j][i+j]); //right side from center
        temp *= matrix[j][i+j];
      }    
    }  
    s1 += temp;
    // console.log(temp)  
  }
  // run s1 calculation from center (exclude center line) to left side
  for(let i = 1; i<matrix.length; i++){
    temp = 1
    for (let y = 0; y<matrix.length; y++){
      if( matrix[y][y-i] != undefined){
        // console.log(matrix[y][y-i]);
        temp *=matrix[y][y-i];
      }    
    }
    s1 += temp;
    // console.log(temp)
    // console.log("-------------------")
  }
  
  
  //calculation for s2
  
  for (let i = 0; i<=(matrix.length-1)*2; i++){
    temp = 1;
    // console.log(matrix[matrix.length-1][i])
    for (j = 0; j< matrix.length; j++){
      // console.log(matrix[y])
      // console.log(matrix[j][i-j])
      if(matrix[j][i-j] != undefined){
        temp *= matrix[j][i-j];
      }
      
    }
    // console.log(temp)
    s2 += temp;
    // console.log(s2)
    console.log("--------------")
  }
  // console.log(s2)
  console.log(s1-s2)
  return s1-s2;
  }
  
  let mat =  [[1, 4, 7, 6],
  [-3, 2, 8, 1],
  [6, 2, 9, 7],
  [1, -2, 4, -2]];
  
  
  sum(mat)