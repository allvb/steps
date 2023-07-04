import Form from './components/Form';
import Data from './components/Data';
import { useState } from 'react';


function App() {

  const [steps, setSteps] = useState([]);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(0);

  const changeDate = (e) => {
    setDate((prev) => prev = e.target.value);
  };

  const changeDistance = (e) => {
    setDistance((prev) => prev = e.target.value);
  };

  const editDistance = () => {
    setSteps((prev) => prev = steps.map((item) =>
      item.id === date 
      ? { ...item, distance: item.distance + +distance }
      : { ...item }
      )
    );
  };

  function sortSteps() {
    if (!steps) {
      return null
    }
    setSteps(prev => prev.sort((a, b) => {
      if (a.date.split("-")[2] === b.date.split("-")[2]) {
        if (a.date.split("-")[1] === b.date.split("-")[1]) {
          if (a.date.split("-")[0] > b.date.split("-")[0]) {
            return -1;
          }
        }
        if (a.date.split("-")[1] > b.date.split("-")[1]) {
          return -1;
        }
      }
      if (a.date.split("-")[2] > b.date.split("-")[2]) {
        return -1;
      }
    }));
  };


  function handleSubmit (e) {
    e.preventDefault();
    console.log(Boolean(date && isNaN(date)));
    console.log(date);
    if (date && !isNaN(distance)) { // если введена дата и дистанция
      let dateRu = date.split("-").reverse().join("-");
      if (distance) { // если введена дистация
        if (!steps.find((item) => item.id === date)) { // нет ли уже записей за эту дату
          setSteps((prev) => (prev = [...steps, { id: date, date: dateRu, distance: +distance }, ]));
        } else {
          editDistance();
        }
      } 
    }
      setDate("");
      setDistance(0);
      sortSteps();
    };

  function handleRemoveStep(id) {
    setSteps((prev) => (prev = steps.filter((item) => item.id !== id)));
  };

  return (
    <main className='main'>
      <div className='steps-container'>
      <Form 
        date={date} 
        distance={distance}
        changeDate={changeDate} 
        changeDistance={changeDistance}
        onSubmit={handleSubmit} 
      />
      <Data 
        steps={steps} 
        removeStep={handleRemoveStep} 
      />
      </div>
    </main>
  );
}

export default App;
