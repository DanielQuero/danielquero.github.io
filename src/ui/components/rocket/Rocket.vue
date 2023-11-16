<template lang="pug">
a#rocket(
  @click="scrollToTop",
  :class="{ launchrocket: isRocketLaunched, showrocket: isRocketVisible }"
)
  i(:class="{ 'animated-rocket': isRocketLaunched }")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'

@Component
export default class Rocket extends Vue {
  isRocketLaunched = false
  isRocketVisible = false

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll() {
    if (window.pageYOffset < window.innerHeight / 5) {
      this.hideRocket()
    } else {
      this.showRocket()
    }
  }
  hideRocket() {
    this.isRocketVisible = false
  }
  showRocket() {
    this.isRocketVisible = true
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    this.isRocketLaunched = true
    setTimeout(() => {
      this.isRocketLaunched = false
      this.isRocketVisible = false
    }, 800)
  }
}
</script>

<style scoped lang="sass">
#rocket
  position: fixed
  bottom: 50px
  z-index: 7
  visibility: hidden
  width: 26px
  height: 48px
  right: 25px
  background: url(/images/rocket/Ask.png) no-repeat 50% 0
  opacity: 0
  cursor: pointer
  transition: visibility 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335), opacity 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335), transform 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335)
  i
    display: block
    margin-top: 48px
    height: 14px
    background: url(/images/rocket/rocket.png) no-repeat 50% -48px
    opacity: 0.5
    transition: transform 0.2s
    transform-origin: 50% 0
  &:hover
    background-position: 50% -62px
    i
      background-position: 50% 100%
      animation: flaming 0.7s infinite
  &.showrocket
    visibility: visible
    opacity: 1
  &.launchrocket
    background-position: 50% -62px
    opacity: 0
    transform: translateY(-800px)
    pointer-events: none
    i
      background-position: 50% 100%
      transform: scale(1.4, 3.2)
</style>
