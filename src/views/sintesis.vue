<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En términos de gestión de requerimientos, los requisitos del proceso se refieren a uno de los cuatro tipos de requisitos del proyecto que se identifican así: determinar, recopilar, analizar y registrar. Estos, junto con los requisitos de negocio, producto y recursos, sirven de base para obtener, analizar, especificar y validar las necesidades y expectativas de las partes interesadas para una Atención integral del cliente.

    p.mb-5 La política de atención pluralista y diferencial está dirigida a poblaciones en condición de vulnerabilidad por razones económicas, sociales, étnicas, territoriales, de género y que son sujetas de especial protección por parte del Estado.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
