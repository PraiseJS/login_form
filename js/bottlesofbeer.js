for(let num = 99; num >= 1; num--){
   let bottlesRemaining = "bottles";
   let subBottles = num - 1;

   if(num === 1 || subBottles === 1){
      bottlesRemaining = "bottle"
   }

   if(subBottles === 0){
      bottlesRemaining = "no bottle "
   }

   console.log(num + " " + bottlesRemaining + " of beer on the wall");
   console.log(num + " " + bottlesRemaining +" of beer")
   console.log("Take one down and pass it around, " + subBottles
    + " " + bottlesRemaining + " of beer on the wall");
}