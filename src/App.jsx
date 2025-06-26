
// import './styles';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import Header from './components/Header/Header';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
const App = () =>
{
  return (
    <div >
            <Router>
              <Header />
              <Routes>
                
               <Route path="/HomePage" element={<HomePage/>}/>
              
              <Route path="/AboutPage" element={<AboutPage/>}/>

              <Route path="/CoursesPage" element={<CoursesPage/>}/>
              <Route path="/ContactPage" element={<ContactPage/>} />
              <Route path="/AdmissionPage" element={<AdmissionPage/>}/>

              </Routes>
              <ChatbotComponent/>
            </Router>
      


    </div>
  )
}
 export default App;