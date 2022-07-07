import './App.css';
import React from 'react';
import Navbar from './components/Layout/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Owners from './pages/Owners/Index';
import Pets from './pages/Pets/Index';
import Owner from './pages/Owners/Details';
import { Container } from '@mui/material';
import EditPet from './pages/Pets/Edit';
import AddPet from './pages/Pets/Add';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container sx={{mt:'50px', mb:'20px'}}>
          <Routes>
            <Route path='/pets' element={<Pets />} />
            <Route path='/owners' element={<Owners />} />
            <Route path='/owners/:id' element={<Owner />} />
            <Route path='/pets/add' element={<AddPet />} />
            <Route path='/pets/:id/edit' element={<EditPet />} />
            <Route path='/' element={<Owners />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
