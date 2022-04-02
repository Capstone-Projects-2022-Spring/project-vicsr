import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../../config.js'
import FlashcardList from "./FlashcardList";

function FlashcardListLoader(props){
    let [data, setData] = useState({docsFromServer:[], numDocs:0, isFetching: false})

    function deckPicker(topLevelID, urls){
        props.chooseDeck(topLevelID, urls);
    }

    useEffect( () =>{
        async function fetchDecks() {
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: true})
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
            //do flashacrd deck loading logic
        }
        //console.log(data.docsFromServer)
        fetchDecks()
        //console.log("Done fetching documents")

        }, []);


    return(
        <FlashcardList documents = {data.docsFromServer} numberOfDocs = {data.numDocs} isLoading ={data.isFetching} chooseDeck = {deckPicker}/>
    )
}

export default FlashcardListLoader