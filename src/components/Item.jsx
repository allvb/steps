import React from 'react'

function Item({item, removeStep}) {
  return (
    <>
        <div key={item.id} className="step-list-item">
          <div className="step-list-item-date">{item.date}</div>
          <div className="step-list-item-distance">
            {item.distance} Км
          </div>
          <div className="step-list-remove"
               onClick={() => removeStep(item.id)}
          > X 
          </div>
        </div>
    </>
  )
}

export default Item
