import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Import Core Components
import MyCanvas from './MyCanvas';
import TopNav from './layout/TopNav';
import SideNav from './layout/SideNav';

function App() {

    const dinoList = [
        "Trex",
        "Pistosaur",
        "Robotic",
        "Lavargh"
    ];
    const [dinosaur, setDinosaur] = useState(3)

    return (
        <div className="main container-fluid">
            <MyCanvas className={"canvas-container " + dinoList[dinosaur] } current={ dinoList[dinosaur] }/>
            <div className="row">
                <TopNav className="top-nav-container col-xl-4 col-lg-5 col-md-6 col-sm-12 ml-auto mt-xl-4 mt-lg-2"/>
            </div>
            <div className="row">
                <SideNav className="side-nav-container col-xl-4 col-lg-5 col-md-6 col-sm-12 ml-auto mt-xl-4 mt-lg-2" 
                dinosaur={ dinoList[dinosaur] } 
                goNext={ () => { setDinosaur(i => i < dinoList.length - 1 ? i + 1 : i) } }
                next={ dinosaur < dinoList.length - 1 ? dinoList[dinosaur + 1] : null }
                goPrev={ () => { setDinosaur(i => i > 0 ? i - 1 : i) } }
                prev={ dinosaur > 0 ? dinoList[dinosaur - 1] : null }/>
            </div>
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)