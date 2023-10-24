function task1() 
{
    arr=[4,16,25,36];
    let sum=0;
    for (let i=0; i<arr.length; i++) 
    {
        if (arr[i]%2==0) 
        {
            sum+=Math.sqrt(arr[i]);
        }
    }
    return sum;
}
console.log(task1(array));
