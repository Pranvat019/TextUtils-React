import React,{useState} from 'react'



export default function Form(props) {

  const handleUpClick =() =>{
    console.log("UpperCase was clicked: "+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
    document.title='TextUtils-ToUpperCase'
  }
  const handleLoClick =() =>{
    console.log("UpperCase was clicked: "+text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    document.title='TextUtils-ToLowerCase'
  }
  const handleOnChange = (event)=>{
      console.log("On Change");
      setText(event.target.value)
  }
  const handleOnClear =() =>{
    console.log("On clear");
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success");
    document.title='TextUtils-Clear Text'
  }
  // const handleOnColour =(fontcolor) =>{
  //   console.log("On Colour Change");
  //   let newText =text.color:'green';
  //   setText(newText)
  // }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    document.title='TextUtils-Speak'
  }

  const [text,setText] = useState("Enter the text here");
  // const { speak, voices } = new SpeechSynthesisUtterance();
 
  return (
    <>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleOnClear}>Clear Text</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={speak}>Speak</button>

        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.008*(text.trim() === '' ? 0 : text.match(/\S+/g).length)} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
    </>
  )
}
