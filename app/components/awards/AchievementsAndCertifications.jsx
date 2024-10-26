import React from 'react';

const AchievementsAndCertifications = () => {
    const achievements = [
        {
            imgSrc: "https://via.placeholder.com/405x240",
            title: "Lorem Ipsum 1",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            imgSrc: "https://via.placeholder.com/405x240",
            title: "Lorem Ipsum 2",
            description: "Lorem ipsum dolor sit amet.",
        },
        {
            imgSrc: "https://via.placeholder.com/405x240",
            title: "Lorem Ipsum 3",
            description: "Lorem ipsum dolor sit amet.",
        },
    ];

    return (
        <div style={{
            width: '100%', height: '100%', paddingLeft: '64px', paddingRight: '64px',
            paddingTop: '112px', paddingBottom: '112px', background: 'white',
            flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
            gap: '80px', display: 'inline-flex'
        }}>
            {/* Centered Heading */}
            <div style={{
                width: '100%',               // Full width for centering
                display: 'flex',             // Use flexbox
                justifyContent: 'center',     // Center horizontally
                alignItems: 'center',        // Center vertically if needed
                padding: '16px 0',          // Optional padding for spacing
                color: 'black', 
                fontSize: '40px', 
                fontFamily: 'Merriweather Sans',
                fontWeight: 700, 
                lineHeight: '48px', 
                wordWrap: 'break-word'
            }}>
                Achievements and Certifications
            </div>
            <div style={{
                alignSelf: 'stretch', height: '402px', flexDirection: 'column',
                justifyContent: 'flex-start', alignItems: 'flex-start', gap: '64px',
                display: 'flex'
            }}>
                <div style={{
                    alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start',
                    gap: '48px', display: 'inline-flex'
                }}>
                    {achievements.map((achievement, index) => (
                        <div key={index} style={{
                            flexDirection: 'column', justifyContent: 'flex-start',
                            alignItems: 'flex-start', gap: '32px', display: 'inline-flex'
                        }}>
                            <img style={{ width: '405.33px', height: '240px' }} src={achievement.imgSrc} alt={achievement.title} />
                            <div style={{
                                height: '130px', flexDirection: 'column',
                                justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch', height: '74px', flexDirection: 'column',
                                    justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px',
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch', color: 'black', fontSize: '24px',
                                        fontFamily: 'Roboto', fontWeight: 700, lineHeight: '33.60px',
                                        wordWrap: 'break-word'
                                    }}>
                                        {achievement.title}
                                    </div>
                                    <div style={{
                                        alignSelf: 'stretch', color: 'black', fontSize: '16px',
                                        fontFamily: 'Merriweather Sans', fontWeight: 400, lineHeight: '24px',
                                        wordWrap: 'break-word'
                                    }}>
                                        {achievement.description}
                                    </div>
                                </div>
                                <div style={{
                                    alignSelf: 'stretch', height: '24px', flexDirection: 'column',
                                    justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px',
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        justifyContent: 'center', alignItems: 'center', gap: '8px',
                                        display: 'inline-flex'
                                    }}>
                                        <div style={{
                                            color: 'black', fontSize: '16px', fontFamily: 'Roboto',
                                            fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word'
                                        }}>
                                            More
                                        </div>
                                        <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                                            <div style={{
                                                width: '7.12px', height: '11.41px',
                                                left: '8.29px', top: '5.54px', position: 'absolute', background: 'black'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AchievementsAndCertifications;
