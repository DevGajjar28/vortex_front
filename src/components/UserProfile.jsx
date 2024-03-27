import React, { useState } from 'react';

const UserProfile = () => {
    // Initial profile state
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Hello, I am John Doe!',
        profilePhoto: 'https://example.com/default-profile-photo.jpg', // Default profile photo URL
    });

    // Handler for updating profile fields
    const handleProfileUpdate = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    // Handler for uploading profile photo
    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        // Assuming you're using FileReader API for image preview
        const reader = new FileReader();
        reader.onload = () => {
            setProfile({
                ...profile,
                profilePhoto: reader.result,
            });
        };
        reader.readAsDataURL(file);
    };

    // Handler for submitting profile updates
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can make an API request to update the profile on the backend
        console.log('Profile updated:', profile);
    };

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" value={profile.name} onChange={handleProfileUpdate} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" value={profile.email} onChange={handleProfileUpdate} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-gray-700">Bio:</label>
                    <textarea id="bio" name="bio" value={profile.bio} onChange={handleProfileUpdate} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="profilePhoto" className="block text-gray-700">Profile Photo:</label>
                    <input type="file" id="profilePhoto" accept="image/*" onChange={handlePhotoUpload} className="mt-1 block w-full" />
                    <img src={profile.profilePhoto} alt="Profile" className="mt-2 max-w-xs" />
                </div>
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Save</button>
            </form>
        </div>
    );
};

export default UserProfile;
