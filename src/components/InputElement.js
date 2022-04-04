import { useState } from "react"

const InputElement = (props) => {
    // receive word input from app.js
    const {setWordInputByUser, setRhymeFindFlow} = props;

    const [wordInput, setWordInput = ((wordVal) => {
        return wordVal
    })] = useState('')
    

    const findRhymingWords = () => {
        setRhymeFindFlow(true)
        setWordInputByUser((wordToSearch) => {
            wordToSearch = wordInput
            return wordToSearch
        })
    }

    const findSynonyms = () => {
        setRhymeFindFlow(false)

        setWordInputByUser((wordToSearch) => {
            wordToSearch = wordInput
            return wordToSearch
        })
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            findRhymingWords()
        }
    }

    return (
        <div className="input-group col">
            <input 
                className = "form-control" 
                type="text" 
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
                placeholder="Enter a word"/>
            <button 
                className = "btn btn-primary" 
                type="button"
                onClick={(e) => findRhymingWords(e.target.value)}
                tabIndex="0"
                >
                Show rhyming words
            </button>
            <button 
                className = "btn btn-secondary" 
                type="button"
                onClick={(e) => findSynonyms(e.target.value)}>
                Show synonyms
            </button>
        </div>
    )
}

export default InputElement