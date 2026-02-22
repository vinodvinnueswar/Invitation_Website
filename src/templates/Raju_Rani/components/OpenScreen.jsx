import React, { useState } from "react";

const OpeningScreen = ({ onOpen }) => {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => {
      onOpen();
    }, 1200); // smooth exit animation
  };

  return (
    <div className={`opening-screen-Raju-Rani ${closing ? "fade-out" : ""}`}>
      <div className="invitation-card-Raju-Rani">
       <div className="gold-text">
         <h1 className="couple-name-Raju-Rani">Raju ❤️ Rani</h1>
        <p className="invite-text-Raju-Rani">
          Request The Honor Of Your Presence
        </p>
       </div>
       <button onClick={handleOpen} className="open-btn-Raju-Rani">
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;