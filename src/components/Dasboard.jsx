import React, { useState } from 'react'

import FirebaseTable from './FirebaseTable'

const Dasboard = () => {

    



    return (
        <>
          <div className="jumbotron jumbotron-fluid text-center heading1 banner"  >
                <div className="container" >
                  <h1 className="display-1">Dashboard</h1>
                  <p className="lead">Access Firebase Realtime Database</p>
                </div>
          </div>
          <FirebaseTable className="firebase"/>
          
        
  

        </>
    )
}

export default Dasboard
