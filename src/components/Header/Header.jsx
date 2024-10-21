import profilePic from "../../assets/image/profile.jpg";
//

const Header = () => {
  return (
    <div className="mb-8 flex justify-between items-center mt-8 pb-7 border-b border-[#11111126">
      <h1 className="text-4xl">Knowledge Cafe</h1>
      <div className="w-14 h-14 rounded-full">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={profilePic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
