<template lang="pug">
wave-section(:showTopSvg="false" bottomSvg="complex" bottomSvgId="about-me")
  #particles-box
    particles-canvas#canvas
    #header-content
      .title-box
        .logo-box
          img(src="@/ui/assets/logo_light.svg")
        .text
          h1
            span Daniel&nbsp
            span Quero
          h2.secondary-font-color
            span Front
            span.secondary-font-color -end&nbsp
            span Developer
      .see-more(@click="pageDown")
        svg.bounce.see-more-icon(aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24")
          path(d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round" stroke-linejoin="round")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import ParticlesCanvas from './particlesBackground/ParticlesCanvas.vue'
import WaveSection from '@/ui/components/waveSection/WaveSection.vue'

@Component({
  components: {
    WaveSection,
    ParticlesCanvas,
  }
})
export default class FullHeader extends Vue {
  pageDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="sass" scoped>
@import '@/ui/assets/styles/_breakpoints.sass'

#particles-box
  background: var(--main-color)
  min-height: 100vh
  #header-content
    position: absolute
    display: block
    top: 0
    left: 0
    z-index: -1
    min-height: 100%
    width: 100%
    z-index: 1
    color: #fff
    font-size: 5vmin
    display: flex
    align-items: center
    justify-content: space-between
    text-align: center
    flex-direction: column
    .title-box
      display: flex
      align-items: center
      justify-content: center
      flex-wrap: wrap
      margin-top: 35vh
      .logo-box
        width: 200px
      .text
        h1, h2
          opacity: 0.9
          margin: 0px
        h2
          font-size: 5.8vmin
    .see-more
      color: #FFF
      cursor: pointer
      .see-more-icon
        width: 70px

.bounce
  animation: bounce 2s infinite

@keyframes bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-15px)
  60%
    transform: translateY(-8px)

@media (max-width: $mobile-breakpoint)
  #particles-box
    #header-content
      .title-box
        margin-top: 26vh
        h1
          font-size: 13vmin
        h2
          font-size: 7.8vmin !important

</style>
