import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreateTask from './Screens/CreateTask';
import Task from './Screens/Task';
import EditTask from './Screens/EditTask';

function App() {
  return (
    <div className="container-fluid">
      <Routes>

        <Route path='/CreateTask' element={<CreateTask/>} />
        <Route path='/Task' element={<Task/>} />
        <Route path='/' element={<Task/>} />
        <Route path='/EditTask/:id' element={<EditTask/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
