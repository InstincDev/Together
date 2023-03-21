import HamburgerNav from "./HamburgerNav";
import { useRoutingContext } from "contexts/RoutingContext";
import { useAuthContext } from "contexts/AuthContext";

const NavButtons = ({ HomeIcon, LoginIcon, CalendarIcon, DashIcon }) => {
  const routing = useRoutingContext();
  const { isAuthenticated, logout } = useAuthContext();
  const admin = true;
  const handleLogin = () => {
    window.location = "/auth/discord";
  };

  return (
    
    <div className="flex flex-row gap-2">
      {/* Dash Button */}
      {admin && <button
        onClick={() => routing.setCurrentPage("dashboardPage")}
        className="bg-white border-2 border-black rounded-2xl flex flex-col justify-center items-center p-1 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
      >
        <div className="flex justify-center">
          <DashIcon className="text-slate-400 w-7 h-7 lg:w-10 lg:h-10" />
        </div>
        <div className="text-slate-400 font-black text-lg lg:text-xl xl:text-2xl">
          <span>Dash</span>
        </div>
      </button>}
      {/* Home Button */}
      <button
        onClick={() => routing.setCurrentPage("landingPage")}
        className="bg-white border-2 border-black rounded-2xl flex flex-col justify-center items-center p-1 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
      >
        <div className="flex justify-center">
          <HomeIcon className="text-mainBlue w-7 h-7 lg:w-10 lg:h-10" />
        </div>
        <div className="text-mainBlue font-black text-lg lg:text-xl xl:text-2xl">
          <span>Home</span>
        </div>
      </button>
      {/* Log In & Log Out Button */}
      <button
        className="bg-white border-2 border-black rounded-2xl flex flex-col justify-center items-center p-1 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
        onClick={isAuthenticated() ? logout : handleLogin}
      >
        <div className="flex justify-center">
          <LoginIcon className="text-mainGreen w-7 h-7 lg:w-10 lg:h-10" />
        </div>
        <div className="text-mainGreen font-black text-lg lg:text-xl xl:text-2xl">
          <span>{isAuthenticated() ? "Log Out" : "Log In"}</span>
        </div>
      </button>
      {/* Calendar Button */}
      <button
        onClick={() => routing.setCurrentPage("calendarPage")}
        className="bg-white border-2 border-black rounded-2xl flex flex-col justify-center items-center p-1 w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
      >
        <div className="flex justify-center">
          <CalendarIcon className="text-mainOrange w-7 h-7 lg:w-10 lg:h-10" />
        </div>
        <div className="text-mainOrange font-black text-lg lg:text-xl xl:text-2xl">
          <span>Calendar</span>
        </div>
      </button>
      <HamburgerNav />
    </div>
  );
};

export default NavButtons;
