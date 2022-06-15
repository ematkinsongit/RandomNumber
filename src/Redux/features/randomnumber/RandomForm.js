import {React, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { fetchRandomNumbers, selectRandom } from "./randomSlice";
import ResultItem from "./ResultItem";


const RandomForm = () => {
  const dispatch = useDispatch();
  const randomResults = useSelector(selectRandom);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [count, setCount] = useState(1);
  const [randomRequestStatus, setRandomRequestStatus] = useState("idle");
  
  
  const onMinChanged = (e) => setMin(e.target.value);
  const onMaxChanged = (e) => setMax(e.target.value);
  const onCountChanged = (e) => setCount(e.target.value);
  
  
  const valueCheck = min <= max && count >= 1;
  const canRequest = randomRequestStatus === "idle";
  
  const onRandomButtonClicked = () => {
    if (canRequest) {
      try {
        setRandomRequestStatus("pending");
        dispatch(fetchRandomNumbers({ min, max, count })).unwrap();
        setMin(0);
        setMax(10);
        setCount(1);
      } catch (err) {
        console.error("failed to fetch random numbers", err);
      } finally {
        setRandomRequestStatus("idle");
      }
    }
  };
  const newResults = randomResults.map((result) => (
    <ResultItem key={nanoid()} result={result} />
  ));

  return (
    <section>
      <form>
        <label htmlFor="formMin">Minimum: </label>
        <input
          type="number"
          id="formMin"
          name="formMin"
          value={min}
          onChange={onMinChanged}
        />
        <label htmlFor="formMax">Maximum: </label>
        <input
          type="number"
          id="formMax"
          name="formMax"
          value={max}
          onChange={onMaxChanged}
        />
        <label htmlFor="formCount">Count: </label>
        <input
          type="number"
          id="formCount"
          name="formCount"
          value={count}
          onChange={onCountChanged}
        />
        <button
          type="button"
          onClick={onRandomButtonClicked}
          disabled={!valueCheck}
        >
          Get Random Numbers!
        </button>
      </form>
      {newResults}
    </section>
  );
};

export default RandomForm;
