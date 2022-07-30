import React from "react";


export default function Age(){ 
    const [age, setAge] = React.useState(0)
    function increase(){
        setAge(prevState => prevState - 1)
    }

    function decrease(){
        setAge(prevState => prevState + 1)
    }

    const yourAge = new Date();
    const dob = yourAge.getFullYear() - age;

    return(
        <div className="container"> 
          <div className="age-div">
            {/* <p>You are {age} {age > 1 && "years old"} year old</p> */}
            {<p>You are {age} 
              {age > 1 ? " years old" : " year old"}
            </p>
            }
            {<p> {age < 0 ? " You will be born in year"  : "You were born in year"} {dob}</p>}
          </div>
          <div className="counter-div"> 
            <button className="add" onClick={increase}>-</button>
            <h1 className="number">{age}</h1>
            <button className="subtract" onClick={decrease}>+</button>
        </div>   
         </div>
    )
}