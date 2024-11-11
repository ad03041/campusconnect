import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfilePage: React.FC<{ setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsAuthorized }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

        // Add your save logic here
    };

    // Function to handle logout
    const handleLogout = () => {
        // Clear the authentication state here
        console.log('Logging out...');
        setIsAuthorized(false); // Update the state to reflect the user is logged out

        // Redirect to login or unauthorized homepage
        navigate('/'); // Redirecting to the home page (which would be UnauthorizedPage or Login)
    };

    return (
        <div className="container">
            {/* Top Bar */}
            <header className="topBar">
                <div className="greeting">Hello, [User's Name]</div>
                <div className="projectName">CampusConnect</div>
                <div className="actions">
                    <button className="button" onClick={() => navigate('/add-event')}>+Add Event</button>
                    <button className="button" onClick={handleLogout}>Logout</button> {/* Logout button */}
                </div>
            </header>

            {/* Profile Section */}
            <main className="profileSection">
                <div className="profileBox">
                    <h2 className="title">Profile Details</h2>
                    <form className="profileForm" onSubmit={handleSaveChanges}>
                        <label className="label" htmlFor="firstName">First Name</label>
                        <input 
                            className="input" 
                            type="text" 
                            id="firstName" 
                            value={formData.firstName} 
                            onChange={handleChange} 
                            placeholder="Enter first name" 
                        />

                        <label className="label" htmlFor="lastName">Last Name</label>
                        <input 
                            className="input" 
                            type="text" 
                            id="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            placeholder="Enter last name" 
                        />

                        <label className="label" htmlFor="email">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Enter email" 
                        />

                        <label className="label" htmlFor="password">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            id="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            placeholder="Enter password" 
                        />

                        {/* Save Changes Button */}
                        <button className="saveButton" type="submit">Save Changes</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
