import React from 'react';
import Item from './Item';
import { useState } from 'react';

function Steps() {
  const [steps, setSteps] = useState([]);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(0);

  const ChangeDate = (e) => {
    setDate((prev) => prev = e.target.value);
  };

  const CangeDistance = (e) => {
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
    if (date) { // если введена дата
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
        <form className='form'>
          <div className='divData'>
            <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
            <input
              className="steps-add-date"
              id='date'
              type='date'
              value={date}
              onChange={(e) => ChangeDate(e)} 
            />
          </div>
          <div className='divDistance'>
            <label className='formDistance'>Пройдено км</label>
            <input 
              id='distance'
              value={distance}
              onChange={(e) => CangeDistance(e)}
            />
          </div>
          <button className='btn' type='submit' onClick={handleSubmit}>Ok</button>
        </form>
        <div className='steps-list'>
          <div className='steps-list-title'>
            <span>Дата (ДД.ММ.ГГ)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
          </div>
          <div className='steps-list-items'>
            {steps.map(item => {
              return (
                <Item 
                  key={item.id}
                  item={item}
                  removeStep={handleRemoveStep}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Steps