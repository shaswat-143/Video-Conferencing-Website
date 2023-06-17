import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="homepage-container">
      <div className="input-container">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Homepage;
