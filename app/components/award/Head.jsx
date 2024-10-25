import React from 'react';
import Image from 'next/image';
import head from '../../images/award/head.png'; 

const Head = () => {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '300px', // Adjust height as needed
        overflow: 'hidden',
    };

    const headingStyle = {
        position: 'absolute',
        top: '20px', // Adjust position as needed
        left: '20px', // Adjust position as needed
        color: 'white',
        fontSize: '2em', // Adjust font size as needed
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Optional shadow for better readability
    };

    return (
        <div style={containerStyle}>
            <Image
                src={head}
                alt="Background"
                layout="fill" // Fills the container
                objectFit="cover" // Maintains the aspect ratio
                style={{ opacity: 0.3 }} // Set opacity using inline styles
            />
            <h1 style={headingStyle}>Your Component Head</h1>
        </div>
    );
};

export default Head;
