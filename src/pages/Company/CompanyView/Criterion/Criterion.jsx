import Obra_1 from '../../../../assets/img/obra1.png';
import Obra_2 from '../../../../assets/img/obra2.png';
import Obra_3 from '../../../../assets/img/enfoqueIngeniero.jpg';
import viabilidad from '../../../../assets/img/viabilidad.jpeg';
import desicionTecnica from '../../../../assets/img/DesicionTecnica.jpg';
import integracionEspecialidad from '../../../../assets/img/IntegraciónEspecialidades.jpg';
import controlPresupuesto from '../../../../assets/img/controlPresupuesto.png';
import continuidadOperativa from '../../../../assets/img/continuidadOperativa.png';
import ejecucioSinImpro from '../../../../assets/img/ejecución.png';
import responsabilidadTecnica from '../../../../assets/img/responsabilidadTecnica.jpg';
import instalacionTerminada from '../../../../assets/img/instalacionTerminada.png';
import '../../../../styles/Criterion.css';

const Criterion = () => {

    const criterios = [
        {
            title: "Análisis de viabilidad real",
            desc: "Antes de iniciar cualquier ejecución, la Oficina Técnica valida planos y metrados contrastando especialidades, condiciones reales de obra y normativas vigentes. Las inconsistencias se detectan y corrigen en etapa de presupuesto para evitar adicionales y sobrecostos futuros.",
            img: viabilidad
        },
        {
            title: "Decisiones técnicas basadas en datos",
            desc: "Cada decisión se sustenta en análisis de costos actualizados, revisión detallada de alcances y evaluación de riesgos reales. No trabajamos con estimaciones abiertas, sino con propuestas técnicas finales que aseguran estabilidad técnica y financiera.",
            img: desicionTecnica
        },
        {
            title: "Integración entre especialidades",
            desc: "Las instalaciones se analizan como un sistema completo. Anticipamos interferencias entre disciplinas y coordinamos soluciones antes de llegar a obra, reduciendo reprocesos, retrasos y conflictos en campo.",
            img: integracionEspecialidad
        },
        {
            title: "Control desde el presupuesto",
            desc: "El presupuesto no es solo un número, es una herramienta de control, alcances definidos con criterio técnico que nos permiten ejecutar sin improvisaciones, evitando adicionales, reclamos y desviaciones durante la obra.",
            img: controlPresupuesto
        },
        {
            title: "Continuidad operativa del cliente",
            desc: "Las soluciones se evalúan priorizando que la operación del cliente no se detenga. En entornos críticos como salud o retail, se seleccionan materiales y diseños que reducen riesgos y aseguran confiabilidad operativa.",
            img: continuidadOperativa
        },
        {
            title: "Ejecución sin improvisaciones",
            desc: "En campo, cada acción responde a decisiones tomadas previamente en oficina técnica. El criterio aplicado antes permite ejecutar con claridad, seguridad y control de plazos.",
            img: ejecucioSinImpro
        },
        {
            title: "Responsabilidad técnica y normativa",
            desc: "Todas las decisiones se alinean a marcos normativos nacionales e internacionales. Se descartan soluciones que comprometan la seguridad, la calidad o la integridad técnica del proyecto.",
            img: responsabilidadTecnica
        },
        {
            title: "Pensado para operar y mantener",
            desc: "El criterio no termina en la entrega de obra. Evaluamos cada solución considerando su operación, mantenimiento y escalabilidad a lo largo del tiempo.",
            img: instalacionTerminada
        }
    ];


    return (
        <>

            <div className="criterion_section">
                <h1 className="criterion_title">
                    Nuestra forma de hacer ingeniería
                </h1>

                <h3 className="criterion_subtitle">
                    Decisiones basadas en datos, coordinación real y responsabilidad total
                </h3>

                <p className="criterion_description">
                    Cada proyecto inicia con un análisis técnico riguroso y enfoque preventivo: validamos la viabilidad desde el presupuesto, integramos especialidades antes de obra y controlamos riesgos con información real. Ejecutamos sin improvisaciones ni adicionales imprevistos, entregando soluciones sólidas, operables y pensadas para durar.
                </p>
            </div>

            {/* ============================ SECCION IMAGENES DE OBRA ========================== */}
            <section className="ejecuta_criterion_grid_main">
                {criterios.map((item, index) => (
                    <div className={`criterion_tile tile_${index + 1}`} key={index}>
                        <img src={item.img} alt={item.title} className="tile_bg" />
                        <div className="tile_overlay">
                            <div className="tile_content">
                                <span className="tile_number">0{index + 1}</span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


            {/* ============================ SECCION CRITERIO DE OBRA ========================== */}
            <section className="approach_criteria_section">
                <div className="approach_criteria_layout">

                    <div className="approach_criteria_visual">
                        <span className="criteria_tag">CRITERIO EJECUTA</span>

                        <h2>Como tomamos decisiones en obra</h2>

                        <div className="criteria_line"></div>

                        <p className="criteria_key">
                            Decisiones técnicas claras,
                            antes <br /> y durante la ejecución.
                        </p>
                    </div>

                    <div className="approach_criteria_content">
                        <p className="approach_criteria_text">
                            Antes de decidir en obra evaluamos impacto en seguridad, cumplimiento normativo, funcionamiento del sistema, continuidad operativa y costo real de corrección, no tomamos atajos ni soluciones temporales, cada decisión busca que la obra funcione bien hoy y siga funcionando cuando el proyecto ya esté en operación
                        </p>
                    </div>
                </div>

            </section>



            <section className="no_impro_section">
                <div className="no_impro_container">

                    <div className="no_impro_header">
                        <span className="no_impro_tag">CRITERIO EN OBRA</span>
                        <h2>Lo que no hacemos en <span>EJECUTA</span></h2>
                        <p>
                            Nuestro criterio también se define por los límites que no cruzamos
                            porque proteger tu proyecto es parte de nuestra responsabilidad técnica
                        </p>
                    </div>

                    <div className="no_impro_grid">
                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No improvisamos soluciones en campo para ganar tiempo</p>
                        </div>

                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No ejecutamos cambios sin evaluar impacto técnico y normativo</p>
                        </div>

                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No aceptamos decisiones que comprometan la seguridad del sistema</p>
                        </div>

                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No dejamos criterios críticos sin respaldo técnico ni trazabilidad</p>
                        </div>

                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No entregamos sistemas que no estén pensados para operar correctamente</p>
                        </div>

                        <div className="no_impro_item">
                            <span>✕</span>
                            <p>No trasladamos riesgos técnicos al cliente</p>
                        </div>
                    </div>

                </div>
            </section>

        </>

    );
};

export default Criterion;