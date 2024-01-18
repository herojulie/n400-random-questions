import React, {useState} from 'react';
import './App.css';
import rawData from "./data/questions.json";
import IndexCard from "./component/IndexCard";

interface Question {
  title: string,
  subtitle: string,
  question: string,
  answer: Array<string>
}

const getRandomInt = (min: number, max: number): number => {
  // Calculate a random number between min (inclusive) and max (exclusive)
  return Math.floor(Math.random() * (max - min)) + min;
}

const App = () => {
  const [id, setId] = useState<number>(0);

  const items = Object.values(rawData).map(v => {
    const question: Question = v
    return question;
  })
  const changeQuestion = () => {
    // random question 원하시면 이거 주석 풀고 아래 꺼 주석처리하세요
    // setId(getRandomInt(0, items.length - 1));
    setId(id < items.length - 1 ? id + 1 : 0);
  };
  console.log(id + 1);
  return (
    <div className="App">
      <IndexCard question={items[id]} refresh={changeQuestion}/>
    </div>
  );
}

export default App;
