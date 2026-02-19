import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css'
import { createClient } from '@supabase/supabase-js';



const Contact = () => {

    // PARA FORMULARIO - BOTON DE ENVIO
    const [isSending, setIsSending] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    // PARA FORMULARIO - AGREGAR ARCHIVOS
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const uploadIntervalRef = useRef(null);

    // PARA FORMULARIO - BORRAR ARCHIVO SELECCIONADO
    const handleRemoveFile = () => {
        clearInterval(uploadIntervalRef.current);
        setSelectedFile(null);
        setUploadProgress(0);
    };

    // PARA FORMULARIO - BARRA DE CARGA DE ARCHIVO MB
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadProgress(0);

        const fileData = {
            name: file.name,
            sizeMB: (file.size / 1024 / 1024).toFixed(2),
            raw: file
        };

        setSelectedFile(fileData)

        let progress = 0;
        const speed = Math.max(10, 200 / fileData.sizeMB);

        uploadIntervalRef.current = setInterval(() => {
            progress += speed;
            if (progress >= 100) {
                progress = 100;
                clearInterval(uploadIntervalRef.current);
            }
            setUploadProgress(Math.floor(progress));
        }, 100);
    };


    // PARA FORMULARIO - CONEXION CON EMAILJS
    const formRef = useRef(null);
    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setFormStatus(null);

        try {
            let fileUrl = 'Sin archivo adjunto';

            if (selectedFile) {
                fileUrl = await uploadFileToStorage();
            }

            const hiddenFileInput = formRef.current.querySelector('input[name="file"]');
            hiddenFileInput.value = fileUrl;

            await emailjs.sendForm(
                'service_xdhmw8s',
                'template_z4tjlvm',
                formRef.current,
                't4N2jnUCsiufz1fkJ'
            );

            setFormStatus('success');
            formRef.current.reset();
            setSelectedFile(null);
            setUploadProgress(0);

        } catch (error) {
            console.error(error);
            setFormStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    // PARA FORMULARIO - CONEXION CON SUPABASE
    const supabase = createClient(
        'https://emxnedyziyhmfuhvtyci.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteG5lZHl6aXlobWZ1aHZ0eWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NTk4NDYsImV4cCI6MjA4NjMzNTg0Nn0.MUTf3e1w3RW74sP4HyXyP5QjPd2M_k_myAWOAnCz4tE'
    );

    const uploadFileToStorage = async () => {
        if (!selectedFile) return 'Sin archivo adjunto';

        const fileName = `${Date.now()}-${selectedFile.raw.name}`;

        const { error } = await supabase
            .storage
            .from('contact-files')
            .upload(fileName, selectedFile.raw);

        if (error) {
            console.error('Error subiendo archivo:', error);
            throw error;
        }

        const { data } = supabase
            .storage
            .from('contact-files')
            .getPublicUrl(fileName);

        return data.publicUrl;
    };

    return (
        <>
            <section className="enterprise_contact_request_page_layout_section">
                <div className="enterprise_contact_request_page_inner_wrapper">

                    {/* ================= CONTENIDO EDITORIAL ================= */}
                    <div className="enterprise_contact_request_editorial_content_block">
                        <div className="enterprise_contact_request_primary_heading_wrapper">
                            <h1 className="enterprise_contact_request_primary_heading">
                                Solicita tu propuesta en línea
                            </h1>
                        </div>

                        <div className="enterprise_contact_request_introductory_text_wrapper">
                            <h3 className="enterprise_contact_request_introductory_text">
                                Al trabajar con <span>EJECUTA</span> , buscas la tranquilidad de saber que tu proyecto está en buenas manos.
                                Nos aseguramos de que cada instalación cumpla con las normas técnicas y se ejecute con orden,
                                calidad y respeto por los plazos, para que puedas avanzar con confianza desde el primer día.
                            </h3>
                        </div>

                        <div className="enterprise_contact_request_archetype_heading_wrapper">
                            <h2 className="enterprise_contact_request_archetype_heading">
                                Trabajamos con un arquetipo claro
                            </h2>
                        </div>

                        <div className="enterprise_contact_request_value_argumentation_block">
                            <h2 className="enterprise_contact_request_value_argumentation_heading">
                                ¿Por qué es clave conversar antes de ejecutar tu proyecto?
                            </h2>

                            <p className="enterprise_contact_request_value_argumentation_description">
                                Una decisión técnica a tiempo ordena todo el proyecto y permite ejecutar con criterio,
                                sin improvisaciones ni riesgos innecesarios.
                            </p>

                            <div className="enterprise_contact_request_benefits_list_wrapper">

                                <h3 className="enterprise_contact_request_benefits_list_heading">
                                    ¿Qué obtienes al contactarnos?
                                </h3>

                                <ul className="enterprise_contact_request_benefits_list">
                                    <li className="enterprise_contact_request_benefits_list_item">
                                        Claridad técnica antes de iniciar la ejecución
                                    </li>
                                    <li className="enterprise_contact_request_benefits_list_item">
                                        Criterios definidos para cada sistema del proyecto
                                    </li>
                                    <li className="enterprise_contact_request_benefits_list_item">
                                        Prevención de errores y sobrecostos en obra
                                    </li>
                                    <li className="enterprise_contact_request_benefits_list_item">
                                        Cumplimiento normativo desde la planificación
                                    </li>
                                    <li className="enterprise_contact_request_benefits_list_item">
                                        Ejecución controlada, segura y sin fricción
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="enterprise_contact_request_direct_information_block">
                            <div className="enterprise_contact_request_direct_information_heading_wrapper">
                                <h1 className="enterprise_contact_request_direct_information_heading">
                                    Información de contacto
                                </h1>
                            </div>

                            <div className="enterprise_contact_request_direct_information_items_group">
                                <span className="enterprise_contact_request_direct_information_item">
                                    <i class="fa-solid fa-envelope"></i> postVenta@ejecuta.net.pe
                                </span>
                                <span className="enterprise_contact_request_direct_information_item">
                                    <i class="fa-solid fa-phone"></i> +51 987 654 321
                                </span>
                                <span className="enterprise_contact_request_direct_information_item">
                                    <i class="fa-solid fa-location-dot"></i> Lima, Perú
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* ================= FORMULARIO ================= */}
                    <div className="enterprise_contact_request_form_outer_container">

                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="enterprise_contact_request_form_structure"
                        >

                            <div className="enterprise_contact_request_form_field_group">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="Nombre y apellido"
                                    required
                                    className="enterprise_contact_request_form_field_group_input"
                                />
                            </div>

                            <div className="enterprise_contact_request_form_field_group">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Telefono"
                                    maxLength={9}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9);
                                    }}
                                    required
                                    className="enterprise_contact_request_form_field_group_input"
                                />
                            </div>

                            <div className="enterprise_contact_request_form_field_group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="correo@empresa.com"
                                    required
                                    className="enterprise_contact_request_form_field_group_input"
                                />
                            </div>

                            <div className="enterprise_contact_request_form_field_group">
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Nombre de la empresa o proyecto"
                                    className="enterprise_contact_request_form_field_group_input"
                                />
                            </div>

                            <div className="enterprise_contact_request_form_field_group">
                                <label htmlFor="service">Tipo de servicio</label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    className="enterprise_contact_request_form_field_group_input"
                                >
                                    <option value="">Seleccionar servicio</option>
                                    <option value="Instalaciones eléctricas">Instalaciones eléctricas</option>
                                    <option value="Instalaciones sanitarias">Instalaciones sanitarias</option>
                                    <option value="Comunicaciones">Comunicaciones</option>
                                    <option value="Contraincendio">Contraincendio</option>
                                    <option value="Proyecto integral">Proyecto integral</option>
                                </select>
                            </div>

                            <div className="enterprise_contact_request_form_field_group">
                                <label htmlFor="urgency">Urgencia del proyecto</label>
                                <select
                                    id="urgency"
                                    name="urgency"
                                    required
                                    className="enterprise_contact_request_form_field_group_input"
                                >
                                    <option value="">Seleccionar nivel</option>
                                    <option value="Inmediato">Inmediato</option>
                                    <option value="Evaluación en curso">Evaluación en curso</option>
                                    <option value="Proyecto a futuro">Proyecto a futuro</option>
                                </select>
                            </div>

                            {/* Archivo: solo informativo */}
                            <div className="enterprise_contact_request_form_field_group">
                                <label>Adjuntar documento (opcional)</label>

                                {!selectedFile && (
                                    <label
                                        htmlFor="file"
                                        className="enterprise_contact_request_file_upload_box"
                                    >
                                        <i className="fa-solid fa-cloud-arrow-up"></i>
                                        <span>Elegir archivo</span>
                                    </label>
                                )}

                                <input
                                    type="file"
                                    id="file"
                                    accept=".pdf,.dwg,.doc,.docx,.xls,.xlsx,.zip"
                                    onChange={handleFileChange}
                                    hidden
                                />

                                {selectedFile && (
                                    <div className="enterprise_contact_request_file_status">

                                        <div className="enterprise_contact_request_file_header">
                                            <span className="file_name">
                                                <i className="fa-solid fa-file"></i>
                                                {selectedFile.name}
                                            </span>

                                            <button
                                                type="button"
                                                className="file_remove_btn"
                                                onClick={handleRemoveFile}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>

                                        <div className="enterprise_contact_request_file_progress_bar">
                                            <div
                                                className="enterprise_contact_request_file_progress_fill"
                                                style={{ width: `${uploadProgress}%` }}
                                            ></div>
                                        </div>

                                        <div className="enterprise_contact_request_file_footer">
                                            <span>{uploadProgress}%</span>
                                            <span>{selectedFile.sizeMB} MB</span>
                                        </div>

                                    </div>
                                )}

                                <span className="enterprise_contact_request_form_field_helper_text">
                                    Planos, memorias técnicas o documentos del proyecto
                                </span>

                                <span className='enterprise_contact_request_form_field_helper_text'>
                                    - Peso maximo hasta 50MB
                                </span>

                                <input type="hidden" name="file" value={selectedFile ? selectedFile.url || '' : ''} />
                            </div>

                            <div className="enterprise_contact_request_form_action_wrapper">
                                <button
                                    type="submit"
                                    className={`enterprise_contact_request_form_primary_action_button ${isSending ? 'sending' : ''}`}
                                >
                                    {isSending ? (
                                        <>
                                            <span className='spinner'></span>   
                                            Procesando Solicitud
                                        </>
                                    ): (
                                        'Enviar Solicitud'
                                    )}
                                </button>

                                {formStatus === 'success' && (
                                        <div className='enterprise_form_status success'>
                                            <i className="fa-solid fa-circle-check"></i>
                                            Hemos recibido tu solicitud. Nuestro equipo técnico te contactará en breve.
                                        </div>
                                )} { formStatus === 'error' && (
                                    <div className='enterprise_form_status_error'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        Ocurrio un incoveniente al enviar la consulta. Intenta de nuevo.
                                    </div>
                                )}
                            </div>

                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;