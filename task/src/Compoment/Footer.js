import React from 'react'

const Footer = () => {
    return (

        <footer class="container-fluid " style={{
            width: '100%',
            padding: '0 130px',
            marginTop: '75px',
        }}>
            <div style={{
                background: '#BFDBFF',
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                padding: '42px 0 30px 0',
            }}>

                <div class="social">
                    <p style={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '221%',
                        color: '#000000',
                    }}>Social</p>
                    <ul class="social-ul">
                        <li class="social-li">
                            <a href="#" style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '31px',
                                color: '#2C2C2C',
                            }
                            }><span style={{
                                marginRight: '14px'
                            }}><img src="images/facebook.png" class="img-fluid" /></span>Facebook</a>
                        </li>
                        <li class="social-li">
                            <a href="#" style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '31px',
                                color: '#2C2C2C',
                            }
                            }><span style={{
                                marginRight: '14px'
                            }}><img src="images/linkedin.png" class="img-fluid" /></span>Linkedin</a>
                        </li>
                        <li class="social-li">
                            <a href="#" style={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '31px',
                                color: '#2C2C2C',
                            }
                            }><span style={{
                                marginRight: '14px'
                            }}><img src="images/search.png" class="img-fluid" /></span>Google+</a>
                        </li>
                    </ul>
                </div>

                <div class="explore">
                    <p style={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '221%',
                        color: '#000000',
                    }}>Explore</p>
                    <ul>
                        <li class="explore-li"><a href="#" class="social-a">Service</a></li>
                        <li class="explore-li"><a href="#" class="social-a">Team</a></li>
                        <li class="explore-li"><a href="#" class="social-a">Clients</a></li>
                    </ul>
                </div>

                <div class="contact">
                    <p style={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '221%',
                        color: '#000000',
                    }}>Contact</p>
                    <ul>
                        <li><a href="#" class="social-a">Lorem Ipsum dummy address</a></li>
                        <li><a href="#" class="social-a">used for display</a></li>
                        <li><a href="#" class="social-a">1234567890</a></li>
                    </ul>
                </div>

                <div class="email">
                    <p style={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '16px',
                        lineHeight: '221%',
                        color: '#000000',
                    }}>Email</p>
                    <ul>
                        <li><a href="#" class="social-a">mendlesoncommunication@email.com</a></li>
                    </ul>
                </div>

            </div>
            <div style={{
                textAlign: 'center'
            }}>
                <p style={{
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#2C2C2C',
                    padding: '22px 0',
                }
                }>© Copyright 2018 Mendleson Communication Pty Ltd </p>
            </div>
        </footer>


    )
}

export default Footer