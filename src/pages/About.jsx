import styles from '../css/About.module.css';
import teamMembers from '../data/teamMembers.json';
import  values from '../data/values.json'
import eventsData from '../data/ecard.json';
const annualEventTitles = ['Cultural Night', 'New Year Gala', 'Cricket Tournament', 'Football Cup'];
const annualEvents = eventsData.filter(e => annualEventTitles.includes(e.title));
const hostedEvents = Array.isArray(eventsData) ? eventsData : [];
const About = () => {
  




  return (
    <div className={styles.about}>
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About CampusConnect</h1>
            <p className={styles.heroSubtitle}>
              We're passionate about creating meaningful connections and unforgettable experiences 
              that enrich campus life for every student.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.mission}>
  <div className="container">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>NEXA College</h2>
      <p className={styles.sectionSubtitle}>
        A vibrant community fostering innovation, culture, and excellence.
      </p>
    </div>
    <div className={styles.missionContent}>
      <div className={styles.missionText}>
        <p className={styles.missionDescription}>
          Our college is dedicated to holistic student development—combining rigorous academics
          with a rich calendar of events, clubs, and initiatives that build leadership and community.
        </p>
        <p className={styles.missionDescription}>
          With state-of-the-art facilities, industry partnerships, and a diverse student body,
          we empower learners to explore, create, and lead.
        </p>
      </div>
      <div className={styles.missionImage}>
        <img
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=400&fit=crop"
          alt="Our campus"
        />
      </div>
    </div>
  </div>
</section>
<section className={styles.values}>
  <div className="container">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Annual Events</h2>
      <p className={styles.sectionSubtitle}>
        Signature events we celebrate every year
      </p>
    </div>

    <div className={styles.valuesGrid}>
      {annualEvents.map(ev => (
        <div key={ev.id} className={styles.valueItem}>
          <div className={styles.valueIcon}>
            <img src={ev.image} alt={ev.title} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8 }} />
          </div>
          <h3 className={styles.valueTitle}>{ev.title}</h3>
          <p className={styles.valueDescription}>{ev.description}</p>
          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
            {new Date(ev.date).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className={styles.team}>
  <div className="container">
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>Hosted by College</h2>
      <p className={styles.sectionSubtitle}>
        A snapshot of events organized on campus across categories
      </p>
    </div>

    <div className={styles.teamGrid}>
      {hostedEvents.map(ev => (
        <div key={ev.id} className={styles.teamMember}>
          <div className={styles.memberImage}>
            <img src={ev.image} alt={ev.title} />
          </div>
          <div className={styles.memberInfo}>
            <h3 className={styles.memberName}>{ev.title}</h3>
            <p className={styles.memberRole}>{ev.category}</p>
            <p className={styles.memberDepartment}>
              {new Date(ev.date).toLocaleDateString()}
            </p>
            <p className={styles.memberBio}>{ev.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide everything we do
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.sectionSubtitle}>
              The dedicated professionals behind CampusConnect
            </p>
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberDepartment}>{member.department}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

 
    </div>
  )
}

export default About
