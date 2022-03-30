const OutputDescription = (props) => {
    const {word, rhymeFlag } = props

    if(word) {
        if(rhymeFlag) {
            return(<h2>Words that rhyme with {word}:</h2>)
        } else {
            return(<h2>Words with a meaning similar to {word}:</h2>)
        }
    } else {
        return(<h2></h2>)
    }
}

export default OutputDescription