import React from 'react'
import classes from './Header.module.css';
const Header = () => {



    return (
        <div>
            <section className={classes.header}>

                <div className={classes.container_fluid}>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"> <img alt='' src="images/logo-1.png" className={classes.img_fluid} width="100%" /> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '21px',
                                        color: '#000000',
                                        padding: '0 17.5px',
                                    }} href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '21px',
                                        color: '#000000',
                                        padding: '0 17.5px',
                                    }} href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '21px',
                                        color: '#000000',
                                        padding: '0 17.5px',
                                    }} href="#">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '21px',
                                        color: '#000000',
                                        padding: '0 17.5px',
                                    }} href="#">Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{
                                        fontFamily: 'Roboto',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '21px',
                                        color: '#000000',
                                        padding: '0 17.5px',
                                    }} href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div style={{
                    marginTop: '182px'
                }}>
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3 header-left">
                            <div style={{
                                display: ' flex',
                                position: 'relative',
                            }}>
                                <img src="images/Group1.png" alt='' className="img-fluid" width="100%" />
                            </div>
                        </div>

                        <div className="col-md-6 mt-md-0 mt-3 header-right">
                            <div style={{
                                width: '69 %',
                                margin: 'auto',
                            }}>
                                <p style={{
                                    fontFamily: 'Rubik',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '56px',
                                    lineHeight: '66px',
                                    color: '#000000',
                                }}>Mendleson Communication and Engagement</p>
                                <p style={{
                                    fontFamily: 'Rubik',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '18px',
                                    lineHeight: '21px',
                                    color: '#2C2C2C',
                                    marginTop: '25px',
                                }
                                }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '7.5 %',
                }}>
                    <img src="images/Asset1.png" className="img-fluid" alt='' width="100%" />
                </div>

                <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '18.17%',
                    zIndex: '-1111',
                }}>
                    <img src="images/Asset2.png" className="img-fluid" alt='' width="100%" />
                </div>

                <div style={{
                    position: 'absolute',
                    left: '0',
                    bottom: '0',
                    width: '11.3 %',
                }}>
                    <img src="images/Asset3.png" className="img-fluid" alt='' width="100%" />
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10.9 %',
                }}>
                    <img src="images/Assets4.png" alt='' className="img-fluid" width="100%" />
                </div>

            </section >

            <section className="container-fluid about-us-section">

                <div className="about-us-area">

                    <div style={{
                        display: 'flex'
                    }}>

                        <div className="col-md-6 mt-md-0 mt-3" style={{
                            margin: '0 40px',
                            padding: '0',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img alt='' src="images/aboutus1.png" className="img-fluid about-left-img" />
                        </div>

                        <div className="col-md-6 mt-md-0 mt-3" style={{
                            margin: '0 40px',
                            padding: '0',
                        }}>
                            <div className="text-area">
                                <div className="up-side">
                                    <div className="about-text-style">
                                        <p style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '48px',
                                            lineHeight: '57px',
                                            color: '#000000',
                                            paddingBottom: '9px'
                                        }
                                        }>ABOUT US</p>
                                    </div>
                                    <p style={{
                                        fontFamily: 'Rubik',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '18px',
                                        lineHeight: '27px',
                                        color: '#2C2C2C',
                                        marginTop: '21px',
                                        width: '80%',
                                    }
                                    }>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '80 %',
                                    marginTop: '40px',
                                }}>
                                    <div style={{
                                        width: '50 %',
                                        padding: '0 41.5px 0 0',
                                    }}>
                                        <span className="icon-a">
                                            <img alt='' src="images/Enagagementicon.png" className="img-fluid" />
                                        </span>
                                        <p style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            textTransform: 'uppercase',
                                            color: '#000000',
                                            marginTop: '25px',
                                        }}>Engagement</p>
                                        <p style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '18px',
                                            lineHeight: '27px',
                                            color: '#2C2C2C',
                                            marginTop: '15px'
                                        }}>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                                            READ MORE</p>
                                    </div>
                                    <div style={{
                                        width: '50%',
                                        padding: ' 0 0 0 36.5px',
                                    }}>
                                        <span className=".icon_a">
                                            <img alt='' src="images/coomunicationicon.png" className="img-fluid" />
                                        </span>
                                        <p style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '24px',
                                            lineHeight: '28px',
                                            textTransform: 'uppercase',
                                            color: '#000000',
                                            marginTop: '25px',
                                        }}
                                        >Communications</p>
                                        <p style={{
                                            fontFamily: 'Rubik',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '18px',
                                            lineHeight: '27px',
                                            color: '#2C2C2C',
                                            marginTop: '15px'
                                        }}>We are award-winning leaders in communications and campaign management.
                                            READ MORE</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section >
        </div >
    )
}

export default Header