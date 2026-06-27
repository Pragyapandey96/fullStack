import CheckBox from "./checkBox";
import ToDo from "./todo";
function App() {
  let path = "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg"
 
  return (
    <div>
      {/* <ToDo />
      <img src={path}  /> */}
      <CheckBox />
    </div>
    
  );

}
export default App;