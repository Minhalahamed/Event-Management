// import { useState } from 'react'
// import styles from '../css/GalleryItem.module.css'

// const GalleryItem = ({ item }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handleImageClick = () => {
//     setIsModalOpen(true)
//   }

//   const handleModalClose = () => {
//     setIsModalOpen(false)
//   }

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setIsModalOpen(false)
//     }
//   }

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     })
//   }

//   const getCategoryColor = (category) => {
//     const colors = {
//       'Campus': '#3b82f6',
//       'Student Life': '#8b5cf6',
//       'Facilities': '#10b981',
//       'Sports': '#ef4444',
//       'Events': '#f59e0b',
//       'Research': '#06b6d4',
//       'Housing': '#84cc16',
//       'Arts': '#ec4899'
//     }
//     return colors[category] || '#64748b'
//   }

//   return (
//     <>
//       <div className={styles.galleryItem} onClick={handleImageClick}>
//         <div className={styles.imageContainer}>
//           <img src={item.image} alt={item.title} />
//           <div className={styles.imageOverlay}>
//             <div className={styles.overlayContent}>
//               <h3 className={styles.imageTitle}>{item.title}</h3>
//               <p className={styles.imageDescription}>{item.description}</p>
//             </div>
//           </div>
//         </div>
//         <div className={styles.itemInfo}>
//           <div 
//             className={styles.categoryBadge}
//             style={{ backgroundColor: getCategoryColor(item.category) }}
//           >
//             {item.category}
//           </div>
//           <div className={styles.itemMeta}>
//             <span className={styles.itemDate}>{formatDate(item.date)}</span>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={handleBackdropClick}>
//           <div className={styles.modalContent}>
//             <button 
//               className={styles.closeButton}
//               onClick={handleModalClose}
//               aria-label="Close modal"
//             >
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//               </svg>
//             </button>
//             <div className={styles.modalImage}>
//               <img src={item.image} alt={item.title} />
//             </div>
//             <div className={styles.modalInfo}>
//               <h2 className={styles.modalTitle}>{item.title}</h2>
//               <p className={styles.modalDescription}>{item.description}</p>
//               <div className={styles.modalMeta}>
//                 <div 
//                   className={styles.modalCategory}
//                   style={{ backgroundColor: getCategoryColor(item.category) }}
//                 >
//                   {item.category}
//                 </div>
//                 <span className={styles.modalDate}>{formatDate(item.date)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default GalleryItem;
import { useState } from 'react'
import styles from '../css/GalleryItem.module.css'

const GalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Campus': '#3b82f6',
      'Student Life': '#8b5cf6',
      'Facilities': '#10b981',
      'Sports': '#ef4444',
      'Events': '#f59e0b',
      'Research': '#06b6d4',
      'Housing': '#84cc16',
      'Arts': '#ec4899'
    }
    return colors[category] || '#64748b'
  }

  return (
    <>
      <div className={styles.galleryItem} onClick={handleImageClick}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.title} />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.imageTitle}>{item.title}</h3>
              <p className={styles.imageDescription}>{item.description}</p>
            </div>
          </div>
        </div>
        <div className={styles.itemInfo}>
          <div 
            className={styles.categoryBadge}
            style={{ backgroundColor: getCategoryColor(item.category) }}
          >
            {item.category}
          </div>
          <div className={styles.itemMeta}>
            <span className={styles.itemDate}>{formatDate(item.date)}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={handleBackdropClick}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={handleModalClose}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <div className={styles.modalImage}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryItem;
