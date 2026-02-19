import { useEffect, useState } from 'react';
import BackgroundElectricalData from './BackgroundElectrical.json';
import FondoServicioElectrico from '../../../assets/img/ImagenesFondos/fondoServicioElectrico.jpg';
import './BackgroundElectrical.css';


const BackgroundElectrical = () => {

    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content = Array.isArray(BackgroundElectricalData) && BackgroundElectricalData ? BackgroundElectricalData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    if (!content) return null;
    return (
        <>
            <div className='application_global_header_container_img_serviceElectrical'>
                <img
                    className='application_global_background_element_serviceElectrical'
                    src={FondoServicioElectrico}
                    alt="Servicio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_serviceElectrical'></div>

            <div
                className={`hero_text_container_text_left_serviceElectrical ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_serviceElectrical'
                    key={titleIndex}
                >
                    <h1 className='fade_text_serviceElectrical'>
                        {content.titles[titleIndex]}
                    </h1>

                    <h3 className='hero_description_serviceElectrical'>
                        {content.description[titleIndex]}
                    </h3>
                </div>
            </div>

        </>
    )
}

export default BackgroundElectrical;