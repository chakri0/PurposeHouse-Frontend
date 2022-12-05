import React, { Component } from 'react';
import bc from '../layout/Images/i1.png';
import { Link } from 'react-router-dom';
import AppoinmentDashboard from '../appointment_ui/appoinmentDashboard';
import "./Home.css";
import "./Clients.css";

class Appointments extends Component {
    render() {
        return (
            <div className="container">
                <div id="navbar">
                    <div class="left-section">
                        <img src={bc} alt="pic" />
                    </div>
                    <div class="right-section">
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/clients">Clients</Link>
                            </li>
                            <li>
                                <Link to="/appointments">Appointments</Link>
                            </li>
                            <li>
                                <Link to="/">Reminders</Link>
                            </li>
                            <li>
                                <Link to="/">Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search">
                <input type="text" placeholder=' search client'/>
                </div>
                <div>
                <h5>councilor</h5>
                <p>you</p>
                <div className="create">
                    <Link to="/appointmentCreate">+Appointment</Link>
                </div>
                <AppoinmentDashboard/>
                </div>
            </div>
        )
    }
}

export default Appointments;