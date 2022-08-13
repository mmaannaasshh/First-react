import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)

    }
    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)

    }
    const handleClClick=()=>{
        let newtext='';
       setText(newtext)

    }
    const spaceRemove=()=>{
        let newtext=text.split(/[ ]+/)
       setText(newtext.join(' '))

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text');
    // setText=("hello now enter your text")
    return (
        <>
        <div className='container'>

            <div className="mb-3">
                <h1> {props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange } id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClClick}>clearText</button>
            <button className="btn btn-primary mx-2" onClick={spaceRemove}>Remove extra spaces</button>




        </div>
        <div className="container my-3">
            <h1>Your text sumary</h1>
            <p> {text.split(" ").length} word,{text.length} characters</p>
            <p>Avg reading time to read avobe text =[  {0.08*text.split(' ').length} ]  </p>
            <h1>previrew</h1>
            <p>{text} </p>
            
        </div>
        </>
    )
}
