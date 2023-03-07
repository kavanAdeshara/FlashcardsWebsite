import { useCallback, useState } from 'react';
import './App.css'
import Flashcard from './components/Flashcard'

function App() {

  const [currentIndex, setNextIndex] = useState(0);

  const javaQuestions = [
    "What is the difference between an interface and an abstract class in Java?",
    "What is the difference between a static and a non-static method in Java?",
    "What is the difference between an ArrayList and a LinkedList in Java?",
    "What is the purpose of the 'final' keyword in Java?",
    "What is the 'this' keyword in Java and how is it used?",
    "What is the difference between a checked and an unchecked exception in Java?",
    "What is the purpose of the 'synchronized' keyword in Java?",
    "What is the difference between '==' and '.equals()' in Java?",
    "What is the difference between a HashMap and a TreeMap in Java?",
    "What is the purpose of the 'transient' keyword in Java?"
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
    "The 'transient' keyword is used to indicate that a variable should not be serialized when an object is serialized. It is used to exclude certain variables from the serialization process."
  ];

  const getNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * 10);
    setNextIndex(randomIndex);
  }

  return (
    <div className="App">
      <div class="website-title">
        <h1> Java Interview Flashcards </h1>
        <h3> Refine your skills for the upcoming internship interview for Java </h3>
        <h4> Total Number of Cards: {javaQuestions.length} </h4>
      </div>
      <div className='flashcard-container'>
        <Flashcard 
          question={javaQuestions[currentIndex]}
          answer={javaAnswers[currentIndex]}
        />
      </div>
      <button className="next-button" onClick={getNextQuestion}>
        Next ⏭️
      </button>
    </div>
  )
}

export default App
