/*
 Quik Sort:
  3,   2,   4,   7,   6,   5,   1
                                7    
             left                  right                        
 [3,   2,   4,   6,   5,   1]       [ ]
      left             right
                 4              
 [3,   2,   1]	     [6,   5]
       2
  left   right      left  right
 [1]       [3]	         
                      5
                left     right
	            [ ]       [6]
*/

let arr = [
    1, 10, 20 ,5 ,8 ,12 ,24 ,35 ,46,100,40,33,
   45,99,87,101,80,5,30,1049,9,103,593,402,192,
   1000,2000,3000,2000,3,64,99,88,111,222,84,12,
   384,918,48,203,93,39,302,934,192,40234,304,34,
    10, 20 ,5 ,8 ,12 ,24 ,35 ,46,100,40,33
];


//swap style recursion version
function quickSort1(arr){
    var quickSort = function(array, leftIdx, rightIdx){
          let pivotPos = partition(array, leftIdx, rightIdx);
          if (leftIdx < pivotPos - 1) quickSort(array, leftIdx, pivotPos-1);
          if (rightIdx > pivotPos) quickSort(array, pivotPos, rightIdx);
          return array;
    }
    
    var swap = function(array, leftIdx, rightIdx){
          let array_leftIdx = array[leftIdx];
          array[leftIdx] = array[rightIdx];
          array[rightIdx] = array_leftIdx;    
    }
    
    var partition = function(array, leftIdx, rightIdx){
          let pivotIndex = Math.floor( (leftIdx + rightIdx) / 2 );
          let pivotValue = array[pivotIndex];

          while (leftIdx <= rightIdx){
              while(array[leftIdx] < pivotValue) leftIdx++;
              while(array[rightIdx] > pivotValue) rightIdx--;
              if (leftIdx <= rightIdx){
                  swap(array, leftIdx++, rightIdx--);  
              }
          }
          return leftIdx;
    }
    return quickSort(arr, 0, arr.length-1);
}

//网上最多的版本
//recursion version
function quickSort2(arr){
    if (arr.length <= 1)  return arr;

    var pivot = arr.pop();
    var left = [], right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }　　
    return quickSort2(left).concat([pivot], quickSort2(right));
}


//quickSort forLoop Version
//快速排序 循环版

function quickSort3(arr){
    let subArrs = [{arr, sIndex:0}];
    let result = [];
    
    for(let i=0; i<subArrs.length; i++){
            let arr = subArrs[i].arr;
            let sIndex = subArrs[i].sIndex;
            
            let left = [],
                right = [],
                pivot = arr.pop();

            for(let ii=0; ii<arr.length; ii++){
                if( arr[ii]<pivot ){
                    left.push(arr[ii]);
                }else{
                    right.push(arr[ii]);
                }
            }

            //left
            if(left.length>1){
                subArrs.push({arr:left, sIndex:sIndex});
            }else if(left.length===1){
                result[sIndex] = left[0];
            }

            //middle
            result[sIndex + left.length] = pivot;

            //right
            if(right.length>1){
                subArrs.push({arr:right, sIndex:sIndex+left.length+1});
            }else if(right.length===1){
                result[sIndex + left.length + 1] = right[0];
            }
    }
    return result;
}


console.time("quickSort");
    console.log(quickSort3(arr));
console.timeEnd("quickSort");