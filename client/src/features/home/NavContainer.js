import LogoContainer from "./LogoContainer";
import NavButtons from "./NavButtons";
import {
  FaHome,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { GiEvilMinion } from "react-icons/gi";
import { useAuthContext } from "contexts/AuthContext";

const NavContainer = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <nav className="hidden md:flex justify-between w-full">
      <LogoContainer logo={"./logoicon.png"} logotext={"./logotext.png"} />
      <NavButtons
        DashIcon={GiEvilMinion}
        HomeIcon={FaHome}
        LoginIcon={
          isAuthenticated() ? FaChevronCircleLeft : FaChevronCircleRight
        }
        CalendarIcon={FaRegCalendarAlt}
      />
    </nav>
  );
};

export default NavContainer;

// lg:items-stretch
