import Header from "./header";
function App() {
  
  return (
    <div>
      <Header />
      <h1>Hello React</h1>
      <Fruit />

    </div>
    
  );
}
function Fruit() {
  return (
    <h1>Apple</h1>
  )
}

export default App