import { useState } from "react";

function CheckBox(){
    const [skills, setSkills] = useState(["Java" , "PHP" , "Node", "Python" , "Javascript"])
    return (
        <div>
            <h1>Select Your Skills</h1>
            <input type="checkbox" id="php" />
            <label HTMLfor="php">PHP</label>
            <br/>
            
            <input type="checkbox" id="java" />
            <label HTMLfor="java">Java</label>

            <br/>

            <input type="checkbox" id="node" />
            <label HTMLfor="node">Node Js</label>

            <br/>

            <input type="checkbox" id="python" />
            <label HTMLfor="python">Python</label>
            
            <br/>
            <input type="checkbox" id="javaScript" />
            <label HTMLfor="javaScript">JavaScript</label>
        </div>
    )
}

export default CheckBox;