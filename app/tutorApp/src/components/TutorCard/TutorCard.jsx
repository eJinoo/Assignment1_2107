import React from 'react'
import { CCard, CCardImage, CCardBody, CCardText, CRow, CCol, CCardTitle } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';


const TutorCard = ({ tutor }) => {
    return (
        <div className='card-container'>
            
            <CCard className="mb-3" style={{ maxWidth: '540px' }}>
                <CRow className="g-0">
                    <CCol md={4}>
                    <CCardImage src={tutor.avatar} />
                    </CCol>
                    <CCol md={8}>
                    <CCardBody>
                        <CCardTitle>{tutor.first_name} {tutor.last_name}</CCardTitle>
                        <CCardText>
                        {tutor.email}
                        </CCardText>
                        <CCardText>
                        <small className="text-body-secondary">Subjects</small>
                        </CCardText>
                    </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
            
        </div>
        
    )
}

export default TutorCard