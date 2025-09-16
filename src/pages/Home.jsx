import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import EventCard from '../components/EventCard';
import eventsData from '../data/ecard.json';
import "../css/ecard.css"; 
import pastEvents from "../data/pastEvents.json";
import "../css/pastevent.css";
import useUserProfile from '../data/useUserprofile';
import welcomeMessages from '../data/WelcomeMesage.json';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { name, role, isLoaded } = useUserProfile();

  const heroSlides = [
    {
      title: "Welcome To Campus Connect",
      subtitle: "Your gateway to exciting campus events, activities, and community engagement. Discover, participate, and connect with fellow students in meaningful ways.",
      image: "/banner ab.jpg",
      alt: "Campus Students"
    },
    {
      title: "Celebrating Cultures",
      subtitle: "Join us for an unforgettable cultural evening filled with music, dance, art, and traditions. Experience the diversity, unity, and creativity that bring our campus community together.",
      image: "/p2.jpg",
      alt: "Concert"
    },
    {
      title: "Fuel the Game, Feel the Glory",
      subtitle: "Get ready for an action-packed sports event where passion meets performance. From thrilling matches to team spirit, come witness the energy that drives our champions.",
      image: "/p6.jpg",
      alt: "Community"
    }
  ];

  // Personalized welcome
  const getPersonalizedWelcome = () => {
    if (!isLoaded || !name || !role) {
      return {
        title: "Welcome To Campus Connect",
        subtitle: "Your gateway to exciting campus events, activities, and community engagement. Discover, participate, and connect with fellow students in meaningful ways.",
        icon: "🎓",
        color: "#3b82f6"
      };
    }

    const roleData = welcomeMessages[role] || welcomeMessages.Student;
    return {
      title: roleData.greeting.replace('{name}', name),
      subtitle: roleData.subtitle,
      icon: roleData.icon,
      color: roleData.color
    };
  };

  const personalizedWelcome = getPersonalizedWelcome();

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* <WelcomeModal/>    */}
      <section className="hero">
        <div className="heroSlider">
          <div className="heroContent">
            <h1 className="heroTitle">
              {personalizedWelcome.title.includes('CampusConnect') ? (
                <>Welcome to <span className="highlight">CampusConnect</span></>
              ) : (
                <>
                  <span className="welcomeIcon" style={{ color: personalizedWelcome.color }}>
                    {personalizedWelcome.icon}
                  </span>
                  {personalizedWelcome.title}
                </>
              )}
            </h1>
            <p className="heroSubtitle">{personalizedWelcome.subtitle}</p>
            <div className="heroActions">
              <Link to="/events" className="btn">Explore Events</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>

          <div className="heroImage">
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="slideImage"
            />
          </div>

          {/* ✅ Arrows Fixed */}
          <div className="sliderControls">
            <button className="sliderBtn left" onClick={goToPrevious} aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            <button className="sliderBtn right" onClick={goToNext} aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <div className="events-header">
            <h2 className="events-title">
              Upcoming Events
              <p>Don't miss out on these exciting upcoming events with live countdown timers</p>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {eventsData.map((event) => (
              <SwiperSlide key={event.id}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  category={event.category}
                  description={event.description}
                  image={event.image}
                  date={event.date}
                  venue={event.venue}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <a href="/events" className="event-btn1">View All Events</a>
        </div>
      </section>

      {/* Past Events */}
      <section className="pastEvents">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle text-center">Past Events</h2>
            <p className="sectionSubtitle text-center">
              Relive the memories from our most successful events
            </p>
          </div>

          <div className="pastEventsList">
            {pastEvents.map((event, index) => (
              <div key={event.id} className={`pastEventItem ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="pastEventImage">
                  <img src={event.image} alt={event.title} className="pastEventImg" />
                </div>
                <div className="pastEventContent">
                  <div className="pastEventCategory">{event.category}</div>
                  <h3 className="pastEventTitle">{event.title}</h3>
                  <p className="pastEventDescription">{event.description}</p>
                  <div className="pastEventDate">{event.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
