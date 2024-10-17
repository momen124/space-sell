import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import UserProfile from '../components/profile/UserProfile';
import UserListings from '../components/profile/UserListings';
import RootLayout from '../layout';

const Profile: React.FC = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <RootLayout>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <UserProfile />
                <UserListings />
            </main>

           </RootLayout>
        </div>
    );
};

export default Profile;
