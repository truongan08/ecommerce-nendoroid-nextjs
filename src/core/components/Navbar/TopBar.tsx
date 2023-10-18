import LanguageSwitcher from "../LanguageSwitcher";

const TopBar = () => {
  return (
    <div className="container mx-auto w-full flex justify-between items-center gap-4 py-4">
      <div className="">Social Media Links</div>
      <div className="">Announcements</div>
      <LanguageSwitcher />
    </div>
  );
};

export default TopBar;
