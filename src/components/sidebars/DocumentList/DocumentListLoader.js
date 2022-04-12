import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../config'
import DocumentList from "./DocumentList";

function DocumentListLoader(props){
    let [data, setData] = useState({docsFromServer:[], numDocs:0, isFetching: false})
    let [docUpdated, setDocUpdated] = useState(true)

    function docPicker(topLevelID, urls){
        props.chooseDoc(topLevelID, urls);
    }

    //will happen upon component loading in and then if props.highlight changes
    useEffect( () =>{
        //function defined
        async function fetchDocuments() {
            try {
                setData({docsFromServer: data.docsFromServer, numDocs: data.numDocs, isFetching: false})
                let docListGetDocsAPIstring = API_URL + "/api/docs/list/"
                const response = await fetch(docListGetDocsAPIstring, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Token " + sessionStorage.getItem('token')
                    },
                });
                const docs = await response.json();
                console.log("fetching documents")
                setData({docsFromServer: docs, numDocs: docs.length, isFetching: false})
              
            } catch (error) {
                console.error(error);
                setData({docsFromServer: data.docsFromServer, numDocs: data.numDocs, isFetching: false})
            }
        }

        //fetchDocuments will be called only if props.needHighlight is true
        //the variable which provides the Boolean for props.needHighlight is defined as true originally in the DocumentView
        //It will be turned back to true whenever a document is clicked or the page is turned
        if(props.needHighlight){
            console.log("Documents being fetched")
            fetchDocuments()
            props.setNeedHighlight(false);
        }
        if(docUpdated){
            console.log("Documents being fetched")
            fetchDocuments()
            setDocUpdated(false)
        }
    }, [props.needHighlight, docUpdated]);

    return(
        <DocumentList documents = {data.docsFromServer} numberOfDocs = {data.numDocs} isLoading ={data.isFetching} chooseDocument = {docPicker} setDocUpdated = {setDocUpdated}/>
    )
}

export default DocumentListLoader