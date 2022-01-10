import React from 'react'
import {FaBuilding} from 'react-icons/fa';
import {HiLocationMarker} from 'react-icons/hi';

const LocationHome = () => {
    return (
        <section className="location-home">
            <div className="global-wrapper">
                <div className="title">
                    <h2>Location</h2>
                    <div className="underline"></div>
                </div>
                <div className="location-wrapper">
                    <div className="left">
                        <ul>
                            <li>
                                <FaBuilding className="icon" />
                                <span>Phnom Penh</span>
                            </li>
                            <li>
                                <HiLocationMarker className="icon" />
                                <span>Russian Federation Blvd (110), Phnom Penh</span>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <iframe title="Google Map Our Store" src="http://maps.google.com/maps?q=11.561880001775203,104.85298717093411&z=15&output=embed" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocationHome
