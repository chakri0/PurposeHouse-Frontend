import React, { Component } from 'react';
import bc from '../layout/Images/i1.png';
import { Link } from 'react-router-dom';
import "./Home.css";
import "./Clients.css";
import ClientDashboard from '../client_ui/clientDashboard';

class Clients extends Component {
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
                                <Link to="/">Appointments</Link>
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
                        <Link to="/clientCreate">+create</Link>
                    </div>

                    <ClientDashboard />
                </div>
            </div>
        )
    }
}

export default Clients;