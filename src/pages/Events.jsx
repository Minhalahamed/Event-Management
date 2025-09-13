

// // import React, { useState, useEffect } from "react";
// // import eventsData from "../data/ecard.json";
// // import EventCard from "../components/EventCard";
// // import styles from "../css/event.module.css";

// // const Events = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [sortBy, setSortBy] = useState("date");
// //   const [sortOrder, setSortOrder] = useState("asc"); 
// //   const [startDate, setStartDate] = useState("");
// //   const [endDate, setEndDate] = useState("");
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     setEvents(eventsData);
// //   }, []);

// //   const categories = [
// //     "All",
// //     "Workshop",
// //     "Concert",
// //     "Seminar",
// //     "Sports",
// //     "Tech",
// //     "Academic",
// //     "Cultural",
// //     "Art"
// //   ];

// //   const handleSearch = (e) => setSearchTerm(e.target.value);
// //   const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
// //   const handleSortChange = (e) => setSortBy(e.target.value);
// //   const handleSortOrderChange = (e) => setSortOrder(e.target.value);

// //   const clearFilters = () => {
// //     setSearchTerm("");
// //     setSelectedCategory("All");
// //     setSortBy("date");
// //     setSortOrder("asc");
// //     setStartDate("");
// //     setEndDate("");
// //   };


// //   const processEvents = (eventsList) => {
// //     return eventsList
// //       .filter((event) => {
// //         const q = searchTerm.trim().toLowerCase();
// //         if (!q) return true;
// //         return (
// //           event.title?.toLowerCase().includes(q) ||
// //           event.description?.toLowerCase().includes(q) ||
// //           event.category?.toLowerCase().includes(q)
// //         );
// //       })
// //       .filter((event) =>
// //         selectedCategory === "All" ? true : event.category === selectedCategory
// //       )
// //       .filter((event) => {
// //         if (!startDate && !endDate) return true;
// //         const eventDate = new Date(event.date);
// //         const from = startDate ? new Date(startDate) : null;
// //         const to = endDate ? new Date(endDate) : null;

// //         if (from && eventDate < from) return false;
// //         if (to && eventDate > to) return false;
// //         return true;
// //       })
// //       .sort((a, b) => {
// //         if (sortBy === "date") {
// //           return sortOrder === "asc" 
// //             ? new Date(a.date) - new Date(b.date)
// //             : new Date(b.date) - new Date(a.date);
// //         }
// //         if (sortBy === "title") {
// //           return sortOrder === "asc" 
// //             ? a.title.localeCompare(b.title)
// //             : b.title.localeCompare(a.title);
// //         }
// //         if (sortBy === "category") {
// //           return sortOrder === "asc"
// //             ? a.category.localeCompare(b.category)
// //             : b.category.localeCompare(a.category);
// //         }
// //         return 0;
// //       });
// //   };

// //   const now = new Date();
// //   const upcomingEvents = processEvents(
// //     events.filter(event => {
// //       const eventDate = new Date(event.date);
// //       return eventDate > now;
// //     })
// //   );

// //   const pastEvents = processEvents(
// //     events.filter(event => {
// //       const eventDate = new Date(event.date);
// //       return eventDate <= now;
// //     })
// //   );

// //   return (
// //     <div className={styles.eventsPage}>

// //       <section className={styles.hero}>
// //         <div className="container">
// //           <div className={styles.heroContent}>
// //             <h1 className={styles.heroTitle}>Campus Events</h1>
// //             <p className={styles.heroSubtitle}>
// //               Discover exciting events, workshops, and activities happening on
// //               campus. Find your next adventure and connect with fellow students.
// //             </p>
// //           </div>
// //         </div>
// //       </section>


// //       <section className={styles.filters}>
// //         <div className="container">
// //           <div className={styles.filtersContent}>

// //             <div className={styles.searchSection}>
// //               <div className={styles.searchInput}>
// //                 <svg
// //                   width="20"
// //                   height="20"
// //                   viewBox="0 0 24 24"
// //                   fill="currentColor"
// //                   className={styles.searchIcon}
// //                 >
// //                   <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
// //                 </svg>
// //                 <input
// //                   type="text"
// //                   placeholder="Search events..."
// //                   value={searchTerm}
// //                   onChange={handleSearch}
// //                   className={styles.searchField}
// //                   aria-label="Search events"
// //                 />
// //               </div>
// //             </div>


// //             <div className={styles.filterControls}>
// //               <div className={styles.filterGroup}>
// //                 <label htmlFor="category" className={styles.filterLabel}>
// //                   Category
// //                 </label>
// //                 <select
// //                   id="category"
// //                   value={selectedCategory}
// //                   onChange={handleCategoryChange}
// //                   className={styles.filterSelect}
// //                 >
// //                   {categories.map((cat) => (
// //                     <option key={cat} value={cat}>
// //                       {cat}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div className={styles.filterGroup}>
// //                 <label htmlFor="sort" className={styles.filterLabel}>
// //                   Sort By
// //                 </label>
// //                 <select
// //                   id="sort"
// //                   value={sortBy}
// //                   onChange={handleSortChange}
// //                   className={styles.filterSelect}
// //                 >
// //                   <option value="date">Date</option>
// //                   <option value="title">Title</option>
// //                   <option value="category">Category</option>
// //                 </select>
// //               </div>

// //               <div className={styles.filterGroup}>
// //                 <label htmlFor="sortOrder" className={styles.filterLabel}>
// //                   Order
// //                 </label>
// //                 <select
// //                   id="sortOrder"
// //                   value={sortOrder}
// //                   onChange={handleSortOrderChange}
// //                   className={styles.filterSelect}
// //                 >
// //                   <option value="asc">A-Z</option>
// //                   <option value="desc">Z-A</option>
// //                 </select>
// //               </div>

// //               <div className={styles.filterGroup}>
// //                 <label htmlFor="startDate" className={styles.filterLabel}>
// //                   From
// //                 </label>
// //                 <input
// //                   type="date"
// //                   id="startDate"
// //                   value={startDate}
// //                   onChange={(e) => setStartDate(e.target.value)}
// //                   className={styles.filterSelect}
// //                 />
// //               </div>

// //               <div className={styles.filterGroup}>
// //                 <label htmlFor="endDate" className={styles.filterLabel}>
// //                   To
// //                 </label>
// //                 <input
// //                   type="date"
// //                   id="endDate"
// //                   value={endDate}
// //                   onChange={(e) => setEndDate(e.target.value)}
// //                   className={styles.filterSelect}
// //                 />
// //               </div>

// //               <button onClick={clearFilters} className={styles.clearBtn}>
// //                 Clear Filters
// //               </button>
// //             </div>
// //           </div>

// //           <div className={styles.resultsInfo}>
// //             <p className={styles.resultsCount}>
// //               {upcomingEvents.length + pastEvents.length} event
// //               {upcomingEvents.length + pastEvents.length !== 1 ? "s" : ""} found
// //               ({upcomingEvents.length} upcoming, {pastEvents.length} past)
// //             </p>
// //           </div>
// //         </div>
// //       </section>


// //       <section className={styles.eventsSection}>
// //         <div className="container">
// //           <div className={styles.sectionHeader}>
// //             <h2 className={styles.sectionTitle}>
// //               <span className={styles.sectionIcon}>📅</span>
// //               Upcoming Events
// //             </h2>
// //             <span className={styles.eventCount}>{upcomingEvents.length} events</span>
// //           </div>

// //           {upcomingEvents.length === 0 ? (
// //             <div className={styles.noEvents}>
// //               <div className={styles.noEventsIcon}>📅</div>
// //               <h3>No upcoming events found</h3>
// //               <p>Check back later for new events or try adjusting your filters.</p>
// //             </div>
// //           ) : (
// //             <div className={styles.eventsContainer}>
// //               {upcomingEvents.map((event) => (
// //                 <EventCard
// //                   key={event.id}
// //                   {...event}
// //                 />
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>


// //       <section className={styles.eventsSection}>
// //         <div className="container">
// //           <div className={styles.sectionHeader}>
// //             <h2 className={styles.sectionTitle}>
// //               <span className={styles.sectionIcon}>📚</span>
// //               Past Events
// //             </h2>
// //             <span className={styles.eventCount}>{pastEvents.length} events</span>
// //           </div>

// //           {pastEvents.length === 0 ? (
// //             <div className={styles.noEvents}>
// //               <div className={styles.noEventsIcon}>📚</div>
// //               <h3>No past events found</h3>
// //               <p>No past events match your current filters.</p>
// //             </div>
// //           ) : (
// //             <div className={styles.eventsContainer}>
// //               {pastEvents.map((event) => (
// //                 <EventCard
// //                   key={event.id}
// //                   {...event}
// //                 />
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Events;


// import React, { useState, useEffect } from "react";
// import eventsData from "../data/ecard.json";
// import EventCard from "../components/EventCard";
// import styles from "../css/event.module.css";

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("date");
//   const [sortOrder, setSortOrder] = useState("asc"); // asc for A-Z, desc for Z-A
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     setEvents(eventsData);
//   }, []);

//   const categories = [
//     "All",
//     "Workshop",
//     "Concert",
//     "Seminar",
//     "Sports",
//     "Tech",
//     "Technology",
//     "Academic",
//     "Cultural",
//     "Art"
//   ];

//   const handleSearch = (e) => setSearchTerm(e.target.value);
//   const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
//   const handleSortChange = (e) => setSortBy(e.target.value);
//   const handleSortOrderChange = (e) => setSortOrder(e.target.value);

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedCategory("All");
//     setSortBy("date");
//     setSortOrder("asc");
//     setStartDate("");
//     setEndDate("");
//   };

//   // Filter and sort events
//   const processEvents = (eventsList) => {
//     return eventsList
//       .filter((event) => {
//         const q = searchTerm.trim().toLowerCase();
//         if (!q) return true;
//         return (
//           event.title?.toLowerCase().includes(q) ||
//           event.description?.toLowerCase().includes(q) ||
//           event.category?.toLowerCase().includes(q)
//         );
//       })
//       .filter((event) =>
//         selectedCategory === "All" ? true : event.category === selectedCategory
//       )
//       .filter((event) => {
//         if (!startDate && !endDate) return true;
//         const eventDate = new Date(event.date);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(endDate) : null;

//         if (from && eventDate < from) return false;
//         if (to && eventDate > to) return false;
//         return true;
//       })
//       .sort((a, b) => {
//         if (sortBy === "date") {
//           return sortOrder === "asc" 
//             ? new Date(a.date) - new Date(b.date)
//             : new Date(b.date) - new Date(a.date);
//         }
//         if (sortBy === "title") {
//           return sortOrder === "asc" 
//             ? a.title.localeCompare(b.title)
//             : b.title.localeCompare(a.title);
//         }
//         if (sortBy === "category") {
//           return sortOrder === "asc"
//             ? a.category.localeCompare(b.category)
//             : b.category.localeCompare(a.category);
//         }
//         return 0;
//       });
//   };

//   // Separate events into upcoming and past
//   const now = new Date();
//   const upcomingEvents = processEvents(
//     events.filter(event => {
//       const eventDate = new Date(event.date);
//       return eventDate > now;
//     })
//   );

//   const pastEvents = processEvents(
//     events.filter(event => {
//       const eventDate = new Date(event.date);
//       return eventDate <= now;
//     })
//   );

//   return (
//     <div className={styles.eventsPage}>
//       {/* Hero Section */}
//       <section className={styles.hero}>
//         <div className="container">
//           <div className={styles.heroContent}>
//             <h1 className={styles.heroTitle}>Campus Events</h1>
//             <p className={styles.heroSubtitle}>
//               Discover exciting events, workshops, and activities happening on
//               campus. Find your next adventure and connect with fellow students.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters Section */}
//       <section className={styles.filters}>
//         <div className="container">
//           <div className={styles.filtersContent}>
//             {/* Search */}
//             <div className={styles.searchSection}>
//               <div className={styles.searchInput}>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className={styles.searchIcon}
//                 >
//                   <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Search events..."
//                   value={searchTerm}
//                   onChange={handleSearch}
//                   className={styles.searchField}
//                   aria-label="Search events"
//                 />
//               </div>
//             </div>

//             {/* Filter Controls */}
//             <div className={styles.filterControls}>
//               <div className={styles.filterGroup}>
//                 <label htmlFor="category" className={styles.filterLabel}>
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   value={selectedCategory}
//                   onChange={handleCategoryChange}
//                   className={styles.filterSelect}
//                 >
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>


//               <div className={styles.filterGroup}>
//                 <label htmlFor="sortOrder" className={styles.filterLabel}>
//                   Order
//                 </label>
//                 <select
//                   id="sortOrder"
//                   value={sortOrder}
//                   onChange={handleSortOrderChange}
//                   className={styles.filterSelect}
//                 >
//                   <option value="asc">A-Z</option>
//                   <option value="desc">Z-A</option>
//                 </select>
//               </div>

//               <div className={styles.filterGroup}>
//                 <label htmlFor="startDate" className={styles.filterLabel}>
//                   From
//                 </label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   className={styles.filterSelect}
//                 />
//               </div>

//               <div className={styles.filterGroup}>
//                 <label htmlFor="endDate" className={styles.filterLabel}>
//                   To
//                 </label>
//                 <input
//                   type="date"
//                   id="endDate"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   className={styles.filterSelect}
//                 />
//               </div>

//               <button onClick={clearFilters} className={styles.clearBtn}>
//                 Clear Filters
//               </button>
//             </div>
//           </div>

//           <div className={styles.resultsInfo}>
//             <p className={styles.resultsCount}>
//               {upcomingEvents.length + pastEvents.length} event
//               {upcomingEvents.length + pastEvents.length !== 1 ? "s" : ""} found
//               ({upcomingEvents.length} upcoming, {pastEvents.length} past)
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className={styles.eventsSection}>
//         <div className="container">
//           <div className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>
//               <span className={styles.sectionIcon}></span>
//               Upcoming Events
//             </h2>
//             <span className={styles.eventCount}>{upcomingEvents.length} events</span>
//           </div>

//           {upcomingEvents.length === 0 ? (
//             <div className={styles.noEvents}>
//               <div className={styles.noEventsIcon}></div>
//               <h3>No upcoming events found</h3>
//               <p>Check back later for new events or try adjusting your filters.</p>
//             </div>
//           ) : (
//             <div className={styles.eventsContainer}>
//               {upcomingEvents.map((event) => (
//                 <EventCard
//                   key={event.id}
//                   {...event}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Past Events Section */}
//       <section className={styles.eventsSection}>
//         <div className="container">
//           <div className={styles.sectionHeader}>
//             <h2 className={styles.sectionTitle}>
//               <span className={styles.sectionIcon}></span>
//               Past Events
//             </h2>
//             <span className={styles.eventCount}>{pastEvents.length} events</span>
//           </div>

//           {pastEvents.length === 0 ? (
//             <div className={styles.noEvents}>
//               <div className={styles.noEventsIcon}></div>
//               <h3>No past events found</h3>
//               <p>No past events match your current filters.</p>
//             </div>
//           ) : (
//             <div className={styles.eventsContainer}>
//               {pastEvents.map((event) => (
//                 <EventCard
//                   key={event.id}
//                   {...event}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Events;

// import React, { useState, useEffect } from "react";
// import eventsData from "../data/ecard.json";
// import EventCard from "../components/EventCard";
// import styles from "../css/event.module.css";

// const Events = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortBy, setSortBy] = useState("date");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [events, setEvents] = useState([]);

//   useEffect(() => { setEvents(eventsData); }, []);

//   const categories = ["All", "Workshop", "Concert", "Seminar", "Sports", "Tech", "Technology", "Academic", "Cultural", "Art"];

//   const processEvents = (eventsList) => {
//     return eventsList
//       .filter(e => !searchTerm || e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.description.toLowerCase().includes(searchTerm.toLowerCase()))
//       .filter(e => selectedCategory === "All" ? true : e.category === selectedCategory)
//       .filter(e => {
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(endDate) : null;
//         const eventDate = new Date(e.date);
//         if (from && eventDate < from) return false;
//         if (to && eventDate > to) return false;
//         return true;
//       })
//       .sort((a, b) => {
//         if (sortBy === "date") return sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
//         if (sortBy === "title") return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
//         if (sortBy === "category") return sortOrder === "asc" ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category);
//         return 0;
//       });
//   };

//   const now = new Date();
//   const upcomingEvents = processEvents(events.filter(e => new Date(e.date) > now));
//   const pastEvents = processEvents(events.filter(e => new Date(e.date) <= now));

//   return (
//     <div className={styles.eventsPage}>
//       {/* Filters and sections like before */}
//       {/* <div className={styles.eventsContainer}> */}
//       <div className={`container my-5 pt-5`}>
//         <div className="row">
//             {upcomingEvents.map(e => <EventCard key={e.id} {...e} />)}
//             {pastEvents.map(e => <EventCard key={e.id} {...e} />)}
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Events;

import React, { useState, useEffect } from "react";
import eventsData from "../data/ecard.json";
import EventCard from "../components/EventCard";
import styles from "../css/event.module.css";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const categories = [
    "All",
    "Workshop",
    "Concert",
    "Seminar",
    "Sports",
    "Tech",
    "Technology",
    "Academic",
    "Cultural",
    "Art",
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);
  const handleSortOrderChange = (e) => setSortOrder(e.target.value);
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("date");
    setSortOrder("asc");
    setStartDate("");
    setEndDate("");
  };

  const processEvents = (eventsList) => {
    return eventsList
      .filter((event) => {
        const q = searchTerm.trim().toLowerCase();
        if (!q) return true;
        return (
          event.title?.toLowerCase().includes(q) ||
          event.description?.toLowerCase().includes(q) ||
          event.category?.toLowerCase().includes(q)
        );
      })
      .filter((event) =>
        selectedCategory === "All" ? true : event.category === selectedCategory
      )
      .filter((event) => {
        if (!startDate && !endDate) return true;
        const eventDate = new Date(event.date);
        const from = startDate ? new Date(startDate) : null;
        const to = endDate ? new Date(endDate) : null;

        if (from && eventDate < from) return false;
        if (to && eventDate > to) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "date") {
          return sortOrder === "asc"
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        }
        if (sortBy === "title") {
          return sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        if (sortBy === "category") {
          return sortOrder === "asc"
            ? a.category.localeCompare(b.category)
            : b.category.localeCompare(a.category);
        }
        return 0;
      });
  };

  const now = new Date();
  const upcomingEvents = processEvents(
    events.filter((event) => new Date(event.date) > now)
  );
  const pastEvents = processEvents(
    events.filter((event) => new Date(event.date) <= now)
  );

  return (
    <div className={styles.eventsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Campus Events</h1>
            <p className={styles.heroSubtitle}>
              Discover exciting events, workshops, and activities happening on
              campus. Find your next adventure and connect with fellow students.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filtersContent}>
            {/* Search */}
            <div className={styles.searchSection}>
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.searchField}
                aria-label="Search events"
              />
            </div>

            {/* Filter Controls */}
            <div className={styles.filterControls}>
              <div className={styles.filterGroup}>
                <label>Category</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={styles.filterSelect}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Sort By</label>
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className={styles.filterSelect}
                >
                  <option value="date">Date</option>
                  <option value="title">Title</option>
                  <option value="category">Category</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Order</label>
                <select
                  value={sortOrder}
                  onChange={handleSortOrderChange}
                  className={styles.filterSelect}
                >
                  <option value="asc">A-Z / Asc</option>
                  <option value="desc">Z-A / Desc</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>From</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={styles.filterSelect}
                />
              </div>

              <div className={styles.filterGroup}>
                <label>To</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={styles.filterSelect}
                />
              </div>

              <button onClick={clearFilters} className={styles.clearBtn}>
                Clear Filters
              </button>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <p className={styles.resultsCount}>
              {upcomingEvents.length + pastEvents.length} event
              {upcomingEvents.length + pastEvents.length !== 1 ? "s" : ""} found
              ({upcomingEvents.length} upcoming, {pastEvents.length} past)
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={styles.eventsSection}>
        <div className="container">
          <h2>Upcoming Events ({upcomingEvents.length})</h2>
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events found.</p>
          ) : (
            <div className={styles.eventsContainer}>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className={styles.eventsSection}>
        <div className="container">
          <h2>Past Events ({pastEvents.length})</h2>
          {pastEvents.length === 0 ? (
            <p>No past events found.</p>
          ) : (
            <div className={styles.eventsContainer}>
              {pastEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;

