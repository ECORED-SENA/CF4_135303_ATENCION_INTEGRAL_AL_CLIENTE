<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión
    
    .row.justify-center.mb-5(data-aos="fade-up")  
      .col-12.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.posit
            p.mb-0 Los indicadores de gestión o <em>Key Performance Indicators</em> (KPI por sus siglas en inglés), no es una tarea fácil como se podría pensar, debido al hecho de que hay tantas variaciones diferentes de la definición de un KPI disponibles en la literatura escrita sobre este tema. Generalmente encontramos un enfoque más concreto, más bien operativo, de los diferentes conceptos; los KPI deberían ser herramientas prácticas más que discursivas. A esto retomamos lo escrito por Kelvin, “lo que no se puede definir no se puede medir, lo que no se puede medir no se pueden mejorar, lo que no se puede mejorar se puede deteriorar” (Lord, 2008).
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/t3-1.png')})`}")
    .bg_grad-06.mb-5
      .row.justify-center
        .col-12.col-lg-4(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema3/t3-2.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-6.posit_10(data-aos="fade-left")
          h3 De acuerdo con lo anterior, un KPI
          p Es una medida que evalúa cómo una empresa ejecuta su visión estratégica. Este término se refiere a cómo una estrategia interactiva, se integra en la estrategia de la empresa en su conjunto, por ello es importante que todos los implicados en ella estén de acuerdo en lo que representa la estrategia y cómo se interpretan. 

    p Es necesario destacar el hecho de que hay un límite en la forma en que cada uno de los puntos de optimización puede mejorar. También se han visto los efectos de la anulación donde el aumento de la eficacia de una acción concreta parecía producirse solo a favor de otra acción.
    p.mb-5 Se puede reconocer los elementos de un indicador de gestión, de acuerdo con el siguiente esquema:

    .row.justify-content-center.bg_grad-07.mb-5
      .col-12.col-lg-8
        .row 
          .col-12.col-lg-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema3/t3-3.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-6(data-aos="fade-left")
            figure.mt-4
              img.barras(src='@/assets/curso/tema3/t3-4.svg', alt='Texto que describa la imagen')
    
    p.mb-5 En una organización también se debe contar con el <b>mínimo número posible de indicadores</b> que garanticen contar con información constante, real y precisa sobre aspectos tales como:

    .row
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-5.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
            p.mb-0.ms-3 Efectividad.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-6.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
              p.mb-0.ms-3 Eficiencia.
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-7.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
            p.mb-0.ms-3 Eficacia.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-8.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
            p.mb-0.ms-3 Productividad.
    .row.justify-content-center.mb-5
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-9.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
            p.mb-0.ms-3 Calidad.
      .col-12.col-lg-3.mb-3(data-aos="fade-down")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
              p.mb-0.ms-3 Ejecución presupuestal.
      .col-12.col-lg-3.mb-3(data-aos="fade-up")
        .row
          .col-4.px-0.bgr_12
            figure.p-3
              img.img90(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
          .col-8.align-items-center.bgr_14
            p.mb-0.ms-3 Incidencia de la gestión.

    p Todo lo anterior constituye el conjunto de signos vitales de la organización (Mora, 2004).
    p.mb-5 Las siguientes son las características generales de los indicadores que pueden ayudar a garantizar sean útiles y eficaces:

    .tarjeta.bg_grad-02_1.p-4.mb-5(data-aos="zoom-out")
      SlyderA
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-12.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Relevante
              p Relacionar los indicadores de rendimiento con las metas y objetivos la organización. Lo ideal es que sean relevantes para las personas que proporcionan los datos y para los usuarios, pero puede que no sea posible que un solo indicador sea relevante para todos los usuarios, esto debido a las diferencias de perspectivas e intereses.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-13.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Definición clara
              p Un indicador de rendimiento debe tener una definición clara e inteligible para garantizar una recopilación coherente y una comparación justa.
              p Las descripciones vagas pueden dar lugar a interpretaciones erróneas y a confusión. Las definiciones demasiado estrictas o demasiado amplias también pueden crear problemas.

        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-14.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Fácil de entender y utilizar
              p Es importante que los indicadores se describan en términos que los usuarios de la información puedan entender, incluso si la propia definición tiene que utilizar terminología técnica. Los indicadores dirigidos al público deben evitar la jerga de gestión o los conceptos abstractos.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-15.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Comparable
              p Lo ideal es que los indicadores sean comparables de forma coherente tanto entre organizaciones como a lo largo del tiempo. Un aspecto esencial de la comparabilidad de los indicadores de rendimiento es la inclusión del contexto en el que se realiza la comparación. Las circunstancias externas e internas pueden diferir hasta tal punto que la comparación no sea válida.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-16.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Verificable
              p El indicador también debe recogerse y calcularse de forma que permita verificar la información y los datos. El indicador debe basarse en sistemas sólidos de recogida de datos, y los gestores deben poder verificar la exactitud de la información y la coherencia de los métodos utilizados.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-17.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Rentable 
              p Otro criterio importante es equilibrar el costo de la recogida de información con su utilidad. Siempre que sea posible, un indicador debe basarse en información ya disponible y vinculada a la actividad de recogida de datos existente.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-18.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Permitir la innovación
              p La definición de un indicador no debe disuadir a las organizaciones de desarrollar procesos innovadores o idear métodos, sistemas o procedimientos alternativos para mejorar la prestación de servicios. Lo ideal es que los indicadores de rendimiento se construyan para que se produzcan tales innovaciones.

        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-19.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Validez estadística
              p Los indicadores deben ser estadísticamente válidos.
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/t3-20.png', alt='Texto que describa la imagen')
          .col-md-5.align-items-center
            div 
              h4 Oportunos
              p Debe basarse en datos que estén disponibles en un plazo razonable. Esta escala temporal dependerá del uso que se haga de los datos. Algunos datos se recogen semanalmente o incluso a diario, ya que son necesarios en la gestión operativa de los servicios, mientras que otros están disponibles una vez al año para fines más estratégicos y a largo plazo.

    p.mb-5 Durante la formulación de los indicadores hay que plantearse las siguientes preguntas:

    .row
      .col-12.col-lg-4
        figure
          img(src='@/assets/curso/tema3/t3-21.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        TabsA.color-acento-contenido.mb-5
          .tarjeta.bgr_15.p-5(titulo="¿Qué?")
            h4 ¿Qué?
            p.m-0 Lluvia de ideas sobre las variables, que pueden proporcionar medios para medir los objetivos.
          .tarjeta.bgr_15.p-5(titulo="¿Cuánto?")
            h4 ¿Cuánto?
            p.m-0 Para definir la magnitud del cambio que queremos conseguir.
          .tarjeta.bgr_15.p-5(titulo="¿Quiénes?")
            h4 ¿Quiénes?
            p.m-0 Para aclarar quién pertenece al grupo objetivo.
          .tarjeta.bgr_15.p-5(titulo="¿Dónde?")
            h4 ¿Dónde?
            p.m-0 Información específica sobre la zona de intervención.
          .tarjeta.bgr_15.p-5(titulo="¿Cuándo?")
            h4 ¿Cuándo?
            p.m-0 Definición del marco temporal.
    
    p.mb-5 Entre los indicadores de gestión para medir el nivel de servicio se pueden utilizar los siguientes:

    .row.justify-center(data-aos="zoom-out")
      .col-12.col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5 Indicadores de gestión para medir el nivel de servicio
          table
            tr.bgr_3
              th Órdenes completas 
              td Órdenes entregadas completas / Órdenes totales surtidas.
            tr.bgr_4
              th Órdenes a tiempo
              td Órdenes entregadas a tiempo / Órdenes totales despachadas. 
            tr.bgr_3
              th Órdenes en cantidad
              td Unidades recibidas orden / Unidades entregadas orden.
            tr.bgr_4
              th Precisión facturación
              td Facturas aceptadas / Facturas generadas.
            tr.bgr_3
              th Ciclo de orden
              td  Sumatoria de fechas (recepción – fechas de solicitud).
            tr.bgr_4
              th Ordenes con devolución
              td Órdenes devueltas / Órdenes totales generadas.   
            tr.bgr_3
              th Quejas de clientes
              td Órdenes con quejas / Órdenes totales generadas. 
            tr.bgr_4
              th Resolución de quejas de clientes
              td Quejas con resolucion a tiempo / Quejas recibidas. 
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 interpretación de los KPI
    
    .row.mb-3
      .col-12.col-lg-4(data-aos="fade-right")
        figure.mb-5
          img(src='@/assets/curso/tema3/t3-22.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Interpretar un indicador de gestión es indicar lo que está ocurriendo en un proceso específico o actividad, para ello se procede a la toma de decisiones que son, generalmente, opciones de mejora para corregir cuando su resultado se desvía de lo esperado y mejorar los resultados en el menor tiempo posible.
        p En la cultura de la medición del desempeño de las organizaciones y cuando se interpretan o se leen los indicadores de gestión, es muy importante realizar el ejercicio planteado en la gráfica, que son los niveles de tolerancia de los indicadores y que nos envían señales de alerta.

    .bg_grad-08.mb-5
      .row
        .col-12.col-lg-5.p-5
          h4 Los rangos de tolerancia
          p Las señales de alarma permiten monitorear la gestión y determinar cuándo hay variación frente al rango de tolerancia. Esto conlleva a:
          hr
          ol.lista-ol.lista-ol--separador
            li 
              span.text-bold a. 
              | Analizar las variaciones.
            li 
              span.text-bold b. 
              | Implementar medidas correctivas.
          hr
          p Se definen utilizando la metáfora del semáforo:
        .col-12.col-lg-7.hg_1
          .infografia-autores(data-aos="fade-right")
            figure
              img.posit_17(src="@/assets/curso/tema3/t3-23.svg" alt="Adornos flotantes")
              .infografia-autores__img(@mouseover="mostrarIndicador = false")
                img.posit_18(src="@/assets/curso/tema3/t3-24.svg")
                img.posit_19(src="@/assets/curso/tema3/t3-25.svg")
                img.posit_20(src="@/assets/curso/tema3/t3-26.svg")
                .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
    
    h3 Interpretación de indicadores de gestión (KPI)
    p Los  KPI permiten revisar los resultados y la trazabilidad de las variables escogidas para el indicador, además de entender el nivel del objetivo propuesto desde el punto de vista de las políticas establecidas por la compañía. En ellos se reflejan las fortalezas, debilidades oportunidades y las amenazas por lo tanto es importante clarificar y precisar las condiciones necesarias para construir aquellos realmente útiles para medir el desempeño de las organizaciones en sus diferentes áreas.
    p.mb-5 Una regla ampliamente usada en la interpretación de los KPI es que el objetivo debe ser SMART; las cinco letras significan:

    .bg_grad-09.mb-5
      .row.justify-content-center
        .col-12.col-lg-3
          figure
            img(src="@/assets/curso/tema3/t3-27.svg" alt="Adornos flotantes")
        .col-12.col-lg-3.mt-4
          figure
            img(src="@/assets/curso/tema3/t3-28.svg" alt="Adornos flotantes")

    .row.justify-center
      .col-12.col-md-10(data-aos="zoom-in-down")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Específico")
            .col-md-12.align-items-center
              p.mb-0.ms-5 El objetivo debe ser específico y estar muy claramente definido.
          .row(titulo="Medible")
            .col-md-12.align-items-center
              p.mb-0.ms-5 El progreso hacia el objetivo debe ser medible. En la mayoría de los casos significa que puede cuantificarse. Sin embargo, a veces puede ser difícil; y es más sencillo, sin dejar de ser eficaz, tener, al menos, una definición clara de cómo evaluar el nivel de rendimiento. Como regla general, el 80% de los objetivos deberían estar cuantificados.
          .row(titulo="Alcanzable")
            .col-md-12.align-items-center
              p.mb-0.ms-5 El objetivo puede lograrse de forma realista. Se añade que la organización debe mejorar constantemente y adelantarse a su competencia, lo que debe reflejarse en objetivos que también sean ambiciosos y adaptados cuando el entorno cambie (o cuando se cumplan los objetivos). Sin embargo, esto no significa que todos los objetivos deban ser impulsados hacia arriba, ya que esto puede ser perjudicial para las condiciones de trabajo y de las personas; esto es parte del desafío de la dirección para elegir cuándo y qué objetivo debe ser adaptado, hacia arriba o hacia abajo.
          .row(titulo="Relevante")
            .col-md-12.align-items-center
              p.mb-0.ms-5 El objetivo debe ser relevante para la organización al estar alineado con la estrategia y la práctica o proceso que mide.
          .row(titulo="A tiempo")
            .col-md-12.align-items-center
              p.mb-0.ms-5 El plazo para alcanzar el objetivo debe ser claro.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Aplicabilidad de los KPI

    p.mb-5 La gestión basada en los indicadores de gestión se aplica a todas las áreas de la organización, tanto a nivel <strong>estratégico, táctico y operativo</strong>.
    
    .row.justify-content-center
      .col-12.col-lg-8
        .cajon.bgr_16.p-5.mb-4
          p.mb-0 Los indicadores de gestión se deben diseñar para monitorear resultado de variable de acuerdo a la necesidad de cada nivel organizacional y su resultado está expresado de manera numérica que nos indica el nivel de desempeño o el cumplimiento de los objetivos trazados. Es indispensable que toda empresa desarrolle habilidades alrededor del manejo de los indicadores de gestión logística, con el fin de poder utilizar la información resultante de manera oportuna tomar decisiones (Mora, 2004).
    
    p Para aplicar y/o establecer los indicadores de gestión (KPI) es importante tener claridad sobre cómo hacerlo correctamente, de dónde son las fuentes de información, responsables, recursos, frecuencia de la medición y presentación de los informes.
    p.mb-5 Se deben desarrollar indicadores para aquellas actividades o procesos relevantes al objetivo específico del área de la empresa, para lo anterior, se deben tener en cuenta los siguientes pasos:

    .row.mb-5
      .col-12.col-lg-6(data-aos="fade-right") 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta.color_2
              span 1
            | Identificar el proceso, área o la actividad a medir.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 2
            | Responsable del indicador.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 3
            | Conceptualizar cada paso del proceso.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 4
            | Definir el objetivo del indicador y cada variable a medir.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 5
            | Recolectar información inherente al proceso.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 6
            | Cuantificar y medir las variables.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 7
            | Establecer el indicador a controlar.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 8
            | Comparar con el indicador global y el de la competencia interna.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 9
            | Seguir y retroalimentar las mediciones periódicamente.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 10
            | Mejorar continuamente el indicador.
          li 
            .lista-ol--cuadro__vineta.color_2
              span 11
            | Proyección y benchmarking externos.
      .col-12.col-lg-6(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/t3-29.png" alt="Adornos flotantes")
    
    p Los indicadores de servicio al cliente son considerados muy sensibles y se deben administrar en todas las organizaciones, porque son los resultados directos de la labor relacionada con su principal objetivo: el cliente, y se evalúan de acuerdo con la política establecida para la variable y con la frecuencia indicada para determinar resultados en tiempos de intervalos más cortos, se puede decir que es a diario y permanente.
    p.mb-5 A continuación, se presentan los KPI más efectivos para medir el servicio al cliente.

    .bg_grad-10
      .row.mb-5.justify-center
        .col-12.col-lg-6
          div.bgr_17.p-3.mb-3
            h4.m-0 ¿CUÁLES SON LOS 
              span.color_3 KPI 
              | DE SERVICIO AL CLIENTE 
              span.color_3 MÁS EFECTIVOS
              | ?
          PasosA.color-acento-contenido.mb-5.justify-left(tipo="n")
            div(data-aos="fade-left")
              h3 Satisfacción general
              p Ayudará a comprender la satisfacción  de los clientes en todos los aspectos  de la compañía.
            div(data-aos="fade-right")
              h3 Número de quejas recibidas
              p Permite comprender las áreas de  negocio que son un problema y  cómo resolverlo. 
            div(data-aos="fade-left")
              h3 Tasa de quejas no resueltas
              p Ayuda a optimizar los recursos y  ofrecer un horario flexible para la  atención al cliente.
            div(data-aos="fade-right")
              h3 Tiempo para solucionar quejas
              p Permite mejorar los tiempos de  atención al cliente y aumenta la  posibilidad de mantenerlos fieles a  la empresa.
            div(data-aos="fade-left")
              h3 Tasa de conversión
              p Ayuda a descubrir la probabilidad  de que un cliente compre de  nuevo, renueve el contrato, llene  un formulario, etc.
            div(data-aos="fade-right")
              h3 Indicador <em>Net Promoter Score</em>
              p Ofrece la posibilidad de conocer si el  cliente está satisfecho con tu servicio  y recomendará la empresa con  alguien más.
            div(data-aos="fade-left")
              h3 Tasa de retención de clientes
              p Ayuda a conocer si los clientes  se encuentran contentos con un servicio y si se mantendrán fieles  a la marca.
            div(data-aos="fade-right")
              h3 Tasa de desempeño de  los empleados
              p Permite medir la productividad de los  empleados en cuanto a la solución de  problemas y servicio al cliente.
    
    p.mb-5 Estas son algunas áreas relacionadas en la siguiente tabla y que están comprometidas directamente con el servicio al cliente y que deben ser medidas y evaluadas de manera periódica, especialmente todo lo relacionado con la logística de servicio al cliente.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Servicio al cliente

    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Indicador
            th Descripción
            th Fórmula
            th Impacto (comentarios)
        tbody
          tr
            td Nivel de cumplimiento entregas a clientes.
            td Consiste en calcular el porcentaje real de las entregas oportunas y efectivas a los clientes.
            td.text-center Total de pedidos no entregados a tiempo.
              hr
              p.text-center Total de pedidos despachados.
            td Sirve para controlar los errores que se presentan en la empresa y que no permiten entregar los pedidos a los clientes. Sin duda, esta situación impacta fuertemente al servicio al cliente y el recaudo de la cartera.
          tr
            td Calidad de la facturación.
            td Número y porcentaje de facturas con error por cliente, y agregación de los mismos.
            td.text-center Facturas emitidas con errores.
              hr
              p.text-center Total de facturas emitidas.
            td Generación de retrasos en los cobros e imagen de mal servicio al cliente, con la consiguiente pérdida de ventas.
          tr
            td Causales de notas crédito.
            td Consiste en calcular el porcentaje real de las facturas con problemas.
            td.text-center Total notas crédito.
              hr
              p.text-center Total de facturas generadas.  
            td Sirve para controlar los errores que se presentan en la empresa por errores en la generación de la facturación de la empresa y que inciden negativamente en las finanzas y la reputación de la misma.
          tr
            td Pendientes por facturar.
            td Consiste en calcular el número de pedidos no facturados dentro del total de facturas.
            td.text-center Total pedidos pendientes por facturar.
              hr
              p.text-center Total pedidos facturados.  
            td Se utiliza para medir el impacto del valor de los pendientes por facturar y su incidencia en las finanzas de la empresa.

    p En la tabla anterior se ven ejemplos de indicadores de gestión de servicio al cliente con su respectiva descripción técnica, de igual forma es importante resaltar que varían los indicadores (KPI) que se aplican o se construyen dependiendo el tipo de empresa, industrial, comercial, servicios y pública. 
    p Los indicadores de gestión aplicados al desarrollo de los procesos logísticos son los de la mayor importancia, porque están relacionados de la mano con el servicio al cliente, y el mejoramiento continuo de los procesos solo es posible si se tiene una métrica o medición continua y exhaustiva en cada eslabón de la cadena.
    p.mb-5 A continuación, se relaciona la estructura técnica que se debe tener en cuenta al momento de elaborarse los indicadores de gestión (KPI):

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")  
        ol.lista-ol
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 1
            span <b>Nombre:</b> 
              | el nombre que se va a dar al indicador dependiendo la actividad a medir.
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 2
            span <b>Objetivo del indicador:</b> 
              | con qué objetivo se plantea el indicador.
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 3
            span <b>Forma de cálculo del indicador:</b> 
              | la fórmula para calcular los resultados del indicador.
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 4
            span <b>Periodicidad:</b> 
              | el periodo de tiempo que se toma para medir el indicador.
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 5
            span <b>Responsable:</b> 
              | todo indicador debe tener un responsable.
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 6
            | <b>Área que recibe el indicador.</b>
          li.margin-b 
            .lista-ol--cuadro__vineta.color_2
              span 7
            span <b>Impacto:</b> 
              | se mide el resultado del mismo y el impacto que tiene sobre las áreas que se le aplican.
      .col-12.col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/t3-31.svg" alt="Adornos flotantes")

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Reporte de los KPI 
    
    .row.mb-5
      .col-12.col-lg-4(data-aos="fade-right")
        figure.mb-5
          img(src='@/assets/curso/tema3/t3-32.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        p Estos reportes e informes de gestión basados en los indicadores de gestión, deben centrarse en las estrategias de valor que se han diseñado para la satisfacción del cliente y en las áreas organizacionales comprometidas en la atención, colaboración con el cliente y oportunidades de negocio. Los reportes o informes inherentes al desempeño de las áreas se deben presentar por cada uno de los responsables con su respectivo análisis de los resultados arrojados; pero antes de lo anterior es necesario establecer los KPI en cada área o actividad.
        p Estos se presentan de acuerdo con la necesidad y periodicidad de las organizaciones de medir sus procesos, cuando se construye un indicador de gestión en el mismo se indican los periodos de tiempo de la medición y reporte de los mismos.
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span Relación de informes o reportes que se deben presentar de los indicadores de gestión en servicio al cliente

    .tabla-b.color-acento-contenido.mb-5
      .tabla-b__header
        h5 Informes perspectiva de los clientes
      table
        caption Nota. Tomada de Revista Española de Financiación y Contabilidad (2005)
        tr.bgr_3
          th Informe 
          th Plazo
          th Destinatario
          td <strong>Característica</strong>
        tr.bgr_4.text-bold.text-center Informes sobre oportunidad de atención
        tr.bgr_3
          td Propuestas solicitadas por clientes.
          td Semanal.
          td Producción, ventas y dirección.
          td De la semana y acumulado.
        tr.bgr_4
          td Propuestas adjudicadas.
          td Semanal.
          td Producción, ventas y dirección.
          td De la semana y acumulado.
        tr.bgr_3
          td Plazo despacho propuestas adjudicadas.
          td Semanal.
          td Producción, ventas y dirección.
          td De la semana y acumulado.
        tr.bgr_4
          td Propuestas, pérdidas y causas.
          td Semanal.
          td Producción, ventas y dirección.
          td De la semana y acumulado. 
        tr.bgr_3
          td Precios de ventas por clientes.
          td Mensual. 
          td Producción, ventas y dirección.
          td Comparativo mensual y anual.
        tr.bgr_4.text-bold Informes sobre colaboración con cliente
        tr.bgr_3
          td Nivel de conectividad e información compartida.
          td Mensual. 
          td Producción, ventas, contabilidad y dirección.
          td Por cliente.
    
    P Una vez que se haya medido un indicador clave de rendimiento, es posible presentar su progreso en un informe de KPI. Esto suele ser útil para que los jefes de proyecto, jefes de equipo, gerentes y supervisores lo comuniquen a la dirección de la empresa, a los jefes de departamento o a otras partes interesadas.
    P.mb-5 Hay tres categorías principales de informes de KPI que se pueden crear en función de la información que necesita el público y de sus objetivos:

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        .bgr_8.p-5.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema3/t3-33.svg', alt='Texto que describa la imagen')
          h4.text-center Informe analítico
          p.m-0.text-center Detalla el KPI y trabaja para explicar qué fue lo que más impactó en sus resultados. Se pueden incluir datos históricos de los KPI para su comparación.
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        .bgr_9.p-5.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema3/t3-33.svg', alt='Texto que describa la imagen')
          h4.text-center Informe operativo
          p.text-center Proporciona datos sobre cómo los KPI miden las operaciones diarias de una organización para que la dirección pueda tomar decisiones bien informadas.
      .col-12.col-lg-4(data-aos="fade-left")
        .bgr_10.p-5.h-100
          figure.justify-center.mb-3
            img.img120.tranform_1(src='@/assets/curso/tema3/t3-33.svg', alt='Texto que describa la imagen')
          h4.text-center Informe estratégico
          p.m-0.text-center Refleja la salud de la organización y su progreso para que las partes interesadas puedan determinar si la empresa está cumpliendo los objetivos.
    .bg_grad-11.mb-5
      .row.justify-content-center
        .col-12.col-lg-3
          figure
              img(src='@/assets/curso/tema3/t3-34.svg', alt='Texto que describa la imagen')
        .col-12.col-lg-6.p-5.p-lg-0.margin-t
          h3 ¿Qué incluir en un 
            span.color informe de KPI?
          p Aunque el informe debe redactarse para responder a las necesidades de atención al cliente de forma que refleje adecuadamente sus objetivos o proyectos, hay algunos datos clave que puede ser útil incluir.

    p.mb-5 A continuación se presentan algunos ejemplos de información clave que se podría incluir en el informe de KPI:

    .row.mb-5.justify-center
      .col-12.col-lg-10
        .tarjeta.bg_grad-05.p-4.mb-5(data-aos="zoom-in-up")
          SlyderA
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-35.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Meta
                  p Identifique claramente qué objetivo está evaluando el KPI.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-36.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Métrica
                  p Indique el indicador clave de rendimiento cuantificable, relevante y procesable que está utilizando para la medición.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-37.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Justificación
                  p Explique por qué usted o su equipo han elegido este KPI y cómo los datos resultantes contribuyen al éxito de la empresa.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-38.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Frecuencia
                  p Indique con qué frecuencia ha medido su indicador clave de rendimiento y con qué frecuencia lo reexaminará.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-39.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Fuente
                  p Identifique dónde recopiló los datos y considere la posibilidad de compartir una fórmula para calcularlos.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-40.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Material visual
                  p Utilice un cuadro, una tabla o una gráfica para facilitar la comprensión. Si procede, compárelo con los anteriores visuales del mismo tipo para hacer un seguimiento del progreso a lo largo del tiempo.
            .row.p-5
              .col-md-3.mb-4.mb-md-0
                figure.bgr_12.p-3
                  img.img200(src='@/assets/curso/tema3/t3-41.svg', alt='Texto que describa la imagen')
              .col-md-9.align-items-center
                div
                  h4 Comentarios 
                  p Aquí puedes añadir brevemente cualquier otra información relevante o interpretación de las métricas obtenidas.

</template>

<script>
export default {
  name: 'Tema3',
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
