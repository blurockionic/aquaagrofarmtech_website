import React from 'react';
import Image from 'next/image';
import head from '../../images/award/head.png';

const ImageHeader = ({ title }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '400px', textAlign: 'left', padding: '20px' }}>
            {/* Background Image */}
            <Image
                src={head} // Path to the image
                alt="Background"
                fill // Use fill for layout
                style={{ 
                    objectFit: 'cover', // Use CSS for image fitting
                    opacity: 0.30// Set the opacity to a value between 0 and 1
                }}
            />
            {/* Subheading for Awards */}
            <div style={{
                color: '#A5D6A7',
                fontSize: '20px',
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: '27px',
                marginTop: '20px' // Add some spacing from the top
            }}>
                Awards
            </div>
            {/* Main Heading for Achievements */}
            <div style={{
                color: 'black',
                fontSize: '60px',
                fontFamily: 'Merriweather Sans',
                fontWeight: 700,
                lineHeight: '67.20px',
                marginTop: '10px', // Space below the subheading
                marginBottom: '20px' // Space above the description
            }}>
                Our Achievements
            </div>
            {/* Description Text */}
            <div style={{
                color: '#FFEB3B',
                fontSize: '30px',
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: '27px',
                wordWrap: 'break-word'
            }}>
                We proudly share our awards and recognition, a testament to our hard work.
            </div>
        </div>
    );
};

export default ImageHeader;
