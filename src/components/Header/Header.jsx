// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { icons } from "../../assets/icons/icons";
// import "./Header.css";
// import Hambermenuoptions from "../Hambermenuoptions/Hambermenuoptions";

// function Header({ onSearchChange, isMenu, isAddpage }) {
//   const navigate = useNavigate();
//   const [option, setOption] = useState(false);
//   const [greeting, setGreeting] = useState("");
//   const handleMenuoption = () => {
//     setOption(true);
//   };

//   useEffect(() => {
//     const now = new Date();
//     const hour = now.getHours();

//   //   if (hour >= 5 && hour < 12) {
//   //     setGreeting("Bonjour");
//   //   } else if (hour >= 12 && hour < 18) {
//   //     setGreeting("bon après-midi");
//   //   } else {
//   //     setGreeting("bonne soirée");
//   //   }
//     // }, []);
    
//     if (hour >= 5 && hour < 12) {
//       setGreeting("Bonjour");
//     } else if (hour >= 12 && hour < 18) {
//       setGreeting("Bonjour");
//     } else {
//       setGreeting("Bonjour");
//     }
//   }, []);

//   return (
//     <>
//       {option && <Hambermenuoptions setopt={setOption} />}
//       <div className="header">
//         <img
//           src={icons.menuicon}
//           alt="Menu"
//           onClick={handleMenuoption}
//           className="menu-icon"
//           style={{ opacity: option ? 0 : 1 }}
//         />
//         {isAddpage ? (
//           <img
//             src={icons.home_icon}
//             onClick={() => navigate("/")}
//             alt="Filter"
//             className="home-icon"
//           />
//         ) : (
//           <img
//             src={icons.pallet_icon}
//             onClick={() => navigate("/added-items")}
//             alt="Filter"
//             className="pallet-icon"
//           />
//         )}
//       </div>
//       {isAddpage || isMenu ? (
//         <></>
//       ) : (
//         <>
//           <div className="welcome">
//             <h2>
//               {greeting}!{" "}
//               {/* <span role="img" aria-label="Wave">
//                 👋
//               </span> */}
//             </h2>
//           </div>
//           <div className="wrap-input-17">
//             <div className="search-box">
//               <button className="btn-search">🔍</button>
//               <input
//                 onChange={onSearchChange}
//                 type="text"
//                 className="input-search"
//                 placeholder="Search..."
//               />
//             </div>
//           </div>
//         </>
//       )}
      
//     </>
//   );
// }

// export default Header;












// ------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { icons } from "../../assets/icons/icons";
// import "./Header.css";
// import Hambermenuoptions from "../Hambermenuoptions/Hambermenuoptions";
// import { useTableNum } from "../context/TableNumContext";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Header({ onSearchChange, isMenu, isAddpage }) {
//   const { tableNum } = useTableNum();
//   const navigate = useNavigate();
//   const [option, setOption] = useState(false);
//   const [reservation, setReservation] = useState({
//     name: "",
//     phone: "",
//     date: "",
//     time: "",
//     persons: "",
//   });

//   const handleMenuoption = () => {
//     setOption(true);
//   };

//   // Handle reservation form inputs
//   const handleReservationChange = (e) => {
//     const { name, value } = e.target;
//     setReservation((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (name === "time") {
//       e.target.blur();  // Close the dropdown after selecting time
//     }
//   };
//   //  API endpoint
//   const sendReservationData = async () => {
//     try {
//       const response = await fetch("https://server3-server3.gofastapi.com/reserveTable", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(reservation),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         toast.success("Reservation successful!");
//       } else {
//         toast.error("Failed to reserve. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error sending reservation:", error);
//     }
//   };

//   // Handle reservation submission
//   const handleReservationSubmit = () => {
//     //alert(`Reservation confirmed for ${reservation.persons} persons on ${reservation.date} at ${reservation.time} for ${reservation.name}, Phone: ${reservation.phone}`);
    
//     sendReservationData();
//   };

//   return (
//     <>
//       {option && <Hambermenuoptions setopt={setOption} />}
//       <div className="header">
//         <img
//           src={icons.menuicon}
//           alt="Menu"
//           onClick={handleMenuoption}
//           className="menu-icon"
//           style={{ opacity: option ? 0 : 1 }}
//         />

//         {!isMenu && (
//           <div className="welcome">
//             <h2>SOORAJ☀️</h2>
//           </div>
//         )}

//         {isMenu && (
//           <div className="welcome">
//             <h2>SOORAJ☀️</h2>
//           </div>
//         )}

//         {isAddpage ? (
//           <img
//             src={icons.home_icon}
//             onClick={() => navigate("/")}
//             alt="Home"
//             className="home-icon"
//           />
//         ) : (
//           <img
//             src={icons.pallet_icon}
//             onClick={() => navigate("/added-items")}
//             alt="Pallet"
//             className="pallet-icon"
//           />
//         )}
//       </div>
//       <ToastContainer />
//       {!isAddpage && !isMenu && tableNum === 0 && (
//         <div className="reservation-form">
//           <h4>Reserve a Table</h4>
//           <form className="reservation-row">
            
//             <div className="reservation-input">
//               <input
//                 type="text"
//                 name="name"
//                 value={reservation.name}
//                 onChange={handleReservationChange}
//                 required
//                 placeholder="Name"
//                 className="reservation-name"
//               />
//             </div>

//             <div className="reservation-input">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={reservation.phone}
//                 onChange={handleReservationChange}
//                 required
//                 placeholder="Phone"
//                 className="reservation-phone"
//               />
//             </div>

//             <div className="reservation-input">
//               <input
//                 type="date"
//                 name="date"
//                 value={reservation.date}
//                 onChange={handleReservationChange}
//                 required
//                 className="reservation-date"
//               />
//             </div>

//             <div className="reservation-input">
//               <input
//                 type="time"
//                 name="time"
//                 value={reservation.time}
//                 onChange={handleReservationChange}
//                 required
//                 className="reservation-time"
//               />
//             </div>

//             <div className="reservation-input">
//               <select
//                 name="persons"
//                 value={reservation.persons}
//                 onChange={handleReservationChange}
//                 required
//                 className="reservation-persons"
//               >
//                 <option value="" disabled>
//                   Persons
//                 </option>
//                 {[...Array(20).keys()].map((num) => (
//                   <option key={num + 1} value={num + 1}>
//                     {num + 1}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button
//               type="button"
//               onClick={handleReservationSubmit}
//               className="reservation-btn"
//             >
//               Reserve
//             </button>
//           </form>
//         </div>
//       )}

//       {!isAddpage && !isMenu && (
//         <>
//           <div className="wrap-input-17">
//             <div className="search-box">
//               <button className="btn-search">🔍</button>
//               <input
//                 onChange={onSearchChange}
//                 type="text"
//                 className="input-search"
//                 placeholder="Search..."
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default Header;














import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../assets/icons/icons";
import "./Header.css";
import Hambermenuoptions from "../Hambermenuoptions/Hambermenuoptions";
import { useTableNum } from "../context/TableNumContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header({ onSearchChange, isMenu, isAddpage }) {
  const { tableNum } = useTableNum();
  const navigate = useNavigate();
  const [option, setOption] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false); // Control form visibility
  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    persons: "",
  });

  const handleMenuoption = () => {
    setOption(true);
  };

  const toggleReservationForm = () => {
    setShowReservationForm(prev => !prev); // Toggle form visibility
  };

  // Handle reservation form inputs
  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "time") e.target.blur();
  };

  //  API endpoint
  const sendReservationData = async () => {
    try {
      const response = await fetch("https://server3-server3.gofastapi.com/reserveTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Reservation successful!");
        setReservation({ name: "", phone: "", date: "", time: "", persons: "" }); // Reset form
        setShowReservationForm(false); // Close form on success
      } else {
        toast.error("Failed to reserve. Please try again.");
      }
    } catch (error) {
      console.error("Error sending reservation:", error);
    }
  };

  const handleReservationSubmit = () => {
    sendReservationData();
  };

  return (
    <>
      {option && <Hambermenuoptions setopt={setOption} />}
      <div className="header">
        <img
          src={icons.menuicon}
          alt="Menu"
          onClick={handleMenuoption}
          className="menu-icon"
          style={{ opacity: option ? 0 : 1 }}
        />

        <div className="welcome">
          <h2>SOORAJ☀️</h2>
        </div>

        {isAddpage ? (
          <img
            src={icons.home_icon}
            onClick={() => navigate("/")}
            alt="Home"
            className="home-icon"
          />
        ) : (
          <img
            src={icons.pallet_icon}
            onClick={() => navigate("/added-items")}
            alt="Pallet"
            className="pallet-icon"
          />
        )}
      </div>
      <ToastContainer />

      {!isAddpage && !isMenu && tableNum === 0 && (
        <>
          <button onClick={toggleReservationForm} className="reservation-btn">
            {showReservationForm ? "Close Reservation Form" : "Reserve Table"}
          </button>
          {showReservationForm && (
            <div className="reservation-form">
              <h4>Reserve a Table</h4>
              <form className="reservation-row">
                <div className="reservation-input">
                  <input
                    type="text"
                    name="name"
                    value={reservation.name}
                    onChange={handleReservationChange}
                    required
                    placeholder="Name"
                    className="reservation-name"
                  />
                </div>

                <div className="reservation-input">
                  <input
                    type="tel"
                    name="phone"
                    value={reservation.phone}
                    onChange={handleReservationChange}
                    required
                    placeholder="Phone"
                    className="reservation-phone"
                  />
                </div>

                <div className="reservation-input">
                  <input
                    type="date"
                    name="date"
                    value={reservation.date}
                    onChange={handleReservationChange}
                    required
                    className="reservation-date"
                    placeholder="Select Date"
                    
                  />
                </div>

                <div className="reservation-input">
                  <input
                    type="time"
                    name="time"
                    value={reservation.time}
                    onChange={handleReservationChange}
                    required
                    className="reservation-time"
                  />
                </div>

                <div className="reservation-input">
                  <select
                    name="persons"
                    value={reservation.persons}
                    onChange={handleReservationChange}
                    required
                    className="reservation-persons"
                  >
                    <option value="" disabled>
                      Persons
                    </option>
                    {[...Array(20).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleReservationSubmit}
                  className="reservation-btn"
                >
                  Reserve
                </button>
              </form>
            </div>
          )}
        </>
      )}

      {!isAddpage && !isMenu && (
        <div className="wrap-input-17">
          <div className="search-box">
            <button className="btn-search">🔍</button>
            <input
              onChange={onSearchChange}
              type="text"
              className="input-search"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;