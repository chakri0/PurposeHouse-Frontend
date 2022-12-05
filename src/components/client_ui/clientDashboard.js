import React, { useEffect, useState } from 'react';
import '../style/clientDashboard.css';
import '../dashboard/CardData.css'
import axios from 'axios';

const ClientDashboard = () => {

    const [ councilorsData, setCounsilersData ] = useState([])
    let access_token = sessionStorage.getItem('access_token');

    useEffect(() => {
        async function getClients(){
            axios.get('/councilor/client', { headers: {"Authorization" : `Bearer ${access_token}`} })
            .then(res => {
                if(res.status === 200){
                    setCounsilersData(res.data)
                }
            })
        }
        getClients();
    },[])
console.log("councilorsData",councilorsData)
    return(
        <>
            

            {councilorsData.map(client => {
                return(
                    <div className='main-card'>
                <div>
                    <h1> {client.title}</h1>
                </div>

                <div className='client-dashboard-buttons'>
                    <button className='client-btn'>
                        Update
                    </button>

                    <button className='client-btn'>
                        Delete
                    </button>
                </div>
            </div>
                )
            })}
                <div>

                    <div className="client_details">
                        <h5>Appointments you had 3-5 days ago...</h5>
                        <div className="client_column">
                            <div className="client_data">
                                <p className="name">name check</p>
                                <div>
                                    <p className="day">name day,</p>
                                    <p className="date">name date</p>
                                </div>
                                <p className="time">date time</p>
                            </div>
                        </div>
                        <div className="footer_section">See more...</div>
                    </div>
                </div>
        </>
    )
}

export default ClientDashboard;