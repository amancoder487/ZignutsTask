import React from 'react'

const Clients = () => {
    return (
        <section style={{
            position: 'relative',
            paddingTop: '75px',
            marginTop: '62px',
        }}>
            <div class="our-clients-area">
                <div style={{
                    textAlign: 'center',
                    position: 'relative',
                }}>
                    <p style={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '48px',
                        lineHeight: '57px',
                        color: ' #000000',
                        marginBottom: '10px',
                    }}>OUR CLIENTS</p>
                </div>
                <div style={{
                    padding: '0 233px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginTop: '40px',
                    }
                    }>
                        <img src="images/Layer19.png" class="img-fluid" style={{
                            width: '214px',
                            height: '161px',
                        }} />
                        <img src="images/Layer20.png" class="img-fluid" style={{
                            width: '129px',
                            height: '131px',
                            marginTop: '15px'
                        }
                        } />
                        <img src="images/1280px-Brigitte-Logo.png" class="img-fluid " style={{
                            width: '222px',
                            height: '62px',
                            marginTop: '50px'
                        }
                        } />
                        <img src="images/Layer22.png" class="img-fluid " style={{
                            width: '147px',
                            height: '107px',
                            marginTop: '27px'
                        }
                        } />
                        <img src="images/BHP_2017_logo.png" class="img-fluid " style={{
                            width: '163px',
                            height: '63px',
                            marginTop: '49px'
                        }
                        } />
                    </div>

                    <div class="our-clients-img1">
                        <img src="images/Layer21.png" class="img-fluid" style={{
                            width: '185px',
                            height: '106px',
                            marginTop: '32px'
                        }
                        } />
                        <img src="images/Layer23.png" class="img-fluid " style={{
                            width: '268px',
                            height: '120px',
                            marginTop: '25px'
                        }
                        } />
                        <img src="images/Layer24.png" class="img-fluid " style={{
                            width: '246px',
                            height: '99px',
                            marginTop: '35px'
                        }
                        } />
                        <img src="images/MelbourneWaterLogo-1024x282.png" class="img-fluid" style={{
                            width: '243px',
                            height: '58px',
                            marginTop: '56px'
                        }
                        } />
                    </div>

                </div>

            </div>

            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '20.5%',
            }
            }>
                <img src="images/Assets91.png" class="img-fluid" />
            </div>

        </section>


    )
}
export default Clients;