import React from "react";
import My3Dcomponent from "../components/My3Dcomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import "../css/Home.css";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="homepage">
      <div className="background">
        <My3Dcomponent />
      </div>
      <div className="overlay-content">
        <h1 className="">
          Explore the <FontAwesomeIcon icon={faInfinity} /> Possibilities
        </h1>
        <h2 className="">Native Cosmos</h2>
        <p className="">Upcoming Hackathon Name</p>
        <div className="buttons">
          <button className="apply-button">
            {" "}
            <FontAwesomeIcon icon={faCheckSquare} />
            Apply
          </button>
          <button className="discord-button">
            <FontAwesomeIcon icon={faDiscord} />
            Join Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="homepage">
//   <div className="grid-container">
//     <div className="left">
//       <My3Dcomponent />
//     </div>
//     <div className="right">
//       <div className="content">
//         <div className="text-container">
//           <h1>Your Punchline Goes Here</h1>
//           <h2>Community Name</h2>
//           <p>Upcoming Hackathon Name</p>
//         </div>

//         <div className="buttons">
//           <button className="apply-button">Apply</button>
//           <button className="discord-button">Join Discord</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
