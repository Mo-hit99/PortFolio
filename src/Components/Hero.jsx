import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-container">
    <div className="center-container">
       <div className="heading-container">
      <h1 className="name-heading">👋Hello EveryBody My Name is Mohit,</h1>
       </div>
       <span className="first-text">{"I'm a"}</span>
       <ul className="sec-texts">
           <li><span>Frontend Developer.</span></li>
           <li><span>Full Stack Developer.</span></li>
           <li><span>UI/UX Designer.</span></li>
           <li><span>Zoho Crm.</span></li>
       </ul>
    <div className="container-btn">
        <NavLink to={'/'}>View My Work <i className="fa-solid fa-arrow-down"></i></NavLink>
      </div>
      <div className="socialapp-link">
      </div>
    </div>
    </div>
  )
}
