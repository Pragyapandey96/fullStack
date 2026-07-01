import React from 'react'

const App = () => {
  const response = async() =>{

      await fetch('https://picsum.photos')
       console.log(response);
       
      }
  return (
    <div>
     <button onClick={response}>Fetch img</button>
    </div>
  )
}

export default App



      

              
