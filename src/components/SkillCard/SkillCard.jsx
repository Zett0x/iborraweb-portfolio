import "./SkillCard.scss";
export const SkillCard = ({ img }) => {
  return (
    <div className="skill-card">
      <div className="skill-image">
        <img src={img} alt="skill" />
      </div>
    </div>
  );
};
