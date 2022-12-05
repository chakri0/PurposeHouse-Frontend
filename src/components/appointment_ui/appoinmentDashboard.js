import React from 'react';
import '../style/clientDashboard.css'

const AppoinmentDashboard = () => {

        
    return(
        <>
            <div className='main-card'>
                <div>
                    <h1> Session with Nikhil</h1>
                </div>

                <div className='client-dashboard-buttons'>
                    <button className='client-btn'>
                        Create Feedback
                    </button>
                </div>
            </div>
        </>
    )
}

export default AppoinmentDashboard;