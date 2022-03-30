const SavedWord = (props) => {
    const {wordList} = props
    console.log("Saved words: "+wordList)
    
    if(wordList.length > 0) {
        return(
            <div className="col">Saved words: <span id="saved_words">{wordList.join(",")}</span></div>
        )
    } else {
        return(
            <div className="col">No saved words</div>
        )
    }
}

export default SavedWord