const RhymingWord = (props) => {
    const { word, count, saveSetter } = props;

    const saveWord = (wordToSave) => {
        console.log("Saving word: "+wordToSave)
        saveSetter(savedWords => ([...savedWords, wordToSave]))
    }

    console.log("word len"+word.length)

        return (
            <output className="row">
            <h5>Syllable count: {count}</h5>
            <ul>
                {
                    word.map((item) => 
                        <li>{item['word']}<input className="btn btn-outline-success save" type="button" value="Save" role="button" onClick={() => saveWord(item['word'])}/></li> )
                }
            </ul>
            </output>
        )
}

export default RhymingWord;