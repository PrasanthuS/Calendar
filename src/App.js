import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import LoginComponent from './Component/LoginComponent';
import CalendarListComponent from './Component/CalendarList';
function App() {
  return (
    <Router >
      <Routes>
        {/* <Route path="/" exact element={<LoginComponent/>}></Route> */}
        <Route path="/" exact element={<CalendarListComponent/>}></Route>
      </Routes>
    </Router >

  );
}

export default App;
