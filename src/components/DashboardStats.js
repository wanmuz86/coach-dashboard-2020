export default function DashboardStats(){
    return (
        <div className="card mb-3">
        <div className="card-header text-light " style={styles.bgMain}>
            Statistics
        </div>
        <div className="card-body text-center">
         <div className="row">
             <div className="col-3">
                <div className="card bg-light">
                  <div className="card-body">
                    <h2><i className="fas fa-dumbbell"></i></h2>
                    <h2>100</h2>
                    <p>Gyms</p>
                </div>

            </div>
        </div>
        <div className="col-3">
            <div className="card bg-light">
              <div className="card-body">
               <h2><i className="fas fa-dollar-sign"></i></h2>
               <h2>$ 1000</h2>
               <p>Income</p>
           </div>

       </div>

   </div>
   <div className="col-3">
    <div className="card bg-light">
      <div className="card-body">
          <h2><i className="fas fa-users"></i></h2>
          <h2>1000</h2>
          <p>Registered User</p>
      </div>

  </div>

</div>
<div className="col-3">
    <div className="card bg-light">
      <div className="card-body">
          <h2><i className="fas fa-user"></i></h2>
          <h2>80</h2>
          <p>Trainers</p>
      </div>

  </div>

</div>
</div>
</div>
</div>
    )
}
const styles = {
    bgMain : {
            backgroundColor: 'rgb(220,60,50)'
        
    }
}