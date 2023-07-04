import React from 'react'
import Item from './Item';

function Data({steps, removeStep}) {

  return (
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
              removeStep={removeStep}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Data