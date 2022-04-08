import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../../config.js'
import FlashcardList from "./FlashcardList";

function FlashcardListLoader(props){

    let [data, setData] = useState({docsFromServer:[], numDocs:0, isFetching: false})

    function deckPicker(topLevelID, urls){
        props.chooseDeck(topLevelID, urls);
    }

    /*
    useEffect( () =>{
        async function fetchDecks() {
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: true})
            setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
            //do flashacrd deck loading logic
        }*/

        useEffect( () =>{
        async function fetchDecks() {
            try {
                setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
                let docListGetDocsAPIstring = API_URL + "/api/docs/list/"
                const response = await fetch(docListGetDocsAPIstring, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Token " + sessionStorage.getItem('token')
                    },
                });
                const docs = await response.json();
                setData({docsFromServer: docs, numDocs:docs.length, isFetching: false})
            } catch (error) {
                console.error(error);
                setData({docsFromServer: data.docsFromServer, numDocs:data.numDocs, isFetching: false})
            }
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