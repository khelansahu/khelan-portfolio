import React from 'react'
import './Services.css'
// import Services_Data from '../../assets/services_data'
import { FaArrowRight } from "react-icons/fa6";
const Services_Data = [
    {
        s_no:"01",
        s_name:"Web Development",
        s_desc:"I build responsive and interactive websites using HTML, CSS, JavaScript, Bootstrap, and React.js."
    },
    {
        s_no:"02",
        s_name:"Front-End Development",
        s_desc:"I specialize in creating clean, modern UIs using React.js, with smooth navigation, state management, and API integration."
    },
    {
        s_no:"03",
        s_name:"Back-End Integration",
        s_desc:"I can develop and connect back-end systems using Java, JDBC, and MySQL to create full-stack applications."
    },
    {
        s_no:"04",
        s_name:"Java Development",
        s_desc:"I develop robust applications using Core Java and J2EE technologies like Servlets, JSP, and JDBC with proper OOP design principles."
    },
    {
        s_no:"05",
        s_name:" Database Design & Management",
        s_desc:"I design relational databases, write complex SQL queries, and manage data securely using MySQL."
    },
    {
        s_no:"06",
        s_name:"Full-Stack Application Development",
        s_desc:"I create end-to-end web applications — from UI to database — using Java, React.js, SQL, and more."
    },
    {
        s_no:"07",
        s_name:"Bug Fixing & Code Optimization",
        s_desc:"I help identify and fix bugs, optimize existing code, and improve application performance."
    }
]
const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="services-container">
    {
        Services_Data.map((service,index)=>{
            return <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                {/* <div className="services-readmore">
                    <p>Read More </p>
                    <FaArrowRight/>
                    */}
                {/* </div> */}
            </div>
        })
    }
        </div>
    </div>
  )
}

export default Services