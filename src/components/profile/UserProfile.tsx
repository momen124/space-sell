import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <img
                    src="https://picsum.photos/200/200?random=profile"
                    alt="User profile"
                    className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-blue-500"
                />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">John Doe</h2>
                    <p className="text-gray-600 mb-2">New York, NY</p>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Edit Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
