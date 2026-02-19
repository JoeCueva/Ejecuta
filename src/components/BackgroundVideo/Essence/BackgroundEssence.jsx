import { useEffect, useState } from 'react';
import './BackgroundEssence.css';
import fondoEssence from '../../../assets/img/oficinaTecnica.png';
import BackgroundEssenceData from '../../BackgroundVideo/Essence/BackgroundEssence.json';

const BackgroundEssence = () => {

    const [titleIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const content =
        Array.isArray(BackgroundEssenceData) && BackgroundEssenceData.length > 0
            ? BackgroundEssenceData[0]
            : null;

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    if (!content) return null;
    return (
        <>

            <div className='application_global_header_container_img_essence'>
                <img
                    className='application_global_background_element_essence'
                    src={fondoEssence}
                    alt="Esencia EJECUTA"
                />
            </div>

            <div className='application_global_img_element_overlay_essence'></div>

            <div
                className={`hero_text_container_text_left_essence ${visible ? 'is-visible' : ''
                    }`}
            >
                <div
                    className='hero_title_fixed_height_wrapper_essence'
                    key={titleIndex}
                >
                    <h1 className='fade_text_essence'>
                        {content.titles[titleIndex]}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default BackgroundEssence;