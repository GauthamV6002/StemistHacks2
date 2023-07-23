"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card'
import AddTile from './AddTile'

let iid = 0;

const Board = () => {

  const [cards, setCards] = useState({});
  const [counter, setCounter] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedIndex, setMaximizedIndex] = useState(0);

  const addCard = (_name, _connection) => {
    let newCard = {}
    newCard["card"+counter] = {
      iid: iid,
      index: counter,
      name: _name,
      x: 0,
      y: 0,
      wasMoving: false,
      connection: _connection
    }
    setCards({...cards, ...newCard})
    setCounter(counter+1);
    iid++;
  }

  const maximizeCard = (index, x, y, wasMoving) => {
    setIsMaximized(true);
    setMaximizedIndex(index);
    updateCard(index, x, y, wasMoving);
  }

  const minimizeCard = (index, x, y, wasMoving) => {
    setIsMaximized(false);
    updateCard(index, x, y, wasMoving);
  }

  const updateCard = (index, x, y, wasMoving) => {
    let updatedCard = cards[index];
    updatedCard.x = x;
    updatedCard.y = y;
    updatedCard.wasMoving = wasMoving;
    setCards({...cards, [index]: updatedCard});
  }

  const deleteCard = (index) => {
    let {[index.toString()]: _, ...clone} = cards;
    setCards(clone);
  }

  return (
    <div className="flex flex-wrap flex-row w-max-screen p-2 justify-evenly">
      {isMaximized ?
        <>
          {
            <Card wasMoving={cards[maximizedIndex].wasMoving} x={cards[maximizedIndex].x} y={cards[maximizedIndex].y} maxFunc={maximizeCard} minFunc={minimizeCard} width={window.innerWidth / 16 * 3/4} deleteFunc={deleteCard} maximized={true} index={maximizedIndex} name={cards[maximizedIndex].name} connection={cards[maximizedIndex].connection} />
          }
        </>
      :
        <>
        {
          Object.keys(cards).map((v, i) => (
            <Card wasMoving={cards[v].wasMoving} x={cards[v].x} y={cards[v].y} key={cards[v].iid} maxFunc={maximizeCard} minFunc={minimizeCard} width={16} deleteFunc={deleteCard} maximized={false} index={v} name={cards[v].name} connection={cards[v].connection} />
          ))
        }
        <AddTile addFunc={addCard} counter={counter} />
      </>
      }
    </div>
  )
}

export default Board