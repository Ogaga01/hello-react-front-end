import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingData } from '../redux/actions/greeting-action';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingSlice.greetings);

  // eslint-disable-next-line no-bitwise
  const greeting = greetings[(Math.random() * greetings.length) | 0];
  console.log(greeting);

  const dispatch = useDispatch();

  const fetchGreeting = () => {
    dispatch(fetchGreetingData());
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button type="button" onClick={fetchGreeting}>Get a Greeting</button>
    </div>
  );
};

export default Greeting;
