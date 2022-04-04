const OutputDescription = (props) => {
    const {word, rhymeFlag, output } = props

    if(word) {
        return(<h4>{output}</h4>)
    } else {
        return(<h3></h3>)
    }
}

export default OutputDescription