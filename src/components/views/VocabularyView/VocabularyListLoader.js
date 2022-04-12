import {useEffect, useState} from "react";
import {API_URL} from "../../../config";
import VocabularyList from "./VocabularyList"

function VocabularyListLoader(props) {
    let [data, setData] = useState({wordsFromServer:[], numWords:0, isFetching: false});

    useEffect( async () => {
        await fetchWords();

    }, [props.currentDoc]);

    async function fetchStudySetByDocId() {
        let studySetByDocIdApiString = API_URL + "/api/vocab/sets/fromDoc/" + props.currentDoc;
        console.log("APIURL: " + studySetByDocIdApiString)
        const response = await fetch(studySetByDocIdApiString, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        });

        const studySet = await response.json();
        console.log("Returning: " + studySet[0].id);

        return studySet[0].id;
    }

    async function fetchWordsBySetID(setID) {
        console.log("setID: " + setID);
        try {
            let vocabByDocIdApiString = API_URL + "/api/vocab/sets/" + setID + "/words";
            console.log("API URL: " + vocabByDocIdApiString);

            const response = await fetch(vocabByDocIdApiString, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            });
            const words = await response.json();
            console.log("Study set words: " + JSON.stringify(words, null, 4));
            setData({wordsFromServer: words, numWords: words.length, isFetching: false})
        } catch (error){
            console.error(error);
            setData({wordsFromServer: [], numWords: 0, isFetching: false})
        }
    }

    async function fetchWords() {
            console.log("Current doc ID: " + props.currentDoc)
            if (props.currentDoc !== "" && props.currentDoc !== 0) {
                const currentStudySetId = await fetchStudySetByDocId();
                console.log("currentStudySetId: " + currentStudySetId);
                const studySetWordsJson = await fetchWordsBySetID(currentStudySetId);
                console.log("Study set words JSON: " + JSON.stringify(studySetWordsJson, null, 4));
            } else {
                console.log("No document chosen for vocab fetch.")
                clearVocabList();
            }
        }

    function clearVocabList() {
        console.log("Clearing Vocabulary List.");
        setData({wordsFromServer: [], numWords: 0, isFetching: false});
    }

    return (
        <VocabularyList
            words = {data.wordsFromServer}
            numWords = {data.numWords}
            isLoading = {data.isFetching}/>
    );
}

export default VocabularyListLoader