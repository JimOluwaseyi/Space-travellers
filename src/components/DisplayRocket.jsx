import React, { useEffect } from "react";
import "../styleComponents/DisplayRocket.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchRocketData } from "../redux/rocket/rocketSlice";
import { reserveRocket, cancelRocket } from "../redux/rocket/rocketSlice";

const DisplayRocket = () => {
  const rockets = useSelector((state) => state.rocket.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketData());
  }, []);

  const handleReserved = (id) => {
    const data = dispatch(reserveRocket(id));
  };

  const handleCancel = (id) => {
    const data = dispatch(cancelRocket(id));
  };
  return (
    <>
      {rockets.map((rocket) => (
        <div className="rocketContainer" key={rocket.id}>
          <div className="rocketImg">
            <img src={rocket.image} alt="" />
          </div>
          <div className="rocketList">
            <div key={rocket.id}>
              <h1>{rocket.name}</h1>
              {rocket.reserved && <span id="reservedSpan">Reserved</span>}
              <p>{rocket.description}</p>
              {rocket.reserved ? (
                <button onClick={() => handleCancel(rocket.id)} className="cancelBtn">
                  Cancel Reservation
                </button>
              ) : (
                <button onClick={() => handleReserved(rocket.id)} className="reserveBtn">
                  Reserve
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </>

  );
};

export default DisplayRocket;
