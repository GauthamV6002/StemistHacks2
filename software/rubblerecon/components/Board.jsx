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
      connection: _connection
    }
    setCards({...cards, ...newCard})
    setCounter(counter+1);
    iid++;
  }

  const maximizeCard = (index) => {
    setIsMaximized(true);
    setMaximizedIndex(index);
  }

  const minimizeCard = () => {
    setIsMaximized(false);
  }

  const deleteCard = (index) => {
    let {[index.toString()]: _, ...clone} = cards;
    setCards(clone);
  }

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <div className="flex flex-wrap flex-row w-max-screen p-2 justify-evenly">
      {isMaximized ?
        <>
          {
            <Card maxFunc={maximizeCard} minFunc={minimizeCard} deleteFunc={deleteCard} maximized={true} index={maximizedIndex} name={cards[maximizedIndex].name} connection={cards[maximizedIndex].connection} />
          }
        </>
      :
        <>
        {
          Object.keys(cards).map((v, i) => (
            <Card key={cards[v].iid} maxFunc={maximizeCard} minFunc={minimizeCard} deleteFunc={deleteCard} maximized={false} index={v} name={cards[v].name} connection={cards[v].connection} />
          ))
        }
        <AddTile addFunc={addCard} counter={counter} />
      </>
      }
    </div>
  )
}

export default Board