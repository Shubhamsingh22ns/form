import React from "react";

function NewShubham (props){

    const [title, setTitle] = React.useState("");
    const [date, setDate] = React.useState("");

    function titleHandler(event){
        setTitle(event.target.value);
        console.log(title);
    }

    function dateHandler(event){
        setDate(event.target.value);
        console.log(date);
    }
function submitHandler(event){
    event.preventDefault();
    console.log(`Title: ${title}, Date: ${date}`);
    const data = [
        {
            titleName: title,
            ProductDate: date
        }
    ]
    console.log("i'm inside children")
    console.log(data);
    props.onChild(data);
    setDate("")
    setTitle(" ");
}
    return (
        <div>
            <h1>Hello, Shubham!</h1>
            <p>This is a new component created by Shubham.</p>
            <form  onSubmit={submitHandler}>
                <div class="Title" >

                    <lable>Title</lable>
                    <input type="text" value= {title} onChange={titleHandler}/>

                </div>

                <div class = "date">
                    <label>Date</label>
                    <input type="date" value = {date}onChange={dateHandler}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewShubham;