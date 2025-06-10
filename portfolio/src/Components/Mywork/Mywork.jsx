import React from 'react'
import './Mywork.css'
import p from '../../assets/p1.png'
import p1 from '../../assets/p2.png'
import p2 from '../../assets/p3.png'

const work_data=[
    {
        w_no:1,
        w_img:p,
        w_link:"https://github.com/khelansahu/EmployeeManagmentSystem",
        name:"Employee Management System"
    },
    {
        w_no:2,
        w_img:p2,
        w_link:"https://stunning-buttercream-124dc8.netlify.app/",
        name:"Netflix Responsive Clone"
    },
    {
         w_no:3,
        w_img:p1,
        w_link:"https://khelansahu.github.io/OLA_clone/",
        name:"OLA Website Clone"

    }
]
const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
        </div>
        <div className="mywork-container">
            {
                work_data.map((work,index)=>{
                    return <div key={index}>
                       <a href={work.w_link}><img  src={work.w_img}/></a> 
                        {/* <a href={work.w_link}>View Work</a> */}
                        <p><span>{work.w_no}.</span> {work.name}</p>
                    </div> 
                })
            }
        </div>
        
    </div>
  )
}

export default Mywork