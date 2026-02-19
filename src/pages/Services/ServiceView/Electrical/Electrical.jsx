import '../../../../styles/Electrical.css';
import { Link } from 'react-router-dom';
import InstalacionAlumbrado from '../../../../assets/img/imagenInstalacionAlumbrado.png';

const Electrical = () => {
    return (
        <>
            <section className="electric-hero">
                <div className="electric-hero-overlay">
                    <div className="electric-hero-content">
                        <span className="electric-hero-label">INGENIERÍA ELÉCTRICA</span>
                        <h1>Sistemas eléctricos de alta prestación para infraestructura crítica</h1>
                        <p className="electric-hero-description">
                            Diseñamos, ejecutamos y ponemos en marcha instalaciones eléctricas
                            de media y baja tensión con los más altos estándares técnicos
                            y de seguridad para proyectos comerciales, industriales y corporativos.
                        </p>
                        <div className="electric-hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">70+</span>
                                <span className="stat-label">Proyectos ejecutados</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">+8</span>
                                <span className="stat-label">Años de experiencia</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Índice de confiabilidad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="electric-intro">
                <div className="electric-intro-container">
                    <div className="electric-intro-content">
                        <span className="section-label">NUESTRA METODOLOGÍA</span>
                        <h2>Ingeniería eléctrica integral desde el diseño hasta la puesta en marcha</h2>
                        <p className="intro-leads">
                            En EJECUTA desarrollamos instalaciones eléctricas aplicando metodologías
                            de gestión de proyectos basadas en estándares internacionales (PMI, IEEE, IEC),
                            asegurando control total sobre tiempos, costos y calidad técnica.
                        </p>

                        <div className="intro-text-block">
                            <p>
                                Nuestro equipo multidisciplinario integrado por ingenieros eléctricos,
                                técnicos especializados y supervisores certificados gestiona cada proyecto
                                desde la ingeniería de detalle y la validación técnica hasta las pruebas
                                de aceptación y la puesta en servicio final.
                            </p>
                            <p>
                                Trabajamos con tecnología de vanguardia en automatización, monitoreo
                                y gestión energética, permitiendo a nuestros clientes optimizar su
                                consumo eléctrico, reducir costos operativos y garantizar la continuidad
                                del servicio en entornos críticos.
                            </p>
                        </div>

                        <div className="intro-features">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h4>Ingeniería de Detalle</h4>
                                <p>Desarrollo de planos as-built, memorias de cálculo y especificaciones técnicas conforme a normativa vigente.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h4>Control de Calidad</h4>
                                <p>Inspecciones sistemáticas, protocolos de prueba y documentación completa de cada fase constructiva.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4>Gestión de Tiempos</h4>
                                <p>Planificación detallada con rutas críticas y cronogramas de obra actualizados semanalmente.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h4>Seguridad Integral</h4>
                                <p>Certificaciones OHSAS, planes de seguridad ocupacional y cumplimiento normativo estricto.</p>
                            </div>
                        </div>
                    </div>

                    <div className="electric-intro-image">
                        <img
                            src={InstalacionAlumbrado}
                            alt="Ejecución de instalaciones eléctricas en obra"
                        />
                        <div className="image-caption">
                            <span>Instalación de poste metálico de alumbrado exterior</span>
                        </div>
                    </div>
                </div>
            </section>



            <section className="electrical-power-systems-specialized-solutions-showcase-section">
                <div className="electrical-power-systems-specialized-solutions-main-container">
                    <div className="electrical-power-systems-solutions-section-header-wrapper">
                        <span className="electrical-power-systems-global-section-category-label">CAPACIDADES TÉCNICAS</span>
                        <h2>Soluciones eléctricas completas para infraestructura moderna</h2>
                        <p className="electrical-power-systems-capabilities-descriptive-paragraph-text">
                            Ofrecemos servicios especializados en sistemas eléctricos de media y baja tensión,
                            abarcando desde subestaciones transformadoras hasta instalaciones de iluminación LED
                            inteligente, con enfoque en eficiencia energética y continuidad operativa.
                        </p>
                    </div>

                    <div className="electrical-power-systems-solutions-technology-cards-grid">
                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Subestaciones y Distribución Eléctrica</h3>
                            <ul>
                                <li>Subestaciones eléctricas MT/BT desde 100 kVA hasta 3000 kVA con transformadores secos o en aceite</li>
                                <li>Celdas de media tensión tipo metal-clad o metal-enclosed certificadas</li>
                                <li>Tableros eléctricos certificados IEC 61439: generales, de distribución y seccionales</li>
                                <li>Tableros de transferencia automática (ATS) y sincronización para grupos electrógenos</li>
                                <li>Cableado de potencia en bandejas portacables con cables NYY, N2XSY o THHW-LS</li>
                                <li>Sistemas de protección y coordinación selectiva con estudios de cortocircuito</li>
                            </ul>
                        </div>

                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Sistemas de Puesta a Tierra y Protección</h3>
                            <ul>
                                <li>Mallas de puesta a tierra según IEEE 80 y CNE con mediciones de resistividad del suelo</li>
                                <li>Pozos a tierra profundos con electrodos tipo Copperweld y tratamiento químico</li>
                                <li>Sistemas de protección contra descargas atmosféricas (SPDA) tipo Franklin y pararrayos</li>
                                <li>Barrajes de equipotencialización y tierras aisladas para equipos sensibles</li>
                                <li>Verificación de resistencia de puesta a tierra con telurómetros certificados</li>
                                <li>Protocolos de medición y certificación según normativa vigente</li>
                            </ul>
                        </div>

                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Iluminación y Dispositivos de Control</h3>
                            <ul>
                                <li>Diseño lumínico con DIALux: luminarias LED interiores y exteriores de alta eficiencia</li>
                                <li>Sistemas de iluminación de emergencia y señalización fotoluminiscente según NTP 399.010</li>
                                <li>Interruptores, tomacorrientes y cajas de paso industriales Bticino, Legrand o equivalente</li>
                                <li>Sistemas de control de iluminación DALI, DMX o sensores de presencia/fotoceldas</li>
                                <li>Alumbrado exterior en postes metálicos con proyectores LED y brazos galvanizados</li>
                                <li>Integración con sistemas de gestión de edificios (BMS) mediante protocolos abiertos</li>
                            </ul>
                        </div>

                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Calidad y Continuidad Eléctrica</h3>
                            <ul>
                                <li>UPS modulares redundantes (N+1, 2N) de 10 kVA hasta 500 kVA con baterías VRLA o Li-Ion</li>
                                <li>Grupos electrógenos diésel o gas con tableros de control y transferencia automática</li>
                                <li>Bancos de condensadores automáticos para corrección del factor de potencia</li>
                                <li>Medidores de energía multifunción con comunicación Modbus para monitoreo remoto</li>
                                <li>Estabilizadores y reguladores de voltaje para cargas críticas</li>
                                <li>Protocolos de comisionamiento: megado, continuidad, termografía y pruebas de relés</li>
                            </ul>
                        </div>

                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Canalizaciones y Obra Civil Eléctrica</h3>
                            <ul>
                                <li>Ductos eléctricos PVC-P SAP, EMT y conduit metálico rígido según aplicación</li>
                                <li>Bandejas portacables tipo escalera, perforadas y lisas con accesorios certificados</li>
                                <li>Excavaciones, zanjas y cámaras de paso para redes eléctricas subterráneas</li>
                                <li>Bases y pedestales de concreto para subestaciones, grupos electrógenos y equipos</li>
                                <li>Sellado de ductos y paso de cables con espuma intumescente contra incendios</li>
                                <li>Identificación y rotulado de circuitos según código de colores normativo</li>
                            </ul>
                        </div>

                        <div className="electrical-power-systems-individual-solution-technology-card">
                            <h3>Pruebas, Comisionamiento y Mantenimiento</h3>
                            <ul>
                                <li>Protocolos de pruebas: megado de cables, continuidad, secuencia de fases y ajuste de relés</li>
                                <li>Termografía infrarroja para detección de puntos calientes en tableros y conexiones</li>
                                <li>Auditorías energéticas con análisis de factor de potencia y balance de cargas</li>
                                <li>Puesta en marcha asistida y capacitación operativa al personal del cliente</li>
                                <li>Mantenimiento preventivo y correctivo con análisis de aceite dieléctrico</li>
                                <li>Entrega de documentación as-built, manuales técnicos y garantías respaldadas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section className="exec-flow-section">
                <div className="exec-container">
                    <header className="exec-header">
                        <span className="exec-label">METODOLOGÍA DE TRABAJO</span>
                        <h2 className="exec-title">Proceso de ejecución técnica y controlada</h2>
                    </header>

                    <div className="exec-steps-wrapper">
                        <div className="exec-step-item">
                            <div className="exec-number-wrapper">
                                <span className="exec-number">01</span>
                                <div className="exec-dot"></div>
                            </div>
                            <div className="exec-content">
                                <h4>Ingeniería y planificación</h4>
                                <p>Análisis técnico integral, validación de cargas y memorias de cálculo desde la ingeniería.</p>
                            </div>
                        </div>

                        <div className="exec-step-item">
                            <div className="exec-number-wrapper">
                                <span className="exec-number">02</span>
                                <div className="exec-dot"></div>
                            </div>
                            <div className="exec-content">
                                <h4>Suministro y logística</h4>
                                <p>Gestión de materiales certificados y coordinación logística alineada al avance real de obra.</p>
                            </div>
                        </div>

                        <div className="exec-step-item">
                            <div className="exec-number-wrapper">
                                <span className="exec-number">03</span>
                                <div className="exec-dot"></div>
                            </div>
                            <div className="exec-content">
                                <h4>Instalación y montaje</h4>
                                <p>Ejecución por cuadrillas especializadas y terminaciones técnicas certificadas.</p>
                            </div>
                        </div>

                        <div className="exec-step-item">
                            <div className="exec-number-wrapper">
                                <span className="exec-number">04</span>
                                <div className="exec-dot"></div>
                            </div>
                            <div className="exec-content">
                                <h4>Pruebas y comisionamiento</h4>
                                <p>Protocolos de prueba, termografía y simulaciones bajo carga controlada.</p>
                            </div>
                        </div>

                        <div className="exec-step-item">
                            <div className="exec-number-wrapper">
                                <span className="exec-number">05</span>
                                <div className="exec-dot"></div>
                            </div>
                            <div className="exec-content">
                                <h4>Entrega técnica</h4>
                                <p>Documentación as-built, capacitación operativa y garantía técnica respaldada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="electric-vision">
                <div className="electric-vision-overlay">
                    <div className="electric-vision-content">
                        <span className="vision-label">COMPROMISO CON LA EXCELENCIA</span>
                        <h2>Sistemas eléctricos pensados para operar sin fallas, hoy y en el largo plazo</h2>
                        <p>
                            Cada proyecto que ejecutamos está pensado para soportar las condiciones
                            más exigentes de operación continua. Utilizamos componentes de grado industrial,
                            redundancias calculadas y protecciones coordinadas que garantizan disponibilidad,
                            seguridad y eficiencia energética a largo plazo.
                        </p>
                        <div className="vision-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Materiales certificados y homologados</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Diseño con criterios de redundancia N+1</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Cumplimiento normativo internacional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="electric-cta">
                <div className="electric-cta-container">
                    <div className="cta-content">
                        <h2>¿Necesita una solución eléctrica confiable para su próximo proyecto?</h2>
                        <p>
                            Nuestro equipo de ingeniería está disponible para evaluar sus requerimientos
                            técnicos y desarrollar una propuesta personalizada que garantice continuidad,
                            eficiencia y cumplimiento normativo.
                        </p>
                        <Link to="/contactos">
                            <button className="cta-button">Solicitar consultoría técnica</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Electrical;