
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/WelcomeModal.css';

// const WelcomeModal = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [role, setRole] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
   
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const persistProfile = (selectedRole, enteredName) => {
//     localStorage.setItem('campusconnect-user-role', selectedRole || '');
//     localStorage.setItem('campusconnect-user-name', enteredName || '');
//     window.dispatchEvent(new Event('userProfileUpdated'));
//   };

//   const handleContinue = () => {
//     persistProfile(role, name);
//     setIsOpen(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       setIsOpen(false);
//     }
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setIsOpen(false);
//     }
//   };

//   if (!isOpen) return null;

//   const isContinueDisabled = !role || !name.trim();

//   return (
//     <div 
//       className="modalOverlay"
//       onClick={handleBackdropClick}
//       onKeyDown={handleKeyDown}
//       tabIndex={-1}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="welcome-modal-title"
//       aria-describedby="welcome-modal-description"
//     >
//       <div className="modalContent">
//         <div className="modalHeader">
//           <h1 id="welcome-modal-title" className="modalTitle">
//             Welcome to Nexa College
//           </h1>
//           <p id="welcome-modal-description" className="modalSubtext">
//              Event Hub - Stay Updated, Stay Involved!
//           </p>
//         </div>

//         <div className="modalForm">
//           <label className="formLabel">Select your role</label>
//           <div className="roleOptions">
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="Student"
//                 checked={role === 'Student'}
//                 onChange={(e) => setRole(e.target.value)}
//               /> Student
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="Guest"
//                 checked={role === 'Guest'}
//                 onChange={(e) => setRole(e.target.value)}
//               /> Guest
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="Staff"
//                 checked={role === 'Staff'}
//                 onChange={(e) => setRole(e.target.value)}
//               /> Staff
//             </label>
//           </div>

//           <label className="formLabel" htmlFor="userNameInput">Your name</label>
//           <input
//             id="userNameInput"
//             className="nameInput"
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="modalActions">
//           <button
//             className="primaryButton"
//             onClick={handleContinue}
//             disabled={isContinueDisabled}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomeModal;
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/WelcomeModal.css";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const hasOpened = useRef(false); // ✅ guard for StrictMode

  useEffect(() => {
    // sirf ek dafa modal open karne ka logic
    if (!hasOpened.current) {
      hasOpened.current = true;
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleContinue = () => {
    // optional: save profile info
    localStorage.setItem("campusconnect-user-role", role || "");
    localStorage.setItem("campusconnect-user-name", name || "");
    window.dispatchEvent(new Event("userProfileUpdated"));

    // ✅ modal band karke direct home bhej do
    setIsOpen(false);
    navigate("/");
  };

  if (!isOpen) return null;

  const isContinueDisabled = !role || !name.trim();

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modalContent">
        <div className="modalHeader">
          <h1 className="modalTitle">Welcome to Nexa College</h1>
          <p className="modalSubtext">Event Hub - Stay Updated, Stay Involved!</p>
        </div>

        <div className="modalForm">
          <label className="formLabel">Select your role</label>
          <div className="roleOptions">
            <label>
              <input
                type="radio"
                name="role"
                value="Student"
                checked={role === "Student"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Guest"
                checked={role === "Guest"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Guest
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Staff"
                checked={role === "Staff"}
                onChange={(e) => setRole(e.target.value)}
              />{" "}
              Staff
            </label>
          </div>

          <label className="formLabel" htmlFor="userNameInput">
            Your name
          </label>
          <input
            id="userNameInput"
            className="nameInput"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="modalActions">
          <button
            className="primaryButton"
            onClick={handleContinue}
            disabled={isContinueDisabled}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;






