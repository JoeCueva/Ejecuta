import '../../../../styles/Fire.css';
import { Link } from 'react-router-dom';
import ServicioContraincendio from '../../../../assets/img/imagenContraincendio.jpg';
import Contraincendio1 from '../../../../assets/icons/iconContraincendio1.png';
import Contraincendio2 from '../../../../assets/icons/iconContraincendio2.png';
import Contraincendio3 from '../../../../assets/icons/iconContraincendio3.png';
import Contraincendio4 from '../../../../assets/icons/iconContraincendio4.png';

const Fire = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="fire-hero">
                <div className="fire-hero-overlay">
                    <div className="fire-hero-content">
                        <span className='fire-alert-badge'>SERVICIO CONTRAINCENDIO</span>
                        <h1>Sistemas contra incendios que salvan vidas y protegen activos</h1>
                        <p className="fire-hero-description">
                            Diseñamos, instalamos y mantenemos sistemas de detección, alarma y supresión
                            de incendios certificados bajo normativas NFPA, UL y FM Global, garantizando
                            la máxima protección para personas, infraestructura y continuidad operacional.
                        </p>
                        <div className="fire-hero-metrics">
                            <div className="metric-box">
                                <div className="metric-value">0</div>
                                <div className="metric-label">Fatalidades en nuestros proyectos</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">70+</div>
                                <div className="metric-label">Sistemas instalados y operativos</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">12/7</div>
                                <div className="metric-label">Servicio de emergencias</div>
                            </div>
                            <div className="metric-box">
                                <div className="metric-value">100%</div>
                                <div className="metric-label">Certificaciones aprobadas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="fire-intro">
                <div className="fire-intro-container">
                    <div className="fire-intro-content">
                        <span className="section-labels">INGENIERÍA DE PROTECCIÓN CONTRA INCENDIOS</span>
                        <h2>Soluciones integrales certificadas bajo los más altos estándares internacionales</h2>

                        <div className="intro-primary-text">
                            <p className="intro-lead">
                                En EJECUTA somos especialistas en el diseño, instalación, comisionamiento
                                y mantenimiento de sistemas de protección contra incendios para edificaciones
                                comerciales, industriales, hospitalarias, hoteleras y de alta complejidad técnica.
                            </p>
                            <p>
                                Nuestro equipo técnico gestiona cada proyecto desde el análisis inicial
                                hasta la puesta en marcha, asegurando el cumplimiento de las normativas
                                vigentes y aplicando soluciones seguras y eficientes.
                            </p>
                            <p>
                                Trabajamos con tecnología de vanguardia en detección temprana, supresión
                                automática y control de humos, integrando sistemas inteligentes que minimizan
                                falsas alarmas, optimizan tiempos de respuesta y garantizan la evacuación
                                segura de ocupantes en situaciones de emergencia real.
                            </p>
                        </div>

                        <div className="intro-certifications">
                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>NFPA Certified</strong>
                                    <span>Diseño bajo normas NFPA 13, 14, 20, 72, 101</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>UL Listed Equipment</strong>
                                    <span>Equipos y componentes certificados UL</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>FM Approved</strong>
                                    <span>Sistemas aprobados por FM Global</span>
                                </div>
                            </div>

                            <div className="cert-badge">
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="cert-text">
                                    <strong>ISO 9001:2015</strong>
                                    <span>Sistema de gestión de calidad certificado</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fire-intro-visual">
                        <img
                            src={ServicioContraincendio}
                            alt="Sistema de rociadores contra incendios"
                        />
                        <div className="visual-overlay">
                            <div className="overlay-stat">
                                <div className="stat-info">
                                    <strong>Instalacion de tuberias Contra Incendio</strong>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Systems Section */}
            <section className="fire-systems">
                <div className="fire-systems-container">
                    <div className="systems-header">
                        <span className="section-label">SISTEMAS DE PROTECCIÓN ACTIVA</span>
                        <h2>Tecnologías de supresión y detección para cada nivel de riesgo</h2>
                        <p className="systems-intro">
                            Implementamos sistemas de protección contra incendios basados en agua, gas,
                            espuma y agentes limpios, seleccionados según análisis de ocupación,
                            clasificación de riesgo y activos a proteger.
                        </p>
                    </div>

                    <div className="systems-grid">
                        <div className="system-item system-sprinkler">
                            <div className="system-number">01</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    {/* <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
                                    </svg> */}
                                    <img src={Contraincendio1} alt="sistema rociador" />
                                </div>
                                <h3>Sistemas de Rociadores Automáticos</h3>
                                <span className="risk-tag">Riesgo ligero, ordinario y alto</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Rociadores de tubería húmeda :</strong>
                                    <span>Sistemas presurizados con agua permanente, respuesta inmediata ante calor. Aplicación: oficinas, comercios, hoteles, residencias.</span>
                                </li>
                                <li>
                                    <strong>Rociadores de tubería seca :</strong>
                                    <span>Tuberías presurizadas con aire/nitrógeno, descarga retardada. Para ambientes no calefaccionados o expuestos a congelamiento.</span>
                                </li>
                                <li>
                                    <strong>Sistemas de pre-acción :</strong>
                                    <span>Doble interlock: detección + rociador. Protección para áreas sensibles al agua (data centers, museos, archivos).</span>
                                </li>
                                <li>
                                    <strong>Sistemas de diluvio :</strong>
                                    <span>Descarga simultánea de todos los rociadores en zona. Para riesgos especiales: hangares, plantas químicas, transformadores.</span>
                                </li>
                                <li>
                                    <strong>Rociadores ESFR :</strong>
                                    <span>Alta densidad de descarga para supresión rápida en almacenes de gran altura (hasta 13.7m) sin necesidad de rociadores in-rack.</span>
                                </li>
                                <li>
                                    <strong>Diseño hidráulico certificado:</strong>
                                    <span>Cálculo de densidades, presiones, diámetros y caudales según NFPA 13.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-detection">
                            <div className="system-number">02</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio2} alt="Deteccion alarma" />
                                </div>
                                <h3>Detección y Alarma Contra Incendios</h3>
                                <span className="risk-tag">Detección temprana inteligente</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Centrales de detección direccionables:</strong>
                                    <span>
                                        Paneles con identificación punto a punto, capacidad de 1 a 4 lazos y comunicación IP.
                                    </span>
                                </li>
                                <li>
                                    <strong>Detectores fotoeléctricos de humo:</strong>
                                    <span>
                                        Sensores ópticos de alta sensibilidad para fuegos de combustión lenta. Certificación UL y FM.
                                    </span>
                                </li>
                                <li>
                                    <strong>Detectores iónicos y térmicos:</strong>
                                    <span>
                                        Para detección de fuegos rápidos y control de temperatura en cocinas o áreas industriales.
                                    </span>
                                </li>
                                <li>
                                    <strong>Detectores lineales y por aspiración:</strong>
                                    <span>
                                        Detección temprana para techos altos, áreas críticas y espacios cerrados.
                                    </span>
                                </li>
                                <li>
                                    <strong>Pulsadores manuales y estaciones de alarma:</strong>
                                    <span>
                                        Instalación reglamentaria según norma, ubicados estratégicamente para activación manual.
                                    </span>
                                </li>
                                <li>
                                    <strong>Notificación audiovisual:</strong>
                                    <span>
                                        Sirenas, luces estroboscópicas y sistemas de voz para evacuación.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-suppression">
                            <div className="system-number">03</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio3} alt="supresion" />
                                </div>
                                <h3>Supresión con Agentes Limpios y Gases</h3>
                                <span className="risk-tag">Protección sin daño colateral</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Sistemas FM-200:</strong>
                                    <span>
                                        Instalamos sistemas de descarga total que actúan en segundos y no dejan residuos, ideales para centros de datos y salas técnicas.
                                    </span>
                                </li>
                                <li>
                                    <strong>Sistemas NOVEC 1230:</strong>
                                    <span>
                                        Implementamos agentes limpios y seguros para las personas, con bajo impacto ambiental y alta eficiencia.
                                    </span>
                                </li>
                                <li>
                                    <strong>Sistemas CO2 alta y baja presión:</strong>
                                    <span>
                                        Desarrollamos soluciones para riesgos eléctricos y líquidos inflamables en salas de máquinas y transformadores.
                                    </span>
                                </li>
                                <li>
                                    <strong>Sistemas de gas inerte:</strong>
                                    <span>
                                        Diseñamos sistemas que reducen el oxígeno de forma controlada, adecuados para áreas ocupadas.
                                    </span>
                                </li>
                                <li>
                                    <strong>Sistemas de niebla de agua:</strong>
                                    <span>
                                        Instalamos tecnología de microgotas a alta presión que enfría rápidamente y reduce daños por agua.
                                    </span>
                                </li>
                                <li>
                                    <strong>Cálculo y dimensionamiento:</strong>
                                    <span>
                                        Realizamos el diseño y cálculo de cilindros y boquillas según el volumen del ambiente y la normativa vigente.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="system-item system-hydrants">
                            <div className="system-number">04</div>
                            <div className="system-header">
                                <div className="system-icon">
                                    <img src={Contraincendio4} alt="redes hidrante" />
                                </div>
                                <h3>Redes de Hidrantes y Gabinetes</h3>
                                <span className="risk-tag">Primera línea de defensa manual</span>
                            </div>
                            <ul className="system-features">
                                <li>
                                    <strong>Gabinetes contraincendio tipo I y II:</strong>
                                    <span>
                                        Instalamos gabinetes equipados con manguera, válvula y pitón, ubicados según norma para una cobertura adecuada.
                                    </span>
                                </li>
                                <li>
                                    <strong>Hidrantes de columna y pared:</strong>
                                    <span>
                                        Implementamos hidrantes con conexiones reglamentarias y el caudal requerido para atención de emergencias.
                                    </span>
                                </li>
                                <li>
                                    <strong>Sistemas de bombeo principal y jockey:</strong>
                                    <span>
                                        Suministramos e instalamos bombas eléctricas y diésel con arranque automático, conforme a norma vigente.
                                    </span>
                                </li>
                                <li>
                                    <strong>Red de tuberías contra incendio:</strong>
                                    <span>
                                        Ejecutamos redes en acero con soportes y señalización reglamentaria para una distribución segura.
                                    </span>
                                </li>
                                <li>
                                    <strong>Siamesas de inyección:</strong>
                                    <span>
                                        Instalamos conexiones externas para abastecimiento del cuerpo de bomberos en caso de emergencia.
                                    </span>
                                </li>
                                <li>
                                    <strong>Tanques y cisternas de reserva:</strong>
                                    <span>
                                        Diseñamos e implementamos almacenamiento exclusivo para el sistema contra incendio según demanda calculada.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="fire-services">
                <div className="fire-services-container">
                    <span className="section-label">SERVICIOS ESPECIALIZADOS</span>
                    <h2>Gestión integral del ciclo de vida de sistemas contra incendios</h2>

                    <div className="services-columns">
                        <div className="service-column">
                            <div className="column-header">
                                <h3>Ingeniería y Diseño</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    <div className="service-content">
                                        <p>
                                            Diseñamos sistemas contra incendios cumpliendo normativas NFPA e IBC.
                                            Realizamos análisis de riesgos, diseño en Revit y coordinación 3D.
                                            Entregamos planos, cálculos hidráulicos y especificaciones técnicas
                                            revisadas por ingenieros especializados.
                                        </p>                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-column">
                            <div className="column-header">
                                <h3>Instalación y Comisionamiento</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    <div className="service-content">
                                        <p>
                                            Realizamos la instalación con personal certificado y supervisión técnica.
                                            Ejecutamos pruebas de presión, verificaciones de funcionamiento
                                            e integramos el sistema con monitoreo para su correcta operación.
                                        </p>                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="service-column">
                            <div className="column-header">
                                <h3>Mantenimiento y Cumplimiento</h3>
                                <div className="header-line"></div>
                            </div>
                            <ul className="service-list">
                                <li>
                                    <div className="service-content">
                                        <p>
                                            Realizamos inspecciones y mantenimientos programados para asegurar el correcto funcionamiento del sistema.
                                            Ejecutamos pruebas de equipos, recarga de cilindros y brindamos soporte en procesos de certificación ante las entidades correspondientes.
                                        </p>                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            {/* Vision Section */}
            <section className="fire-vision">
                <div className="fire-vision-overlay">
                    <div className="fire-vision-content">
                        <span className="vision-label">COMPROMISO CON LA SEGURIDAD DE VIDA</span>
                        <h2>Sistemas diseñados para funcionar cuando más se necesitan</h2>
                        <p>
                            La protección contra incendios no es un lujo, es una responsabilidad legal,
                            moral y económica. Cada sistema que instalamos es diseñado bajo el principio
                            de "fallo seguro", con redundancias calculadas, componentes certificados y
                            pruebas exhaustivas que garantizan activación inmediata ante emergencia real.
                        </p>
                        <div className="vision-stats">
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>100%</span>
                                </div>
                                <p>Sistemas aprobados en primera inspección</p>
                            </div>
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>&lt;5s</span>
                                </div>
                                <p>Tiempo de activación de rociadores ante calor</p>
                            </div>
                            <div className="vision-stat-item">
                                <div className="stat-circle">
                                    <span>99.9%</span>
                                </div>
                                <p>Confiabilidad operativa de sistemas instalados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="fire-cta">
                <div className="fire-cta-container">
                    <div className="cta-content">
                        <h2>¿Su edificio cuenta con protección contra incendios certificada?</h2>
                        <p>
                            Realizamos auditorías técnicas gratuitas para evaluar el estado de sus
                            sistemas de protección, identificar no conformidades con códigos vigentes
                            y proponer soluciones que garanticen el cumplimiento normativo y la
                            seguridad de sus ocupantes.
                        </p>
                        <Link to="/contactos">
                            <button className="cta-button">Solicitar auditoría técnica sin costo</button>
                        </Link>
                        <p className="cta-note">
                            * Incluye reporte técnico con observaciones y recomendaciones prioritarias
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fire;