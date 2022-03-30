const Synonyms = (props) => {
    const { word, saveSetter } = props;

    const saveWord = (wordToSave) => {
        saveSetter(savedWords => ([...savedWords, wordToSave]))
    }
    
    return (
        <output className="row">
            <li>{word}<input className="btn btn-outline-success save" type="button" value="Save" role="button" onClick={() => saveWord(word)}/></li>
        </output>
    )
}

export default Synonyms