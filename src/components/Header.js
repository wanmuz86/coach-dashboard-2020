import {
    Link
  } from "react-router-dom";

export default function Header() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark" style={styles.bgMain}>
        <div className="container">
        <Link to="/" className="navbar-brand">My Coach2U</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/" className="nav-link">Dashboard</Link>
               
                 </li>
            <li className="nav-item">
            <Link to="/coaches" className="nav-link">My Coach</Link>
            </li>
            <li className="nav-item">
            <Link to="/clients" className="nav-link">My Client</Link>
            </li>
            <li className="nav-item">
            <Link to="/gyms" className="nav-link">My Gym</Link>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add Content
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addCoachModal">Add Coach</a>
              <a className="dropdown-item" href="#">Add Gym</a>
              <a className="dropdown-item" href="#">Add Client</a>
          </div>
      </li>
  </ul>
</div>
</div>
</nav>
<header className="py-5 text-light bg-dark">
    <div className="container">
        <h1><i className ="fas fa-cogs"></i> MyCoach2U</h1>
    </div>
</header>
    </div>)
}

const styles = {
    bgMain : {
            backgroundColor: 'rgb(220,60,50)'
        
    }
}