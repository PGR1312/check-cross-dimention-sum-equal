var arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];
var first=0;
var second=0;
for(i=0;i<arr.length;i++)
{
    //console.log(arr[i][i]);
    first=first+arr[i][i];
    //console.log(arr[i][arr.length-i-1]);
    second=second+arr[i][arr.length-i-1];
}
//console.log(first);
//console.log(second);
if(first==second)
{
    console.log('true');
}
else
{
    console.log('false');
}
