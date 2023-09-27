import React, { useState } from 'react'
import './AddProfile.css'

export default function AddProfile() {

    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [skin, setSkin] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [gender, setGender] = useState('')
    const [occupation, setOccupation] = useState('')
    const [salary, setSalary] = useState('')
    const [education, setEducation] = useState('')
    const [caste, setCaste] = useState('')
    const [mother, setMother] = useState('')
    const [father, setFather] = useState('')
    const [brothers, setBrothers] = useState('')
    const [sisters, setSisters] = useState('')
    const [mobile, setMobile] = useState('')
    const [familyProperty, setFamilyProperty] = useState('')
    const [selfProperty, setSelfProperty] = useState('')
    const [requirement, setRequirement] = useState("")
    const [marriageStatus, setMarriageStatus] = useState("")
    const [car, setCar] = useState("")
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [doorNo, setDoorNo] = useState('')
    const [street, setStreet] = useState('')
    const [mandal, setMandal] = useState('')
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImages] = useState([])


    const handleImage1 = (e) => {
        // console.log(e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImages([...image, reader.result])
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }
    console.log(image)

    const handleImage2 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImages([...image, reader.result])
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }

    const handleImage3 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            console.log(reader.result)
            setImages([...image, reader.result])
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name,
            skin,
            gender, dob, car
        }
        console.log(data)
    }




    return (
        <div>
            <h1>Add Profile</h1>
            <form className='form-add' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type='date' className="form-control" required onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Skin Color</label>
                    <input type="text" className="form-control" required onChange={(e) => setSkin(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input className="form-control" required onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Education</label>
                    <input type="text" className="form-control" required onChange={(e) => setEducation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Height</label>
                    <input className="form-control" required onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Gender : </label>
                    <input type="radio" id='male' name='gender' value={"Male"} required onChange={(e) => setGender(e.target.value)} /> <label htmlFor='male'>Male</label>
                    <input type="radio" name='gender' id='female' value={"Female"} required onChange={(e) => setGender(e.target.value)} /><label htmlFor='female'>Female</label>
                </div>
                <div className="form-group">
                    <label>Occupation</label>
                    <input className="form-control" required onChange={(e) => setOccupation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" className="form-control" required onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Caste</label>
                    <input className="form-control" required onChange={(e) => setCaste(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mother Name</label>
                    <input type="text" className="form-control" required onChange={(e) => setMother(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Father Name</label>
                    <input className="form-control" required onChange={(e) => setFather(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" className="form-control" required onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Brothers</label>
                    <input className="form-control" required onChange={(e) => setBrothers(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Sisters</label>
                    <input type="text" className="form-control" required onChange={(e) => setSisters(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Family Property</label>
                    <input className="form-control" required onChange={(e) => setFamilyProperty(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Self Property</label>
                    <input type="text" className="form-control" required onChange={(e) => setSelfProperty(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Car</label>
                    <select required onChange={(e) => setCar(e.target.value)}>
                        <option disabled >Select</option>
                        <option value={true}>Available</option>
                        <option value={false}>Not available</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Requirement</label>
                    <input type='text' className="form-control" required onChange={(e) => setRequirement(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Marriage Status</label>
                    <input type="text" className="form-control" required onChange={(e) => setMarriageStatus(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image 1</label>
                    <input className="form-control" type='file' required onChange={(e) => handleImage1(e)} />
                </div>
                <div className="form-group">
                    <label>Image 2</label>
                    <input type="file" className="form-control" required onChange={(e) => handleImage2(e)} />
                </div>
                <div className="form-group">
                    <label>Image 3</label>
                    <input type='file' className="form-control" required onChange={(e) => handleImage3(e)} />
                </div>
                <div className="form-group">
                    <label>Door No</label>
                    <input type='text' className="form-control" required onChange={(e) => setDoorNo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Street</label>
                    <input type='text' className="form-control" required onChange={(e) => setStreet(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mandal</label>
                    <input type='text' className="form-control" required onChange={(e) => setMandal(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type='text' className="form-control" required onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Pincode</label>
                    <input type='text' className="form-control" required onChange={(e) => setPincode(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type='text' className="form-control" required onChange={(e) => setState(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <input type='text' className="form-control" required onChange={(e) => setCountry(e.target.value)} />
                </div>


                <div className='d-flex justify-content-center'><input type={"submit"} className='btn btn-success' /></div>
            </form>
        </div>
    )
}
