import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/Method.css';
import ISO_9001 from '../../../../assets/img/ISO/ISO_9001.png';
import ISO_9002 from '../../../../assets/img/ISO/ISO_14001.png';
import ISO_9003 from '../../../../assets/img/ISO/ISO_37001.png';
import ISO_9004 from '../../../../assets/img/ISO/ISO_45001.png';


const Method = () => {
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const methodSections = [
        {
            id: 0,
            title: "Gestión de Ingeniería y Procesos",
            subtitle: "Metodología 'Cero Omisiones'",
            icon: "fa-solid fa-diagram-project",
            description: "Nuestro enfoque sistemático garantiza que cada proyecto sea ejecutado con precisión técnica absoluta, eliminando cualquier margen de error desde la concepción hasta la entrega final.",
            processes: [
                {
                    name: "Análisis Multidisciplinario",
                    detail: "Iniciamos cada proyecto con una validación cruzada exhaustiva entre nuestra oficina técnica y el área de TI. Este proceso colaborativo asegura que las instalaciones eléctricas, sanitarias y de corrientes débiles estén perfectamente integradas desde el diseño inicial, evitando conflictos en obra y garantizando una ejecución fluida.",
                    icon: "fa-solid fa-users-gear"
                },
                {
                    name: "Auditoría de Alcance",
                    detail: "Sometemos cada proyecto a una revisión exhaustiva de metrados, especificaciones técnicas y detalles de planos antes de iniciar cualquier trabajo en campo. Este protocolo de validación nos permite identificar y eliminar vacíos técnicos, inconsistencias de diseño y posibles interferencias, asegurando que el alcance esté completamente definido y libre de ambigüedades.",
                    icon: "fa-solid fa-clipboard-check"
                }
            ]
        },
        {
            id: 1,
            title: "Normativas y Estándares",
            subtitle: "Cumplimiento Internacional",
            icon: "fa-solid fa-certificate",
            description: "Operamos bajo un marco normativo riguroso que garantiza que cada instalación cumpla con los más altos estándares de calidad, seguridad y sostenibilidad reconocidos internacionalmente.",
            processes: [
                {
                    name: "Cumplimiento Normativo Sectorial",
                    detail: "Cada solución técnica que desarrollamos se diseña y ejecuta bajo el estricto cumplimiento del Código Nacional de Electricidad (CNE) vigente, así como los estándares internacionales específicos aplicables a sectores críticos como Salud, Retail e Industria. Nuestro equipo técnico se mantiene constantemente actualizado sobre las últimas modificaciones normativas para garantizar que nuestras instalaciones no solo cumplan, sino que superen los requisitos mínimos establecidos.",
                    icon: "fa-solid fa-book-bookmark"
                },
                {
                    name: "Gestión Certificada ISO",
                    detail: "Operamos bajo el marco de certificación de ISO 9001 (Gestión de Calidad), ISO 14001 (Gestión Ambiental), ISO 45001 (Seguridad y Salud en el Trabajo) e ISO 37001 (Sistema de Gestión Antisoborno). Esta estructura certificada asegura que cada proceso sea completamente auditable, transparente y trazable, proporcionando a nuestros clientes la confianza de trabajar con una organización que mantiene los más altos estándares de gestión empresarial.",
                    icon: "fa-solid fa-award"
                }
            ]
        },
        {
            id: 2,
            title: "Control de Calidad y Seguridad",
            subtitle: "Sistema de Gestión Integrado (SGI)",
            icon: "fa-solid fa-shield-halved",
            description: "La calidad y seguridad son pilares no negociables en nuestra operación. Implementamos protocolos rigurosos en cada fase del proyecto para garantizar la excelencia técnica y la integridad de todas las personas involucradas.",
            processes: [
                {
                    name: "Protocolos de Prueba y Verificación",
                    detail: "Implementamos un sistema de control de calidad multicapa que abarca desde la recepción y verificación de materiales en almacén, pasando por inspecciones en proceso durante la instalación, hasta el comisionamiento final de equipos y sistemas. Cada etapa cuenta con protocolos específicos de inspección, pruebas funcionales y documentación de resultados, asegurando que solo se incorporen al proyecto componentes y trabajos que cumplan con nuestros estándares de excelencia.",
                    icon: "fa-solid fa-list-check"
                },
                {
                    name: "Cultura de Seguridad Proactiva",
                    detail: "La seguridad e integridad de nuestro equipo y de las instalaciones del cliente es nuestra máxima prioridad. Aplicamos planes específicos de Seguridad y Salud en el Trabajo (SST) adaptados a la alta exigencia operativa de clínicas, centros comerciales y plantas industriales. Esto incluye análisis de riesgos específicos del sitio, capacitación continua del personal, uso obligatorio de EPP certificado, y supervisión permanente de condiciones de trabajo seguras.",
                    icon: "fa-solid fa-helmet-safety"
                }
            ]
        },
        {
            id: 3,
            title: "Garantía y Continuidad Operativa",
            subtitle: "Compromiso a Largo Plazo",
            icon: "fa-solid fa-handshake",
            description: "Nuestro compromiso con el cliente trasciende la entrega del proyecto. Proporcionamos un respaldo técnico integral y herramientas documentales que aseguran la operación óptima de las instalaciones durante toda su vida útil.",
            processes: [
                {
                    name: "Respaldo Técnico Post-Proyecto",
                    detail: "Al finalizar cada proyecto, entregamos un paquete documental completo que incluye: protocolos de pruebas y comisionamiento, planos as-built que reflejan fielmente las instalaciones ejecutadas, manuales detallados de operación y mantenimiento, y cronogramas de mantenimiento preventivo. Esta documentación asegura que el personal de mantenimiento del cliente pueda gestionar eficientemente las instalaciones y maximizar su vida útil operativa.",
                    icon: "fa-solid fa-folder-open"
                },
                {
                    name: "Garantía de Valor y Transparencia",
                    detail: "Nuestra gestión optimizada de costos y procesos asegura que el cliente reciba la máxima calidad técnica al precio más justo del mercado. Mediante una planificación meticulosa, compras estratégicas y control riguroso de obra, protegemos la inversión de nuestros clientes contra sobrecostos o adicionales imprevistos. Mantenemos una comunicación transparente durante todo el proyecto, proporcionando reportes periódicos de avance y cualquier eventualidad que pueda surgir.",
                    icon: "fa-solid fa-scale-balanced"
                }
            ]
        }
    ];

    const certifications = [
        { code: "ISO 9001", name: "Gestión de Calidad", img: ISO_9001 },
        { code: "ISO 14001", name: "Gestión Ambiental", img: ISO_9002 },
        { code: "ISO 45001", name: "Seguridad y Salud", img: ISO_9004 },
        { code: "ISO 37001", name: "Antisoborno", img: ISO_9003 }
    ];

    return (
        <div className="method-container">
            <section className={`method-header ${isVisible ? 'visible' : ''}`}>
                <div className="header-content">
                    <span className="header-label">NUESTRO PROTOCOLO</span>
                    <h1 className="main-title">Método Ejecuta</h1>
                    <p className="main-description">
                        El Método Ejecuta es nuestro protocolo de actuación integral que transforma
                        los requerimientos del cliente en soluciones de ingeniría de alta confiabilidad.
                        Aquí va los procesos, gestión, normativa, control de calidad, seguridad, garantía, etc.
                    </p>
                </div>
            </section>

            <section className="method-navigation">
                <div className="nav-container">
                    {methodSections.map((section, index) => (
                        <button
                            key={section.id}
                            className={`nav-tab ${activeSection === index ? 'active' : ''}`}
                            onClick={() => setActiveSection(index)}
                        >
                            <i className={section.icon}></i>
                            <div className="tab-content">
                                <span className="tab-number">0{index + 1}</span>
                                <span className="tab-title">{section.title}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            <section className="section-content">
                <div className="content-wrapper">
                    <div className="content-header">
                        <div className="header-icon">
                            <i className={methodSections[activeSection].icon}></i>
                        </div>
                        <div className="header-text">
                            <h2>{methodSections[activeSection].title}</h2>
                            <p className="subtitle">{methodSections[activeSection].subtitle}</p>
                        </div>
                    </div>

                    <div className="content-description">
                        <p>{methodSections[activeSection].description}</p>
                    </div>

                    <div className="processes-grid">
                        {methodSections[activeSection].processes.map((process, idx) => (
                            <article key={idx} className="process-card">
                                <div className="process-header">
                                    <div className="process-icon">
                                        <i className={process.icon}></i>
                                    </div>
                                    <h3>{process.name}</h3>
                                </div>
                                <div className="process-detail">
                                    <p>{process.detail}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="certifications-section">
                <div className="cert-container">
                    <div className="cert-intro">
                        <h2>Certificaciones de Gestión</h2>
                        <p>
                            Nuestra operación está respaldada por certificaciones internacionales que
                            garantizan procesos auditables, transparentes y comprometidos con la excelencia,
                            el medio ambiente, la seguridad de nuestro equipo y la ética empresarial.
                        </p>
                    </div>

                    <div className="cert-grid">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="cert-item">
                                <div className="cert-icon-wrapper">
                                    <img
                                        src={cert.img}
                                        alt={cert.code}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
                                    />
                                </div>
                                <div className="cert-info">
                                    {/* <h4>{cert.code}</h4> */}
                                    <p>{cert.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="value-proposition">
                <div className="value-container">

                    <header className="value-header">
                        <span className="value-eyebrow">Propuesta de Valor</span>
                        <h2>Cómo protegemos tu inversión técnica</h2>
                        <p>
                            El Método EJECUTA no es un discurso comercial.
                            Es una forma estructurada de planificar, ejecutar y respaldar cada proyecto
                            con criterio técnico y control real.
                        </p>
                    </header>

                    <div className="value-grid">

                        <article className="value-item">
                            <span className="value-index">01</span>
                            <div>
                                <h3>Metodología Cero Omisiones</h3>
                                <p>
                                    Validamos planos, metrados y alcances antes de ejecutar.
                                    Detectamos vacíos técnicos y conflictos entre especialidades
                                    para evitar retrabajos, adicionales y desviaciones de plazo.
                                </p>
                            </div>
                        </article>

                        <article className="value-item">
                            <span className="value-index">02</span>
                            <div>
                                <h3>Transparencia y trazabilidad total</h3>
                                <p>
                                    Cada avance es documentado.
                                    El cliente tiene visibilidad clara del estado de obra,
                                    recursos, decisiones técnicas y desviaciones controladas.
                                </p>
                            </div>
                        </article>

                        <article className="value-item">
                            <span className="value-index">03</span>
                            <div>
                                <h3>Calidad técnica al precio correcto</h3>
                                <p>
                                    Optimizamos procesos y compras sin sacrificar normativa ni desempeño.
                                    La ingeniería se respeta y el presupuesto se protege.
                                </p>
                            </div>
                        </article>

                        <article className="value-item">
                            <span className="value-index">04</span>
                            <div>
                                <h3>Respaldo técnico post-entrega</h3>
                                <p>
                                    Entregamos documentación final, capacitación operativa
                                    y soporte técnico que garantiza continuidad y seguridad
                                    durante la vida útil de las instalaciones.
                                </p>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            <section className="method-cta">
                <div className="cta-container">

                    <div className="cta-text">
                        <span className="cta-eyebrow">Siguiente paso</span>
                        <h2>Trabajemos como socios técnicos</h2>
                        <p>
                            El Método EJECUTA ha sido aplicado en proyectos donde el margen de error no existe.
                            Si buscas un equipo que piense, planifique y ejecute con criterio técnico,
                            conversemos sobre tu proyecto.
                        </p>
                    </div>

                    <div className="cta-action">
                        <Link to="/contactos">
                            <a className="cta-button">
                                Iniciar conversación técnica
                            </a>
                        </Link>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Method;