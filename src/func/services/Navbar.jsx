import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import { Menubar } from "primereact/menubar";


const items = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    url: "/",
  },
  {
    label: "Login",
    icon: "pi pi-fw pi-sign-in",
    url: "/login",
  },
  {
    label: "Register",
    icon: "pi pi-fw   pi-user",
    url: "/register",
  },
];

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
       <Menubar model={items} />
      )}
    </div>
  );
};

export default Navbar;
