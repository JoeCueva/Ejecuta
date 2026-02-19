import { useEffect, useState, useRef } from "react";
import botData from "./ChatBot.json";
import "./ChatBot.css";
import logoEjecuta from '../../assets/img/LogoEjecuta/LogosFondosOscuro.png';

export default function EjecutaChatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [userName, setUserName] = useState(null);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => { scrollToBottom(); }, [messages, isTyping]);

    useEffect(() => {
        if (open && messages.length === 0) {
            setTimeout(() => {
                addBotMessage(botData.welcome.greeting);
                setTimeout(() => {
                    addBotMessage(botData.welcome.message);
                    setTimeout(() => { addBotMessage(botData.welcome.cta); }, 1800);
                }, 1800);
            }, 500);
        }
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const preventScrollPropagation = (e) => {
            if (chatContainerRef.current?.contains(e.target)) e.stopPropagation();
        };
        document.addEventListener('wheel', preventScrollPropagation, { passive: true });
        document.addEventListener('touchmove', preventScrollPropagation, { passive: false });
        return () => {
            document.removeEventListener('wheel', preventScrollPropagation);
            document.removeEventListener('touchmove', preventScrollPropagation);
        };
    }, [open]);

    const addBotMessage = (text, delay = 1400) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date() }]);
            setIsTyping(false);
        }, delay);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }]);
    };

    // ============================================================
    // DETECCIÓN DE NOMBRE DEL CLIENTE
    // ============================================================
    const extractName = (message) => {
        const msg = message.trim();

        // Patrones para detectar el nombre
        const patterns = [
            /\bsoy\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)/i,
            /\bme\s+llamo\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)/i,
            /\bmi\s+nombre\s+es\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)/i,
            /\bmi\s+nombre\s+es\s+([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?)/i,
            /^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)$/,
        ];

        // Palabras que NO son nombres (evitar falsos positivos)
        const notNames = [
            'cliente', 'ingeniero', 'técnico', 'tecnico', 'nuevo', 'interesado',
            'curioso', 'peruano', 'peruano', 'lima', 'peru', 'perú', 'empresa',
            'gerente', 'director', 'jefe', 'encargado', 'responsable'
        ];

        for (const pattern of patterns) {
            const match = msg.match(pattern);
            if (match && match[1]) {
                const name = match[1].trim();
                // Verificar que no sea una palabra común
                if (!notNames.includes(name.toLowerCase()) && name.length > 1) {
                    return name;
                }
            }
        }
        return null;
    };

    // Capitaliza la primera letra del nombre
    const capitalizeName = (name) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        addUserMessage(category.title);
        const responses = Object.values(category.responses);
        responses.forEach((response, index) => {
            setTimeout(() => { addBotMessage(response, 1600); }, index * 1800);
        });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        const userMsg = inputValue.trim();
        addUserMessage(userMsg);
        setInputValue("");

        // Intentar detectar el nombre en el mensaje
        const detectedName = extractName(userMsg);
        if (detectedName && !userName) {
            const cleanName = capitalizeName(detectedName);
            setUserName(cleanName);
            // Respuesta personalizada con el nombre detectado
            const welcomeResponses = [
                `¡Bienvenido, ${cleanName}! 😊 Es un gusto atenderte. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, metodología, proyectos o cómo iniciar un proyecto.`,
                `¡Hola, ${cleanName}! Un placer 😊. Estoy aquí para resolver todas tus dudas sobre EJECUTA. ¿Por dónde quieres empezar?`,
                `¡Qué gusto conocerte, ${cleanName}! 👋 Soy el asistente virtual de EJECUTA. ¿Tienes algún proyecto en mente o quieres conocer más sobre nuestros servicios?`,
            ];
            const response = welcomeResponses[Math.floor(Math.random() * welcomeResponses.length)];
            addBotMessage(response, 1600);
            return;
        }

        // Si ya conocemos el nombre, usarlo ocasionalmente en las respuestas
        const response = generateAutoResponse(userMsg, userName);
        addBotMessage(response, 1600);
    };

    // ============================================================
    // FUNCIÓN AUXILIAR: Añade el nombre del usuario ocasionalmente
    // a las respuestas para personalizar la conversación
    // ============================================================
    const withName = (response, name) => {
        if (!name) return response;
        // Añade el nombre al inicio con ~30% de probabilidad para no saturar
        const rand = Math.random();
        if (rand < 0.30) {
            return `${name}, ${response.charAt(0).toLowerCase()}${response.slice(1)}`;
        }
        return response;
    };

    const generateAutoResponse = (userMessage, currentName = null) => {
        const msg = userMessage.toLowerCase();

        // ============================================================
        // RESPUESTAS DE CHATBOT / CONVERSACIÓN PERSONAL
        // ============================================================
        if (
            msg.includes('como te encuentras') || msg.includes('cómo te encuentras') ||
            msg.includes('como estas') || msg.includes('cómo estás') ||
            msg.includes('como te va') || msg.includes('cómo te va') ||
            msg === 'que tal' || msg === 'qué tal'
        ) {
            const r = [botData.autoResponses.chatbot_como_estas, botData.autoResponses.chatbot_como_estas_2];
            return r[Math.floor(Math.random() * r.length)];
        }

        if (
            msg.includes('te tratan bien') || msg.includes('bien tratado') ||
            msg.includes('te tratan mal') || msg.includes('como te tratan') || msg.includes('cómo te tratan')
        ) {
            return botData.autoResponses.chatbot_bien_tratado;
        }

        if (
            msg.includes('que fecha') || msg.includes('qué fecha') ||
            msg.includes('que dia es') || msg.includes('qué día es') ||
            msg.includes('que dia estamos') || msg.includes('en que fecha') ||
            msg.includes('en qué fecha') || msg.includes('fecha es hoy')
        ) {
            return botData.autoResponses.chatbot_que_fecha;
        }

        if (
            msg.includes('siempre estas activo') || msg.includes('siempre estás activo') ||
            msg.includes('siempre estas disponible') || msg.includes('siempre estás disponible') ||
            msg.includes('nunca descansas') || msg.includes('trabajas 24') ||
            msg.includes('cuando descansas') || msg.includes('cuándo descansas')
        ) {
            return botData.autoResponses.chatbot_siempre_activo;
        }

        if (
            msg.includes('para que te crearon') || msg.includes('para qué te crearon') ||
            msg.includes('para que sirves') || msg.includes('para qué sirves') ||
            msg.includes('cual es tu funcion') || msg.includes('cuál es tu función') ||
            msg.includes('para que fuiste') || msg.includes('para qué fuiste')
        ) {
            return botData.autoResponses.chatbot_para_que_sirves;
        }

        if (
            msg.includes('en que me puedes ayudar') || msg.includes('en qué me puedes ayudar') ||
            msg.includes('que puedes hacer') || msg.includes('qué puedes hacer') ||
            msg.includes('que sabes hacer') || msg.includes('qué sabes hacer')
        ) {
            return botData.autoResponses.chatbot_en_que_ayudo;
        }

        if (
            msg.includes('quien te creo') || msg.includes('quién te creó') ||
            msg.includes('quien te hizo') || msg.includes('quién te hizo') ||
            msg.includes('quien te programo') || msg.includes('quién te programó') ||
            msg.includes('quien te diseño') || msg.includes('quién te diseñó')
        ) {
            return botData.autoResponses.chatbot_quien_te_creo;
        }

        if (
            msg.includes('como te crearon') || msg.includes('cómo te crearon') ||
            msg.includes('como te hicieron') || msg.includes('cómo te hicieron') ||
            msg.includes('como te programaron') || msg.includes('cómo te programaron')
        ) {
            return botData.autoResponses.chatbot_como_te_crearon;
        }

        if (
            msg.includes('hay alguien real') || msg.includes('eres una persona') ||
            msg.includes('eres humano') || msg.includes('eres una ia') ||
            msg.includes('eres un bot') || msg.includes('eres un robot') ||
            msg.includes('hablo con una persona') || msg.includes('hablo con alguien real')
        ) {
            return botData.autoResponses.chatbot_hay_alguien_real;
        }

        if (
            msg.includes('estas hecho por') ||
            msg.includes('fuiste creado por una ia')
        ) {
            return botData.autoResponses.chatbot_uso_ia;
        }

        if (
            msg.includes('trabajas mucho') || msg.includes('te cansas') ||
            msg.includes('te aburres') || msg.includes('te pagan')
        ) {
            return botData.autoResponses.chatbot_trabajas_mucho;
        }

        if (
            msg.includes('eres inteligente') || msg.includes('que tan inteligente') ||
            msg.includes('qué tan inteligente') || msg.includes('eres listo') ||
            msg.includes('sabes mucho') || msg.includes('eres bueno')
        ) {
            return botData.autoResponses.chatbot_eres_inteligente;
        }

        if (
            msg.includes('siempre respondes') || msg.includes('siempre contestas') ||
            msg.includes('respondes todo') || msg.includes('contestas todo')
        ) {
            return botData.autoResponses.chatbot_siempre_respondes;
        }

        if (
            msg.includes('eres un grande') || (msg.includes('grande') && msg.includes('xd')) ||
            msg.includes('grande xd') || msg.includes('eres grandeee') ||
            msg === 'grande' || msg === 'grande!'
        ) {
            return botData.autoResponses.chatbot_eres_grande;
        }

        if (
            msg.includes('estoy algo confundido') || msg.includes('confundido') ||
            msg.includes('estoy confundido') || msg.includes('no entiendo') ||
            msg.includes('me perdi') || msg.includes('me perdí') ||
            msg.includes('estoy perdido') || msg.includes('no se por donde')
        ) {
            return botData.autoResponses.chatbot_confundido;
        }

        if (
            msg.includes('comparando proveedores') || msg.includes('comparando empresas') ||
            msg.includes('estoy comparando') || msg.includes('cotizando con varios') ||
            msg.includes('evaluando opciones') || msg.includes('busco proveedor')
        ) {
            return botData.autoResponses.chatbot_comparando;
        }

        if (
            msg.includes('estoy apurado') || msg.includes('tengo prisa') ||
            msg.includes('poco tiempo') || msg.includes('en resumen') ||
            msg.includes('resumen rapido') || msg.includes('resumen rápido') ||
            msg.includes('dime rapido') || msg.includes('dime rápido')
        ) {
            return botData.autoResponses.chatbot_apurado_resumen;
        }

        if (
            msg.includes('confianza') || msg.includes('confiar') ||
            msg.includes('como se si son de confiar') || msg.includes('es confiable') ||
            msg.includes('son confiables') || msg.includes('puedo fiarme') ||
            msg.includes('de fiar') || msg.includes('empresa seria') || msg.includes('empresa formal')
        ) {
            return botData.autoResponses.chatbot_son_confiables;
        }

        // ============================================================
        // ISO / CERTIFICACIONES
        // ============================================================
        if (
            msg.includes('iso') || msg.includes('certificacion') || msg.includes('certificación') ||
            msg.includes('certificados') || msg.includes('tienen iso') || msg.includes('cuentan con iso') ||
            msg.includes('iso 9001') || msg.includes('acreditacion') || msg.includes('acreditación')
        ) {
            return botData.autoResponses.iso_certificacion;
        }

        // ============================================================
        // INSTALACIONES SANITARIAS
        // ============================================================
        if (
            msg.includes('instalaciones sanitarias') || msg.includes('hacen sanitari') ||
            msg.includes('realizan sanitari') || msg.includes('servicio sanitari')
        ) {
            return botData.autoResponses.sanitario_general;
        }
        if (msg.includes('agua fria') || msg.includes('agua fría') || msg.includes('red de agua fria')) {
            return botData.autoResponses.sanitario_agua_fria;
        }
        if (msg.includes('agua caliente') || msg.includes('termosolar') || msg.includes('calentador')) {
            return botData.autoResponses.sanitario_agua_caliente;
        }
        if (msg.includes('desague') || msg.includes('desagüe') || msg.includes('drenaje') || msg.includes('alcantarillado')) {
            return botData.autoResponses.sanitario_desague;
        }
        if (msg.includes('bombeo') || msg.includes('cisterna') || msg.includes('tanque elevado') || msg.includes('electrobomba')) {
            return botData.autoResponses.sanitario_bombeo;
        }
        if (
            msg.includes('proyecto sanitario pequeño') || msg.includes('obra sanitaria pequeña') ||
            msg.includes('proyecto sanitario chico')
        ) {
            return botData.autoResponses.sanitario_pequenos;
        }

        // ============================================================
        // INSTALACIONES DE COMUNICACIONES
        // ============================================================
        if (
            msg.includes('instalaciones de comunicaciones') || msg.includes('hacen comunicaciones') ||
            msg.includes('realizan comunicaciones') || msg.includes('servicio de comunicaciones')
        ) {
            return botData.autoResponses.comunicaciones_general;
        }
        if (
            msg.includes('redes estructuradas') || msg.includes('red estructurada') ||
            msg.includes('cableado estructurado') || msg.includes('red lan') || msg.includes('red de datos')
        ) {
            return botData.autoResponses.comunicaciones_redes;
        }
        if (
            msg.includes('fibra optica') || msg.includes('fibra óptica') ||
            msg.includes('enlace de fibra') || msg.includes('tendido de fibra')
        ) {
            return botData.autoResponses.comunicaciones_fibra;
        }
        if (
            msg.includes('cctv') || msg.includes('camaras de seguridad') || msg.includes('cámaras de seguridad') ||
            msg.includes('videovigilancia') || msg.includes('camara ip') || msg.includes('cámara ip')
        ) {
            return botData.autoResponses.comunicaciones_cctv;
        }
        if (
            msg.includes('telefonia') || msg.includes('telefonía') || msg.includes('voip') ||
            msg.includes('central telefonica') || msg.includes('central telefónica') || msg.includes('pbx')
        ) {
            return botData.autoResponses.comunicaciones_telefonia;
        }
        if (
            msg.includes('proyecto de comunicaciones pequeño') ||
            msg.includes('red pequeña') || msg.includes('pocos puntos de red')
        ) {
            return botData.autoResponses.comunicaciones_pequenos;
        }

        // ============================================================
        // SISTEMAS CONTRA INCENDIO
        // ============================================================
        if (
            msg.includes('contra incendio') || msg.includes('contraincendio') ||
            msg.includes('hacen incendio') || msg.includes('sistema de incendio') ||
            msg.includes('sistema contraincendio') || msg.includes('fire protection')
        ) {
            return botData.autoResponses.incendio_general;
        }
        if (
            msg.includes('rociador') || msg.includes('sprinkler') || msg.includes('sprinklers') ||
            msg.includes('rociadores')
        ) {
            return botData.autoResponses.incendio_rociadores;
        }
        if (
            msg.includes('deteccion de incendio') || msg.includes('detección de incendio') ||
            msg.includes('alarma de incendio') || msg.includes('panel de alarma') ||
            msg.includes('detector de humo') || msg.includes('detector de calor')
        ) {
            return botData.autoResponses.incendio_deteccion;
        }
        if (
            msg.includes('hidrante') || msg.includes('gabinete contra incendio') ||
            msg.includes('manguera contra incendio') || msg.includes('bomba contra incendio') ||
            msg.includes('bomba jockey') || msg.includes('red de hidrantes')
        ) {
            return botData.autoResponses.incendio_hidrantes;
        }
        if (
            msg.includes('proyecto contraincendio pequeño') ||
            msg.includes('sistema incendio pequeño') || msg.includes('obra pequeña contra incendio')
        ) {
            return botData.autoResponses.incendio_pequenos;
        }

        // ============================================================
        // INSTALACIONES ELÉCTRICAS - MEDIA Y BAJA TENSIÓN
        // ============================================================
        if (
            msg.includes('media tension') || msg.includes('media tensión') ||
            (msg.includes('mt') && (msg.includes('electri') || msg.includes('instalacion'))) ||
            msg.includes('subestacion') || msg.includes('subestación') ||
            msg.includes('celda de mt') || msg.includes('transformador') ||
            msg.includes('red primaria') || msg.includes('13.8 kv') || msg.includes('22.9 kv')
        ) {
            return botData.autoResponses.media_tension;
        }

        if (
            msg.includes('baja tension') || msg.includes('baja tensión') ||
            (msg.includes('bt') && (msg.includes('electri') || msg.includes('instalacion'))) ||
            msg.includes('220v') || msg.includes('380v') || msg.includes('440v') ||
            msg.includes('tablero general') || msg.includes('tablero seccional') ||
            msg.includes('instalacion electrica') || msg.includes('instalación eléctrica') ||
            msg.includes('hacen electrica') || msg.includes('hacen eléctrica') ||
            msg.includes('realizan electrica') || msg.includes('realizan eléctrica')
        ) {
            return botData.autoResponses.baja_tension;
        }

        // ============================================================
        // TABLEROS ELÉCTRICOS
        // ============================================================
        if (
            (msg.includes('tablero') || msg.includes('tableros')) &&
            (msg.includes('instala') || msg.includes('hacen') || msg.includes('realizan') ||
                msg.includes('tipo') || msg.includes('tipos') || msg.includes('general'))
        ) {
            return botData.autoResponses.tableros_general;
        }

        if (
            msg.includes('ups') || msg.includes('alimentacion ininterrumpida') ||
            msg.includes('alimentación ininterrumpida') || msg.includes('no break') ||
            msg.includes('bateria de emergencia') || msg.includes('batería de emergencia')
        ) {
            return botData.autoResponses.tableros_ups;
        }

        if (
            msg.includes('spt') || msg.includes('puesta a tierra') ||
            msg.includes('sistema de tierra') || msg.includes('malla de tierra') ||
            msg.includes('pozo de tierra') || msg.includes('electrodo de tierra') ||
            msg.includes('resistencia de tierra') || msg.includes('tierra electrica') ||
            msg.includes('tierra eléctrica')
        ) {
            return botData.autoResponses.tableros_spt;
        }

        if (
            msg.includes('tablero de alumbrado') || msg.includes('tablero de iluminacion') ||
            msg.includes('tablero de iluminación') || msg.includes('circuito de alumbrado') ||
            msg.includes('interruptor horario') || msg.includes('control de luces')
        ) {
            return botData.autoResponses.tableros_alumbrado;
        }

        if (
            msg.includes('tomacorriente') || msg.includes('tomacorrientes') ||
            msg.includes('toma corriente') || msg.includes('enchufe') ||
            msg.includes('salida de fuerza') || msg.includes('nema') ||
            msg.includes('gfci') || msg.includes('circuito de tomacorriente')
        ) {
            return botData.autoResponses.tableros_tomacorrientes;
        }

        if (
            msg.includes('interruptor termomagnético') || msg.includes('interruptor termomagnetico') ||
            (msg.includes('diferencial') && msg.includes('electric')) ||
            msg.includes('breaker') || msg.includes('disyuntor') ||
            msg.includes('interruptor automatico') || msg.includes('interruptor automático') ||
            msg.includes('proteccion electrica') || msg.includes('protección eléctrica')
        ) {
            return botData.autoResponses.tableros_interruptores;
        }

        if (
            msg.includes('ampliar tablero') || msg.includes('ampliar un tablero') ||
            msg.includes('ampliar el tablero') || msg.includes('expandir tablero') ||
            msg.includes('agregar circuitos') || msg.includes('añadir circuitos') ||
            msg.includes('tablero existente') || msg.includes('modificar tablero')
        ) {
            return botData.autoResponses.tableros_ampliar;
        }

        if (
            msg.includes('tablero industrial') || msg.includes('tableros industriales') ||
            msg.includes('tablero de control') || msg.includes('tablero de automatizacion') ||
            msg.includes('tablero de automatización') || msg.includes('arrancador suave') ||
            msg.includes('variador de frecuencia') || msg.includes('ats') ||
            msg.includes('transferencia automatica') || msg.includes('transferencia automática')
        ) {
            return botData.autoResponses.tableros_industriales;
        }

        if (
            msg.includes('monofasico') || msg.includes('monofásico') ||
            msg.includes('trifasico') || msg.includes('trifásico') ||
            msg.includes('un fase') || msg.includes('tres fase') || msg.includes('3 fases') ||
            msg.includes('fase y neutro') || msg.includes('bifasico') || msg.includes('bifásico')
        ) {
            return botData.autoResponses.tableros_monofasico_trifasico;
        }

        // ============================================================
        // CANALIZACIONES ELÉCTRICAS
        // ============================================================
        if (
            msg.includes('canalización eléctrica') || msg.includes('canalizacion electrica') ||
            msg.includes('realizan canalizacion') || msg.includes('realizan canalización') ||
            msg.includes('hacen canalizacion') || msg.includes('hacen canalización')
        ) {
            return botData.autoResponses.canalizacion_electrica;
        }

        if (
            msg.includes('canalización empotrada') || msg.includes('canalizacion empotrada') ||
            msg.includes('tubo empotrado') || msg.includes('ducto empotrado') ||
            msg.includes('empotrado en losa') || msg.includes('empotrado en pared')
        ) {
            return botData.autoResponses.canalizacion_empotrada;
        }

        if (
            msg.includes('bandeja portacable') || msg.includes('bandeja porta cable') ||
            msg.includes('bandeja electrica') || msg.includes('bandeja eléctrica') ||
            msg.includes('escalerilla') || msg.includes('soporte de cable') ||
            msg.includes('bandeja perforada') || msg.includes('bandeja solida') || msg.includes('bandeja sólida')
        ) {
            return botData.autoResponses.canalizacion_bandeja;
        }

        if (
            msg.includes('pvc sap') || msg.includes('tuberia pvc') || msg.includes('tubería pvc') ||
            msg.includes('conduit') || (msg.includes('emt') && msg.includes('electric')) ||
            msg.includes('tubo emt') || msg.includes('conduit metalico') || msg.includes('conduit metálico')
        ) {
            return botData.autoResponses.canalizacion_pvc_emt;
        }

        // ============================================================
        // ILUMINACIÓN
        // ============================================================
        if (
            (msg.includes('iluminacion') || msg.includes('iluminación') || msg.includes('luminaria') || msg.includes('led')) &&
            ((msg.includes('interior') && msg.includes('exterior')) || msg.includes('hacen') || msg.includes('realizan') || msg.includes('instalan'))
        ) {
            return botData.autoResponses.iluminacion;
        }

        if (
            msg.includes('iluminacion interior') || msg.includes('iluminación interior') ||
            msg.includes('luminaria interior') || msg.includes('calculo luminico') ||
            msg.includes('cálculo lumínico') || msg.includes('luxes')
        ) {
            return botData.autoResponses.iluminacion_interior;
        }

        if (
            msg.includes('iluminacion exterior') || msg.includes('iluminación exterior') ||
            msg.includes('alumbrado exterior') || msg.includes('luminaria de exterior') ||
            msg.includes('alumbrado de via') || msg.includes('alumbrado de vía') ||
            msg.includes('luminaria de calle') || msg.includes('poste de luz')
        ) {
            return botData.autoResponses.iluminacion_exterior;
        }

        // ============================================================
        // MANTENIMIENTO ELÉCTRICO
        // ============================================================
        if (
            msg.includes('mantenimiento de tablero') || msg.includes('mantenimiento de tableros') ||
            msg.includes('mantenimiento electrico') || msg.includes('mantenimiento eléctrico') ||
            msg.includes('termografia') || msg.includes('termografía') ||
            msg.includes('ajuste de conexiones') || msg.includes('limpieza de tablero')
        ) {
            return botData.autoResponses.mantenimiento_tableros;
        }

        if (
            msg.includes('mantenimiento de ups') || msg.includes('mantenimiento ups') ||
            msg.includes('bateria de ups') || msg.includes('batería de ups') ||
            msg.includes('reemplazo de baterias') || msg.includes('reemplazo de baterías')
        ) {
            return botData.autoResponses.mantenimiento_ups;
        }

        if (
            msg.includes('mantenimiento de tierra') || msg.includes('mantenimiento spt') ||
            msg.includes('medicion de tierra') || msg.includes('medición de tierra') ||
            msg.includes('resistencia de tierra') || msg.includes('medir tierra')
        ) {
            return botData.autoResponses.mantenimiento_spt;
        }

        if (
            msg.includes('mantenimiento de alumbrado') || msg.includes('mantenimiento de luces') ||
            msg.includes('mantenimiento de iluminacion') || msg.includes('mantenimiento de iluminación') ||
            msg.includes('reemplazo de luminarias') || msg.includes('cambio a led')
        ) {
            return botData.autoResponses.mantenimiento_alumbrado;
        }

        if (
            msg.includes('mantenimiento') &&
            (msg.includes('electric') || msg.includes('prevent') || msg.includes('correctiv') ||
                msg.includes('programa') || msg.includes('periodico') || msg.includes('periódico'))
        ) {
            return botData.autoResponses.mantenimiento_general;
        }

        // ============================================================
        // OBRAS CIVILES
        // ============================================================
        if (
            msg.includes('drywall') || msg.includes('dry wall') || msg.includes('tabiqueria') ||
            msg.includes('tabiquería') || msg.includes('particion') || msg.includes('partición') ||
            msg.includes('pladur') || msg.includes('yeso')
        ) {
            return botData.autoResponses.drywall;
        }

        if (
            msg.includes('pintado') || msg.includes('pintura') || msg.includes('pintar') ||
            msg.includes('barniz') || (msg.includes('revestimiento') && !msg.includes('electric'))
        ) {
            return botData.autoResponses.pintado;
        }

        // ============================================================
        // SECTORES
        // ============================================================
        if (
            msg.includes('sectores') || msg.includes('a que sector') || msg.includes('a qué sector') ||
            msg.includes('en que sectores') || msg.includes('en qué sectores') ||
            msg.includes('especializan en') || msg.includes('que rubros')
        ) {
            return botData.autoResponses.sectores_especializados;
        }

        if (
            msg.includes('sector comercial') || msg.includes('comercio') ||
            msg.includes('tienda') || msg.includes('supermercado') || msg.includes('centro comercial') ||
            msg.includes('local comercial') || msg.includes('restaurant') || msg.includes('hotel')
        ) {
            return botData.autoResponses.sector_comercial;
        }

        if (
            msg.includes('sector industrial') || msg.includes('planta industrial') ||
            msg.includes('planta de produccion') || msg.includes('planta de producción') ||
            msg.includes('almacen logistico') || msg.includes('almacén logístico') ||
            msg.includes('fabrica') || msg.includes('fábrica') || msg.includes('taller industrial')
        ) {
            return botData.autoResponses.sector_industrial;
        }

        if (
            msg.includes('sector salud') || msg.includes('clinica') || msg.includes('clínica') ||
            msg.includes('hospital') || msg.includes('laboratorio') || msg.includes('centro medico') ||
            msg.includes('centro médico') || msg.includes('quirofano') || msg.includes('quirófano')
        ) {
            return botData.autoResponses.sector_salud;
        }

        if (
            msg.includes('sector educacion') || msg.includes('sector educación') ||
            msg.includes('colegio') || msg.includes('universidad') || msg.includes('instituto') ||
            msg.includes('escuela') || msg.includes('centro educativo')
        ) {
            return botData.autoResponses.sector_educacion;
        }

        if (
            msg.includes('mineria') || msg.includes('minería') || msg.includes('minero') ||
            msg.includes('sector minero') || msg.includes('proyecto minero') || msg.includes('mina')
        ) {
            return botData.autoResponses.sector_mineria;
        }

        // ============================================================
        // COBERTURA GEOGRÁFICA
        // ============================================================
        if (
            msg.includes('trabajan internacionalmente') || msg.includes('trabajan fuera del peru') ||
            msg.includes('trabajan fuera del perú') || msg.includes('trabajan en otros paises') ||
            msg.includes('trabajan en otros países') || msg.includes('internacionalmente') ||
            msg.includes('exterior del pais') || msg.includes('exterior del país')
        ) {
            return botData.autoResponses.internacional;
        }

        // ============================================================
        // AFIRMACIONES
        // ============================================================
        if (
            msg === 'si' || msg === 'sí' || msg === 'si porfa' || msg === 'si por favor' ||
            msg === 'sí por favor' || msg === 'si porfavor' || msg === 'sí porfavor' ||
            msg === 'claro' || msg === 'claro que si' || msg === 'claro que sí' ||
            msg === 'por supuesto' || msg === 'dale' || msg === 'ok' || msg === 'okay' ||
            msg === 'perfecto' || msg === 'genial' || msg === 'excelente' || msg === 'seguro' ||
            msg === 'me gustaria' || msg === 'me gustaría' || msg === 'me interesa' ||
            msg === 'estoy interesado' || msg === 'quiero' || msg === 'quisiera' || msg === 'acepto' ||
            msg === 'de acuerdo' || msg === 'entendido' || msg === 'listo' || msg === 'va' ||
            msg === 'sip' || msg === 'sipo' || msg === 'yep' || msg === 'si claro' || msg === 'sí claro'
        ) {
            const afirmaciones = [
                botData.autoResponses.afirmacion_si,
                botData.autoResponses.afirmacion_claro,
                botData.autoResponses.afirmacion_porfa,
                botData.autoResponses.afirmacion_perfecto,
                botData.autoResponses.afirmacion_dale,
                botData.autoResponses.afirmacion_ok,
                botData.autoResponses.afirmacion_seguro,
                botData.autoResponses.afirmacion_me_interesa
            ];
            return afirmaciones[Math.floor(Math.random() * afirmaciones.length)];
        }

        // ============================================================
        // NEGACIONES
        // ============================================================
        if (
            msg === 'no' || msg === 'no gracias' || msg === 'todavia no' || msg === 'todavía no' ||
            msg === 'aun no' || msg === 'aún no' || msg === 'despues' || msg === 'después' ||
            msg === 'mas tarde' || msg === 'más tarde' || msg === 'luego' || msg === 'otro dia' ||
            msg === 'otro día' || msg === 'no por ahora' || msg === 'ahora no' || msg === 'nop' ||
            msg === 'nope' || msg === 'nel' || msg === 'nanay'
        ) {
            const negaciones = [
                botData.autoResponses.negacion_no,
                botData.autoResponses.negacion_todavia_no,
                botData.autoResponses.negacion_aun_no,
                botData.autoResponses.negacion_despues,
                botData.autoResponses.negacion_mas_tarde
            ];
            return negaciones[Math.floor(Math.random() * negaciones.length)];
        }

        // ============================================================
        // MÁS INFORMACIÓN / DUDAS ADICIONALES
        // ============================================================
        if (
            msg.includes('tengo otra') || msg.includes('otra pregunta') ||
            msg.includes('otra consulta') || msg.includes('otra duda') ||
            msg.includes('mas info') || msg.includes('más info') ||
            msg.includes('mas informacion') || msg.includes('más información') ||
            msg.includes('quiero saber mas') || msg.includes('quiero saber más') ||
            msg.includes('cuentame mas') || msg.includes('cuéntame más') ||
            msg.includes('explica mas') || msg.includes('explica más')
        ) {
            const masInfo = [
                botData.autoResponses.duda_adicional, botData.autoResponses.mas_info,
                botData.autoResponses.otra_pregunta, botData.autoResponses.quiero_saber_mas,
                botData.autoResponses.tengo_otra_duda
            ];
            return masInfo[Math.floor(Math.random() * masInfo.length)];
        }

        // ============================================================
        // FRASES DE APERTURA / CONSULTAS GENERALES
        // ============================================================
        if (
            msg.includes('asistente') || msg.includes('una consulta') ||
            msg.includes('tengo una consulta') || msg.includes('tengo una duda') ||
            msg.includes('quisiera saber') || msg.includes('me gustaria saber') ||
            msg.includes('necesito informacion') || msg.includes('necesito información') ||
            msg.includes('requiero informacion') || msg.includes('quiero preguntar') ||
            msg.includes('puedo preguntar') || msg.includes('una pregunta') ||
            msg.includes('ayuda con') || msg.includes('necesito ayuda')
        ) {
            const openingResponses = [
                botData.autoResponses.consulta_general, botData.autoResponses.tengo_duda,
                botData.autoResponses.quisiera_saber, botData.autoResponses.necesito_info
            ];
            return openingResponses[Math.floor(Math.random() * openingResponses.length)];
        }

        // ============================================================
        // PREGUNTAS FRECUENTES - FAQ EXPANDIDA
        // ============================================================
        if (msg.includes('proyectos pequeños') || msg.includes('obras pequeñas') || msg.includes('proyectos chicos') || msg.includes('proyecto pequeño') || msg.includes('obra pequeña') || msg.includes('tamaño mínimo') || msg.includes('solo obras grandes')) {
            return withName(botData.autoResponses.obras_pequenas, currentName);
        }
        if (msg.includes('provincias') || msg.includes('fuera de lima') || msg.includes('todo el peru') || msg.includes('todo el perú') || msg.includes('nivel nacional') || msg.includes('otras ciudades') || msg.includes('en que zonas')) {
            return withName(botData.autoResponses.lima_provincias, currentName);
        }
        if (msg.includes('desde el diseño') || msg.includes('etapa de diseño') || msg.includes('ingenieria de detalle') || msg.includes('diseñan') || msg.includes('solo ejecutan') || msg.includes('también diseñan') || msg.includes('diseño y ejecucion') || msg.includes('diseño y ejecución')) {
            return withName(botData.autoResponses.diseño_ejecucion, currentName);
        }
        if (msg.includes('incluyen pruebas') || msg.includes('hacen pruebas') || msg.includes('mediciones') || msg.includes('puesta en servicio') || msg.includes('ensayos') || msg.includes('protocolos de prueba') || msg.includes('certifican')) {
            return botData.autoResponses.pruebas_mediciones;
        }
        if (msg.includes('cumplen normas') || msg.includes('normas tecnicas') || msg.includes('normas técnicas') || msg.includes('reglamentos') || msg.includes('normativa vigente') || msg.includes('cne') || msg.includes('rne') || msg.includes('nfpa')) {
            return botData.autoResponses.normas_reglamentos;
        }
        if (msg.includes('para oficinas') || msg.includes('para industrias') || msg.includes('para comercios') || msg.includes('sector industrial') || msg.includes('sector comercial') || msg.includes('corporativo')) {
            return botData.autoResponses.oficinas_industrias;
        }
        if (msg.includes('despues de la entrega') || msg.includes('después de la entrega') || msg.includes('post entrega') || msg.includes('observaciones posteriores') || msg.includes('atienden despues') || msg.includes('postventa') || msg.includes('post venta')) {
            return botData.autoResponses.observaciones_postventa;
        }
        if (msg.includes('que los diferencia') || msg.includes('qué los diferencia') || msg.includes('diferencia con otros') || msg.includes('por que elegirlos') || msg.includes('por qué elegirlos') || msg.includes('ventaja competitiva') || msg.includes('que los hace diferentes') || msg.includes('destacan')) {
            return botData.autoResponses.diferencia_otras;
        }
        if (msg.includes('mostrar proyectos') || msg.includes('ver proyectos') || msg.includes('referencias') || msg.includes('portafolio') || msg.includes('trabajos anteriores') || msg.includes('obras realizadas') || msg.includes('galeria') || msg.includes('brochure')) {
            return botData.autoResponses.referencias_proyectos;
        }
        if (msg.includes('tengo planos') || msg.includes('evaluar planos') || msg.includes('revisar planos') || msg.includes('analizar planos') || msg.includes('quiero que revisen')) {
            return botData.autoResponses.evaluacion_planos;
        }
        if (msg.includes('visitar mi obra') || msg.includes('visita tecnica') || msg.includes('visita técnica') || msg.includes('pueden venir') || msg.includes('venir a evaluar') || msg.includes('inspección previa') || msg.includes('inspeccion previa')) {
            return botData.autoResponses.visita_obra;
        }
        if (msg.includes('como empiezo') || msg.includes('cómo empiezo') || msg.includes('como inicio') || msg.includes('como comienzo') || msg.includes('primer paso') || msg.includes('como arranco') || msg.includes('proceso de inicio')) {
            return botData.autoResponses.como_empezar;
        }
        if (msg.includes('cotizacion incluye') || msg.includes('cotización incluye') || msg.includes('incluye materiales') || msg.includes('incluye mano de obra') || msg.includes('que incluye la cotizacion') || msg.includes('qué incluye la cotización')) {
            return botData.autoResponses.cotizacion_incluye;
        }
        if (msg.includes('alternativas') || msg.includes('opciones segun presupuesto') || msg.includes('opciones según presupuesto') || msg.includes('ajustar a mi presupuesto') || msg.includes('presupuesto limitado') || msg.includes('alternativas economicas') || msg.includes('alternativas económicas')) {
            return botData.autoResponses.alternativas_presupuesto;
        }
        if (msg.includes('informacion para cotizar') || msg.includes('información para cotizar') || msg.includes('que necesitan para cotizar') || msg.includes('qué necesitan para cotizar') || msg.includes('requisitos para cotizar') || msg.includes('datos para cotizar')) {
            return botData.autoResponses.info_para_cotizar;
        }
        if (msg.includes('cambios en obra') || msg.includes('imprevistos') || msg.includes('modificaciones') || msg.includes('cambios durante') || msg.includes('surgen cambios') || msg.includes('orden de cambio')) {
            return botData.autoResponses.cambios_imprevistos;
        }
        if (msg.includes('quien supervisa') || msg.includes('quién supervisa') || msg.includes('supervision en campo') || msg.includes('supervisión en campo') || msg.includes('residente de obra') || msg.includes('ingeniero residente') || msg.includes('quien esta a cargo')) {
            return botData.autoResponses.supervision_campo;
        }
        if (msg.includes('cronograma') || msg.includes('planificacion') || msg.includes('planificación') || msg.includes('calendario de obra') || msg.includes('fechas de entrega') || msg.includes('plazos detallados')) {
            return botData.autoResponses.cronogramas_planificacion;
        }
        if (msg.includes('cumplimiento de plazos') || msg.includes('cumplen los plazos') || msg.includes('aseguran plazos') || msg.includes('garantizan fechas') || msg.includes('puntualidad') || msg.includes('retrasos')) {
            return botData.autoResponses.cumplimiento_fechas;
        }
        if (msg.includes('control de calidad') || msg.includes('gestion de calidad') || msg.includes('gestión de calidad') || msg.includes('aseguran calidad') || msg.includes('calidad en obra') || msg.includes('supervision de calidad')) {
            return botData.autoResponses.control_calidad_obra;
        }
        if (msg.includes('pruebas de funcionamiento') || msg.includes('protocolos') || msg.includes('ensayos tecnicos') || msg.includes('ensayos técnicos') || msg.includes('certificacion') || msg.includes('certificación')) {
            return botData.autoResponses.pruebas_protocolos;
        }
        if (msg.includes('solo instalaciones') || msg.includes('tambien diseño') || msg.includes('también diseño') || msg.includes('tambien supervision') || msg.includes('también supervisión') || msg.includes('servicio completo') || msg.includes('servicio integral')) {
            return botData.autoResponses.instalacion_diseno_supervision;
        }
        if (msg.includes('controlan durante ejecucion') || msg.includes('controlan durante ejecución') || msg.includes('calidad durante obra') || msg.includes('seguimiento de calidad')) {
            return botData.autoResponses.control_durante_ejecucion;
        }
        if (msg.includes('visitas tecnicas') || msg.includes('visitas técnicas') || msg.includes('evaluaciones previas') || msg.includes('evaluacion previa') || msg.includes('evaluación previa')) {
            return botData.autoResponses.visitas_evaluaciones;
        }
        if (msg.includes('proceso de trabajo') || msg.includes('como es el proceso') || msg.includes('cómo es el proceso') || msg.includes('desde el primer contacto') || msg.includes('flujo de trabajo')) {
            return botData.autoResponses.proceso_primer_contacto;
        }
        if (msg.includes('cambios durante la ejecucion') || msg.includes('cambios durante la ejecución') || msg.includes('modificaciones en obra')) {
            return botData.autoResponses.cambios_durante_proyecto;
        }
        if (msg.includes('comunicacion constante') || msg.includes('comunicación constante') || msg.includes('mantienen comunicacion') || msg.includes('mantienen comunicación') || msg.includes('informan avances') || msg.includes('reportes de avance')) {
            return botData.autoResponses.comunicacion_proyecto;
        }
        if (msg.includes('xq') || msg.includes('porque') || msg.includes('como se que son de confiar') || msg.includes('cómo sé que son de confiar') || msg.includes('por que confiar') || msg.includes('por qué confiar') || msg.includes('son confiables') || msg.includes('puedo confiar') || msg.includes('garantia de confianza')) {
            return botData.autoResponses.confianza_ejecuta;
        }

        // ============================================================
        // RESPUESTAS GENERALES
        // ============================================================
        if (msg.includes('precio') || msg.includes('costo') || msg.includes('cuanto cuesta') || msg.includes('cotiza') || msg.includes('presupuesto')) {
            return withName(botData.autoResponses.precio, currentName);
        }
        if (msg.includes('tiempo') || msg.includes('plazo') || msg.includes('demora') || msg.includes('cuanto demora') || msg.includes('duración') || msg.includes('cuando')) {
            return botData.autoResponses.tiempo;
        }
        if (msg.includes('garantia') || msg.includes('garantía') || msg.includes('soporte') || msg.includes('post')) {
            return botData.autoResponses.garantia;
        }
        if (msg.includes('material') || msg.includes('marcas') || msg.includes('equipos') || msg.includes('certificado')) {
            return botData.autoResponses.materiales;
        }
        if (msg.includes('equipo') || msg.includes('personal') || msg.includes('ingeniero') || msg.includes('técnico') || msg.includes('profesional')) {
            return botData.autoResponses.equipo;
        }
        if (msg.includes('zona') || msg.includes('donde') || msg.includes('ubicación') || msg.includes('ubicacion') || msg.includes('lima') || msg.includes('direccion') || msg.includes('dirección') || msg.includes('encuentro')) {
            return botData.autoResponses.ubicacion;
        }
        if (msg.includes('horario') || msg.includes('hora') || msg.includes('atienden') || msg.includes('abierto') || msg.includes('disponible')) {
            return botData.autoResponses.horario;
        }
        if (msg.includes('contacto') || msg.includes('contactar') || msg.includes('comunicar') || msg.includes('llamar') || msg.includes('escribir') || msg.includes('teléfono') || msg.includes('telefono') || msg.includes('email') || msg.includes('correo')) {
            return botData.autoResponses.contacto;
        }
        if (msg.includes('empezar') || msg.includes('comenzar') || msg.includes('iniciar') || msg.includes('arrancar') || msg.includes('inicio')) {
            return botData.autoResponses.inicio;
        }
        if (msg.includes('plano') || msg.includes('diseño') || msg.includes('diseñan')) {
            return botData.autoResponses.planos;
        }
        if (msg.includes('inspección') || msg.includes('inspeccion') || msg.includes('visita') || msg.includes('evaluación') || msg.includes('evaluacion')) {
            return botData.autoResponses.inspeccion;
        }
        if (msg.includes('integral') || msg.includes('especialidad') || msg.includes('completo') || msg.includes('parcial')) {
            return botData.autoResponses.integral;
        }
        if (msg.includes('cumplen') || msg.includes('retraso') || msg.includes('puntual')) {
            return botData.autoResponses.plazos;
        }
        if (msg.includes('seguridad') || msg.includes('epp') || msg.includes('protección') || msg.includes('proteccion') || msg.includes('accidente')) {
            return botData.autoResponses.seguridad;
        }
        if (msg.includes('norma') || msg.includes('reglamento') || msg.includes('código') || msg.includes('codigo')) {
            return botData.autoResponses.normas;
        }
        if (msg.includes('integra') || msg.includes('unir') || msg.includes('continua') || msg.includes('obra iniciada')) {
            return botData.autoResponses.integracion;
        }
        if (msg.includes('sector') || msg.includes('público') || msg.includes('publico') || msg.includes('privado') || msg.includes('minería') || msg.includes('mineria')) {
            return botData.autoResponses.sectores;
        }
        if (msg.includes('empresa') || msg.includes('ejecuta') || msg.includes('quienes son') || msg.includes('quiénes') || msg.includes('que es') || msg.includes('qué es') || msg.includes('historia') || msg.includes('experiencia')) {
            return botData.autoResponses.empresa;
        }
        if (msg.includes('servicio') || msg.includes('qué hacen') || msg.includes('que hacen') || msg.includes('realizan') || msg.includes('ofrecen')) {
            return botData.autoResponses.servicios;
        }
        if (msg.includes('proyecto') || msg.includes('obra') || msg.includes('han hecho') || msg.includes('realizado') || msg.includes('ejecutado') || msg.includes('referencia')) {
            return botData.autoResponses.proyectos;
        }
        if (msg.includes('valor') || msg.includes('principio') || msg.includes('filosofía') || msg.includes('filosofia') || msg.includes('cultura')) {
            return botData.autoResponses.valores;
        }
        if (msg.includes('misión') || msg.includes('mision') || msg.includes('propósito') || msg.includes('proposito')) {
            return botData.autoResponses.mision;
        }
        if (msg.includes('visión') || msg.includes('vision') || msg.includes('futuro') || msg.includes('aspiración') || msg.includes('aspiracion') || msg.includes('meta')) {
            return botData.autoResponses.vision;
        }
        if (msg.includes('diferencia') || msg.includes('destaca') || msg.includes('mejor') || msg.includes('ventaja') || msg.includes('competencia') || msg.includes('elegir')) {
            return botData.autoResponses.diferencial;
        }

        // Servicios específicos por especialidad
        if (msg.includes('eléctric') || msg.includes('electric') || msg.includes('luz') || msg.includes('cable') || msg.includes('tablero') || msg.includes('acometida')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.electrico;
        }
        if (msg.includes('sanitari') || msg.includes('agua') || msg.includes('desagüe') || msg.includes('desague') || msg.includes('tubería') || msg.includes('tuberia') || msg.includes('bombeo')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.sanitario;
        }
        if (msg.includes('incendio') || msg.includes('fuego') || msg.includes('rociador') || msg.includes('extintor') || msg.includes('detección') || msg.includes('deteccion') || msg.includes('alarma')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.incendio;
        }
        if (msg.includes('comunica') || msg.includes('red') || msg.includes('datos') || msg.includes('fibra') || msg.includes('cctv') || msg.includes('cámara') || msg.includes('camara') || msg.includes('telefon')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.comunicaciones;
        }

        // Saludos
        if (msg.includes('hola') || msg.includes('buenos') || msg.includes('buenas') || msg.includes('buen día') || msg.includes('buen dia') || msg === 'hey' || msg === 'ey') {
            if (currentName) {
                return `¡Hola de nuevo, ${currentName}! 😊 ¿En qué más puedo ayudarte?`;
            }
            return "¡Hola! Gracias por escribir 😊. ¿En qué puedo ayudarte hoy? Puedes seleccionar un tema de la izquierda o preguntarme directamente.";
        }

        // Agradecimientos
        if (msg.includes('gracias') || msg.includes('thank') || msg.includes('te lo agradezco') || msg.includes('muy amable')) {
            if (currentName) {
                return `¡De nada, ${currentName}! Para eso estoy 😊. Si tienes más dudas, aquí estaré.`;
            }
            return "¡De nada! Para eso estoy 😊. Si tienes más dudas, aquí estaré.";
        }

        // Despedidas
        if (msg.includes('adiós') || msg.includes('adios') || msg.includes('chau') || msg.includes('bye') || msg.includes('hasta luego') || msg.includes('nos vemos') || msg.includes('chao')) {
            if (currentName) {
                return `¡Hasta pronto, ${currentName}! Fue un placer atenderte. Si necesitas algo más, estaré aquí. ¡Que tengas un excelente día! 👋`;
            }
            return "¡Hasta pronto! Si necesitas algo más, estaré aquí para ayudarte. ¡Que tengas un excelente día! 👋";
        }

        // Default
        return botData.autoResponses.default;
    };

    const handleQuickAction = (action) => {
        addUserMessage(action);
        const response = generateAutoResponse(action, userName);
        addBotMessage(response, 1400);
    };

    const handleWhatsApp = () => {
        window.open(
            `${botData.company.whatsapp.includes('wa.me') ? botData.company.whatsapp : `https://wa.me/${botData.company.whatsapp.replace(/\+/g, '')}`}?text=${encodeURIComponent('Hola, vengo desde el chatbot de la web y me gustaría recibir información.')}`,
            '_blank'
        );
    };

    const handleRestart = () => {
        setMessages([]);
        setSelectedCategory(null);
        setUserName(null); // 👈 También resetea el nombre al reiniciar
        addBotMessage(botData.welcome.greeting);
        setTimeout(() => addBotMessage(botData.welcome.message), 1600);
        setTimeout(() => addBotMessage(botData.welcome.cta), 3200);
    };

    return (
        <>
            <button
                className={`ejecuta_chatbot_trigger ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Abrir asistente virtual"
            >
                <i className={`fas ${open ? 'fa-times' : 'fa-comments'}`}></i>
                <span className="ejecuta_chatbot_trigger_text">
                    {open ? 'Cerrar' : 'Asistente EJECUTA'}
                </span>
            </button>

            {open && (
                <div className="ejecuta_chatbot_container" ref={chatContainerRef}>

                    <aside className="ejecuta_chatbot_sidebar">
                        <div className="ejecuta_sidebar_header">
                            <img src={logoEjecuta} alt="Logo EJECUTA" />
                            <p>Temas de consulta</p>
                        </div>
                        <div className="ejecuta_sidebar_categories">
                            {botData.categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`ejecuta_category_item ${selectedCategory?.id === category.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <span className="ejecuta_category_icon">
                                        <i className={`fas fa-${category.icon}`}></i>
                                    </span>
                                    <div className="ejecuta_category_info">
                                        <strong>{category.title}</strong>
                                        <small>{category.subtitle}</small>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <button className="ejecuta_sidebar_whatsapp" onClick={handleWhatsApp}>
                            <i className="fab fa-whatsapp"></i> Hablar con ingeniero
                        </button>
                    </aside>

                    <main className="ejecuta_chatbot_main">
                        <header className="ejecuta_chat_header">
                            <div className="ejecuta_chat_header_info">
                                <div className="ejecuta_chat_avatar">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div>
                                    {/* 👇 Muestra el nombre en el header si está disponible */}
                                    <h4>
                                        {userName
                                            ? `Hola, ${userName} 👋`
                                            : 'Asistente Virtual EJECUTA'
                                        }
                                    </h4>
                                    <span className="ejecuta_chat_status">
                                        <span className="ejecuta_status_dot"></span>
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <button className="ejecuta_chat_restart" onClick={handleRestart} title="Reiniciar conversación">
                                <i className="fas fa-redo-alt"></i>
                            </button>
                        </header>

                        <div className="ejecuta_chat_messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`ejecuta_message ${msg.type}`}>
                                    <div className="ejecuta_message_content">
                                        <p>{msg.text}</p>
                                        <span className="ejecuta_message_time">
                                            {msg.timestamp.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="ejecuta_message bot">
                                    <div className="ejecuta_typing">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="ejecuta_quick_actions">
                            {botData.quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="ejecuta_quick_action_btn"
                                    onClick={() => handleQuickAction(action)}
                                >
                                    {action}
                                </button>
                            ))}
                        </div>

                        <form className="ejecuta_chat_input_form" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                className="ejecuta_chat_input"
                                placeholder="Escribe tu consulta aquí..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="ejecuta_chat_send_btn" disabled={!inputValue.trim()}>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </main>
                </div>
            )}
        </>
    );
}