import React from 'react'

export const Team = () => {
    return (
        <section class="container-fluid" style={{
            position: 'relative',
            paddingTop: '185px',
        }}>

            <div class="team-project-area">
                <div class="team-area">
                    <div style={{
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <p style={{
                            fontFamily: 'Rubik',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '48px',
                            lineHeight: '57px',
                            color: '#000000',
                            marginBottom: '10px'
                        }
                        }>OUR TEAM</p>
                    </div>
                    <div style={{
                        padding: '0 244px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginTop: '31px'
                    }}>
                        <div>
                            <img src="images/Person1.png" class="img-fluid" />
                            <p style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '24px',
                                lineHeight: '28px',
                                color: '#000000',
                                textAlign: 'center',
                                marginTop: '53px',
                            }}>Jessica D’suza</p>
                        </div>
                        <div>
                            <img src="images/Person2.png" class="img-fluid" />
                            <p style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '24px',
                                lineHeight: '28px',
                                color: '#000000',
                                textAlign: 'center',
                                marginTop: '53px',
                            }}>Johny Williams</p>
                        </div>
                        <div>
                            <img src="images/Person3.png" class="img-fluid" />
                            <p style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '24px',
                                lineHeight: '28px',
                                color: '#000000',
                                textAlign: 'center',
                                marginTop: '53px',
                            }}>Sanya R,</p>
                        </div>
                    </div>
                </div>
                <div class="project-area">
                    <div style={{
                        position: 'relative',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            fontFamily: 'Rubik',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '48px',
                            lineHeight: '57px',
                            color: '#000000',
                            marginBottom: '10px',
                        }}>
                            OUR PROJECTS
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        padding: '0 220px',
                        justifyContent: 'space-between',
                        marginTop: '27px',
                    }}>
                        <div style={{
                            width: '49%',
                        }}>
                            <img src="images/OurProject_1.png" class="img-fluid" width="100%;" />
                        </div>
                        <div style={{
                            width: '49%',
                        }}>
                            <div class="project-img-right1">
                                <img src="images/OurProject _ 2.png" class="img-fluid" width="100%;" />
                            </div>
                            <div class="project-img-right2">
                                <img src="images/OurProject_ 3.png" class="img-fluid" width="100%;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '23%'
            }}>
                <img src="images/Asset52.png" class="img-fluid" />
            </div>
            <div style={{
                position: 'absolute',
                top: '370px',
                right: '0',
                width: '17%',
            }
            }>
                <img src="images/Asset83.png" class="img-fluid" />
            </div>

        </section>


    )
}
