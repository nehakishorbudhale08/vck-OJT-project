
// import './styles';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import Header from './components/Header/Header';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import { useState } from 'react';
const App = () =>
{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Neha kishor Budhale"
          studentPhotoUrl="/images/neha3.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

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