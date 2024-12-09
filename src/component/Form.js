import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        comment:"",
        isVisible:false,
        mode:""
    });

    const changeHandler = (event) =>{
        
        const {name, value, type, checked} = event.target;
        console.log("Name=",name);
        console.log("Value=",value);
        setFormData((data)=>({
            ...data,
            [name]:type==="checkbox" ? checked:value
        }))
    }
console.log(formData)
  return (
    <>
        <h1>Jai Shree Ram</h1>
        <br></br> 

        <form>
            <label id="name">Name </label>
            <input id="name"
                type="text" 
                name='firstName' 
                placeholder="Enter Name" 
                onChange={changeHandler} 
                value={formData.firstName}
            />

            

            <label id='lastname'></label>
            <input label='lastname' 
                type='text' 
                name='lastName' 
                onChange={changeHandler} 
                value={formData.lastName}>
            </input>
            <br/>
            <textarea
                name='comment'
                placeholder='Enter your comment here'
                onChange={changeHandler}
                value={formData.comment}
            />
            <br/>
            <br/>
            <input
                type='checkbox'
                onChange={changeHandler}
                name='isVisible'
                checked={formData.isVisible}
                id='isVisible'
            />
            <label htmlFor='isVisible'>Is it visible??</label>

            <br/>
            <br/>
            <input
                type='radio'
                name='mode'
                value="Online-mode"
                id='Online-mode'
                onChange={changeHandler}
                checked={formData.mode === "Online-mode"}
            />
            <label htmlFor='Online-mode'>Change Mode</label>

            <input
                type='radio'
                name='mode'
                value="offline-mode"
                id='offline-mode'
                onChange={changeHandler}
                checked={formData.mode === "Offline-mode"}
            />
            <label htmlFor='offline-mode'>offline Mode</label>
            
        </form>
    </>
  ) 
}

export default Form