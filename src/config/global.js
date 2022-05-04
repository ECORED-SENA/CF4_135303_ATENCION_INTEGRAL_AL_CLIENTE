export default {
  global: {
    componenteFormativo: 'Gestión de requerimientos e indicadores de gestión',
    descripcionCurso:
      'La acción del servicio en la atención al cliente está demarcada por diferentes acciones del colaborador o empleado encargado de esta actividad, de allí nace la importancia de que las organizaciones realicen un óptimo proceso de formación continua que brinde las herramientas necesarias y los conocimientos pertinentes en temas como la normatividad vigente, sistemas de calidad e indicadores de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa y requerimientos en atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación y trazabilidad de requerimientos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Notificación de recepción',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Trámite a requerimientos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Protocolo del sistema de calidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Interpretación de los KPI',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicabilidad de los KPI',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Reporte de los KPI',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mora, L. A. (2004). Indicadores de gestión logísticos. FESC. ',
    },
    {
      referencia:
        'Normas-iso.com. (s. f.). ISO. Normas ISO 9001: Sistemas de gestión de la calidad',
      link: 'https://www.normas-iso.com/iso-9001/',
    },
    {
      referencia: 'RAE. (2020). Definición de expectativa',
      link: 'https://dle.rae.es/expectativa?m=form',
    },
    {
      referencia: 'RAE. (2020). Definición de percepción.',
      link: 'https://dle.rae.es/percepci%C3%B3n',
    },
    {
      referencia: 'RAE. (2020). Definición de política.',
      link: 'https://dle.rae.es/pol%C3%ADtico',
    },
    {
      referencia: 'Revista Zona Logística. (2017). La logística del servicio',
      link: 'https://zonalogistica.com/ ',
    },
  ],
  glosario: [
    {
      termino: 'Evaluación de desempeño',
      significado:
        'instrumento de medición del desempeño laboral y/o profesional de una persona, respecto a las funciones y responsabilidades a su cargo.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'ejecución constante de acciones que mejoran los procesos en una organización, minimizando al máximo el margen de error y de pérdidas.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'es aquel en el que se informa, resuelve cualquier duda, o se facilita información al cliente que lo requiere.',
    },
  ],
  complementario: [
    {
      texto:
        'Escuela de Privacidad. (2020). Legislación en protección de datos en Colombia. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bvAH9ppBbbE',
    },
    {
      texto:
        'Ministerio de Industria y Comercio. (2013). Decreto 1377 de 2013. ',
      tipo: 'Documento',
      descarga: '/downloads/DECRETO_1377_2013.pdf',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio. (2021). Sobre la protección de datos personales. ',
      tipo: 'Artículo',
      link: 'https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro:
          'Centro de la Industria, la empresa y los Servicios Regional - Huila ',
      },
      {
        nombre: 'Alex García',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios - CIES Regional - Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Ándres Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
