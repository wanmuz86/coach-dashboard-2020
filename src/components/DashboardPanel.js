export default function DashboardPanel(){
    return (
        <div className="card mb-3">
        <div className="card-header text-light" style={styles.bgMain}>
          Dashboard
      </div>
      <ul className="list-group list-group-flush">
          <li className="list-group-item">My Coach <span className="badge badge-secondary float-right m-2">100</span></li>
          <li className="list-group-item">My Client <span className="badge badge-secondary float-right m-2">350</span></li>
          <li className="list-group-item">My Gym <span className="badge badge-secondary float-right m-2">23</span></li>
      </ul>
  </div>
    )
}

const styles = {
    bgMain : {
            backgroundColor: 'rgb(220,60,50)'
        
    }
}