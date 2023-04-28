import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success")
    }
    const handleloClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success");
    }
    const handleClickClear = ()=>{
        let newText= ('');
        setText(newText);
        props.showAlert("Text cleared" , "success");
    }
    

    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    

    const [text , setText] = useState('');
    return (
        <>
        <div className="container" style={{color : props.mode==='dark' ? 'white' :'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'grey' :'white', color:props.mode==='dark'?'white' :'#042743'}} id="myBox" rows="8"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClickClear}>Clear Text</button>
        </div>
        <div className="container my-3"style={{color : props.mode==='dark' ? 'grey' :'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it"}</p>
        </div>
        </>
    )
}
