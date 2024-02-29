import React, { useState } from 'react';


function Registration() {
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: '',
        company: ''
    });
    const [displayData, setDisplayData] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    };

    const displayUserData = () => {
        setDisplayData(true);
    };

    return (
        <div>
            <div>
                <h2>Functional Components</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={userDetails.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Company:
                    <input
                        type="text"
                        name="company"
                        value={userDetails.company}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button onClick={displayUserData}>publish</button>
            {displayData && (
                <p>
                    <h1>Welcome</h1>
                    Hi {userDetails.name}, you are {userDetails.age} years old and working at {userDetails.company}.
                </p>
            )}
        </div>
    );
}

export default Registration;
