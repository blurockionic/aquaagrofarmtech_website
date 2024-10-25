import React from 'react';

const AchievementsComponent = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            paddingLeft: '64px',
            paddingRight: '64px',
            paddingTop: '112px',
            paddingBottom: '112px',
            background: 'white',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '80px',
            display: 'inline-flex'
        }}>
            <div style={{
                width: '768px',
                textAlign: 'center',
                color: 'black',
                fontSize: '40px',
                fontFamily: 'Merriweather Sans',
                fontWeight: 700,
                lineHeight: '48px',
                wordWrap: 'break-word'
            }}>
                Glimpses of Achievements
            </div>
            <div style={{
                alignSelf: 'stretch',
                height: '402px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '64px',
                display: 'flex'
            }}>
                <div style={{
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '48px',
                    display: 'inline-flex'
                }}>
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: '32px',
                            display: 'inline-flex'
                        }}>
                            <img style={{
                                width: '405.33px',
                                height: '240px'
                            }} src={`https://via.placeholder.com/405x240`} alt={`Achievement ${index + 1}`} />
                            <div style={{
                                height: '130px',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                gap: '32px',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: '74px',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        color: 'black',
                                        fontSize: '24px',
                                        fontFamily: 'Roboto',
                                        fontWeight: 700,
                                        lineHeight: '33.60px',
                                        wordWrap: 'break-word'
                                    }}>
                                        lorem ipsum
                                    </div>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        color: 'black',
                                        fontSize: '16px',
                                        fontFamily: 'Merriweather Sans',
                                        fontWeight: 400,
                                        lineHeight: '24px',
                                        wordWrap: 'break-word'
                                    }}>
                                        lorem ipsum
                                    </div>
                                </div>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: '24px',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: '8px',
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '8px',
                                        display: 'inline-flex'
                                    }}>
                                        <div style={{
                                            color: 'black',
                                            fontSize: '16px',
                                            fontFamily: 'Roboto',
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            wordWrap: 'break-word'
                                        }}>
                                            more
                                        </div>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            position: 'relative'
                                        }}>
                                            <div style={{
                                                width: '7.12px',
                                                height: '11.41px',
                                                left: '8.29px',
                                                top: '5.54px',
                                                position: 'absolute',
                                                background: 'black'
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

export default AchievementsComponent;
