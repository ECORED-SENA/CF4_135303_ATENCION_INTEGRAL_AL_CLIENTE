<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa y requerimientos en atención al cliente

    .row.justify-center.mb-5(data-aos="fade-up") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.posit
            p.mb-0 Según la Constitución Política de Colombia (1991), todas las personas tienen derecho a la intimidad, tanto familiar como personal, al buen nombre y, además, a la protección de datos personales y a conocer, rectificar, actualizar y/o cancelar toda la información y datos personales que se hayan recolectado y se tengan en cualquier base de datos.
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-1.png')})`}")
    
    p(data-aos="fade-right").mb-5 A continuación, se verá un poco más de las leyes que protegen el derecho a los datos personales, en su orden cronológico.

    .row.justify-center.mb-5(data-aos="fade-up")
      .col-12.col-lg-5.mb-3
        figure
          img(src='@/assets/curso/tema1/t1-3.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-5
        figure
          img(src='@/assets/curso/tema1/t1-2.png', alt='Texto que describa la imagen')
    
    p.mb-5 El siguiente video resume los aspectos más relevantes de la ley que rige los estatutos para la protección de datos personales, así como los decretos ya mencionados, que la reglamentan o modifican.

    .bg_grad-01
      .row.justify-center.pt-5.pb-5(data-aos="fade-up")
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/U8OGCJaKORY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h3(data-aos="fade-right").mb-5 Pero… ¿Qué son los datos personales?

    p.mb-5 Los datos personales son información de un individuo, la cual se utiliza para identificarlo. Estos datos pueden estar almacenados en <b><em>bases de datos</em></b>, ya sean físicas o digitales. Dentro de los datos personales se maneja información como:

    .row
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row.bgr
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-4.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Edad.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row.bgr 
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-6.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
              p.mb-0 Nombre.
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row.bgr 
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-8.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Documento de identidad.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row.bgr
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-10.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Números telefónicos de contacto.
    
    .row.mb-3
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row.bgr
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-5.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Correo electrónico.
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row.bgr 
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-7.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
              p.mb-0 Número de seguridad social.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row.bgr 
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-9.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Dirección de domicilio.
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row.bgr
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-11.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Entre otros.
    
    p.mb-3 Todas las empresas colombianas que manejan clientes y colaboradores deben dar cumplimiento a la normativa de protección de datos y garantizar el derecho constitucional que tienen las personas para el manejo del tratamiento de datos personales.
    p.mb-5 La política que establezcan las organizaciones para la protección de datos debe cobijar la responsabilidad del manejo de la información por parte de:

    .row
      .col-12.col-lg-3.mb-3(data-aos="zoom-in")
        .row.bgr_2
          .col-4.px-0.bgr_13
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-12.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Colaboradores.
      .col-12.col-lg-6.mb-3(data-aos="zoom-in-down")
        .row.bgr_2 
          .col-4.col-lg-2.px-0.bgr_13
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-14.svg', alt='Texto que describa la imagen')
          .col-8.col-lg-10.align-items-center
              p.mb-0 Terceros que presten servicios a la empresa.
      .col-12.col-lg-3.mb-3(data-aos="zoom-in")
        .row.bgr_2 
          .col-4.px-0.bgr_13
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-16.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Contratistas.
    .row.mb-5
      .col-12.col-lg-3.mb-3(data-aos="zoom-in-down")
        .row.bgr_2
          .col-4.px-0.bgr_13
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-13.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center
            p.mb-0 Operadores.
      .col-12.col-lg-6.mb-3(data-aos="zoom-in")
        .row.bgr_2 
          .col-4.col-lg-2.px-0.bgr_13
            figure.p-3
              img.img90(src='@/assets/curso/tema1/t1-15.svg', alt='Texto que describa la imagen')
          .col-8.col-lg-10.align-items-center
              p.mb-0 Toda persona natural o jurídica que tenga acceso a la información para realizar las labores contratadas por la empresa.
    
    p.mb-5 La protección de datos que manejan las empresas se enmarca en categorías, a saber:

    h4.mb-5 Categoría de datos

    .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-out")
      SlyderA
        .row.p-5
          .col-md-5.align-items-center
            div 
              h4 Datos sensibles
              p Son aquellos que pueden llegar a afectar la <u>intimidad</u> del titular.
              p El uso indebido de la información puede generar riesgos, incluso discriminación. La revelación de datos del titular como pertenencia a organizaciones, sindicatos, agremiaciones, orientación política, datos relativos a la salud y datos biométricos son datos de alta sensibilidad y se debe garantizar la protección de estos en pro de la garantía del bienestar de su propietario.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-17.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-5.align-items-center
            div 
              h4 Datos sensibles - excepciones
              p En el tratamiento de los datos sensibles se tiene algunas excepciones, como son:
              ul.lista-ul
                li 
                  i.fas.fa-check.color
                  | El titular entrega autorización explícita en el tratamiento de los datos.
                li 
                  i.fas.fa-check.color
                  | Cuando los datos son requeridos en procesos judiciales o para reconocimientos.
                li 
                  i.fas.fa-check.color
                  | Los datos tengan una finalidad estadística, científica o histórica.
                li 
                  i.fas.fa-check.color
                  | Los datos son necesarios para salvaguardar el interés del titular y este se encuentra incapacitado, sea física o jurídicamente, para esto se requiere autorización del representante legal.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-18.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-5.align-items-center
            div 
              h4 Derechos de niñas, niños y adolescentes
              p.text-bold El tratamiento de datos de este grupo poblacional está prohibido.
              p Es de anotar que para el tratamiento de datos de las niñas, niños y adolescentes se debe contar con la autorización del representante legal y el cumplimiento de otros parámetros definidos por la ley, según la necesidad o requerimiento.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-19.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-5.align-items-center
            div 
              h4 Derechos de niñas, niños y adolescentes – excepción
              p Se exceptúa cuando el tratamiento cumpla con los siguientes requisitos o parámetros:
              ul.lista-ul
                li 
                  i.fas.fa-check.color
                  | Cuando los datos respondan al interés superior de los niños, niñas y adolescentes, en un ámbito de respeto (entiéndase interés superior como: la obligatoriedad de todas las personas a garantizar la integralidad y los derechos humanos universales, interdependientes y prevalentes de los niños, niñas y adolescentes).
                li 
                  i.fas.fa-check.color
                  | Cuando se aseguren los derechos fundamentales.
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-20.png', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-5.align-items-center
            div 
              h4 Autorización especial de datos personales sensibles 
              p Se refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares. Es decir, el manejo de los datos sensibles. No obstante, la Ley 1581 de 2012, los decretos y normas reglamentarias, faculta el manejo de los datos; por lo tanto, no se tiene la obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles.

          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/t1-21.png', alt='Texto que describa la imagen')  

    p.mb-5 A continuación, se verán las razones y funciones de las leyes de protección de datos.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-out-up")
      .py-3.py-md-4(titulo="Finalidad")
        .row.ps-0.ps-lg-4
          .col-md-5.mb-3
            figure
              img(src='@/assets/curso/tema1/t1-22.png', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Finalidad
            p El propósito de la política de protección de datos es estandarizar procesos de recolección y tratamiento de datos personales, según la normativa establecida, así como crear esquemas organizados que salvaguarden información privada e información sensible de los titulares.
      .py-3.py-md-4(titulo="Derechos")
        .row.ps-0.ps-lg-4
          .col-md-5.mb-3
            figure
              img(src='@/assets/curso/tema1/t1-23.png', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Derechos
            p Todo titular de la información tiene derechos y condiciones de legalidad para el tratamiento de los datos, el <em>habeas data</em>. Este derecho consagrado en el artículo 15 de la Constitución Política de Colombia de 1991, se refiere al derecho a la intimidad familiar, personal y al buen nombre, y designa al Estado como el ente garantista de que el artículo se cumpla.
      .py-3.py-md-4(titulo="Condiciones")
        .row.ps-0.ps-lg-4
          .col-md-5.mb-3
            figure
              img(src='@/assets/curso/tema1/t1-24.png', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Condiciones
            p El propietario de la información puede conocer, actualizar, rectificar y modificar la información recolectada en archivos de entidades públicas y privadas o en bancos de datos. La organización debe generar herramientas para que el propietario de la información pueda consultar de forma gratuita los datos, al menos, una vez al mes y cuando se presenten modificaciones a las políticas de tratamiento de datos. 
      .py-3.py-md-4(titulo="Autorización")
        .row.ps-0.ps-lg-4
          .col-md-5.mb-3
            figure
              img(src='@/assets/curso/tema1/t1-23.png', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Autorización
            p La autorización especial de datos personales sensibles refiere a la implementación y uso de los diferentes medios disponibles para la obtención de la autorización de información de los titulares, es decir, el manejo de los datos sensibles. No obstante, la Ley 1581 de 2012 –decretos y normas reglamentarias– faculta el manejo de los datos. Por tanto, no se tiene la obligatoriedad de otorgar autorización para el tratamiento de los datos sensibles.
    
    .posit_5.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/t1-26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.m-0.text-small Apreciado aprendiz, para ampliar la información sobre este tema, en el material complementario encontrará el video, <em>"Legislación en protección de datos personales en Colombia"</em> o bien puede visualizarlo dando clic en el botón.   
            .col-sm-auto.p-lg-4
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/bvAH9ppBbbE" target="_blank")
                span ver video
                i.fas.fa-file-download
    
    p.mb-5 Ahora, se relacionan otras normas que están relacionadas con <em><b>Atención al cliente</b></em>, donde los ciudadanos pueden basarse para someter PQR (peticiones, quejas y reclamos) son las que aparecen a continuación:

    .row.justify-center(data-aos="zoom-out")
      .col-12.col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
          table
            tr.bgr_3
              th Artículo 23 de la Constitución Política de Colombia (1991)
              td Concerniente a las peticiones que puede realizar cada ciudadano.
            tr.bgr_4
              th Ley 1755 de 2015
              td Por medio de la cual se regula el derecho fundamental de petición.
            tr.bgr_3
              th Ley 1437 2011
              td Código de Procedimiento Administrativo y de lo Contencioso Administrativo.
            tr.bgr_4
              th Ley 1474 de 2011
              td Actos de corrupción.
            tr.bgr_3
              th Decreto 19 de 2012
              td Antitrámites.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clasificación y trazabilidad de requerimientos
    
    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.mt-3(data-aos="fade-left")
        p En la cadena de suministro, la trazabilidad es una cuestión tanto reglamentaria como ética o medioambiental. La trazabilidad es un criterio fundamental para los esfuerzos de sostenibilidad relacionados con las cadenas de suministro, en las que conocer al productor, a los trabajadores y a otros eslabones es un factor necesario que subyace a las afirmaciones acertadas sobre el impacto social, económico o medioambiental. Los minoristas respetuosos con el medioambiente pueden optar por poner a disposición de los clientes la información relativa a su cadena de suministro, ilustrando el hecho de que los productos que venden se fabrican en fábricas con condiciones laborales seguras, por trabajadores que ganan un salario justo y con métodos que no dañan el medio ambiente.
    
    p.mb-5 La trazabilidad total ofrece ventajas para múltiples acciones a lo largo de la cadena de suministro, más allá de los sistemas de información, entre ellas se resaltan:

    .bgr_5.mb-5
      .row.p-5.justify-around
        .col-12.col-lg-6
          ul.lista-ul
            li 
              i.fas.fa-check.color
              | Mecanismo para cumplir con las políticas y normativas locales e internacionales.
            li 
              i.fas.fa-check.color
              | Reducción del riesgo de que entren materiales ilegales o no conformes en las cadenas de suministro.
            li 
              i.fas.fa-check.color
              | Facilitar la coordinación entre las autoridades y los organismos pertinentes.
            li 
              i.fas.fa-check.color
              | Permitir la conciliación automática de lotes y volúmenes disponibles.
            li 
              i.fas.fa-check.color
              | Ofrecer un método de control y seguimiento de las existencias.
        .col-12.col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-check.color
              | Activar las alertas de incumplimiento en tiempo real.
            li 
              i.fas.fa-check.color
              | Reducir la probabilidad de errores de registro.
            li 
              i.fas.fa-check.color
              | Mejorar la eficacia y la eficiencia.
            li 
              i.fas.fa-check.color
              | Aumentar la transparencia.
            li 
              i.fas.fa-check.color
              | Promover la integridad de la empresa.

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-28.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.mt-4(data-aos="fade-left")
        p En logística, la trazabilidad se refiere a la capacidad de rastrear las mercancías a lo largo de la cadena de distribución, sobre la base de un número de lote o de serie.
        p La definición de los objetivos estratégicos, las metas, los proyectos y los indicadores es un factor determinante para establecer el calendario y el flujo de las cadenas de suministro. Siempre es necesario tener un plan B y C en caso de que la alternativa falle y ofrecer un buen servicio.
        p Para estar informado sobre el inventario de mercancías en almacén, es necesario implementar un sistema de información debido a que ofrecen en tiempo real un estado de entradas y salidas de los productos.

    .row.justify-center.mb-5(data-aos="fade-up") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.posit
            p.mb-0 Normalmente, la logística se ocupa de los eventos que llevan el producto hacia el cliente. En el caso de la logística inversa, el recurso retrocede, al menos, un paso en la cadena de suministro. Por ejemplo, la mercancía pasa del cliente al distribuidor o al fabricante. 
              span.color_1.text-bold Cualquier proceso o gestión posterior a la venta del producto implica una logística inversa. 
              | Si el producto es defectuoso, el cliente lo devolvería. La empresa fabricante tendría entonces que organizar el envío del producto defectuoso, probar el producto, desmontarlo, repararlo, reciclarlo o eliminarlo.
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-29.png')})`}")
    
    p El mismo proceso se podría utilizar para la reutilización/reenvío de productos y mercancías perecederas para evitar que se estropeen si el transporte no está disponible o supone un reto. Por ejemplo, en el momento álgido de la pandemia el deterioro de los alimentos era un gran problema; pero ahora, con la vista puesta en la logística completa hacia delante y hacia atrás, esos residuos pueden ser redirigidos para evitar el deterioro y reducir los costes totales de transporte.
    p Un aspecto importante para el éxito de las organizaciones es asegurar que la gestión del proceso logístico esté adecuadamente alineada con la implementación de la dirección estratégica como requisito previo para obtener resultados en términos de valor añadido percibido por los clientes internos y externos como condición de eficiencia y competitividad.
    p.mb-5 A continuación, se verán los cinco principales componentes de gestión de la cadena de suministro.

    .bg_grad-01
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/OvFFJpqBquI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p En resumen, estos fueron los elementos de la gestión de la cadena de suministro que los líderes tienen en cuenta a la hora de tomar decisiones estratégicas. Por lo tanto, cada componente de la gestión de la cadena de suministro es vital para tomar decisiones estratégicas, ya sea en términos de diversificación de productos o vertical en una organización. Con la tendencia actual a la transformación digital, se han tomado muchas iniciativas digitales para la cadena de suministro, lo que puede ser utilizado por la empresa como una ventaja competitiva.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Notificación de recepción
    
    .bg_grad-01
      .row.justify-center.pt-5.pb-5
        .col-12.col-md-10
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/PSiBtkl75Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/t1-30.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.mt-4(data-aos="fade-left")
        p <b>Peticiones, quejas, reclamos, sugerencias, felicitaciones (PQRSF)</b>: estos componentes constituyen la mayor composición dentro de los requerimientos de los usuarios, ya que la mayoría de sus solicitudes hacia la empresa están enfocadas en ellas. A nivel general, las PQR hacen alusión a inconformidades o dificultades con la empresa, su personal o los productos adquiridos, mientras que las felicitaciones aluden a un reconocimiento de cliente hacia la empresa y las sugerencias una visión de mejora desde una perspectiva propositiva.
        p Para la atención de las solicitudes y/o comunicados de peticiones, quejas y reclamos (PQR) se usa un mismo canal administrativo, pero tiene un tratamiento y un seguimiento particular; por esta razón, el primer paso del proceso de PQR es el formato de recepción que debe, de manera clara y definida, determinar en cuál de las tres tipologías se clasifica la inquietud del cliente respecto del servicio prestado.

    .bgr_6.mb-5
      .row.justify-center
        .col-12.col-lg-10
          .row.bgr_7
            .col-12.col-lg-5
              figure
                img.posit_3(src='@/assets/curso/tema1/t1-31.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-6.align-items-center
              p Al igual una petición, queja o reclamo, la respuesta debe ser clara y <b>emitirse dentro de los tiempos estipulados por la ley</b>, en caso de no ser posible cumplir los tiempos de debe informar al peticionario, informando los tiempos de respuesta y causales de la mora.
      .row.justify-center
        .col-12.col-lg-6.align-items-center
          p La notificación o respuestas, según lo previsto en la Ley 1480 del 2011 (Estatuto del Consumidor) y en el Decreto 1074 del 2015, <b>deberá proporcionarse durante los 15 días hábiles siguientes a la recepción de la reclamación</b>, deben ser escritas ya sea en carta o email certificado y describir las causas por las cuales se dictamina en tal sentido y con las pruebas que sean soporte de sustento para la misma.
        .col-12.col-lg-2
          figure
            img.img130.posit_4(src='@/assets/curso/tema1/t1-32.svg', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        .bgr_8.p-4.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema1/t1-33.svg', alt='Texto que describa la imagen')
          h4.text-center Proceso
          p.m-0.text-center El proceso de <b>PQR</b> es importante. Cumplir los tiempos establecidos reduce la posibilidad de que se interpongan sanciones por entidades de control, como lo es la Superintendencia de Industria y Comercio.
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        .bgr_9.p-4.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema1/t1-34.svg', alt='Texto que describa la imagen')
          h4.text-center Canales 
          p.text-center Los canales para la presentación de una <b>PQR</b> más usados son: 
          p.m-0.text-center Oficinas de servicio al cliente.
          p.m-0.text-center <em>Call center</em>.
          p.m-0.text-center Página <em>web</em>.
      .col-12.col-lg-4(data-aos="fade-left")
        .bgr_10.p-4.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema1/t1-35.svg', alt='Texto que describa la imagen')
          h4.text-center Sistema 
          p.m-0.text-center Un sistema de <b>PQR</b> es el instrumento para el control y mejoramiento constante de los servicios y procesos, así como el responsable de crear la fidelización para los clientes.

    .posit_5.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/t1-26.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.m-0.text-small En los anexos de este componente, se podrá encontrar material en video que amplía y ejemplifica la recepción de una reclamación y documenta la trazabilidad del requerimiento de acuerdo con la normativa y procedimientos técnicos. 
            .col-sm-auto.p-lg-4
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/n4GaN2DuI9Q" target="_blank")
                span ver video
                i.fas.fa-file-download
    
    p Para un mejor entendimiento en relación con la atención y seguimiento de PQR, cada organización por norma tendrá que fijar un aviso en sitio visible de atención de servicios con el nombre de la persona designada para atender inquietudes y reclamos o, en caso de que persista la inconformidad, el del responsable empresarial.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Trámite a requerimientos

    p Los requisitos para trámites del proceso se refieren a la documentación de las necesidades que una organización empresarial pretende satisfacer mediante la identificación de metodologías, enfoques y técnicas que deben aplicarse para producir un determinado resultado (producto o servicio) que materialice o realice las necesidades inicialmente establecidas. Los requisitos de los procesos establecen reglas y normas para planificar y realizar actividades (flujos de trabajo, procesos, procedimientos, tareas).
    p.mb-5 Determinar los requisitos de un proceso implica pasar por la siguiente secuencia de tareas:

    .row.justify-content-center(data-aos="fade-down").mb-5
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/tema1/t1-36.png", alt="Escáner")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-5
                .h4.mt-4.mt-lg-0.mb-3 Recopilar
                p La primera tarea consiste en determinar y recoger las necesidades y expectativas iniciales de los clientes.
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/tema1/t1-37.png", alt="Escáner")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-5
                .h4.mt-4.mt-lg-0.mb-3 Analizar
                p La segunda tarea se trata de revisar los datos recogidos y asegurarse de que son claros, completos, inequívocos y coherentes.
      .col-lg-4.col-md-9.mb-3.mb-md-0
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/tema1/t1-38.png", alt="Escáner")
            .text.p-lg-2.p-3
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-5
                .h4.mt-4.mt-lg-0.mb-3 Registrar
                p La última tarea es crear un documento de especificación de requisitos y presentarlo a los clientes para su validación.
    
    p.mb-5 Ya definido con claridad la petición, queja y reclamo, las <b>estrategias de atención al cliente</b> deben enfocarse como mínimo en los siguientes objetivos:

    .bg_grad-03.mb-5
      .row
        .col-12.col-lg-6(data-aos="fade-right")
          figure
              img(src="@/assets/curso/tema1/t1-39.svg", alt="Escáner")
        .col-12.col-lg-5.align-items-end.p-4.p-lg-0(data-aos="fade-left")
          p Para lograr desarrollar cada uno de los objetivos anteriores, las organizaciones están obligadas a implementar el mecanismo de PQR, no solamente para lograr mejora continua de la atención al cliente, sino, en no menor importancia, recabar los datos y evidencias de forma permanente que permitan ser tabuladas y analizadas, convirtiéndolas en indicadores e información de garantía de mejora continua del servicio.
    
    p.mb-5 Un ciclo básico de PQR es el siguiente:

    figure.mb-5
      img(src="@/assets/curso/tema1/t1-40.svg", alt="Escáner")
    
    p.mb-5 Los procesos de desarrollo de información requieren de datos constantes, fiables y medibles. Para ello, es necesario su verificación de forma permanente y en ciclo. Este proceso permite la depuración y brinda garantía de certeza de las tendencias detectadas en cada análisis practicado.
    
    .row.justify-center.mb-5(data-aos="fade-left") 
      .col-12.col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.posit
            p.mb-0 Los <b>PQR</b> se deben solucionar o responder siguiendo los principios, términos y métodos dispuestos en el Código Contencioso Administrativo y su incumplimiento dará sitio a la imposición de las sanciones previstas en el mismo.
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-41.png')})`}")
    







    








        
          
              

          
      
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
