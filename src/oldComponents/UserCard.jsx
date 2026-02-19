export default function UserCard({
  fullName,
  jobTitle,
  website,
  email,
  about,
  interests,
  twitter,
  github,
  linkedin,
  instagram,
}) {
  return (
    <div
      className={`p-6 flex flex-col gap-4  bg-blue-500 text-white rounded-2xl ${jobTitle === "Frontend Developer" ? "special-border" : null} `}
    >
      <div>
        <h2 className="text-2xl underline- underline-offset-5">{fullName}</h2>
        <h4 className="italic">{jobTitle}</h4>
      </div>

      <p className="text-2xl">"{about}"</p>
      <ul className="italic">{interests.split(".").join(",")}</ul>
      <div>
        <h2 className="underline underline-offset-2 mb-3">
          Contact Information
        </h2>

        <ul>
          {/* Need to use a function to unpack this...lets try it out */}
          {/* Hopefully that works? */}
          <li>Website: {website}</li>
          <li>Email: {email}</li>
          <li>Twitter: {twitter}</li>
          <li>Github: {github}</li>
          <li>Linkedin: {linkedin}</li>
          <li>Instagram: {instagram}</li>
        </ul>
      </div>
    </div>
  );
}
