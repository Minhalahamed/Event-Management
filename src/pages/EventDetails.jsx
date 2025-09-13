
// import React from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import eventsData from '../data/ecard.json';
// import styles from '../css/event.module.css';

// const resolveImage = (src) => {
//   if (!src) return '';
//   if (/^https?:\/\//i.test(src)) return src;
//   return `/${src.replace(/^\/+/, '')}`;
// };

// function EventDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const event = Array.isArray(eventsData)
//     ? eventsData.find(e => String(e.id) === String(id))
//     : null;

//   if (!event) {
//     return (
//       <div className="container" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
//         <h2>Event not found</h2>
//         <p>We couldn't find the event you're looking for.</p>
//         <Link to="/events" className="btn btn-outline">Back to Events</Link>
//       </div>
//     );
//   }

//   const formatted = event.date ? new Date(event.date).toLocaleString() : 'TBA';
//   const eventDate = event.date ? new Date(event.date) : null;
//   const isUpcoming = eventDate && eventDate > new Date();
//   const isPast = eventDate && eventDate < new Date();

//   return (
//     <div className="container" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
//       <div className={styles.hero}>
//         <div className="container">
//           <div className={styles.heroContent}>
//             <h1 className={styles.heroTitle}>{event.title}</h1>
//             <p className={styles.heroSubtitle}>{event.category} • {formatted}</p>
//           </div>
//         </div>
//       </div>

//       <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
//         <img
//           src={resolveImage(event.image)}
//           alt={event.title}
//           style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 12 }}
//         />

       
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
//           gap: '1.5rem' 
//         }}>
        
//           <div style={{ 
//             background: '#fff', 
//             padding: '1.5rem', 
//             borderRadius: 12, 
//             boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
//             border: '1px solid #e5e7eb'
//           }}>
//             <h2 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.5rem' }}>
//               Event Information
//             </h2>
            
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                 </svg>
//                 <div>
//                   <div style={{ fontWeight: '600', color: '#374151' }}>Venue</div>
//                   <div style={{ color: '#6b7280' }}>{event.venue || 'TBA'}</div>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
//                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
//                 </svg>
//                 <div>
//                   <div style={{ fontWeight: '600', color: '#374151' }}>Date & Time</div>
//                   <div style={{ color: '#6b7280' }}>{formatted}</div>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
//                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                 </svg>
//                 <div>
//                   <div style={{ fontWeight: '600', color: '#374151' }}>Category</div>
//                   <div style={{ 
//                     color: '#6b7280',
//                     background: 'linear-gradient(135deg, rgba(3,35,52,0.85), #b90a0a)',
//                     color: 'white',
//                     padding: '0.25rem 0.75rem',
//                     borderRadius: '999px',
//                     fontSize: '0.875rem',
//                     fontWeight: '600',
//                     display: 'inline-block'
//                   }}>
//                     {event.category}
//                   </div>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: isUpcoming ? '#10b981' : isPast ? '#ef4444' : '#6b7280' }}>
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//                 </svg>
//                 <div>
//                   <div style={{ fontWeight: '600', color: '#374151' }}>Status</div>
//                   <div style={{ 
//                     color: isUpcoming ? '#10b981' : isPast ? '#ef4444' : '#6b7280',
//                     fontWeight: '600'
//                   }}>
//                     {isUpcoming ? 'Upcoming' : isPast ? 'Past Event' : 'TBA'}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//           <div style={{ 
//             background: '#fff', 
//             padding: '1.5rem', 
//             borderRadius: 12, 
//             boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
//             border: '1px solid #e5e7eb'
//           }}>
//             <h2 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.5rem' }}>
//               About this event
//             </h2>
//             <p style={{ 
//               color: '#374151', 
//               lineHeight: '1.7',
//               fontSize: '1rem'
//             }}>
//               {event.description}
//             </p>
//           </div>
//         </div>

        
//         <div style={{ 
//           display: 'flex', 
//           gap: '1rem', 
//           alignItems: 'center',
//           justifyContent: 'center',
//           flexWrap: 'wrap',
//           marginTop: '2rem'
//         }}>
//           {isUpcoming && (
//             <button
//               onClick={() => navigate('/register')}
//               style={{
//                 background: 'linear-gradient(135deg, rgba(3,35,52,0.85), #b90a0a)',
//                 color: 'white',
//                 padding: '0.8rem 2rem',
//                 border: 'none',
//                 borderRadius: '8px',
//                 fontSize: '1rem',
//                 fontWeight: '600',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
//                 minWidth: '140px',
//                 height: '48px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
//               }}
//             >
//               Register Now
//             </button>
//           )}
          
//           <Link
//             to="/events"
//             style={{
//               background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
//               color: '#374151',
//               padding: '0.8rem 2rem',
//               border: '1px solid #d1d5db',
//               borderRadius: '8px',
//               fontSize: '1rem',
//               fontWeight: '600',
//               textDecoration: 'none',
//               transition: 'all 0.3s ease',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               minWidth: '140px',
//               height: '48px',
//               boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
//               e.target.style.background = 'linear-gradient(135deg, #e5e7eb, #d1d5db)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.05)';
//               e.target.style.background = 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
//             }}
//           >
//             Back to Events
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventDetails;


import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import eventsData from '../data/ecard.json';
import styles from '../css/event.module.css';

const resolveImage = (src) => {
  if (!src) return '';
  if (/^https?:\/\//i.test(src)) return src;
  return `/${src.replace(/^\/+/, '')}`;
};

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = Array.isArray(eventsData)
    ? eventsData.find(e => String(e.id) === String(id))
    : null;

  if (!event) {
    return (
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <h2>Event not found</h2>
        <p>We couldn't find the event you're looking for.</p>
        <Link to="/events" className="btn btn-outline">Back to Events</Link>
      </div>
    );
  }

  const formatted = event.date ? new Date(event.date).toLocaleString() : 'TBA';
  const eventDate = event.date ? new Date(event.date) : null;
  const isUpcoming = eventDate && eventDate > new Date();
  const isPast = eventDate && eventDate < new Date();

  return (
    <div className="container" style={{ paddingTop: '6rem', paddingBottom: '2rem',borderRadius:'12px' }}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{event.title}</h1>
            <p className={styles.heroSubtitle}>{event.category} • {formatted}</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
        <img
          src={resolveImage(event.image)}
          alt={event.title}
          style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: '12px' }}
        />

        {/* Event Details Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {/* Event Information Card */}
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: 12, 
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.5rem' }}>
              Event Information
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Venue</div>
                  <div style={{ color: '#6b7280' }}>{event.venue || 'TBA'}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Date & Time</div>
                  <div style={{ color: '#6b7280' }}>{formatted}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6366f1' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Category</div>
                  <div style={{ 
                    color: '#6b7280',
                    background: 'linear-gradient(135deg, rgba(3,35,52,0.85), #b90a0a)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {event.category}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: isUpcoming ? '#10b981' : isPast ? '#ef4444' : '#6b7280' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div>
                  <div style={{ fontWeight: '600', color: '#374151' }}>Status</div>
                  <div style={{ 
                    color: isUpcoming ? '#10b981' : isPast ? '#ef4444' : '#6b7280',
                    fontWeight: '600'
                  }}>
                    {isUpcoming ? 'Upcoming' : isPast ? 'Past Event' : 'TBA'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Description Card */}
          <div style={{ 
            background: '#fff', 
            padding: '1.5rem', 
            borderRadius: 12, 
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{ marginBottom: '1rem', color: '#1f2937', fontSize: '1.5rem' }}>
              About this event
            </h2>
            <p style={{ 
              color: '#374151', 
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              {event.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          {isUpcoming && (
            <button
              onClick={() => navigate('/register')}
              style={{
                background: 'linear-gradient(135deg, rgba(3,35,52,0.85), #b90a0a)',
                color: 'white',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                minWidth: '140px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.1)';
              }}
            >
              Register Now
            </button>
          )}
          
          <Link
            to="/events"
            style={{
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              color: '#374151',
              padding: '0.8rem 2rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '140px',
              height: '48px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
              e.target.style.background = 'linear-gradient(135deg, #e5e7eb, #d1d5db)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 14px rgba(0,0,0,0.05)';
              e.target.style.background = 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
            }}
          >
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
