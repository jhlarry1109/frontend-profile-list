import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import ProfileLayout from './pages/ProfileLayout';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import ProfileModify from './components/ProfileModify';
import cardData from './data/cardData';

function App() {
  const [profiles, setProfiles] = useState(cardData)

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profiles' element={<ProfileLayout profiles={profiles} setProfiles={setProfiles}/>}>
            <Route path='list' element={<ProfileList />} />
            <Route path='new' element={<ProfileForm />} />
            <Route path='modify/:id' element={<ProfileModify />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;