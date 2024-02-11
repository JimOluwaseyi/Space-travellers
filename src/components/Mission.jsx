import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMissionData } from "../redux/mission/missionSlice";
import "../styleComponents/Mission.css";
import { joinMission, cancelMission } from "../redux/mission/missionSlice";
const Mission = () => {
  const missionData = useSelector((state) => state.mission.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionData());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missionData.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="header">{mission.mission_name}</td>
              <td className="descriptionTable">{mission.description}</td>
              <td>{mission.member ? <span className="status">Active Member</span> : <span className="notMem">Not A Member</span>}</td>

              <td>
                {mission.member ? (
                  <button
                    className="leaveMem"
                    onClick={() => dispatch(cancelMission(mission.mission_id))}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="status2"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
