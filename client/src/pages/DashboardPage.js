import React from "react";
import { useAuthContext } from "contexts/AuthContext";
import NavContainer from "features/home/NavContainer";

const DashboardPage = () => {
  const auth = useAuthContext();

  return (
      <div className="flex flex-col items-center w-full pt-20 min-h-screen pb-10 md:pt-5 lg:text-lg bg-primary">
        <NavContainer />
        <h1>Admin DashBoard</h1>
        <p>Welcome {auth.user?.displayName}!</p>
      </div>
  ) 
};

export default DashboardPage;
