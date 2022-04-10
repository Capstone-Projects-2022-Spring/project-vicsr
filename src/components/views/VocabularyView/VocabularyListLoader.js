import {useEffect, useState} from "react";
import {API_URL} from "../../../config";
import VocabularyList from "./VocabularyList"

function VocabularyListLoader(props) {
    let [data, setData] = useState({wordsFromServer:[], numWords:0, isFetching: false});
    let [currentSetId, setCurrentSetId] = useState(0);

    useEffect( () => {
        if (props.currentDoc !== "") {
            const studySetId = fetchStudySetByDocId();
            fetchWords(studySetId);
        } else {
            console.log("No document chosen for vocab fetch.")
        }
    }, [props.updateOn]);

    async function fetchStudySetByDocId() {
        let studySetByDocIdApiString = API_URL + "/api/vocab/sets/fromDoc/" + props.currentDoc;
        const response = await fetch(studySetByDocIdApiString, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        });
        const studySet = await response.json();
        console.log("DocID for current Doc: " + studySet[0].id);
        setCurrentSetId(studySet[0].id);
    }

    async function fetchWords() {
        console.log("Study set id: " + currentSetId)
        try {
            let vocabByDocIdApiString = API_URL + "/api/vocab/sets/" + currentSetId + "/words";
            console.log("API URL: " + vocabByDocIdApiString);

            const response = await fetch(vocabByDocIdApiString, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            });
            const words = await response.json();
            console.log(words);
            setData({wordsFromServer: words, numWords: words.length, isFetching: false})
        } catch (error){
            console.error(error);
            setData({wordsFromServer: [], numWords: 0, isFetching: false})
        }
    }


    return (
        <VocabularyList
            words = {data.wordsFromServer}
            numWords = {data.numWords}
            isLoading = {data.isFetching}/>
    );
}

export default VocabularyListLoader