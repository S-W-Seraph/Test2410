function areAllElementsEven(arr) 
{
    for(let i=0; i<arr.length; i++) 
    {
        if(arr[i]%2!==0) 
        {
            return false;
        }
    }
    return true;
}
let arr = [2, 4, 6, 8, 11];
console.log(areAllElementsEven(arr));
