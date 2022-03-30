import { useEffect, useState } from "react"
import RhymingWord from "./RhymingWord"
import Synonyms from "./Synonyms"
import {groupBy, getDatamuseRhymeUrl, datamuseRequest, getDatamuseSimilarToUrl} from "../utils"


const WordDisplay = (props) => {
    const{wordInput, findRhyme, addSavedWord} = props
    
    const defaultRhymingWords = []

    const defaultSynonyms = []
    
    const [rhymingWords, setRhymingWords] = useState(defaultRhymingWords)
    const [synonyms, setSynonyms] = useState(defaultSynonyms)

    const setDisplayWords = (allData) => {
        let groupedData = groupBy(allData, 'numSyllables')
        console.log("GroupedData", groupedData)
        setRhymingWords((rhymes) => {
            rhymes = groupedData
            console.log("Setting and returning", rhymes)
            return rhymes
        })
    }

    const setSynonymsDisplay = (allData) => {
        setSynonyms(() => {
            return allData
        })
    }

    useEffect(() => {
        console.log("Changed")
        if(findRhyme === true) {
            if(wordInput) {
                datamuseRequest(getDatamuseRhymeUrl(wordInput), setDisplayWords);
                
            }
        } else {
            if(wordInput) {
                datamuseRequest(getDatamuseSimilarToUrl(wordInput), setSynonymsDisplay)
            }
        }
    }, [wordInput, findRhyme])

    if(findRhyme === true) {
        if(wordInput) {
            return(
                <div className="output row">
                    {rhymingWords.map((item) => 
                        <RhymingWord 
                            word = {item.values} 
                            count = {item.count} 
                            saveSetter = {addSavedWord}
                        />
                    )}
                </div>
            )
        }
        
    } else {
        if(wordInput) {
            return(
                <div className="output row">
                    <ul>
                        {synonyms.map((item) => 
                            <Synonyms 
                                word = {item.word} 
                                saveSetter = {addSavedWord}
                            />
                        )}
                    </ul>
                </div> 
            )
        }
    }

    return(<div className="output row"></div> )
}

export default WordDisplay