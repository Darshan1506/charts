import React from 'react';
import BarChart from './components/BarChart';
import './App.css';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
const App =()=> {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<BarChart/>}/>
      <Route path='/piechart' element={<PieChart/>}/>
      <Route path='/linechart' element={<LineChart/>}/>
      <Route path='/barchart' element={<BarChart/>}/>


      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
