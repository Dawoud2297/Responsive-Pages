import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import SearchHotelsForm from './SearchHotelsForm';
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <SearchHotelsForm/>
    </div>
  );
}

export default App;
