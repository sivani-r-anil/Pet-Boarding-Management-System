import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{
                    background: "linear-gradient(to right, #FFB6C1, #FFD580)",
                    borderBottom: "4px solid #e7ac4e"
                }}
            >
                <div className="container">
                    <a
                        className="navbar-brand text-dark fw-bold fs-3"
                        href="#"
                        style={{
                            fontFamily: "'Fredoka', cursive",
                            letterSpacing: "1px"
                        }}
                    >
                        🐾 PET BOARDING MANAGEMENT
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link
                                className="nav-link fw-semibold mx-2"
                                style={{ color: "#6D4C41", fontFamily: "'Fredoka', cursive" }}
                                to="/"
                            >
                                🐶 Register Pet
                            </Link>

                            <Link
                                className="nav-link fw-semibold mx-2"
                                style={{ color: "#6D4C41", fontFamily: "'Fredoka', cursive" }}
                                to="/view"
                            >
                                🐾 View Pets
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar