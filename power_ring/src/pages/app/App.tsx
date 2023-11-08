import './App.css';
import { Main } from '../main/main';
import { About } from '../about/about';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
          <NavLink to='/'>Main</NavLink>
          <NavLink to='/About/'>About</NavLink>
          <NavLink to='/papaya/'>papaya</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route index element={<Main/>} />
            <Route path='/About/' element={<About/>} /> 
            <Route path ='/papaya' element ={ <>
              <div style={{
                width:'100vw',
                height:'100vh',
                background:'linear-gradient(216deg, rgba(36,0,1,1) 0%, rgba(68,5,5,1) 32%, rgba(73,121,9,0.44021358543417366) 57%, rgba(224,0,185,1) 77%, rgba(0,212,255,1) 100%)',
                marginTop: -20

              }} >

              </div>
            </>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
