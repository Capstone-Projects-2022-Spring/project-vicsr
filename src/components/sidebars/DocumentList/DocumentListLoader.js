import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../config'
import DocumentList from "./DocumentList";

function DocumentListLoader(props){
    let [data, setData] = useState({docsFromServer:[], numDocs:0, isFetching: false})

    function docPicker(topLevelID, urls){
        props.chooseDoc(topLevelID, urls);
    }

    useEffect( () =>{
        async function fetchDocuments() {
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
        fetchDocuments()
        //console.log("Done fetching documents")
        props.setNeedHighlight(false);

        }, [props.needHighlight]);
    console.log(data.docsFromServer)

    return(
        <DocumentList documents = {data.docsFromServer} numberOfDocs = {data.numDocs} isLoading ={data.isFetching} chooseDocument = {docPicker}/>
    )
}

export default DocumentListLoader