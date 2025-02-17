import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Routes , Route ,BrowserRouter} from "react-router-dom"
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import Edit from './components/Edit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>       
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/edit/:userid' element={<Edit></Edit>}></Route>
        </Routes>
       </BrowserRouter>
  </StrictMode>,
)