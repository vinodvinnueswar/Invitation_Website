import React, { useState } from "react";

const OpeningScreen = ({ onOpen }) => {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);

    setTimeout(() => {
      onOpen();
    }, 1500); // animation duration
  };

  return (
    <div className={`opening-screen-Rajat-Neha ${closing ? "fade-out" : ""}`}>
    

      <div className="invitation-card-Rajat-Neha">
        <div className="gold-text">
          <h1 className="couple-name-Rajat-Neha">Rajat ❤️ Neha</h1>

          <p className="invite-text-Rajat-Neha">
            Request The Honor Of Your Presence
          </p>
        </div>

        <button onClick={handleOpen} className="open-btn">
          Open Invitation
        </button>
      </div>

    </div>
  );
};

export default OpeningScreen;