import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Team from './Pages/Team/Team.jsx';
import Contact from "./Pages/Contact/Contact.jsx";
import Voice from './Pages/Invoice/Voice.jsx';
import Form from './Pages/Form/Form.jsx';
import Calendar from './Pages/Calender/Calender.jsx';
import Fqa from './Pages/Fqa/Fqa.jsx';
import BarChart from './Pages/BarChart/BarChart.jsx'
import Geography from './Pages/Geography/Geography.jsx';
import NotFound from './Pages/Notfound/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Dashboard/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/voice' element={<Voice/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      <Route path='/faq' element={<Fqa/>}/>
      <Route path='/bar' element={<BarChart/>}/>
      <Route path='/geography' element={<Geography/>}/>

      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
