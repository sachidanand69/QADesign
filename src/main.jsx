import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Stopwatch from './Component/StopWatch/StopWatch.jsx'
import {StoreContextProvider} from './Context/Context.jsx'
import SlideFilter from './Component/SliderFilter/SlideFilter.jsx'
import Layout from './Component/Layout/Layout.jsx'
import GetCompany from './Component/CompanyDetails/CompanyDetails.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Routes>
          <Route path='/QADesign/' element={<Layout/>}>
          <Route path='/QADesign/stopwatch' element={<Stopwatch/>}/>
          <Route path='/QADesign/slidefilter' element={<SlideFilter/>}/>
          <Route path='/QADesign/companydetails' element={<GetCompany/>}/>
          </Route>
       </Routes>
    </BrowserRouter>,
)
