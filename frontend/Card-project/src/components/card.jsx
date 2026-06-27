function Card(props){
  
    
    return (
        <div className="parent">
            <img src={props.img} alt="" />
             <h1>{props.user}</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
             <button>view Profile</button>
        </div>
    )
}

export default Card;