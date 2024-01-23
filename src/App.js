import './App.css';
import EmployeeForm from './pages/Accueil';
import ListEmployees from './pages/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<EmployeeForm />} />
          <Route path="/liste-employees" element={<ListEmployees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
