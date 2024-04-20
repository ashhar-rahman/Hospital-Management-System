
// import React, { useContext, useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { Context } from "../main";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated, setIsAuthenticated } = useContext(Context);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const fetchUsername = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
//           withCredentials: true,
//         });
//         setUsername(response.data.user.firstName);
//       } catch (error) {
//         console.error("Error fetching username:", error);
//       }
//     };

//     if (isAuthenticated) {
//       fetchUsername();
//     }
//   }, [isAuthenticated]);

//   const handleLogout = async () => {
//     try {
//       await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
//         withCredentials: true,
//       });
//       toast.success("Logout successful");
//       setIsAuthenticated(false);
//     } catch (error) {
//       toast.error(error.response?.data.message || "Logout failed");
//     }
//   };

//   const navigateTo = useNavigate();

//   const goToLogin = () => {
//     navigateTo("/login");
//   };

//   return (
//     <>
//       <nav className={"container"}>
//         <div className="logo">
//           <img src="/logo.png" alt="logo" className="logo-img" />
//         </div>
//         <div className={show ? "navLinks showmenu" : "navLinks"}>
//           <div className="links">
//             <Link to={"/"} onClick={() => setShow(!show)}>
//               Home
//             </Link>
//             <Link to={"/appointment"} onClick={() => setShow(!show)}>
//               Appointment
//             </Link>
//             <Link to={"/about"} onClick={() => setShow(!show)}>
//               About Us
//             </Link>
//           </div>
//           {isAuthenticated ? (
//             <div className="user-info">
//               <span className="username">Hi {username}!</span>
//               <button className="logoutBtn btn" onClick={handleLogout}>
//                 LOGOUT
//               </button>
//             </div>
//           ) : (
//             <button className="loginBtn btn" onClick={goToLogin}>
//               LOGIN
//             </button>
//           )}
//         </div>
//         <div className="hamburger" onClick={() => setShow(!show)}>
//           <GiHamburgerMenu />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;




import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
          withCredentials: true,
        });
        setUsername(response.data.user.firstName);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    if (isAuthenticated) {
      fetchUsername();
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      });
      toast.success("Logout successful");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response?.data.message || "Logout failed");
    }
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
        <Link to={"/"} onClick={() => setShow(!show)}>  
          <img src="/logo.png" alt="logo" className="logo-img" />
          </Link>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
            {isAuthenticated ? (
              <Link to={"https://coyousi.pythonanywhere.com"} target="_self" onClick={() => setShow(!show)}>
                Predict Disease
              </Link>
              ) : (
              <Link to={"/login"} onClick={() => setShow(!show)}>
                Predict Disease
              </Link>

              )}
            {isAuthenticated ? (
              <Link to={"/UserPage"} onClick={() => setShow(!show)}>
                <IoMdNotifications />
              </Link>
              ) : (
            //  < // <Link to={"/login"} onClick={() => setShow(!show)}>
            //   //   NO
            //   // </Link>>
            <></>
              )}
          </div> 
          {isAuthenticated ? (
            <div className="user-info">
              <span className="username">Hi {username}!</span>
              <button className="logoutBtn btn" onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
