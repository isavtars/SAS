import React,{useEffect} from 'react'
import api from "../service/api"
const About = () => {
  useEffect(() => {
   const apiget=async()=>{
const response=await api.get("/admin/getjwt",{
    headers:{
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjk3YmNiMjUwYzdjMjc2YmU0YzBlMyIsImlzQWRtaW4iOnRydWUsIk5hbWUiOiJhdnRhciIsImlhdCI6MTY2MzY2Njk4MywiZXhwIjoxNjY0MjcxNzgzfQ.3fJLXLtMGegLIclx0GcsaJCmWwJFS1CiZ1tXvBJQJWk",
    }
    
})
console.log(response.data)
   }
   apiget()
  }, [])
  
    return (
    <div>About</div>
  )
}

export default About