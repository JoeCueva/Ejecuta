import '../../styles/Project.css';
import Cliente1 from '../../assets/img/ClienteLogos/Condiminio.png';
import Cliente2 from '../../assets/img/ClienteLogos/Consorcio.png';
import Cliente3 from '../../assets/img/ClienteLogos/Falabella.png';
import Cliente4 from '../../assets/img/ClienteLogos/Feban.png';
// import Cliente5 from '../../assets/img/ClienteLogos/Huarcaya.png';
import Cliente6 from '../../assets/img/ClienteLogos/Impala.png';
import Cliente7 from '../../assets/img/ClienteLogos/Ministerio.png';
import Cliente8 from '../../assets/img/ClienteLogos/Municipalidad.png';
import Cliente9 from '../../assets/img/ClienteLogos/PrecioUno.png';
import Cliente10 from '../../assets/img/ClienteLogos/StellaMaris.png';
import Cliente11 from '../../assets/img/ClienteLogos/Tottus.png';
import Cliente12 from '../../assets/img/ClienteLogos/Upn.png';

import Marca1 from '../../assets/img/MarcaLogos/3M.png';
import Marca2 from '../../assets/img/MarcaLogos/Bticino.png';
import Marca3 from '../../assets/img/MarcaLogos/Dincorsa.png';
import Marca4 from '../../assets/img/MarcaLogos/Eaton.png';
import Marca5 from '../../assets/img/MarcaLogos/Fratelli.png';
import Marca6 from '../../assets/img/MarcaLogos/Indeco.png';
import Marca7 from '../../assets/img/MarcaLogos/IndustriaTello.png';
import Marca8 from '../../assets/img/MarcaLogos/Jormen.png';
import Marca9 from '../../assets/img/MarcaLogos/Matusita.png';
import Marca10 from '../../assets/img/MarcaLogos/P&L.png';
import Marca11 from '../../assets/img/MarcaLogos/Portalampara.png';
import Marca12 from '../../assets/img/MarcaLogos/Sonepar.png';
import Marca13 from '../../assets/img/MarcaLogos/Trebol.png';
import Marca14 from '../../assets/img/MarcaLogos/TuboPlast.png';
import Marca15 from '../../assets/img/MarcaLogos/Wesco.png';
import Marca16 from '../../assets/img/MarcaLogos/Promhil.png';

import BrochurePDF from '../../assets/docs/BROCHURE_EJECUTA_CONSTRUCCION_2026.pdf';

const Project = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = BrochurePDF;
        link.download = 'EJECUTA_Brochure_2026.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clientes = [
        Cliente1, Cliente2, Cliente3, Cliente4, Cliente6,
        Cliente7, Cliente8, Cliente9, Cliente10, Cliente11, Cliente12,
    ];

    // Duplicamos para carrusel infinito
    const clientesDuplicados = [...clientes, ...clientes];

    const marcas = [
        Marca1, Marca2, Marca3, Marca4, Marca5, Marca6, Marca7, Marca8,
        Marca9, Marca10, Marca11, Marca12, Marca13, Marca14, Marca15, Marca16,
    ];

    return (
        <>
            {/* 1. Sección Clientes - ahora con carrusel infinito */}
            <section className="trust-section clientes">
                <div className="trust-content">
                    <h2>Clientes que confiaron en nosotros</h2>
                    <p>
                        Hemos participado en proyectos para el sector privado e institucional,
                        cumpliendo estándares técnicos y plazos exigentes.
                    </p>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {clientesDuplicados.map((logo, index) => (
                            <div className="marquee-item" key={`cliente-${index}`}>
                                <img src={logo} alt={`Cliente ${index + 1}`} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Sección En Construcción / Brochure */}
            <section className="coming-section">
                <div className="coming-card">
                    <h2>Proyectos en camino</h2>
                    <p className="coming-text">
                        Estamos preparando una galería detallada de nuestros trabajos más recientes
                        con planos, especificaciones técnicas y fotos de obra. Muy pronto estará disponible.
                    </p>
                    <p className="coming-subtitle">
                        Mientras tanto, descarga nuestro brochure corporativo 2026
                    </p>

                    <button className="download-btn" onClick={handleDownload}>
                        Descargar Brochure
                    </button>

                    <button className="download-btns">
                        <a href="https://publuu.com/flip-book/1065050/2377476" className='book-btn' target="_blank">
                            Ver Brochure Interactivo
                        </a>
                    </button>

                </div>
            </section>

            <section className="trust-section marcas">
                <div className="trust-content">
                    <h2>Fabricantes y tecnologías que integran nuestros proyectos</h2>
                    <p>
                        Utilizamos productos y soluciones de fabricantes reconocidos en la industria,
                        seleccionados por su calidad, cumplimiento normativo y confiabilidad técnica.
                        La elección de cada marca responde a los requerimientos específicos de
                        cada proyecto.
                    </p>
                </div>

                <div className="logo-grid">
                    {marcas.map((logo, index) => (
                        <div className="logo-item" key={`marca-${index}`}>
                            <img
                                src={logo}
                                alt="Logo de fabricante utilizado en nuestros proyectos"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <p className="marca-disclaimer">
                    Las marcas y logotipos mostrados pertenecen a sus respectivos propietarios <br />
                    y se presentan únicamente con fines informativos y de referencia comercial.
                </p>
            </section>
        </>
    );
};

export default Project;