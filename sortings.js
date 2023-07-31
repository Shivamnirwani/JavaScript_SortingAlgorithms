function mergesorting(arr,l, r){
    if(l>=r){
        return;
    }
    let m =l+ parseInt((r-l)/2);
    mergesorting(arr,l,m);
    mergesorting(arr,m+1,r);
    return merge(arr,l,m,r);
  }
  
  function merge(arr, l, m, r)
  {
      let n1 = m - l + 1;
      let n2 = r - m;
    
      var L = new Array(n1); 
      var R = new Array(n2);
    
      for (var i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (var j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
      
      var i = 0;      
      var j = 0;
      var k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
    
  
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
    
      
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  
    function bubblesorting(arr) {
     
     for(var i = 0; i < arr.length; i++){
         
         
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            
          
          if(arr[j] > arr[j+1]){
              
        
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
      return arr
    }
        

    function heapsorting(arr) {
        var n = arr.length;
     
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);
        for (var i = n - 1; i > 0; i--) {
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
        return arr
    }
    
    function heapify(arr, n, i)
    {
            let largest = i; 
            let l = 2 * i + 1; 
            let r = 2 * i + 2; 
            if (l < n && arr[l] > arr[largest])
                largest = l;
            if (r < n && arr[r] > arr[largest])
                largest = r;
            if (largest != i) {
                var swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
                heapify(arr, n, largest);
            }
    }
        
    function selectionsorting(arr){
        n = arr.length
        for(var i = 0 ; i<n; i++){
            let minPos = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minPos]) {
                    minPos = j;
                }
            }
            if(i !==minPos){
                [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
            }
        }
        return arr
    }

    function insertionsorting(arr){
        n = arr.length
        for(var i =0; i<n; i++){
            let key = arr[i];
            let j = i-1;
            while(j>=0 && arr[j]>key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
        }
        return arr

    }

    function swap(arr, leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }

    
    function partition(arr, left, right) {
        var pivot   = arr[Math.floor((right + left) / 2)], 
            i       = left, 
            j       = right; 
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); 
                i++;
                j--;
            }
        }
        return i;
    }
    
    function pivot(arr, start = 0, _end = arr.length - 1) {

        function swap(array, i, j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    
        let pivot = arr[start]
        let swapidx = start;
    
        for (let i = start + 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                swapidx++
                swap(arr, swapidx, i)
            }
        }
        swap(arr, start, swapidx)
    
        return swapidx
    }
    
    function quicksorting(arr, left = 0, right = arr.length - 1) {
        if (left < right) {
            let pivotIndex = pivot(arr, left, right)
            
            quicksorting(arr, left, pivotIndex - 1)
        
            quicksorting(arr, pivotIndex + 1, right)
        }
        return arr
    }

    function threeMedian(arr, left = 0, right = arr.length-1){
        var numSwaps = 0;
        var numComps = 0;
    
        var n = arr.length - 1;
        console.log('unsorted array: ',arr);
        
        threemediansort(arr, 0, n);
        console.log('sorted array: ',arr);
    
        console.log("\n\tSwaps: " + numSwaps);
        console.log("\tscanning: " + numComps);
        return arr
    
        function Pivot(arr,low,high) {
    
            var first = arr[low];
            var last = arr[arr.length - 1];
            var mid = (high) / 2;
    
            console.log("\tMiddle of Arr at Index= " + mid + " : " + arr[mid]);
            var sortingArr = [arr[low], arr[mid], arr[high]];
    
            sortingArr.sort();
    
            var middleValue = sortingArr[1];
            console.log("\t"+sortingArr.toString());
    
            let temp = arr[high];
            arr[high] = middleValue;
            if (middleValue == arr[low]) {
                arr[low] = temp;
            } else if (middleValue == arr[mid]) {
                arr[mid] = temp;
            }
    
            console.log(arr);
            return Partition(arr, low, high);
    
        }
    
        function threemediansort( arr, low, high) {
            if (low >= high)
                return;
    
            if (low < high) {
    
                var pi = Pivot(arr, low, high);
                QuickSort(arr, low, high);
    
            }
        }
    
        function QuickSort(arr, low, high) {
    
            if (low < high) {
                var pi = Partition(arr, low, high);
    
                QuickSort(arr, low, pi - 1);

                QuickSort(arr, pi + 1, high);
            }
        }
    
        function Partition(arr, low, high) {
            var pivot = arr[high];
            var i = (low - 1); 
    
            for (var j = low; j < high; j++) {
                
                if (arr[j] <= pivot) {
                    i++;
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    numSwaps++;
                }
                numComps++;
            }
    
            
            var temp = arr[i + 1];
            arr[i + 1] = arr[high];
            arr[high] = temp;
            numSwaps++;
            return i + 1;
    
        }
    }