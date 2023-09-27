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

  const navigate = useNavigate()

  const fetchData = () => {
    axios.get(`${url}/profiles`).then((res) => {
      console.log(res)
      setProfiles(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    const token = Cookies.get("jwt_token")
    if (!token) {
      navigate('/login')
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1>Profiles</h1>
      <div className='d-flex flex-wrap justify-content-center gap-4'>
        <div className='d-flex justify-content-center'>{
          profiles.map((each) => {
            const { imageData } = each
            return <div className="cards" key={each._id}>

              <div style={{ width: "250px" }}>
                <Carousel autoplay>
                  {imageData.map((eachImage) => {
                    return <div key={eachImage}>
                      <img src={`data:image/jpeg;base64,${eachImage}`} alt={each.imageName} style={imageStyle} />
                    </div>
                  })}

                </Carousel>
              </div>
              <p><b>Name :  </b>{each.name}</p>
              <p><b>Job :  </b>{each.occupation}</p>
              <button className="btn btn-success" >View & Edit Profile</button>
              <button className='btn btn-danger mt-2'>Delete</button>
            </div>
          })
        }</div>
        <Link to={'/addprofile'}><div className='add-profile'><Icon.PlusLg height={40} width={40} /><p>Add Profile</p></div></Link>
      </div>
    </div>
  )
}
