import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import './styleSheets/alignments.css' 
import './styleSheets/custom.css'  
import './styleSheets/form-elements.css' 
import './styleSheets/sizes.css' 
import './styleSheets/theme.css' 
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile/Profile';
import Admin from './pages/Admin/Admin';
import TheatresForMovie from './pages/TheatresForMovie.jsx/TheatresForMovie';
import BookShow from './pages/BookShow/BookShow';


function App() {
  const {loading}=useSelector(state=>state.loaders)
  return (
    <>
    {loading ? (
      <div className='loader-parent'>
        <div className='loader'></div>
      </div>
    ) : null}

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path='/movie/:id' element={<ProtectedRoute><TheatresForMovie /></ProtectedRoute>} />
        <Route path='/book-show/:id' element={<ProtectedRoute><BookShow /></ProtectedRoute>} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
