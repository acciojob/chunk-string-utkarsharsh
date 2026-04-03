function stringChop(str, size) {
  // your code here

   let i=0;
   size = Number(size);
   let arr=[];
 while( i< str.length){
	   arr.push(str.slice(i,i+size));

       i=(size+i);
   }
return arr;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
