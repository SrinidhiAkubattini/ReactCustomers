import { useState } from "react";

function Category() {
let count=0;
const [myCount,setMyCount]=useState(0);

    const handleClick = () => {
    // alert('Submitted successfully');
      count = count + 1;    // Calculate the incremented value
               // Update the state
               setMyCount(myCount+1);
    // alert(Incremented value: ${count}); // Show the alert
    // alert(myCount Incremented value: ${myCount}); // Show the alert
  };
  const handleminusClick = () => {
    // alert('Submitted successfully');
      count = count + 1;    // Calculate the incremented value
               // Update the state
               if (myCount>0){
               setMyCount(myCount-1);
               }
    // alert(Incremented value: ${count}); // Show the alert
    // alert(myCount Incremented value: ${myCount}); // Show the alert
  };

  return (
    <div>
      <label>This is Category component</label>
      <button onClick={handleClick}>+</button>
      <label>{myCount}</label>
      <button onClick={handleminusClick}>-</button>
    </div>
  );
};

export default Category;