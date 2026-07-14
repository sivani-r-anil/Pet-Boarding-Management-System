import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewPets = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-pets").then(

            (response) => {
                changeData(response.data)
            }

        ).catch(

            (error) => {
                console.log(error)
            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#f340ba", textAlign: "center", fontFamily: "Poppins" }}>
                                🐾 VIEW PETS
                            </h2>

                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Booking ID</th>
                                        <th scope="col">Pet Name</th>
                                        <th scope="col">Pet Type</th>
                                        <th scope="col">Breed</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Weight(Kg)</th>
                                        <th scope="col">Vaccination Status</th>
                                        <th scope="col">Owner Name</th>
                                        <th scope="col">Owner Phone</th>
                                        <th scope="col">Owner Email</th>
                                        <th scope="col">Check-in Date</th>
                                        <th scope="col">Check-out Date</th>
                                        <th scope="col">Kennel Number</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {data.map(

                                        (data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.petType}</td>
                                                    <td>{data.breed}</td>
                                                    <td>{data.age}</td>
                                                    <td>{data.weight}</td>
                                                    <td>{data.vaccinationStatus}</td>
                                                    <td>{data.ownerName}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.checkinDate}</td>
                                                    <td>{data.checkoutDate}</td>
                                                    <td>{data.kennelNo}</td>

                                                </tr>
                                            )
                                        }

                                    )}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewPets