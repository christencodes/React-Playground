export default function ProfileCard({ name, role, image }) {
  return (
    <div className="profile-card ">
      <div className="profile-img">
        <img src={image} alt="" />
      </div>
      <div className="description">
        <h2 className="text-white">@{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}
