import React from "react";
import { useState } from "react";
import axios from "axios";

function Number() {
  const [rnum, setRnum] = useState(0);
  function handleClick() {
    console.log("hello");
    setRnum(rnum + 1);
    // axios.get("http://www.randomnumberapi.com/api/v1.0/random").then((res) => {
    //   const newnum = res.data;
    //   setRnum(newnum);
    // });
  }
  return (
    <div className="number">
      <button id="button" onClick={handleClick}>
        Get a Random Number!
      </button>
      <div className="display-number">clicked {rnum} times</div>
    </div>
  );
}

export default Number;
