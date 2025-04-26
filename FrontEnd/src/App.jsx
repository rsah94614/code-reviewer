import { useState, useEffect } from 'react';
import './App.css'
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css"
import Markdown from "react-markdown"
import axios from "axios"
import prism from "prismjs";

function App() {
  const [code, setCode] = useState(`function sum(){
    return 1+1
    }`)
  
  const [review, setReview] = useState(``)  

  useEffect(()=>{
    prism.highlightAll();
  },[])

  async function reviewCode(){
  try{
    const response = await axios.post("http://localhost:3000/ai/get-review",{code})
    setReview(response.data) 
  }catch(error){
    console.error(error)
  }
  }
  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code =>setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript,"javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #000",
              borderRadius:"5px",
              height:"100%",
              width:"100%"
            }}
          />
          <div 
          onClick={reviewCode}
          className="review">Review</div>
        </div>
      </div>
      <div className="right">
      <Markdown
      style={{
        fontSize:16
      }}>
        {review}
      </Markdown>
      </div>
    </main>
    </>
  )
}

export default App
