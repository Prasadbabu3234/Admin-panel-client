import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../url'
import axios from 'axios'

export default function Edit() {


    const [profile, setProfile] = useState({})
    const [address, setAddress] = useState({})
    const [images,setImages] = useState([])
    const [image1,setImage1] = useState("")
    const [image2,setImage2] = useState("")
    const [image3,setImage3] = useState("")

    const params = useParams()
    const { id } = params

    const handleImage1 = (e) => {

        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage1(reader.result)
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }

    const handleImage2 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage2(reader.result)
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }

    const handleImage3 = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImage3(reader.result)
        }
        reader.onerror = (err) => {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            ...profile,address,imageData:[image1,image2,image3]
        }
        axios.put(`${url}/update`,data).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))
    }

    const fetchData = () => {
        axios.get(`${url}/profile/${params.id}`).then((res) => {
            setProfile(res.data)
            setImage1(res.data.imageData[0])
            setImage2(res.data.imageData[1])
            setImage3(res.data.imageData[2])
            setAddress(res.data.address)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <div>
                <h1>Edit Profile</h1>
                <form className='form-add' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Date Of Birth</label>
                        <input type='date' className="form-control" required value={profile.DOB} onChange={(e) => setProfile({ ...profile, DOB: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Skin Color</label>
                        <input type="text" className="form-control" required value={profile.SkinColor} onChange={(e) => setProfile({ ...profile, SkinColor: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Weight</label>
                        <input className="form-control" required value={profile.Weight} onChange={(e) => setProfile({ ...profile, Weight: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Education</label>
                        <input type="text" className="form-control" required value={profile.education} onChange={(e) => setProfile({ ...profile, education: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Height</label>
                        <input className="form-control" required value={profile.height} onChange={(e) => setProfile({ ...profile, height: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Gender : </label>
                        <input type="radio" id='male' name='gender' checked={profile.gender === "Male"} required value={"Male"} onChange={(e) => setProfile({ ...profile, gender: e.target.value })} /> <label htmlFor='male'>Male</label>
                        <input type="radio" name='gender' id='female' checked={profile.gender === "Female"} required value={"Female"} onChange={(e) => setProfile({ ...profile, gender: e.target.value })} /><label htmlFor='female'>Female</label>
                    </div>
                    <div className="form-group">
                        <label>Occupation</label>
                        <input className="form-control" required value={profile.occupation} onChange={(e) => setProfile({ ...profile, occupation: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="text" className="form-control" required value={profile.salary} onChange={(e) => setProfile({ ...profile, salary: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Caste</label>
                        <input className="form-control" required value={profile.caste} onChange={(e) => setProfile({ ...profile, caste: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Mother Name</label>
                        <input type="text" className="form-control" required value={profile.motherName} onChange={(e) => setProfile({ ...profile, motherName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Father Name</label>
                        <input className="form-control" required value={profile.fatherName} onChange={(e) => setProfile({ ...profile, fatherName: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" className="form-control" required value={profile.mobile} onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Brothers</label>
                        <input className="form-control" required value={profile.brothers} onChange={(e) => setProfile({ ...profile, brothers: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Sisters</label>
                        <input type="text" className="form-control" required value={profile.sisters} onChange={(e) => setProfile({ ...profile, sisters: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Family Property</label>
                        <input className="form-control" required value={profile.familyProperty} onChange={(e) => setProfile({ ...profile, familyProperty: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Self Property</label>
                        <input type="text" className="form-control" required value={profile.selfProperty} onChange={(e) => setProfile({ ...profile, selfProperty: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Car</label>
                        <select required value={profile} onChange={(e) => setProfile({ ...profile, car: e.target.value })}>
                            <option disabled >Select</option>
                            <option value={true} checked={profile.car === "true" || profile.car === true}>Available</option>
                            <option value={false} checked={profile.car === "false" || profile.car === false}>Not available</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Requirement</label>
                        <input type='text' className="form-control" required value={profile.requirement} onChange={(e) => setProfile({ ...profile, requirement: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Marriage Status</label>
                        <input type="text" className="form-control" required value={profile.status} onChange={(e) => setProfile({ ...profile, status: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Image 1</label>
                        <img src={image1} alt="hello" />
                        <input className="form-control" type='file' required onChange={(e) => handleImage1(e)} />
                    </div>
                    <div className="form-group">
                        <label>Image 2</label>
                        <img src={image2} alt="hello" />
                        <input type="file" className="form-control" required onChange={(e) => handleImage2(e)} />
                    </div>
                    <div className="form-group">
                        <label>Image 3</label>
                        <img src={image3} alt="hello" />
                        <input type='file' className="form-control" required onChange={(e) => handleImage3(e)} />
                    </div>
                    <div className="form-group">
                        <label>Door No</label>
                        <input type='text' className="form-control" required value={address.doorNo} onChange={(e) => setAddress({ ...address, doorNo: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Street</label>
                        <input type='text' className="form-control" required value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Mandal</label>
                        <input type='text' className="form-control" required value={address.mandal} onChange={(e) => setAddress({ ...address, mandal: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type='text' className="form-control" required value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Pincode</label>
                        <input type='text' className="form-control" required value={address.pincode} onChange={(e) => setAddress({ ...address, pinode: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type='text' className="form-control" required value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type='text' className="form-control" required value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
                    </div>

                    <div className='d-flex justify-content-center'><input type={"submit"} className='btn btn-success' /></div>
                </form>
            </div>
        </div>
    )
}
