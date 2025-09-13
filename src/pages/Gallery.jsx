
import { useState, useEffect } from 'react'
import GalleryItem from '../components/GalleryItem'
import galleryData from "../data/gallery.json";
import styles from "../css/Gallery.module.css";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [viewMode, setViewMode] = useState('grid') 

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setGalleryItems(galleryData)
      setFilteredItems(galleryData)
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  
  useEffect(() => {
    let filtered = [...galleryItems]

    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    
    if (selectedYear !== 'All') {
      filtered = filtered.filter(item => {
        if (!item.date) return false
        const year = new Date(item.date).getFullYear()
        return year.toString() === selectedYear
      })
    }

    setFilteredItems(filtered)
  }, [galleryItems, selectedCategory, selectedYear])

  
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))]
  const years = ['All', ...new Set(
    galleryItems
      .filter(item => item.date) 
      .map(item => new Date(item.date).getFullYear().toString())
  )]

  
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value)
  const handleYearChange = (e) => setSelectedYear(e.target.value)
  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedYear('All')
  }

  return (
    <div className={styles.gallery}>
  
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Campus Gallery</h1>
            <p className={styles.heroSubtitle}>
              Explore our beautiful campus through stunning photos of facilities, events, 
              and student life. Get a glimpse of what makes our community special.
            </p>
          </div>
        </div>
      </section>

      
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filtersContent}>
            <div className={styles.filterControls}>
              
            
              <div className={styles.filterGroup}>
                <label htmlFor="category" className={styles.filterLabel}>Category</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className={styles.filterSelect}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.filterGroup}>
                <label htmlFor="year" className={styles.filterLabel}>Year</label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  className={styles.filterSelect}
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              
              <div className={styles.viewControls}>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-2-12H7v4h10V7zm0 6H7v4h10v-4z"/>
                  </svg>
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'masonry' ? styles.active : ''}`}
                  onClick={() => setViewMode('masonry')}
                  aria-label="Masonry view"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zm-2-12H7v2h10V7zm0 4H7v2h10v-2zm0 4H7v2h10v-2z"/>
                  </svg>
                </button>
              </div>

              <button onClick={clearFilters} className={styles.clearBtn}>
                Clear Filters
              </button>
            </div>

            <div className={styles.resultsInfo}>
              <p className={styles.resultsCount}>
                {filteredItems.length} photo{filteredItems.length !== 1 ? 's' : ''} found
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {selectedYear !== 'All' && ` (${selectedYear})`}
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className={styles.gallerySection}>
        <div className="container">
          {isLoading ? (
            <div className={styles.loading}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading gallery...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
              <h3 className={styles.noResultsTitle}>No photos found</h3>
              <p className={styles.noResultsDescription}>
                Try selecting a different filter or browse all photos.
              </p>
              <button onClick={clearFilters} className="btn btn-primary">
                Show All Photos   
              </button>
            </div>
          ) : (
            <div className={`${styles.galleryGrid} ${viewMode === 'masonry' ? styles.masonry : ''}`}>
              {filteredItems.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Gallery

