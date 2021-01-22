export default function DashboardCard(){
    return (
        <div className="card bg-light">
                  <div className="card-body">
                    <h5>Disk Space used</h5>
                    <div className="progress">
                      <div className="progress-bar bg-dark" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                  </div>
                  <h5>Memory used</h5>
                  <div className="progress">
                      <div className="progress-bar bg-dark" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
    
              </div>
          </div>
    )
}