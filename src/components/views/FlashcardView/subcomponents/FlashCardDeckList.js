import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../../config.js'
import FlashcardList from "./FlashcardList";

function FlashCardDeckList(props){

  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li> );

    return(
            <ul>{listItems}</ul>
    )
}

export default FlashCardDeckList