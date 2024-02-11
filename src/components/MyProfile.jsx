import "../styleComponents/MyProfile.css";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { rocket } = useSelector((state) => state.rocket);
  const { mission } = useSelector((state) => state.mission);
  const filterMission = mission.filter((mission) => mission.member === true);
  const filterRocket = rocket.filter((rocket) => rocket.reserved === true);

  console.log(filterRocket, "rocket data");
  console.log(filterMission, "mission data");

  return (
    <section className="profileContainer">
      <div className="profileSubDiv">
        <h2>My Missions</h2>
        <div className="missionBorder">
        {filterMission.length > 0 ? (
            filterMission.map((mission) => <p key={mission.mission_id}>{mission.mission_name}</p>)
          ) : (
            <p>No missions</p>
          )}
        </div>
      </div>
      <div className="profileSubDiv">
        <h2>My Rockets</h2>
        <div className="missionBorder">
        {filterRocket.length > 0 ? (
            filterRocket.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)
          ) : (
            <p>No Rocket</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
