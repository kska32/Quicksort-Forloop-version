# Quicksort-Forloop-version
### 快速排序-循环版 (퀵정렬 루프버전)
Quicksort Forloop version

快速排序的基本思想是划分/分治

<img  src="https://github.com/kska32/Quicksort-Forloop-version/blob/master/quicksort.png" width="400" height="340">


虽然递归版本非常简洁，但是我个人觉得纯for循环版可读性明显更佳。


<code>

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
    
</code>
