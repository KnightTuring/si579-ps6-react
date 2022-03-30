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

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder in React (579 Problem Set 6)</h1>
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
        <OutputDescription word = {wordToSearch} rhymeFlag = {findRhyme}/>
      </div>
    
      {/* Word inputted and flag of which operation to perform will be passed as props to the WordDisplay component */}
      <WordDisplay 
        wordInput = {wordToSearch} 
        findRhyme = {findRhyme} 
        addSavedWord = {setSavedWords}
      />
    </main>
  );
}

export default App;
