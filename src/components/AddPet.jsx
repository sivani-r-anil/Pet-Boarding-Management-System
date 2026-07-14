import axios from 'axios'
import React, { useState } from 'react'

const AddPet = () => {

    const [input, changeInput] = useState(
        {
            id: "",
            name: "",
            petType: "",
            breed: "",
            age: "",
            weight: "",
            vaccinationStatus: "",
            ownerName: "",
            phone: "",
            email: "",
            checkinDate: "",
            checkoutDate: "",
            kennelNo: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-pet", input).then(

            (response) => {
                console.log(response.data)
                alert("Registered successfully")
            }

        ).catch(

            (error) => {
                console.log(error.response)
                alert("Failed to register")
            }
        )
    }

    return (
        <div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card shadow p-3">

                            <h2 style={{ color: "#f340ba", textAlign: "center", fontFamily: "cursive" }}>
                                🐾 REGISTER PETS
                            </h2>

                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Booking ID</label>
                                    <input type="text" className="form-control" name="id" value={input.id} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Pet Name</label>
                                    <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Pet Type</label>
                                    <select className="form-control" name="petType" value={input.petType} onChange={inputHandler}>
                                        <option value="select">Select pet Type</option>
                                        <option value="Dog">Cat</option>
                                        <option value="Cat">Dog</option>
                                        <option value="Rabbit">Rabbit</option>
                                        <option value="Bird">Bird</option>
                                        <option value="Other">Other</option>
                                    </select>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Breed</label>
                                    <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Age</label>
                                    <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Weight(Kg)</label>
                                    <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Vaccination Status</label>
                                    <select
                                        className="form-control" name="vaccinationStatus" value={input.vaccinationStatus} onChange={inputHandler} >
                                        <option value="Vaccinated"> Vaccinated</option>
                                        <option value="Not Vaccinated">Not Vaccinated</option>
                                        <option value="Vaccination Due">Vaccination Due</option>
                                        <option value="Not Required">Not Required</option>
                                    </select>

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Owner Name</label>
                                    <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Owner Email</label>
                                    <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Owner Phone</label>
                                    <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Check-in Date</label>
                                    <input type="date" className="form-control" name="checkinDate" value={input.checkinDate} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Check-out Date</label>
                                    <input type="date" className="form-control" name="checkoutDate" value={input.checkoutDate} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label className="form-label">Kennel Number</label>
                                    <input type="text" className="form-control" name="kennelNo" value={input.kennelNo} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-dark" onClick={readValue}>REGISTER PET</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPet