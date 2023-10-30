function getAverage(arr) 
{
    let sum=0;
    for(let i=0; i<arr.length; i++) 
    {
        sum+=arr[i];
    }
    return Math.round((sum/arr.length)*10)/10;
}
let arr = [1, 2, 3, 4, 5];
console.log(getAverage(arr));
