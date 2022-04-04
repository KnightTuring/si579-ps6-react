import { useEffect, useState } from "react"
import RhymingWord from "./RhymingWord"
import Synonyms from "./Synonyms"
import {groupBy, getDatamuseRhymeUrl, datamuseRequest, getDatamuseSimilarToUrl} from "../utils"


const WordDisplay = (props) => {
    const{wordInput, findRhyme, addSavedWord, setTitle} = props
    
    const defaultRhymingWords = []

    const defaultSynonyms = []
    
    const [rhymingWords, setRhymingWords] = useState(defaultRhymingWords)
    const [synonyms, setSynonyms] = useState(defaultSynonyms)
    const [loading, setLoading] = useState(false)

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
        if(findRhyme === true) {
            setRhymingWords([])
            if(wordInput) {
                datamuseRequest(getDatamuseRhymeUrl(wordInput), setLoading, setDisplayWords);
            }
        } else {
            if(wordInput) {
                setSynonyms([])
                datamuseRequest(getDatamuseSimilarToUrl(wordInput), setLoading, setSynonymsDisplay)
            }
        }
    }, [wordInput, findRhyme])

    if(findRhyme === true) {
        if(wordInput) {
            if(loading) {
                setTitle("Loading...")
            } else if(rhymingWords.length === 0) {
                setTitle(`There are no words that rhyme with ${wordInput}`)
            } else {
                setTitle(`Words that rhyme with ${wordInput} are:`)
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
        }
    } else {
        if(wordInput) {
            if(loading) {
                setTitle("Loading...")
            } else if(synonyms.length === 0) {
                setTitle(`There are no synonyms for ${wordInput}`)
            } else {
                setTitle(`Synonyms for ${wordInput} are:`)
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
    }

    return(<div className="output row"></div> )
}

export default WordDisplay