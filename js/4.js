function getElementsDivisibleByFive(arr) 
{
    let result=[];
    for(let i=0; i<arr.length; i++) 
    {
        if(arr[i]%5===0) 
        {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [1, 2, 5, 12, 15, 21];
console.log(getElementsDivisibleByFive(arr));
