import BackgroundFireData from './BackgroundFire.json';
import './BackgroundFire.css';
import { useEffect, useState } from 'react';
import FondoServicioIncendio from '../../../assets/img/ImagenesFondos/fondoServiceContraIncendio.jpg';

const BackgrundFire = () => {
    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content = Array.isArray(BackgroundFireData) && BackgroundFireData ? BackgroundFireData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    if (!content) return null;
    return (
        <>
            <div className='application_global_header_container_img_serviceFire'>
                <img
                    className='application_global_background_element_serviceFire'
                    src={FondoServicioIncendio}
                    alt="Servicio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_serviceFire'></div>

            <div
                className={`hero_text_container_text_left_serviceFire ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_serviceFire'
                    key={titleIndex}
                >
                    <h1 className='fade_text_serviceFire'>
                        {content.titles[titleIndex]}
                    </h1>

                    <h3 className='hero_description_serviceFire'>
                        {content.description[titleIndex]}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default BackgrundFire;