<template lang="pug">
//- wave-section
section.container(
  v-motion
  :initial="{ opacity: 0, y: 50, transition: { delay: 200, duration: 500 } }"
  :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
  style="margin-top: 30px; margin-bottom: 80px; font-size: 18px;"
)
  h1.section-title About me

  .about-me
    .text
      p Front-End Developer with over 5 years of experience. I am deeply passionate about staying at the forefront of the latest trends and techniques in my field. My extensive knowledge of Javascript, particularly in Vue JS, has allowed me to take on a diverse range of projects, from simple landing pages to complex applications with hexagonal architecture.
      p I am committed to delivering high-quality results and enjoy collaborating with others to solve challenging problems. In addition to my strong leadership skills, I possess a proactive approach to problem-solving and continuously strive to improve my skills.
      p
        | Click on the image to check out my CV and feel free to&nbsp;
        a(@click="scrollToEndOfPage") contact me
        | .
    .cv
      a(class="link-to-cv" target="_blanc" href="/files/Daniel Quero CV (EN).pdf")
        img(:src="`/images/cv/DQ_cv_en.jpg`")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import WaveSection from '@/ui/components/waveSection/WaveSection.vue'

@Component({
  components: {
    WaveSection,
  },
})
export default class AboutMe extends Vue {
  scrollToEndOfPage() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="sass" scoped>
.about-me
  display: flex
  flex-wrap: wrap
  align-items: center
  .text
    flex: 1
    margin-bottom: 40px
  .cv
    text-align: center
    flex: 1
    img
      max-width: 300px
</style>