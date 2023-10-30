let arr=[1, 2, 15, -1, 8, 10];
let numbers=0;

for(let i=0; i<arr.length; i++) 
{
    if(arr[i]>0 && arr[i]<10) 
    {
        numbers += arr[i];
    }
}
console.log(numbers);
