import { useCallback, useState } from 'react';
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const javaQuestions = [
    "1) What is the difference between an interface and an abstract class in Java?",
    "2) What is the difference between a static and a non-static method in Java?",
    "3) What is the difference between an ArrayList and a LinkedList in Java?",
    "4) What is the purpose of the 'final' keyword in Java?",
    "5) What is the 'this' keyword in Java and how is it used?",
    "6) What is the difference between a checked and an unchecked exception in Java?",
    "7) What is the purpose of the 'synchronized' keyword in Java?",
    "8) What is the difference between '==' and '.equals()' in Java?",
    "9) What is the difference between a HashMap and a TreeMap in Java?",
    "10) What is the purpose of the 'transient' keyword in Java?",
    "11) One/two word answer: What is Java?",
    "12) One/two word answer: What is a class?",
    "13) One/two word answer: What is an object?",
    "14) One/two word answer: What is inheritance?",
    "15) One/two word answer: What is polymorphism?",
    "16) One/two word answer: What is an interface?",
    "17) One/two word answer: What is encapsulation?",
    "18) One/two word answer: What is a constructor?",
    "19) One/two word answer: What is a method?",
    "20) One/two word answer: What is a package?"
  ];

  const javaAnswers = [
    "An interface is a collection of abstract methods and constants that can be implemented by any class, while an abstract class is a class that cannot be instantiated and may contain concrete and abstract methods. A class can implement multiple interfaces but can only extend one abstract class.",
    "A static method belongs to the class and can be called without creating an instance of the class, while a non-static method belongs to an instance of the class and can only be called on that instance.",
    "An ArrayList is a resizable array that allows random access to its elements, while a LinkedList is a linked list that allows elements to be inserted or removed from both ends of the list quickly.",
    "The 'final' keyword can be used to make a class not extendable, a method not overrideable, or a variable not modifiable.",
    "The 'this' keyword refers to the current object instance in a method or constructor. It is used to access instance variables and methods, or to call another constructor from within a constructor.",
    "A checked exception is a type of exception that must be caught or declared in the method signature, while an unchecked exception is a type of exception that does not need to be caught or declared. Examples of checked exceptions include IOException and SQLException, while examples of unchecked exceptions include NullPointerException and IllegalArgumentException.",
    "The 'synchronized' keyword is used to create a synchronized block of code, which ensures that only one thread can access that block of code at a time. It is used to prevent race conditions in multi-threaded programs.",
    "'==' is used to compare the reference of two objects, while '.equals()' is used to compare the values of two objects. The '.equals()' method is often overridden by classes to provide custom equality checking.",
    "A HashMap is a hash table that allows null values and does not maintain any order, while a TreeMap is a sorted map that does not allow null keys and maintains its keys in a sorted order.",
    "The 'transient' keyword is used to indicate that a variable should not be serialized when an object is serialized. It is used to exclude certain variables from the serialization process.",
    "Programming Language",
    "Blueprint",
    "Instance",
    "Reusability",
    "Flexibility",
    "Contract",
    "Data-hiding",
    "Initialization",
    "Function",
    "Namespace"
  ];

  const [currentIndex, setIndex] = useState(0);
  const [questions, setQuestions] = useState(javaQuestions);
  const [answers, setAnwers] = useState(javaAnswers);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [isNext, setIsNext] = useState(true);
  const [isPrevious, setIsPrevious] = useState(false);
  const [isSmallAnswer, setIsSmallAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState("Type your answer here");
  const [buttonColor, setButtonColor] = useState("blueviolet");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const getNextQuestion = () => {
    if (currentIndex != questions.length - 1 && questions[currentIndex + 1].includes("One/two word answer")) {
      setIsSmallAnswer(true);
    } else {
      setIsSmallAnswer(false);
    }

    if (currentIndex != answers.length - 1) {
      setIndex(currentIndex + 1);
    }
    
    if (currentIndex == answers.length - 2) {
      setIsNext(false);
    }

    setIsPrevious(true);
    setUserAnswer("");
    setButtonColor("blueviolet");
  }

  const getPreviousQuestion = () => {
    if (currentIndex != 0 && questions[currentIndex - 1].includes("One/two word answer")) {
      setIsSmallAnswer(true);
    } else {
      setIsSmallAnswer(false);
    }

    if (currentIndex != 0) {
      setIndex(currentIndex - 1); 
    }

    if (currentIndex == 1) {
      setIsPrevious(false);
    }

    setIsNext(true);
    setUserAnswer("");
    setButtonColor("blueviolet");
  }

  const doShuffle = () => {
    const shuffledIndices = [...Array(javaQuestions.length).keys()]
    
    // Fisher - Yates shuffling algorithm
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }

    const shuffledQuestions = shuffledIndices.map((index) => javaQuestions[index]);
    const shuffledAnswers = shuffledIndices.map((index) => javaAnswers[index]);

    var currentQuestion;

    if (shuffleOn) {
      setShuffleOn(false);
      setQuestions(javaQuestions);
      setAnwers(javaAnswers);
      currentQuestion = javaQuestions[0];
    } else {
      setShuffleOn(true);
      setQuestions(shuffledQuestions);
      setAnwers(shuffledAnswers);
      currentQuestion = shuffledQuestions[0];
    }

    setIndex(0);
    setIsNext(true);
    setIsPrevious(false);
    setIsSmallAnswer(false);
    setUserAnswer("");
    setButtonColor("blueviolet");

    if (currentQuestion.includes("One/two word answer")) {
      setIsSmallAnswer(true);
    }
  }

  const handleTextClick = () => {
    if (userAnswer == "Type your answer here") {
      setUserAnswer("");
    }
  }

  const handleChange = (event) => {
    setUserAnswer(event.target.value)
  }

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() == answers[currentIndex].toLowerCase()) {
      setButtonColor('green');
      setCurrentStreak(currentStreak + 1);
    } else {
      setButtonColor('red');
      if (currentStreak > longestStreak) {
        setLongestStreak(currentStreak);
      }
      setCurrentStreak(0);
    }
  }
  
  return (
    <div className="App">
      
      <div class="website-title">
        <h1> Java Interview Flashcards </h1>
        <h2> Refine your skills for the upcoming internship interview for Java </h2>
        <h3> Total Number of Cards: {questions.length} </h3>
        <h3> Longest Streak: {longestStreak} &nbsp; &nbsp; &nbsp; Current Streak: {currentStreak}</h3>
      </div>
      
      <div className='flashcard-container'>
        <Flashcard 
          question={questions[currentIndex]}
          answer={answers[currentIndex]}
        />
      </div>

      <div className="input-container" style={{visibility: isSmallAnswer? 'visible' : 'hidden'}}>
        <h2>Guess the answer</h2>
        
        <input type="text" value={userAnswer} onClick={handleTextClick} onChange={handleChange}/>
        
        <button className='submit-button' onClick={handleSubmit} style={{backgroundColor: buttonColor}}>
          Submit
        </button>
      </div>
      
      <div className='buttons-container'>
        <button className='previous-button' onClick={getPreviousQuestion} style={{visibility: isPrevious? 'visible' : 'hidden'}}>
          👈 Previous
        </button>
        
        <button className="next-button" onClick={getNextQuestion} style={{visibility: isNext? 'visible' : 'hidden'}}>
          Next 👉 
        </button>
        
        <button className='shuffle-cards-button' onClick={doShuffle} style={{backgroundColor: shuffleOn? 'burlywood' : 'blueviolet'}}>
          Shuffle Cards
        </button>
      </div>
    </div>
  )
}

export default App
