<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema de calidad
    
    p.mb-5 La política de atención con enfoque pluralista y diferencial completo de los lineamientos orientaciones y requerimientos del sistema integrado de gestión de calidad para satisfacer expectativas de las poblaciones en un marco de mejora continua

    .row.justify-center.mb-5 
      .col-12.col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__texto.p-4.p-md-5.posit_6.bgr_11
            p.mb-0 <b>La norma ISO 9001:</b> 2015 es la norma de Sistemas de Gestión de la Calidad (SGC) más reconocida e implantada en el mundo. Especifica los requisitos para un SGC que las organizaciones pueden utilizar para desarrollar sus propios programas.
          .bloque-texto-g__img.posit_7(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/t2-1.png')})`}")
    
    p.mb-5 El valor de la aplicación de la regla ISO 9001 radica primordialmente en tres aspectos:

    .row.mb-5
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero.posit_8
            .h2 1
          p.mt-2.mb-0.text-center La confianza de los consumidores y la diferenciación de la marca.
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero.posit_8
            .h2 2
          p.mt-2.mb-0.text-center El crecimiento de seguridad en el desarrollo.
      .col-md-4.col-lg-4.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero.posit_8
            .h2 3
          p.mb-0.text-center El impulso de la colaboración y liderazgo de los trabajadores de la compañía u organización.
    
    p.mb-5 Una vez que los sistemas de administración de la calidad son implementados y gestionados correctamente, tienen la posibilidad de contribuir a las empresas a incrementar el nivel de satisfacción de los consumidores, pues las metas que se establecen toman presente las necesidades y expectativas de estos y las empresas orientan todo su esfuerzo en exponer productos o servicios que cumplan con los reglamentos aplicables y que cubran los requerimientos y demandas que el comprador logre tener o necesitar en el futuro.

    figure.mb-5
      img(src='@/assets/curso/tema2/t2-2.svg', alt='Texto que describa la imagen')
    
    p.mb-3 La identificación sistemática y la administración de los diferentes procesos empleados en la compañía, y especialmente las colaboraciones entre tales procesos tienen la posibilidad de referir como “gestión por procesos” en su entorno de aplicación. La regla ISO 9001 estimula la adopción de la administración por procesos como medio de detectar evidentemente y gestionar el Sistema de Administración de la Calidad y las oportunidades para la optimización.
    p.mb-5 La atención de los requerimientos del cliente y de otras necesidades interesadas de manera en el servicio al cliente, son importantes y se usan como retroalimentación para poder evaluar y validar si se han logrado las metas previstas por la dirección de la empresa.

    .bg_grad-04
      .row
        .col-12.col-lg-5
          figure.mb-5
            img(src='@/assets/curso/tema2/t2-3.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-6
          div.posit_9
            h3.mb-5 ¡Atención!
            ul.lista-ul
              li.mb-4 
                i.fas.fa-check.color
                | Las reglas de la serie ISO 9000 “no son prescriptivas”.
              li.mb-4 
                i.fas.fa-check.color
                | Permiten utilizar cualquier práctica o herramienta que se considere idónea para el tipo de producto, servicio o consumidores al que se sirve.
              li.mb-4 
                i.fas.fa-check.color
                | No pretende obligar ni “recetar” metodologías (los cómo), sino afirmar que el hincapié se dé en el cumplimiento de los requisitos exigidos de forma obligatoria referenciados en la norma.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Características

    .row.mb-3
      .col-12.col-lg-4
        figure.mb-5
          img(src='@/assets/curso/tema2/t2-4.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        p Conforme a las necesidades de los distintos sectores en atención al cliente, el sistema de calidad contribuye de forma integral con pertinencia y calidad sin distinción de ninguna clase y organiza, desarrolla, administra y ejecuta acciones de forma integral en coordinación y en función de las necesidades sociales y del sector productivo acorde la actividad de la empresa.
        p La inserción de las poblaciones sujetas de especial protección por parte del Estado en diferentes escenarios sociales, económicos, productivos, culturales, formativos, entre otros, se facilita brindando a estos colectivos poblaciones de atención con un enfoque participativo y pluralista para fortalecer competencias con fundamento en particularidades para lograr la inclusión social y un mayor grado de pertinencia en la atención.
    
    p.mb-5 Las principales características del sistema de calidad se resume en:

    .row
      .col-12.col-lg-4.mb-3
        .row.bgr_2
          .col-3.px-0
            figure
              img.img90(src='@/assets/curso/tema2/t2-5.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center
            p.mb-0 Eficiencia en los procesos u ocupaciones de la organización (mejora de costos).
      .col-12.col-lg-4.mb-3
        .row.bgr_2
          .col-3.px-0
            figure
              img.img90(src='@/assets/curso/tema2/t2-6.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center
            p.mb-0 Mejora importante en la satisfacción de los consumidores.
      .col-12.col-lg-4.mb-3
        .row.bgr_2
          .col-3.px-0
            figure
              img.img90(src='@/assets/curso/tema2/t2-7.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center
            p.mb-0 Herramienta de comunicación para optimización de la Imagen de la organización.
    
    .row.justify-center
      .col-12.col-lg-4.mb-3
        .row.bgr_2
          .col-3.px-0
            figure
              img.img90(src='@/assets/curso/tema2/t2-8.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center
            p.mb-0 Aumento del ingreso al mercado, sin parámetros de fronteras.
      .col-12.col-lg-4.mb-3
        .row.bgr_2
          .col-3.px-0
            figure
              img.img90(src='@/assets/curso/tema2/t2-9.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center
            p.mb-0 Incremento de la comunicación interna, satisfacción de los trabajadores.

    p.mb-3 <b>La norma ISO 9001</b> mira el pro y el contra en el personal la esencia de la organización, y promueve su formación, colaboración y liderazgo en todos los niveles, además, los motiva y permite que sus capacidades sean utilizadas para el beneficio de la organización.
    p.mb-5 Los pasos a seguir para que la empresa sea certificada con ISO 9001 son:

    .row.mb-5.justify-around
      .col-12.col-lg-3
        figure
          img(src='@/assets/curso/tema2/t2-10.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-3
        figure
          img(src='@/assets/curso/tema2/t2-11.svg', alt='Texto que describa la imagen')
    .row.mb-5.justify-around
      .col-12.col-lg-3
        figure
          img(src='@/assets/curso/tema2/t2-12.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-3
        figure
          img(src='@/assets/curso/tema2/t2-13.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-3
        figure
          img(src='@/assets/curso/tema2/t2-14.svg', alt='Texto que describa la imagen')

    p Se puede decir, entonces, que disponer de un sistema de administración de la calidad bajo la ISO 9001 es una virtud competitiva y debe ser una elección estratégica tenida presente por cada una de las empresas.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Protocolo del sistema de calidad
    
    .row.mb-5
      .col-12.col-lg-4
        figure
          img(src='@/assets/curso/tema2/t2-15.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        p Un protocolo es el grupo de métodos para asegurar que un producto o servicio cumpla con ciertos criterios. Para el caso del protocolo del sistema de gestión tales criterios serían la calidad o los requisitos del comprador.
        p Los ANS (Acuerdos de Niveles de Servicio), también conocidos como SLA, establecen la relación entre el cliente y el proveedor.
        p Estos ANS identifican y definen las necesidades del cliente a la vez que controla sus expectativas de servicio en relación a la capacidad del proveedor, proporciona un marco de entendimiento, simplifica asuntos complicados, reduce las áreas de conflicto y favorece el diálogo ante la disputa.
    
    p.mb-5 Los Acuerdos de Niveles de Servicio como generadores de valor se definen así:

    .row.mb-5.justify-center
      .col-12.col-lg-10
        .tarjeta.bg_grad-05.p-4.mb-5(data-aos="zoom-in-up")
          SlyderA
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure
                  img.img200(src='@/assets/curso/tema2/t2-16.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                p Es un protocolo plasmado normalmente en un documento por el que una compañía que presta un servicio a otra se compromete a prestar el mismo bajo unas determinadas condiciones y con unas prestaciones mínimas o que se realiza entre los empleados de una empresa.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure
                  img.img200(src='@/assets/curso/tema2/t2-17.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                p Un ANS tratará de mantener y garantizar la calidad de un servicio brindado a un cliente.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure
                  img.img200(src='@/assets/curso/tema2/t2-18.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                p El Acuerdo de Nivel de Servicio es el mantenimiento de la disponibilidad de un determinado servicio basado en un compromiso del nivel de cumplimiento en su ejecución, que puede ser medido y demostrado.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure
                  img.img200(src='@/assets/curso/tema2/t2-19.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                p En los ANS se pueden establecer tantos indicadores como se estimen necesarios y de su evaluación se obtienen, por ejemplo, penalizaciones a la empresa suministradora, identificación de puntos débiles del proceso e indicaciones para procesos de mejora continua en determinadas actividades.
    
    .row.justify-center
      .col-12.col-lg-10
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5 Normas y entidades de importancia para la implementación de los ANS
          table
            tr.bgr_3
              th ISO 9001.
              td Capítulo 7 numeral 5: Control de la producción y la prestación del servicio, dice que se debe asegurar la implementación del seguimiento y la medición así como la implementación de actividades de entrega del producto. De igual manera, en el capítulo 8, numeral 1 se hace mención de la satisfacción del cliente y en el capítulo 8, numeral 5 de la mejora continua.
            tr.bgr_4
              th ITIL <em>Information Technology Infrastructure Library</em> ITIL V3. 2011.
              td Considera dentro del módulo de Diseño del servicio los ANS como pilares del marco de trabajo, donde se encuentra la biblioteca de buenas prácticas de manejo de las tecnologías de la información
            tr.bgr_3
              th Superintendencia Financiera de Colombia.
              td Circular externa 042 de 2012 - requerimientos mínimos de seguridad y calidad para la realización de operaciones: Para procesos de tercerización outsourcing.

    p.mb-5 A continuación, se invita a observar un video sobre los aspectos más relevantes de los ANS.

    .bg_grad-01
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

          


    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
