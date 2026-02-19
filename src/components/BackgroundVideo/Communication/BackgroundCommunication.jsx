import BackgroundCommunicationData from './BackgroundCommunication.json';
import FondoServicioComunicacion from '../../../assets/img/ImagenesFondos/fondoComuniHome.png';
import './BackgroundCommunication.css';
import { useEffect, useState } from 'react';

const BackgroundCommunication = () => {

    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content = Array.isArray(BackgroundCommunicationData) && BackgroundCommunicationData ? BackgroundCommunicationData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    if (!content) return null;

    return (
        <>
            <div className='application_global_header_container_img_serviceCommunication'>
                <img
                    className='application_global_background_element_serviceCommunication'
                    src={FondoServicioComunicacion}
                    alt="Servicio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_serviceCommunication'></div>

            <div
                className={`hero_text_container_text_left_serviceCommunication ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_serviceCommunication'
                    key={titleIndex}
                >
                    <h1 className='fade_text_serviceCommunication'>
                        {content.titles[titleIndex]}
                    </h1>

                    <h3 className='hero_description_serviceCommunication'>
                        {content.description[titleIndex]}
                    </h3>
                </div>
            </div>
        </>
    )
}
export default BackgroundCommunication;