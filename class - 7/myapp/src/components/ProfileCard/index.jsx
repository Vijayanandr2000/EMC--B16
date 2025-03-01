import Header from "../Header";
import "./style.css";

const ProfileCard = ({ name, age, photo }) => {
  return (
    <div className="idCard">
      <section className="idCard-header">
        <Header title={"EMC"} />
      </section>
      <section className="idCard-body">
        <img src={photo} alt="User Pic" />
        <h2>{name}</h2>
        <h4>{age}</h4>
      </section>
    </div>
  );
};

export default ProfileCard;
