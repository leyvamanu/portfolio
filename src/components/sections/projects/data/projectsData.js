const projects = [
    {
        id: 1,
        title: "Compelex",
        image: "/projects/compelex.png",
        shortDesc: "Test de competencias digitales",
        fullDesc: "Esta aplicación consiste en un test dirigido al personal de un despacho de abogados o una asesoría de empresas. Proporciona una serie de gráficos que reflejan el perfil digital de los abogados, segmentado según las características del despacho. Además, genera automáticamente un PDF con los resultados.  \n" +
            "Cuenta con dos versiones: una gestionada completamente por nosotros y otra de pago online, administrada por el cliente a través de un panel de control.\n",
        technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind", "jQuery", "Stripe"],
        type: "Profesional",
        github: "",
        url: "https://compelex.com",
    },
    {
        id: 2,
        title: "LOIS Counsel SL",
        image: "/projects/loiscounsel.png",
        shortDesc: "Web corporativa de LOIS Counsel SL.",
        fullDesc: "Durante mi etapa profesional en LOIS Counsel SL, uno de mis proyectos fue el desarrollo y mantenimiento de la web corporativa de la empresa, asegurando su correcto funcionamiento y actualización.",
        technologies: ["WordPress", "MySQL", "JavaScript", "HTML", "CSS"],
        type: "Profesional",
        github: "",
        url: "https://loiscounsel.com",
    },
    {
        id: 3,
        title: "Índice de Madurez Contractual",
        image: "/projects/indice-madurez-contractual.png",
        shortDesc: "Diagnóstico operaciones contractuales",
        fullDesc: "Autodiagnóstico para ayudar a los departamentos legales a identificar áreas de mejora en la gestión de sus contratos.\n" +
            "La aplicación consta de un test que el usuario responde y, al finalizar, recibe un PDF con los resultados en formato gráfico por correo electrónico.\n" +
            "Además, la aplicación recopila los datos para generar un benchmark, que el administrador puede visualizar en su panel de control mediante gráficos. Esto permite extraer información valiosa sobre el estado del sector.",
        technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind"],
        type: "Profesional",
        github: "",
        url: "https://indice-madurez-contractual.autodiagnostico-lois.com/",
    },
    {
        id: 4,
        title: "Diagnóstico de Legal Operations",
        image: "/projects/diagnostico-legal-operations.png",
        shortDesc: "Madurez de las operaciones legales",
        fullDesc: "Autodiagnóstico para la gestión de operaciones legales en asesorías jurídicas.\n" +
            "La aplicación incluye un test que el usuario responde y, al terminar, recibe un PDF con los resultados en formato gráfico por correo electrónico.\n" +
            "Además, la aplicación recopila los datos para crear un benchmark, que se puede consultar en el panel del administrador, donde se presentan en gráficos para obtener información útil sobre el estado del sector.",
        technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind"],
        type: "Profesional",
        github: "",
        url: "https://diagnostico-legal-operations.autodiagnostico-lois.com/",
    },
    {
        id: 5,
        title: "Diagnóstico de Madurez Digital",
        image: "/projects/diagnostico-madurez-digital.png",
        shortDesc: "Madurez digital de los despachos",
        fullDesc: "Autodiagnóstico para evaluar la madurez digital de los despachos de abogados.\n" +
            "La aplicación incluye un test que el usuario completa y, al finalizar, recibe un PDF con los resultados representados gráficamente en su correo electrónico.\n" +
            "Además, la aplicación recopila los datos necesarios para generar un benchmark, el cual se puede consultar a través del panel del administrador. Los resultados se presentan en gráficos, lo que facilita la extracción de información relevante sobre el estado del sector.",
        technologies: ["PHP", "Symfony", "MySQL", "JavaScript", "HTML", "CSS", "Tailwind"],
        type: "Profesional",
        github: "",
        url: "https://diagnostico-madurez-digital.autodiagnostico-lois.com/",
    },
    {
        id: 6,
        title: "Campus LOIS",
        image: "/projects/campus.png",
        shortDesc: "Plataforma e-learning de LOIS",
        fullDesc: "Plataforma con diferentes cursos online creados por los socios de LOIS Counsel S.L.\n" +
            "Esta plataforma no la desarrollé por completo, ya que cuando me incorporé a la empresa ya estaba creada por el desarrollador anterior. Sin embargo, me encargué de renovarla, actualizándola para que soportara PHP 8.0 tras la migración del servidor. También cambié la pasarela de pago online, integrando Stripe, y añadí un par de cursos que no existían en la plataforma..",
        technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "Stripe"],
        type: "Profesional",
        github: "",
        url: "https://workshops.loiscounsel.com/",
    },
    {
        id: 7,
        title: "Avedillo",
        image: "/projects/avedillo.png",
        shortDesc: "Web corporativa de Avedillo",
        fullDesc: "Web corporativa para el despacho Avedillo Abogados Asociados.\n" +
            "Si bien no era una práctica habitual crear páginas web corporativas para los clientes, en este caso se hizo una excepción por tratarse de un conocido de la consultora LOIS Counsel S.L. Para esta ocasión, desarrollamos la web corporativa del cliente.",
        technologies: ["WordPress", "MySQL", "JavaScript", "HTML", "CSS"],
        github: "",
        url: "https://avedillo.legal/",
    },
    {
        id: 8,
        title: "MOT Estudio de palabras",
        image: "/projects/mot.png",
        shortDesc: "Web de presentación y contacto para una Copywriter",
        fullDesc: "Este fue mi primer proyecto profesional. Aunque la compensación no fue elevada, me permitió tener una web en producción desarrollada por mí para un cliente real. Creé una web de presentación y contacto para una amiga Copywriter que buscaba promocionar sus servicios y organizar talleres online.",
        technologies: ["JavaScript", "CSS", "HTML", "UIkit"],
        type: "Profesional",
        github: "https://github.com/josanescod/front-mot",
        url: "https://motestudiodepalabras.com/",
    },
];

export default projects;
