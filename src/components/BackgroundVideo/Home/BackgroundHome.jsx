import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fondoServicioElectrico from '../../../assets/img/ImagenesFondos/fondoElectricoHome.png';
import fondoServicioSanitario from '../../../assets/img/ImagenesFondos/fondoSanitarioHome.png';
import fondoServicioIncendio from '../../../assets/img/ImagenesFondos/fondoContrainecHome.png';
import fondoServicioComu from '../../../assets/img/ImagenesFondos/fondoComuniHome.png';
import HeroData from '../Home/BackgroundText.json';
import './BackgroundHome.css'

const BackgroundHome = () => {

    const content = HeroData && HeroData.length > 0 ? HeroData[0] : null;
    const [titleIndex, setTitleIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [
        fondoServicioElectrico,
        fondoServicioSanitario,
        fondoServicioIncendio,
        fondoServicioComu
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const next = (currentIndex + 1) % images.length;
            setNextIndex(next);
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex(next);
                setIsTransitioning(false);
            }, 2000);

        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    useEffect(() => {
        if (content?.titles) {
            const interval = setInterval(() => {
                setTitleIndex((prev) => (prev + 1) % content.titles.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [content?.titles]);

    if (!content) return null;

    return (
        <>
            <div className='application_global_header_container_video'>

                {/* Imagen base (siempre visible) */}
                <div
                    className='image_slider_base'
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`
                    }}
                />

                {/* Imagen de transición (aparece encima) */}
                <div
                    className={`image_slider_transition ${isTransitioning ? 'active' : ''}`}
                    style={{
                        backgroundImage: `url(${images[nextIndex]})`
                    }}
                />

                <div className="application_global_video_element_overlay"></div>

                <div className='hero_text_container_text_left'>

                    <div className='hero_title_fixed_height_wrapper' key={titleIndex}>
                        <h1 className='fade_text'>
                            {content.titles[titleIndex]}
                        </h1>
                    </div>

                    <p className='hero_reason'>
                        {content.reason}
                    </p>

                    <div className='hero_actions'>
                        <Link to="/project">
                            <button className='btn_primary'>{content.primaryBtn}</button>
                        </Link>

                        <Link to="/method">
                            <button className='btn_secondary'>{content.secondaryBtn}</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BackgroundHome;