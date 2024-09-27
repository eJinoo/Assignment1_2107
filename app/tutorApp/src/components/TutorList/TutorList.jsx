import React from 'react'
import TutorCard from '../TutorCard/TutorCard'
import './TutorList.css';

const TutorList = ({ TutorData }) => {
  return (
    <div className='tutor-list-container'>
        {
            TutorData.map((tutor, index) => {
                return <TutorCard tutor={tutor} key={index} />
            })
        }
    </div>
  )
}

export default TutorList