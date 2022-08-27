import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ClockOne from "./components/ClockOne/ClockOne";

const Container = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
`;

const App = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const dateObj = {
    second: date.getSeconds(),
    minute: date.getMinutes(),
    hour: date.getHours(),
  };

  return (
    <Container>
      <ClockOne {...dateObj} />
    </Container>
  );
};

export default App;
