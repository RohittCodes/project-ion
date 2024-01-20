import React, { useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import SnippetDisplay from "./snippet-display";

const SnippetSearch = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const [transcript, setTranscript] = useState("");

  const handleTranscript = (e) => {
    setValue(transcript);
    if (e.target.value === "") {
      setValue(transcript);
      setTranscript("");
    } else {
      setValue(e.target.value);
    }
  };

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en";
  recognition.onresult = function (event) {
    if (event.results.length > 0) {
      const result = event.results[0][0].transcript;

      // Set the transcript and update the value
      setValue(result);

      if (result === "Create a new product") {
        const utterance = new SpeechSynthesisUtterance("Create a new product");
        utterance.lang = "en";
        speechSynthesis.speak(utterance);
      } else {
        const utterance = new SpeechSynthesisUtterance(
          `I understood: ${result}`
        );
        utterance.lang = "en";
        speechSynthesis.speak(utterance);
      }
    }
  };

  function preprocessText(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 0);
  }

  function cosineSimilarity(vector1, vector2) {
    const dotProduct = vector1.reduce(
      (acc, val, i) => acc + val * vector2[i],
      0
    );
    const magnitude1 = Math.sqrt(
      vector1.reduce((acc, val) => acc + val ** 2, 0)
    );
    const magnitude2 = Math.sqrt(
      vector2.reduce((acc, val) => acc + val ** 2, 0)
    );

    return dotProduct / (magnitude1 * magnitude2);
  }

  const documentSimilarity = (doc1, doc2) => {
    const tokens1 = preprocessText(doc1);
    const tokens2 = preprocessText(doc2);

    // Create a set of unique terms from both documents
    const uniqueTerms = Array.from(new Set([...tokens1, ...tokens2]));

    // Create vectors for each document
    const vector1 = uniqueTerms.map((term) => (tokens1.includes(term) ? 1 : 0));
    const vector2 = uniqueTerms.map((term) => (tokens2.includes(term) ? 1 : 0));

    // Calculate cosine similarity
    return cosineSimilarity(vector1, vector2);
  };

  const handleSnippets = async () => {
    try {
      const response = await fetch("http://localhost:3001/codes");
      const data = await response.json();

      const updatedList = [];

      data.filter((each) => {
        let fetchedData = each.data;

        for (var i = 0; i < fetchedData.length; i++) {
          const similarity = documentSimilarity(fetchedData[i].title, value);
          if (similarity * 100 > 30) {
            updatedList.push(fetchedData[i]);
          }
        }
      });
      setList(updatedList);
      console.log("List Data", updatedList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex flex-col gap-2 h-full">
        <div className="w-full flex border-[3px] border-black rounded-full pr-2">
          <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => recognition.start()}
          >
            <FaMicrophone size={22} />
          </button>
          <div className="flex w-full h-12">
            <input
              type="text"
              onChange={handleTranscript}
              value={value}
              placeholder="Type your query or speak using mic..."
              className="w-full h-12 bg-transparent focus:outline-none border-none font-normal text-xl"
            />
          </div>
          <button
            className="w-12 h-12 flex items-center justify-center"
            onClick={() => handleSnippets()}
          >
            <FaSearch size={22} />
          </button>
        </div>
        <div className="h-fit flex flex-col border-2 rounded-md py-2 px-2 gap-2">
          {list.length > 0 ? (
            list.map((codes, index) => (
              <SnippetDisplay
                title={codes.title}
                by={codes.by}
                code={codes.key}
                key={index}
              />
            ))
          ) : (
            <p className="text-center">Nothing to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnippetSearch;
