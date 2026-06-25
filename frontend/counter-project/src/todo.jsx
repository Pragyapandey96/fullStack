function ToDo() {
     function callFun(){
    alert("function called")
}
    return (
        <div>
            <h1>Pragya Pandey</h1>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ucAqGFVdC68ZnKRc49l8sozcYZL9ZBkQVHHX0MikXQ&s=10" 
            alt="pp"
            className="photo" />
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <button onClick={callFun}>click me</button>
        </div>
    )
}

export default ToDo;