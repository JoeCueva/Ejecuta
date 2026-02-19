import '../../../../styles/Essence.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import IdentidadMarc from '../../../../assets/img/identidadMarc.jpg';
import sectorRetail from '../../../../assets/img/sectorRetail.jpg';
import sectorHospital from '../../../../assets/img/sectorHospital.jpg';
import sectorOficinas from '../../../../assets/img/sectorOficinas.jpg';
import sectorInfraestructura from '../../../../assets/img/sectorInfraestructura.jpg';
import sectorData from '../../../../assets/img/dataCenter.jpg';
import sectorIndustria from '../../../../assets/img/sectorIndustria.jpg';


const Essence = () => {

    const sectors = [
        {
            title: "Industria",
            summary: "Ejecutamos infraestructura eléctrica industrial de alta confiabilidad.",
            detail: "Desarrollamos y ejecutamos sistemas eléctricos para procesos productivos continuos, integrando tableros de potencia, fuerza y control bajo criterios de seguridad, rendimiento y continuidad operativa.",
            image: sectorIndustria
        },
        {
            title: "Hospitales",
            summary: "Implementamos sistemas críticos para entornos de alta exigencia.",
            detail: "Ejecutamos instalaciones técnicas coordinadas que aseguran continuidad, seguridad y operación confiable en áreas sensibles y servicios esenciales.",
            image: sectorHospital
        },
        {
            title: "Retail",
            summary: "Aseguramos operación técnica estable en espacios de atención al público.",
            detail: "Desarrollamos y ejecutamos instalaciones ordenadas y eficientes que permiten operación continua, confort y experiencia adecuada en entornos comerciales de alto tránsito.",
            image: sectorRetail
        },
        {
            title: "Oficinas corporativas",
            summary: "Implementamos infraestructura eléctrica ordenada y escalable.",
            detail: "Hacemos que tu infraestructura eléctrica crezca con tu equipo: bien planeada, ahorra energía sin que lo notes y mantiene todo cómodo y sin cortes. Así tú solo te preocupas por tu negocio, no por los enchufes.",
            image: sectorOficinas
        },
        {
            title: "Infraestructura crítica",
            summary: "Desarrollamos sistemas que no admiten fallos.",
            detail: "Ejecutamos instalaciones técnicas con alto nivel de control, planificación y redundancia, enfocadas en reducir riesgos y asegurar continuidad operativa.",
            image: sectorInfraestructura
        },
        {
            title: "Data Centers",
            summary: "Ejecutamos infraestructura eléctrica para operación 12/7.",
            detail: "Implementamos sistemas eléctricos redundantes, UPS, respaldo y distribución crítica, garantizando continuidad operativa y estabilidad para entornos tecnológicos exigentes.",
            image: sectorData
        }
    ];


    const faqData = [
        {
            question: "¿Trabajan con planos ya existentes?",
            answer:
                "Sí, podemos ejecutar obras basadas en planos previos o diseñar nuevos planos de acuerdo con las necesidades del proyecto."
        },
        {
            question: "¿Pueden realizar una inspección previa?",
            answer:
                "Sí, ofrecemos visitas técnicas para evaluar la situación del cliente y determinar la solución más adecuada según el tipo de infraestructura"
        },
        {
            question: "¿Ejecutan proyectos integrales o por especialidad?",
            answer:
                "Ambos. Podemos ejecutar proyectos integrales o intervenir por especialidad específica, adaptándonos a la etapa y alcance de la obra."
        },
        {
            question: "¿Cómo aseguran el cumplimiento de plazos?",
            answer:
                "Trabajamos con planificación, cronogramas claros y control permanente de avance, reduciendo improvisaciones y retrabajos."
        },
        {
            question: "¿Cómo gestionan la seguridad en obra?",
            answer:
                "Aplicamos protocolos de seguridad, uso obligatorio de EPP y supervisión constante para proteger al personal y la infraestructura."
        },
        {
            question: "¿Trabajan bajo normas técnicas?",
            answer:
                "Sí. Ejecutamos conforme a normativas vigentes, reglamentos técnicos y buenas prácticas de ingeniería."
        },
        {
            question: "¿Pueden integrarse a proyectos ya iniciados?",
            answer:
                "Sí. Evaluamos el estado de la obra y nos integramos de manera ordenada, asegurando continuidad y control técnico."
        },
        {
            question: "¿Trabajan con empresas privadas y entidades públicas?",
            answer:
                "Sí. Contamos con experiencia atendiendo instituciones públicas, compañías mineras, industriales, comerciales y residenciales."
        },
        {
            question: "¿Ofrecen garantía en todos sus trabajos?",
            answer:
                "Sí, todos nuestros servicios cuentan con garantía certificada y soporte técnico especializado para asegurar el correcto funcionamiento del sistema instalado."
        }
    ];

    const sliderRef = useRef(null);
    // const [activeIndex, setActiveIndex] = useState(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    };

    // const toggleFAQ = (index) => {
    //     setActiveIndex(activeIndex === index ? null : index);
    // };

    return (
        <>
            <div className="main_essence_page_container">
                <div className="monolithic_asymmetric_information_container_wrapper">
                    <div className="textual_narrative_content_left_alignment_block">
                        <p className="detailed_history_descriptive_narrative_text">
                            EJECUTA nace a partir de la necesidad de ejecutar instalaciones
                            eléctricas con mayor control técnico y responsabilidad en obra, brindando
                            <b> soluciones integrales</b> y sostenibles para diversos proyectos. Con
                            <b> más de ocho años de experiencia</b> en el mercado nacional, nos hemos
                            comprometido con la excelencia, la innovación y la seguridad en cada fase de
                            nuestro trabajo, consolidándonos como un referente en el sector eléctrico
                            peruano. Nuestra trayectoria está marcada por la satisfacción de nuestros
                            clientes, quienes encuentran en nosotros un aliado estratégico para la
                            continuidad de sus operaciones.
                        </p>
                    </div>
                    <div className="visual_illustrative_media_right_alignment_block">
                        <img
                            src={IdentidadMarc}
                            alt="Electrical Infrastructure"
                            className="high_fidelity_technical_imagery_element"
                        />
                    </div>
                </div>
            </div>



            <section className="institutional_identity_scroll_based_strategic_content_overlay_container">
                <div className="asymmetric_principles_and_operational_foundations_grid_layout">
                    <div className="conceptual_strategic_mission_explanatory_text_block">
                        <div className='conceptual_strategic_mission_icon_flix'>
                            <i className="fa-solid fa-bolt"></i>
                        </div>
                        <h2 className="conceptual_strategic_section_heading">
                            Ingeniería aplicada para garantizar continuidad y seguridad.
                        </h2>
                    </div>
                    <div className="formal_mission_statement_structural_content_block">
                        <h2 className="formal_mission_title_heading">Misión</h2>
                        <p className="formal_mission_detailed_description_text">
                            Proveer soluciones de ingeniería eléctrica de alta precisión, garantizando
                            la <b>continuidad operativa</b> y la seguridad. Nos enfocamos en transformar
                            necesidades en sistemas confiables.
                        </p>
                    </div>
                </div>

                <div className="asymmetric_vision_projection_and_corporate_future_grid_layout">
                    <div className="formal_vision_statement_structural_content_block">
                        <h2 className="formal_vision_title_heading">Visión</h2>
                        <p className="formal_vision_detailed_axiological_projection_text">
                            Consolidarnos como líderes en proyectos eléctricos complejos,
                            reconocidos por nuestra <b>innovación técnica</b> y cumplimiento de
                            estándares internacionales para el 2030.
                        </p>
                    </div>
                    <div className="conceptual_strategic_vision_explanatory_text_block">
                        <div className='conceptual_strategic_mission_icon_flix'>
                            <i className="fa-solid fa-compass"></i>
                        </div>
                        <h2 className="conceptual_vision_section_heading">
                            Proyección de liderazgo basada en excelencia técnica.
                        </h2>
                    </div>
                </div>

                <div className="asymmetric_corporate_values_and_operational_ethics_grid_layout">
                    <div className="conceptual_strategic_values_explanatory_text_block">
                        <div className='conceptual_strategic_mission_icon_flix'>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h2 className="conceptual_values_section_heading">
                            Principios que guían cada decisión en obra.
                        </h2>
                    </div>
                    <div className="formal_values_statement_structural_content_block">
                        <h2 className="formal_values_title_heading">
                            Valores
                        </h2>
                        <p className="formal_values_detailed_axiological_description_text">
                            Nuestra cultura organizacional se fundamenta en el <b>Compromiso</b> a través de la rigurosidad en cada cálculo técnico, la <b>Seguridad</b> como prioridad absoluta en todas nuestras obras y una <b>Ética</b> inquebrantable basada en la transparencia total de nuestra gestión.
                        </p>
                    </div>
                </div>
            </section>



            <div className="strategic_specialization_closure_monolith">
                <div className="specialization_divider_line"></div>
                <p className="specialization_narrative_summary">
                    {/*En <span>EJECUTA</span>, */}Nuestra misión, visión y valores se traducen en una sola forma de trabajar:
                    <b> ingeniería aplicada, ejecución ordenada y responsabilidad técnica</b>.
                    Afrontamos la complejidad de cada proyecto con criterio, planificación y control,
                    transformándola en infraestructuras confiables que aseguran la
                    <b> continuidad operativa</b> de los entornos más exigentes.
                </p>

                <div className="specialization_technical_tag_container">
                    <span className="technical_tag">Ingeniería de Potencia</span>
                    <span className="technical_tag">Control Crítico</span>
                    <span className="technical_tag">Garantía Ejecuta</span>
                </div>
            </div>


            <section className="institutional_operational_sectors_showcase_container">
                <div className="institutional_operational_sectors_header_block">
                    <h2>Sectores donde operamos</h2>
                    <p>
                        Ejecutamos infraestructura eléctrica en entornos donde la
                        continuidad y el control técnico son determinantes.
                    </p>
                </div>

                <div className="institutional_operational_sectors_navigation_controls">
                    <button onClick={scrollLeft} aria-label="Anterior">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button onClick={scrollRight} aria-label="Siguiente">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

                <div
                    ref={sliderRef}
                    className="institutional_operational_sectors_horizontal_slider"
                >
                    {sectors.map((sector, index) => (
                        <article
                            key={index}
                            className="institutional_operational_sector_card"
                            style={{ backgroundImage: `url(${sector.image})` }}
                        >
                            <div className="institutional_operational_sector_overlay">
                                <h3>{sector.title}</h3>

                                <p className="sector_summary">
                                    {sector.summary}
                                </p>

                                <p className="sector_detail">
                                    {sector.detail}
                                </p>
                            </div>

                        </article>
                    ))}
                </div>
            </section>


            <section className="ejecuta_faq_section">
                <div className="ejecuta_faq_header">
                    <span className="ejecuta_faq_badge">FAQ</span>
                    <h2>
                        Preguntas <span>Frecuentes</span>
                    </h2>
                    <p>
                        Respondemos las inquietudes más comunes de nuestros clientes para ofrecer
                        claridad, confianza y una mejor experiencia en cada proyecto.
                    </p>
                </div>

                <div className="ejecuta_faq_grid">
                    {faqData.map((faq, index) => {
                        const icons = {
                            0: "fa-solid fa-file-signature",
                            1: "fa-solid fa-magnifying-glass",
                            2: "fa-solid fa-layer-group",
                            3: "fa-solid fa-calendar-check",
                            4: "fa-solid fa-hard-hat",
                            5: "fa-solid fa-guarani-sign",
                            6: "fa-solid fa-puzzle-piece",
                            7: "fa-solid fa-building-shield",
                            8: "fa-solid fa-certificate"
                        };

                        return (
                            <article key={index} className="ejecuta_faq_card">
                                <i className={icons[index] || "fa-solid fa-circle-question"}></i>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </article>
                        );
                    })}
                </div>
            </section>


            <section className="method_teaser">
                <div className="method_teaser_container">
                    <header className="method_teaser_header">
                        <span className="method_badge">Método</span>
                        <h2>
                            Ejecutar bien <br />
                            <span>no es improvisar</span>
                        </h2>
                        <p>
                            Nuestro método ordena la obra, reduce errores y asegura resultados técnicos confiables.
                        </p>
                    </header>

                    <div className="method_steps">
                        <div className="method_step">
                            <span>01</span>
                            <h4>Análisis previo</h4>
                            <p>Evaluamos condiciones reales antes de iniciar.</p>
                        </div>

                        <div className="method_step">
                            <span>02</span>
                            <h4>Coordinación técnica</h4>
                            <p>Integramos sistemas para evitar interferencias.</p>
                        </div>

                        <div className="method_step">
                            <span>03</span>
                            <h4>Ejecución ordenada</h4>
                            <p>Procesos claros y control diario en obra.</p>
                        </div>

                        <div className="method_step">
                            <span>04</span>
                            <h4>Control y entrega</h4>
                            <p>Pruebas, verificación y documentación técnica.</p>
                        </div>
                    </div>

                    <div className="method_teaser_cta">
                        <Link to="/method">
                            <a>
                                Ver el método EJECUTA
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </Link>

                    </div>

                </div>
            </section>

        </>
    );
}

export default Essence;