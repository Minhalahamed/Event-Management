
// // import React, { useEffect, useState } from "react";
// // import "../css/ecard.css";
// // import styles from "../css/event.module.css";
// // import PropTypes from "prop-types";
// // import { Link, useNavigate } from "react-router-dom";
// // import { FaRegBookmark, FaBookmark } from "react-icons/fa";

// // const EventCard = ({
// //   id,
// //   title,
// //   category,
// //   description,
// //   image,
// //   date,
// //   venue,
// //   onViewDetails,
// // }) => {
// //   const [timeLeft, setTimeLeft] = useState({
// //     days: 0,
// //     hours: 0,
// //     minutes: 0,
// //     seconds: 0,
// //   });
// //   const [isEnded, setIsEnded] = useState(false);
// //   const [bookmarked, setBookmarked] = useState(false);
// //   const navigate = useNavigate();

  
// //   useEffect(() => {
// //     const savedBookmarks =
// //       JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
// //     setBookmarked(savedBookmarks.includes(id));
// //   }, [id]);

 
// //   useEffect(() => {
// //     const savedBookmarks =
// //       JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
// //     if (bookmarked) {
// //       if (!savedBookmarks.includes(id)) {
// //         savedBookmarks.push(id);
// //       }
// //     } else {
// //       const index = savedBookmarks.indexOf(id);
// //       if (index > -1) savedBookmarks.splice(index, 1);
// //     }
// //     localStorage.setItem("bookmarkedEvents", JSON.stringify(savedBookmarks));
// //   }, [bookmarked, id]);

 
// //   useEffect(() => {
// //     if (!date) return;

// //     const updateCountdown = () => {
// //       const now = new Date();
// //       const eventDate = new Date(date);
// //       const difference = eventDate - now;

// //       if (difference <= 0) {
// //         setIsEnded(true);
// //         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
// //       } else {
// //         setIsEnded(false);
// //         const totalHours = Math.floor(difference / (1000 * 60 * 60));
// //         setTimeLeft({
// //           days: Math.floor(totalHours / 24),
// //           hours: totalHours % 24,
// //           minutes: Math.floor((difference / (1000 * 60)) % 60),
// //           seconds: Math.floor((difference / 1000) % 60),
// //         });
// //       }
// //     };

// //     updateCountdown();
// //     const interval = setInterval(updateCountdown, 1000);
// //     return () => clearInterval(interval);
// //   }, [date]);

// //   const shortDesc =
// //     description && description.length > 120
// //       ? description.slice(0, 120) + "..."
// //       : description;

// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'TBA';
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-US', {
// //       year: 'numeric',
// //       month: 'short',
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   const handleBookmarkToggle = (e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setBookmarked(!bookmarked);
// //   };

// //   return (
// //     <article className="event-card" aria-labelledby={`event-${id}-title`}>
// //       <div
// //         className="event-card-image-wrapper"
// //         style={{ position: "relative" }}
// //       >
// //         <img
// //           src={image}
// //           alt={title || "Event image"}
// //           className="event-card-image"
// //         />

       
// //         <button
// //           className="bookmark-btn"
// //           onClick={handleBookmarkToggle}
// //           aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
// //           style={{
// //             position: "absolute",
// //             top: "10px",
// //             right: "10px",
// //             background: "rgba(0, 0, 0, 0.6)",
// //             border: "none",
// //             cursor: "pointer",
// //             fontSize: "1.5rem",
// //             color: bookmarked ? "#f59e0b" : "#fff",
// //             borderRadius: "50%",
// //             width: "40px",
// //             height: "40px",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             transition: "all 0.3s ease",
// //             backdropFilter: "blur(5px)",
// //           }}
// //         >
// //           {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
// //         </button>
// //       </div>

// //       <div className="event-card-content">
// //         <span className="event-card-category">{category}</span>
// //         <h3 id={`event-${id}-title`} className="event-card-title">
// //           {title}
// //         </h3>
// //         <p className="event-card-description">{shortDesc}</p>

       
// //         <div className="event-card-info">
// //           <div className="event-info-item">
// //             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
// //               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
// //             </svg>
// //             <span className="event-venue">{venue || 'TBA'}</span>
// //           </div>
// //           <div className="event-info-item">
// //             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
// //               <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
// //             </svg>
// //             <span className="event-date">{formatDate(date)}</span>
// //           </div>
// //         </div>

// //         <div className="event-card-footer">
// //           <div
// //             className={`countdown-badge ${isEnded ? "ended" : ""}`}
// //             aria-live="polite"
// //           >
// //             {isEnded
// //               ? "Event Ended"
// //               : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
// //           </div>

// //           <Link className="event-card-btn" to={`/events/${id}`} aria-label={`View details of ${title}`}>
// //             View details
// //           </Link>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // };

// // EventCard.propTypes = {
// //   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// //   title: PropTypes.string,
// //   category: PropTypes.string,
// //   description: PropTypes.string,
// //   image: PropTypes.string,
// //   date: PropTypes.string,
// //   venue: PropTypes.string,
// //   onViewDetails: PropTypes.func,
// // };

// // export default EventCard;
// import React, { useEffect, useState } from "react";
// import "../css/ecard.css";
// import styles from "../css/event.module.css";
// import PropTypes from "prop-types";
// import { Link, useNavigate } from "react-router-dom";
// import { FaRegBookmark, FaBookmark } from "react-icons/fa";

// const EventCard = ({
//   id,
//   title,
//   category,
//   description,
//   image,
//   date,
//   venue,
//   onViewDetails,
// }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const [isEnded, setIsEnded] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);
//   const navigate = useNavigate();

//   // Load bookmark state from localStorage on mount
//   useEffect(() => {
//     const savedBookmarks =
//       JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
//     setBookmarked(savedBookmarks.includes(id));
//   }, [id]);

//   // Update localStorage when bookmark changes
//   useEffect(() => {
//     const savedBookmarks =
//       JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
//     if (bookmarked) {
//       if (!savedBookmarks.includes(id)) {
//         savedBookmarks.push(id);
//       }
//     } else {
//       const index = savedBookmarks.indexOf(id);
//       if (index > -1) savedBookmarks.splice(index, 1);
//     }
//     localStorage.setItem("bookmarkedEvents", JSON.stringify(savedBookmarks));
//   }, [bookmarked, id]);

//   // Countdown logic
//   useEffect(() => {
//     if (!date) return;

//     const updateCountdown = () => {
//       const now = new Date();
//       const eventDate = new Date(date);
//       const difference = eventDate - now;

//       if (difference <= 0) {
//         setIsEnded(true);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         setIsEnded(false);
//         const totalHours = Math.floor(difference / (1000 * 60 * 60));
//         setTimeLeft({
//           days: Math.floor(totalHours / 24),
//           hours: totalHours % 24,
//           minutes: Math.floor((difference / (1000 * 60)) % 60),
//           seconds: Math.floor((difference / 1000) % 60),
//         });
//       }
//     };

//     updateCountdown();
//     const interval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(interval);
//   }, [date]);

//   const shortDesc =
//     description && description.length > 120
//       ? description.slice(0, 120) + "..."
//       : description;

//   const formatDate = (dateString) => {
//     if (!dateString) return 'TBA';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const handleBookmarkToggle = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setBookmarked(!bookmarked);
//   };

//   return (
//     <article className="event-card" aria-labelledby={`event-${id}-title`}>
//       <div
//         className="event-card-image-wrapper"
//         style={{ position: "relative" }}
//       >
//         <img
//           src={image}
//           alt={title || "Event image"}
//           className="event-card-image"
//         />

//         {/* Bookmark Icon */}
//         <button
//           className="bookmark-btn"
//           onClick={handleBookmarkToggle}
//           aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "10px",
//             background: "rgba(0, 0, 0, 0.6)",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "1.5rem",
//             color: bookmarked ? "#f59e0b" : "#fff",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             transition: "all 0.3s ease",
//             backdropFilter: "blur(5px)",
//           }}
//         >
//           {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
//         </button>
//       </div>

//       <div className="event-card-content">
//         <span className="event-card-category">{category}</span>
//         <h3 id={`event-${id}-title`} className="event-card-title">
//           {title}
//         </h3>
//         <p className="event-card-description">{shortDesc}</p>

//         {/* Date and Venue Info */}
//         <div className="event-card-info">
//           <div className="event-info-item">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
//               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//             </svg>
//             <span className="event-venue">{venue || 'TBA'}</span>
//           </div>
//           <div className="event-info-item">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "8px" }}>
//               <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
//             </svg>
//             <span className="event-date">{formatDate(date)}</span>
//           </div>
//         </div>

//         <div className="event-card-footer">
//           <div
//             className={`countdown-badge ${isEnded ? "ended" : ""}`}
//             aria-live="polite"
//           >
//             {isEnded
//               ? "Event Ended"
//               : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
//           </div>

//           <Link className="event-card-btn" to={`/events/${id}`} aria-label={`View details of ${title}`}>
//             View details
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// EventCard.propTypes = {
//   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   title: PropTypes.string,
//   category: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   date: PropTypes.string,
//   venue: PropTypes.string,
//   onViewDetails: PropTypes.func,
// };

// export default EventCard;

import React, { useEffect, useState } from "react";
import "../css/ecard.css";
import styles from "../css/event.module.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const EventCard = ({ id, title, category, description, image, date, venue }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEnded, setIsEnded] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  // Load bookmarks from sessionStorage
  useEffect(() => {
    const savedBookmarks = JSON.parse(sessionStorage.getItem("bookmarkedEvents")) || [];
    setBookmarked(savedBookmarks.includes(id));
  }, [id]);

  // Update sessionStorage when bookmark changes
  useEffect(() => {
    const savedBookmarks = JSON.parse(sessionStorage.getItem("bookmarkedEvents")) || [];
    if (bookmarked) {
      if (!savedBookmarks.includes(id)) savedBookmarks.push(id);
    } else {
      const index = savedBookmarks.indexOf(id);
      if (index > -1) savedBookmarks.splice(index, 1);
    }
    sessionStorage.setItem("bookmarkedEvents", JSON.stringify(savedBookmarks));
  }, [bookmarked, id]);

  // Countdown logic
  useEffect(() => {
    if (!date) return;

    const updateCountdown = () => {
      const now = new Date();
      const eventDate = new Date(date);
      const difference = eventDate - now;

      if (difference <= 0) {
        setIsEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsEnded(false);
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        setTimeLeft({
          days: Math.floor(totalHours / 24),
          hours: totalHours % 24,
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [date]);

  const shortDesc = description && description.length > 120 ? description.slice(0, 120) + "..." : description;

  const formatDate = (dateString) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  const handleBookmarkToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  return (
    <article className="event-card" aria-labelledby={`event-${id}-title`}>
      <div className="event-card-image-wrapper" style={{ position: "relative" }}>
        <img src={image} alt={title || "Event image"} className="event-card-image" />
        <button
          className="bookmark-btn"
          onClick={handleBookmarkToggle}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.6)",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: bookmarked ? "#f59e0b" : "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            backdropFilter: "blur(5px)",
          }}
        >
          {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      <div className="event-card-content">
        <span className="event-card-category">{category}</span>
        <h3 id={`event-${id}-title`} className="event-card-title">{title}</h3>
        <p className="event-card-description">{shortDesc}</p>

        <div className="event-card-info">
          <div className="event-info-item">
            <span className="event-venue">{venue || 'TBA'}</span>
          </div>
          <div className="event-info-item">
            <span className="event-date">{formatDate(date)}</span>
          </div>
        </div>

        <div className="event-card-footer">
          <div className={`countdown-badge ${isEnded ? "ended" : ""}`} aria-live="polite">
            {isEnded ? "Event Ended" : `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}
          </div>
          <Link className="event-card-btn" to={`/events/${id}`} aria-label={`View details of ${title}`}>View details</Link>
        </div>
      </div>
    </article>
   

  );
};

EventCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  venue: PropTypes.string,
};

export default EventCard;
