import React from "react";

const PageNotFound = () => {
  // Simple LSA-inspired plagiarism detection in JavaScript

// Function to tokenize and preprocess text
function preprocessText(text) {
  return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 0);
}

// Function to calculate the cosine similarity between two vectors
function cosineSimilarity(vector1, vector2) {
  const dotProduct = vector1.reduce((acc, val, i) => acc + val * vector2[i], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((acc, val) => acc + val ** 2, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((acc, val) => acc + val ** 2, 0));

  return dotProduct / (magnitude1 * magnitude2);
}

// Function to calculate the document similarity
function documentSimilarity(doc1, doc2) {
  const tokens1 = preprocessText(doc1);
  const tokens2 = preprocessText(doc2);

  // Create a set of unique terms from both documents
  const uniqueTerms = Array.from(new Set([...tokens1, ...tokens2]));

  // Create vectors for each document
  const vector1 = uniqueTerms.map(term => tokens1.includes(term) ? 1 : 0);
  const vector2 = uniqueTerms.map(term => tokens2.includes(term) ? 1 : 0);

  // Calculate cosine similarity
  return cosineSimilarity(vector1, vector2);
}

// Example usage
const document1 = "React.js, commonly known as React, is an open-source JavaScript library developed by Facebook. It is widely used for building user interfaces, especially for single-page applications where the content is dynamically updated as the user interacts with the application. React is often employed in combination with other libraries or frameworks and follows the principles of declarative programming. ";
const document2 = "React.js, popularly referred to as React, stands out as an open-source JavaScript library crafted by Facebook. Its predominant usage lies in the construction of user interfaces, particularly within the realm of single-page applications where dynamic content updates seamlessly accompany user interactions. React is frequently paired with various libraries or frameworks, and it adheres steadfastly to the principles of declarative programming. This approach streamlines the development process by allowing developers to articulate the desired outcome without getting bogged down in specifying the procedural steps."

const documents = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 4,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id:7,
    text:"Hai ima uday."
  }
];


// let check = documents.filter(each =>(
//   documentSimilarity(each.text,document1)*100 >30 
// ))
// console.log(check)
const similarity = documentSimilarity(document1, document2);
console.log(`Similarity between documents: ${similarity*100}`);
};

export default PageNotFound;

// import React, { useState } from 'react';

// function PageNotFound() {
//   const [isListening, setIsListening] = useState(false);
//   const [transcription, setTranscription] = useState('');

//   let recognition;

//   const initRecognition = () => {
//     recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US';

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const result = event.results[0][0].transcript;
//       setTranscription(result);
//       console.log(result)
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.onerror = (event) => {
//       console.error('Speech recognition error:', event.error);
//       setIsListening(false);
//     };
//   };

//   const toggleRecognition = () => {
//     if (!recognition) {
//       initRecognition();
//     }

//     if (isListening) {
//       recognition.stop();
//     } else {
//       recognition.start();
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Speech to Text</h1>
//       <button style={{backgroundColor:'white'}} onClick={toggleRecognition}>
//         {isListening ? 'Stop Speech Recognition' : 'Start Speech Recognition'}
//       </button>
//       <p style={{color:'white'}}>{transcription}</p>
//     </div>
//   );
// }

// export default PageNotFound;
