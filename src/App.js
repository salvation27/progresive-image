
import './App.css';
import MyImage from './MyImage';
import pic1 from './images/1.jpeg'
import pic2 from "./images/12.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Progresive Image</h1>
      <MyImage height = '200px' src={pic1} placeholderSrc={pic2} />
    </div>
  );
}

export default App;
