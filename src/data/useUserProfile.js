import { useState, useEffect } from 'react';

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    role: '',
    isLoaded: false
  });

  useEffect(() => {
    // Load user profile from localStorage
    const name = localStorage.getItem('campusconnect-user-name') || '';
    const role = localStorage.getItem('campusconnect-user-role') || '';
    
    setUserProfile({
      name,
      role,
      isLoaded: true
    });

    // Listen for profile updates
    const handleProfileUpdate = () => {
      const updatedName = localStorage.getItem('campusconnect-user-name') || '';
      const updatedRole = localStorage.getItem('campusconnect-user-role') || '';
      
      setUserProfile({
        name: updatedName,
        role: updatedRole,
        isLoaded: true
      });
    };

    window.addEventListener('userProfileUpdated', handleProfileUpdate);
    
    return () => {
      window.removeEventListener('userProfileUpdated', handleProfileUpdate);
    };
  }, []);

  return userProfile;
};

export default useUserProfile;
