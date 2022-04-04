import logo from './logo.svg';
import './App.css';
import WordDisplay from './components/WordDisplay';
import InputElement from './components/InputElement';
import SavedWord from './components/SavedWord';
import OutputDescription from './components/OutputDescription'
import {useState} from "react";

function App() {

  const [findRhyme, setFindRhyme] = useState(true)
  const [wordToSearch, setWordToSearch] = useState("")
  const [savedWords, setSavedWords] = useState([])
  const [outputTitle, setOutputTitle] = useState("")

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder in React (579 Problem Set 6)</h1>
      <h6>Link to GitHub repo: <a href='https://github.com/KnightTuring/si579-ps6-react'>https://github.com/KnightTuring/si579-ps6-react</a></h6>
      <div className="row">
        <SavedWord 
          wordList = {savedWords}
        />
      </div>
      <div className="row">
        {/* Input element will return which button has been pressed and the word inputted by the user */}
        <InputElement 
          setWordInputByUser = {setWordToSearch} 
          setRhymeFindFlow = {setFindRhyme}
        />
      </div>

      <div className="row">
        <OutputDescription word = {wordToSearch} rhymeFlag = {findRhyme} output = {outputTitle}/>
      </div>
    
      {/* Word inputted and flag of which operation to perform will be passed as props to the WordDisplay component */}
      <WordDisplay 
        wordInput = {wordToSearch} 
        findRhyme = {findRhyme} 
        addSavedWord = {setSavedWords}
        setTitle = {setOutputTitle}
      />
    </main>
  );
}

export default App;
