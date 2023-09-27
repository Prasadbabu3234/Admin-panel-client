import axios from 'axios'
import './Profiles.css'
import Cookies from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../../url'
import { Carousel } from 'antd'
import * as Icon from 'react-bootstrap-icons'

const imageStyle = {
  height: '300px',
  width: "100%",
  color: '#fff',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: '#364d79',
  borderRadius: "20px"
}

export default function Profiles() {

  const [profiles, setProfiles] = useState([])
  const [success, setSuccess] = useState("")
  
  const [accesstoken, setAccessToken] = useState("")

  const navigate = useNavigate()

  const fetchData = () => {
    axios.get(`${url}/profiles`).then((res) => {
      setProfiles(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleDelete = (id) => {
    axios.delete(`${url}/delete/${id}`).then((res) => {
      console.log(res)
      if (res.data.acknowledged) {
        setSuccess("deleted successfully")
        setTimeout(() => {
          setSuccess("")
        }, 2000);
        navigate('/profiles')
      }
    })
  }


  useEffect(() => {
    const token = Cookies.get("jwt_token")
    setAccessToken(token)
    if (!token) {
      navigate('/login')
    }
    fetchData();
  }, [])

  return (
    <div>
      <nav className='admin-navbar'>
        <h1>Admin Panel</h1>
        <div className='d-flex gap-5'>
          <Link to={'/'} style={{ textDecoration: "none" }}> <span>Home</span></Link>
          <Link to={'/profiles'} style={{ textDecoration: "none" }}> <span>Profiles</span></Link>
          {accesstoken === "" ? <Link to={'/login'} style={{ textDecoration: "none" }} > <span>Login</span></Link> : <button className='btn btn-danger' onClick={() => {
            Cookies.remove("jwt_token")
            setAccessToken("")
            navigate('/')
          }}>Logout</button>}
        </div>
      </nav>
      <h1>Profiles</h1>
      <div className='d-flex flex-wrap justify-content-center gap-4'>
        <div>{success.length > 0 && <span>{success}</span>}</div>
        <div className='d-flex flex-wrap gap-5 justify-content-center'>{
          profiles.map((each) => {
            const { imageData } = each
            return <div className="cards" key={each._id}>
              {!imageData ? <p>No Images</p> : <div style={{ width: "250px" }}>
                <Carousel autoplay>
                  {imageData.map((eachImage) => {
                    return <div key={eachImage}>
                      <img src={eachImage} alt={each.imageName} style={imageStyle} />
                    </div>
                  })}

                </Carousel>
              </div>}

              <p><b>Name :  </b>{each.name}</p>
              <p><b>Job :  </b>{each.occupation}</p>
              <button className="btn btn-success" onClick={() => navigate(`/edit/${each._id}`)}>View & Edit Profile</button>
              <button className='btn btn-danger mt-2' onClick={() => handleDelete(each._id)}>Delete</button>
            </div>
          })
        }</div>
        <div className='add-profile' onClick={() => navigate('/addprofile')}><Icon.PlusLg height={40} width={40} /><p>Add Profile</p></div>
      </div>
    </div>
  )
}
