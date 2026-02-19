import BackgroundSanitaryData from './BackgroundSanitary.json';
import './BackgroundSanitary.css';
import { useEffect, useState } from 'react';
import FondoServicioSanitario from '.././../../assets/img/ImagenesFondos/fondoServicioSanitario.jpg';

const BackgroundSanitary = () => {

    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content = Array.isArray(BackgroundSanitaryData) && BackgroundSanitaryData ? BackgroundSanitaryData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);
    if (!content) return null;
    return (
        <>

            <div className='application_global_header_container_img_serviceSanitary'>
                <img
                    className='application_global_background_element_serviceSanitary'
                    src={FondoServicioSanitario}
                    alt="Servicio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_serviceSanitary'></div>

            <div
                className={`hero_text_container_text_left_serviceSanitary ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_serviceSanitary'
                    key={titleIndex}
                >
                    <h1 className='fade_text_serviceSanitary'>
                        {content.titles[titleIndex]}
                    </h1>

                    <h3 className='hero_description_serviceSanitary'>
                        {content.description[titleIndex]}
                    </h3>
                </div>
            </div>

        </>
    )
}

export default BackgroundSanitary;