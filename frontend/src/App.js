import React from 'react'
import { Students } from './components/index.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="app">
      <Students />
      <ToastContainer 
        newestOnTop 
        autoClose={5000}
        position='top-right'
        draggable={false}
        hideProgressBar={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default App;
