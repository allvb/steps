import React from 'react';
import Data from './Data';
import Item from './Item';
// import { useState } from 'react';

function Form({ date, distance, changeDate, changeDistance, onSubmit }) {
 
  return (
    <form className='form'>
      <div className='divData'>
        <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
        <input
          className="steps-add-date"
          id='date'
          type='date'
          value={date}
          onChange={(e) => changeDate(e)} 
        />
      </div>
      <div className='divDistance'>
        <label className='formDistance'>Пройдено км</label>
        <input 
          id='distance'
          value={distance}
          onChange={(e) => changeDistance(e)}
        />
      </div>
      <button className='btn' type='submit' onClick={onSubmit}>Ok</button>
    </form>
  )
}

export default Form