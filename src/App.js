import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Header/Navigation';
import AdminLogin from './Components/Pages/Admin/AdminLogin';
// import AdminSignup from './Components/Pages/Admin/AdminSignup';
import Footer from './Components/Footer/Footer';
import Admin from './Components/Pages/Admin/Admin';
import ManageMember from './Components/Pages/Admin/AdminPanel/ManageMember';
import ManageNGO from './Components/Pages/Admin/AdminPanel/ManageNGO';
import ViewMedicines from './Components/Pages/Admin/AdminPanel/ViewMedicines';
import NGOrequest from './Components/Pages/NGO/NGOrequest';
import Members from './Components/Pages/Members/Members';
import MemberLogin from './Components/Pages/Members/MemberLogin';
import DonorDashboard from './Components/Pages/Members/DonorDashboard';
import RequestedMedicine from './Components/Pages/Admin/AdminPanel/RequestedMedicine';
import DoctorChatbot from './Components/DoctorChatbot';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Header/>}/>
          <Route exact path='/admin-login' element={<AdminLogin/>} />
          {/* <Route exact path='/admin-signup' element={<AdminSignup/>}/> */}
          <Route exact path='/admin-dashboard' element={<Admin/>}/>
          <Route exact path='/manage-member' element={<ManageMember/>}/>
          <Route exact path='/manage-ngo' element={<ManageNGO/>}/>
          <Route exact path='/view-medicines' element={<ViewMedicines/>}/>
          <Route exact path='/request-ngo' element={<NGOrequest/>}/>
          <Route exact path='/donor-registration' element={<Members/>}/>
          <Route exact path='/donor-login' element={<MemberLogin/>}/>
          <Route exact path='/donor-dashboard' element={<DonorDashboard/>}/>
          <Route exact path='/requested-medicine' element={<RequestedMedicine/>}/>
          <Route exact path='/chatbot' element={<DoctorChatbot/>}/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
