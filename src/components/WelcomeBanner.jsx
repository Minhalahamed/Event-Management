import { useEffect, useState } from 'react';

const getProfile = () => {
  const role = localStorage.getItem('campusconnect-user-role') || '';
  const name = localStorage.getItem('campusconnect-user-name') || '';
  return { role, name };
};

const WelcomeBanner = () => {
  const [{ role, name }, setProfile] = useState(getProfile());

  useEffect(() => {
    const handleUpdate = () => setProfile(getProfile());
    window.addEventListener('userProfileUpdated', handleUpdate);
    return () => window.removeEventListener('userProfileUpdated', handleUpdate);
  }, []);

  if (!role || !name) return null;

  return (
    <div style={{
      backgroundColor: 'black',
      color: '#ffffff',
      padding: '0.5rem 1rem',
      textAlign: 'center',
      marginTop: '4.5rem',
    }}>
      Welcome to {role}, {name}
    </div>
  );
};

export default WelcomeBanner;