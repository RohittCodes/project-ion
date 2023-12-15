import { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AddProgramPage = () =>{

    const [cmd,setCmd] = useState('')
    const [code,setCode] = useState('')
    const [info,setInfo] = useState('')
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [data,setData] = useState([])
      
    const startListening = () => {
        SpeechRecognition.startListening();
    };
    
    const stopListening = () => {
        SpeechRecognition.stopListening();
    };  



    const submitForm = async(e) =>{
        e.preventDefault()
        const data = {
            'Command':cmd,
            'Code':code,
            'About':info
        }
        console.log(data)
        let url = "http://localhost:3001/addProgram";
        let requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };
        console.log(data)
        const res = await fetch(url, requestOptions);
        
        const data1 = await res.json();
        console.log(data1)
        if(res.ok){
            alert(data1)
        }
    }

    const SearchCodes = async() =>{
            const url = 'http://localhost:3001/getProgram'
            const res = await fetch(url)
            const data =await res.json()
            console.log(data)
            let list = []

            setData(data)
            data.filter(each =>{
                const similarity = documentSimilarity(each.data.About, transcript);
                if(similarity*100 > 30){
                    list.push(each)
                }
                
            })
            console.log(list)
    }

    const changeCmd = (e) =>{
        setCmd(e.target.value)
    }

    const changeCode = e =>{
        setCode(e.target.value)
    }
    const changeInfo =e =>{
        setInfo(e.target.value)
    }











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


      






    return(
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <h1 style={{color:'white',fontSize:'30px',textAlign:'center'}} className="mb-5 mt-3">Add Program</h1>
            <form style={{borderWidth:'1px',width:'50%',alignSelf:'center'}} className="p-5 " onSubmit={submitForm}>
                <label className="form-label mt-3 mb-1" style={{color:'white',fontSize:'18px'}}>COMMEND</label>
                <input type="text" className="form-control" style={{fontWeight:'bolder'}} onChange={changeCmd} />
                <label className="form-label mt-3 mb-1" style={{color:'white',fontSize:'18px'}}>CODE</label>
                <textarea type="text" className="form-control" rows={20} style={{backgroundColor:'black',color:'white'}} onChange={changeCode} />
                <label className="form-label mt-3 mb-1" style={{color:'white',fontSize:'18px'}}>ABOUT CODE</label>
                <textarea type="text" className="form-control" rows={5}  style={{fontWeight:'bolder'}} onChange={changeInfo}/>
                <div style={{textAlign:'center'}}>
                    <button type="submit" className="btn btn-primary mt-3" style={{width:'50%',backgroundColor:'gray'}}>Save</button>
                </div>
                <button type="button" className="btn btn-success mt-3 ml-5 mr-5" style={{width:'40%'}} onClick={startListening}>Start</button>
                <button type="button" className="btn btn-success mt-3 ml-5" style={{width:'40%'}} onClick={SearchCodes}>Search</button>
                    
                <p style={{color:'white'}}>{transcript}</p>
                
            </form>
            <div>
                    
                </div>
        </div>
    )
}

export default AddProgramPage