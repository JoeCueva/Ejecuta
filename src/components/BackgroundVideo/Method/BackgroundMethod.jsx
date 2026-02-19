import { useEffect, useState } from 'react';
import BackgroundMethodData from './BackgroundMethod.json';
import './BackgroundMethod.css';
import FondoMetodo from '../../../assets/img/ImagenesFondos/FondoMetodo.png';


const BackgroundMethod = () => {

    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content =
        Array.isArray(BackgroundMethodData) && BackgroundMethodData.length > 0
            ? BackgroundMethodData[0] : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    if (!content) return null;
    return (
        <>
            <div className='application_global_header_container_img_method'>
                <img
                    className='application_global_background_element_method'
                    src={FondoMetodo}
                    alt="Criterio EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_method'></div>

            <div
                className={`hero_text_container_text_left_method ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_method'
                    key={titleIndex}
                >
                    <h1 className='fade_text_method'>
                        {content.titles[titleIndex]}
                    </h1>

                    <h3 className='hero_description_method'>
                        {content.description[titleIndex]}
                    </h3>
                </div>
            </div>

        </>
    )
}
export default BackgroundMethod;