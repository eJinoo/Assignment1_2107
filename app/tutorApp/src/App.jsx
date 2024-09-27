import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import data from './assignmentData.json';
import TutorList from './components/TutorList/TutorList';
import { useState } from 'react';

function App() {

  const [TutorData, setTutorData] = useState(data[0].data);

  return (
    <div>
      {/* header*/}
      <Header />

      {/* Banner Component */}
      <Banner />

    {/* Tutor List */}

    <h1 className='tutor-banner'>Our Tutors</h1>

    <TutorList TutorData={TutorData} />
    </div>
  )
}

export default App
