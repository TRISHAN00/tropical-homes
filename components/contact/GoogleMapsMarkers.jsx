import React, {useEffect, useState, useRef} from 'react';
import {
    GoogleMap,
    Marker,
    InfoWindow
} from '@react-google-maps/api';
import Button from "./../Button";
import styled from 'styled-components';
import {
    LightgalleryProvider,
    LightgalleryItem,
} from "react-lightgallery";
import {Img} from "../Img";
import {title} from "../../styles/globalStyleVars";
import {Col} from "react-bootstrap";
import Link from "next/link";

const GoogleMapsMarkers = ({offset, full, dataMap, data, detail, gallery, slide, windowWidth}) => {
    const images = gallery?.images?.slice(0, 4)

    const mapStyles = {
        height: '100%',
        width: '100%',
    };

    const defaultCenter = {
        lat: 23.801927, // Replace with marker latitude
        lng: 90.4029675, // Replace with marker longitude
    };

    const center = {
        lat: 23.801927, // Replace with marker latitude
        lng: 90.4029675, // Replace with marker longitude
    };

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [directions, setDirections] = useState(null);


    const markers = data && Array.isArray(data) ? data.map((item, index) => {
        return {
            id: index,
            position: {lat: parseFloat(item?.product_data?.latitude), lng: parseFloat(item?.product_data?.longitude)},
            icon: '/images/static/icon.svg',
            content: item?.product_data?.title,
            url: item?.product_data?.url,
            location: item?.product_data?.location,
            type: item?.product_data?.type,
            type2: item?.product_data?.location,
            katha: item?.product_data?.katha,
            storied: item?.product_data?.storied,
            facing: item?.product_data?.facing,
            image: item?.product_data?.image,
            slug: item?.product_data?.slug,
        };
    }) : [];


    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };

    const customMapStyle = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]; // Paste your copied JSON style here

    const mapOptions = {
        styles: customMapStyle,
    };

    const [selectedMarkerId, setSelectedMarkerId] = useState(null);

    const handleButtonClick = (selectedId) => {
        setSelectedMarkerId(selectedId)
    };
    const handleButtonClickClose = () => {
        setSelectedMarkerId(null);
        setIsVisible((prevVisible) => !prevVisible);
    };


    const mapRef = useRef(null);
    const [map, setMap] = useState(/** @type google.map.Map*/ (false));





    // Use Intersection Observer to detect when the map component is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Map component is in the viewport, trigger rendering
                    setMap(true)
                    observer.disconnect(); // Disconnect the observer once rendered
                }
            });
        });

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => {
            // Clean up the observer when the component unmounts
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);


    return (
        <StyledComponent offset={offset}>
            <Col md={12} className={'show-in-mobile'}>
                <h2>{dataMap?.section_data?.subtitle}</h2>
            </Col>
            <Col className={'p-0'} md={full ? 12 : 8} style={{height: '90vh'}} ref={mapRef}>
                {
                    map &&
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={15}
                        center={markers[0]?.position}
                        options={mapOptions}
                    >
                        {markers.map((marker) => (
                            <Marker
                                key={marker.id}
                                position={marker.position}
                                icon={marker.icon}
                                onClick={() => {
                                    handleMarkerClick(marker)
                                    handleButtonClick(marker.id)
                                }
                                }
                            >
                            </Marker>
                        ))}


                        {selectedMarker && (
                            <InfoWindow
                                position={selectedMarker.position}
                                onCloseClick={handleInfoWindowClose}
                            >
                                <div>
                                    <p>{selectedMarker?.type}</p>
                                    <h6>{selectedMarker?.content}</h6>
                                    <p>{selectedMarker?.location}</p>
                                    {
                                        detail ? '' : <div onClick={() => handleButtonClick(selectedMarker.id)}
                                                           className={'map-button'}
                                                           data-id={selectedMarker.id}>
                                            <Link href={`projects/${selectedMarker?.slug}`}>
                                                <span>Click</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9.49" height="17.824"
                                                     viewBox="0 0 9.49 17.824">
                                                    <line id="Line_4" data-name="Line 4" x1="6.667" y1="7.5"
                                                          transform="translate(1.412 1.412)" fill="none" stroke="#fff"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_5" data-name="Line 5" x1="6.667" y2="7.5"
                                                          transform="translate(1.412 8.912)" fill="none" stroke="#fff"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    }
                                    {
                                        slide && <div onClick={() => handleButtonClick(selectedMarker.id)}
                                                      className={'map-button'}
                                                      data-id={selectedMarker.id}>
                                            <a target={"_blank"} href={selectedMarker?.url}>
                                                <span>Click</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="9.49" height="17.824"
                                                     viewBox="0 0 9.49 17.824">
                                                    <line id="Line_4" data-name="Line 4" x1="6.667" y1="7.5"
                                                          transform="translate(1.412 1.412)" fill="none" stroke="#fff"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_5" data-name="Line 5" x1="6.667" y2="7.5"
                                                          transform="translate(1.412 8.912)" fill="none" stroke="#fff"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                </svg>
                                            </a>
                                        </div>
                                    }
                                </div>
                            </InfoWindow>
                        )}

                    </GoogleMap>
                }

            </Col>
            {/*</LoadScript>*/}
            {
                windowWidth > 767 &&
                <LightgalleryProvider
                    lightgallerySettings={
                        {
                            download: false,
                            thumbnail: false,
                            fullScreen: true,
                            share: false
                        }
                    }
                >
                    {
                        slide ? '' : <div className="google-map-side-gallery">
                            {markers.map((marker) => (
                                <div key={marker.id} data-item={marker.id}
                                     className={`item-single-gallery ${selectedMarkerId === marker.id ? 'active' : ''}`}>
                                    <div onClick={handleButtonClickClose} className="close-modal-map">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21.414" height="21.414"
                                             viewBox="0 0 21.414 21.414">
                                            <line id="Line_370" data-name="Line 370" x2="28.284"
                                                  transform="translate(0.707 0.707) rotate(45)" fill="none"
                                                  stroke="#fff"
                                                  stroke-linecap="round" stroke-width="1"/>
                                            <line id="Line_371" data-name="Line 371" x2="28.284"
                                                  transform="translate(20.707 0.707) rotate(135)" fill="none"
                                                  stroke="#fff"
                                                  stroke-linecap="round" stroke-width="1"/>
                                        </svg>
                                    </div>

                                    <div className="content">
                                        <p>{marker?.type}</p>
                                        <h4>{marker?.content}</h4>
                                        <p>{marker?.location}</p>
                                        {
                                            images && <div className="content__img">
                                                <ul>
                                                    {
                                                        images && images?.map((item, index) => {
                                                            return (
                                                                <li key={index}><LightgalleryItem group={'any'}
                                                                                                  src={item?.full_path}>
                                                                    <div className="img-wrapper">
                                                                        <Img src={item?.full_path}/>
                                                                    </div>
                                                                </LightgalleryItem></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }
                                        {
                                            marker?.image && <div className="content__img">
                                                <ul>
                                                    {
                                                        marker?.image && marker?.image?.map((item, index) => {
                                                            return (
                                                                <li key={index}><LightgalleryItem group={'any'}
                                                                                                  src={item?.full_path}>
                                                                    <div className="img-wrapper">
                                                                        <Img src={item?.full_path}/>
                                                                    </div>
                                                                </LightgalleryItem></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        }

                                        <Button color={'#F1EEE9'} icon_border={'#F1EEE9'}
                                                src={`/projects/${marker.slug}`}
                                                margin={'40px 0 0'}
                                                text={'LEARN MORE'}/>

                                    </div>
                                </div>

                            ))}
                        </div>
                    }
                </LightgalleryProvider>
            }
            {
                !full && <Col className="initial-content" md={{span: 4, offset: 8}}>
                    <h2>{dataMap?.section_data?.subtitle}</h2>
                </Col>
            }

        </StyledComponent>

    );
};

const StyledComponent = styled.section`
    height: 90vh;
    position: relative;
    overflow: hidden;

    .gmnoprint .gm-style-mtc button {
        background: rgb(29, 49, 48) !important;
        color: #fff !important;
    }
    .gm-control-active:active>img:nth-child(2),
    .gm-control-active:focus>img:nth-child(2),
    .gm-control-active:hover>img:nth-child(2) {
        display: none !important;
    }
    .gm-control-active>img:nth-child(1) {
        background: rgb(29, 49, 48) !important;
        top: 50%;
    }
    .gm-control-active > img:nth-child(1) {
        display: block!important;
    }
    .gm-control-active {
        background: rgb(29, 49, 48) !important;
    }
    .gmnoprint .gm-style-mtc button {
        background: rgb(29, 49, 48) !important;
        color: #fff !important; /* Change text color if needed */
    }
    .gmnoprint div {
        &:first-child {
            height: 0px!important;
        }
    }
    .gmnoprint div {
        height: 0px!important;
    }

    @media (max-width: 550px) {
        height: auto;
    }

    .map-button {
        cursor: pointer;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-top: 10px;

        svg {
            transform: translateX(0);
            transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
        }

        &:hover {
            svg {
                transform: translateX(10px);
            }
        }
    }

    .direction {
        position: absolute;
        content: '';
        top: 50px;
    }

    .dc-btn {
        margin: unset;
    }

    .show-in-mobile {
        background-color: #1D3130;
        padding: 80px 0px 40px 0px;
        display: none;

        h2 {
            font-size: 32px;
            font-weight: 300;
            line-height: 40px;
            font-family: ${title};
            color: #FFFFFF;
            padding: 0px 15px;
            text-transform: uppercase;
        }
    }

    .google-map-side-gallery {
        .item-single-gallery {
            background: #1D3130;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
            position: absolute;
            padding: 60px 70px 0px 70px;
            transform: translateX(100%);
            min-width: 505px;
            transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);
            box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 7px 1px;

            .content {
                //height: calc(80vh - 60px);
                overflow-x: scroll;
                /* Hide scrollbar for IE, Edge and Firefox */
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none; /* Firefox */

                &::-webkit-scrollbar {
                    display: none;
                }

                &__img {
                    padding-top: 120px;
                    padding-bottom: 40px;

                    ul {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                        width: 300px;
                    }


                    img {
                        margin-bottom: 10px;
                    }
                }

                p {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    text-transform: uppercase;

                    &:first-child {
                        margin-bottom: 10px;
                        margin-top: 10px;
                    }
                }

                h4 {
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 30px;
                    text-transform: uppercase;
                    //width: 35%;
                    color: #fff;
                    font-family: ${title};
                    margin-bottom: 10px;
                    text-align: left;
                }
            }

            .gallery {
                ul {
                    margin: 0;
                    gap: 15px;
                    flex-wrap: wrap;
                    flex-direction: unset;

                    li {
                        flex: 0 0 calc(50% - 15px);
                        margin: 0;

                        .react_lightgallery_item {
                            width: 100%;
                            cursor: pointer;
                        }


                    }
                }
            }

            &.active {
                transform: translateX(0);
            }


        }
    }

    .img-wrapper {
        padding-top: calc(100 / 140 * 100%);
        position: relative;
        min-height: 100px;
    }

    .poi-info-window div, .poi-info-window a {
        background: transparent;
        color: #F1EEE9;
    }

    .initial-content {
        position: absolute;
        content: '';
        background-color: #1D3130;
        top: 0;
        right: 0;
        height: 100%;
        width: 660px;
        display: flex;
        justify-items: right;
        align-items: center;

        h2 {
            color: #FFFFFF;
            font-size: 48px;
            font-weight: 300;
            font-family: ${title};
            padding-right: ${props => props.offset ? props.offset + 'px' : ""};
            padding-left: 70px;
            text-transform: uppercase;
        }
    }

    .gm-style-iw.gm-style-iw-c {
        background-color: #1D3130;
        padding: 20px;
        width: 295px;
        height: auto;

        h6, p, span {
            color: #FFFFFF;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding-bottom: 15px;

            &:first-child {
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        span {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }

        h6 {
            font-family: ${title};
            padding-bottom: 15px;
            font-size: 16px;
            font-weight: 300;
            line-height: 16px;
            text-transform: uppercase;
        }
    }

    .gm-style .gm-style-iw-tc::after {
        background-color: #1D3130;
    }

    .gm-style-iw-d {
        overflow: unset !important;
        padding-right: 20px;
    }

    .gm-ui-hover-effect > span {
        background-color: #fff;
    }

    .close-modal-map {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer !important;
        display: flex;
    }

    button {
        top: 10px !important;
        right: 10px !important;
    }

    @media (min-width: 1200px) and (max-width: 1920px) {
        .google-map-side-gallery .item-single-gallery {
            box-shadow: unset;
            min-width: 550px;
        }
    }

    /* small mobile :320px. */
    @media (max-width: 767px) {
        .show-in-mobile {
            display: block;
        }

        .initial-content {
            display: none;
        }
    }
`;
export default GoogleMapsMarkers;