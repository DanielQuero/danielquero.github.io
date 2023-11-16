<template lang="pug">
wave-section
  section.container(
    v-motion
    :initial="{ opacity: 0, y: 50, transition: { delay: 200, duration: 500 } }"
    :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
    style="margin-top: 60px; margin-bottom: 60px; font-size: 18px;"
  )
    h1.section-title Projects
    .projects-list
      .project-card(v-for="project in projects")
        .image-box
          img(:src="`/images/projects/${project.image}`")
        .info-box
          .title {{ project.title }}
          .tools
            .tool(v-for="tool in project.mainTools")
          .description {{ project.description.en }}
        .links
          .source-code
            a.social-link(target="_blanc" :href="project.codeSource")
              svg.code-source-logo(version="1.1" role="presentation" width="27.428571428571427" height="32" viewBox="0 0 1536 1792" class="fa-icon" style="font-size: 2em;")
                path(d="M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z")
          a.fake-button(:href="project.demoUrl" target="_blank") Demo
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import WaveSection from '@/ui/components/waveSection/WaveSection.vue'

@Component({
  components: {
    WaveSection,
  },
})
export default class Projects extends Vue {
  projects = [
    {
      title: 'Movie Showtimes',
      subtitle: '',
      description: {
        es: 'Cartelera',
        en: 'Built following hexagonal architecture, "Movie Showtimes" is a peek into my coding skills. It fetches the latest movie data from The MovieDB API and showed in a clean and modern look.',
      },
      image: 'movie-showtimes_desktop.png',
      mainTools: [
        { name: 'Vue', icon: 'vue'},
        { name: 'Hexagonal architecture', icon: 'hex_architecture'},
        { name: 'typescript', icon: 'typescript'},
      ],
      demoUrl: 'https://danielquero.github.io/movie-showtimes',
      codeSource: 'https://github.com/DanielQuero/movie-showtimes',
    },
    {
      title: 'Portfolio',
      subtitle: '',
      description: {
        es: '',
        en: `My portfolio site, powered by Vue 3, is where I showcase my work. Take a look at what I've been up to!`,
      },
      image: 'portfolio_desktop.png',
      mainTools: [
        { name: 'Vue', icon: 'vue'},
        { name: 'typescript', icon: 'typescript'},
      ],
      demoUrl: 'https://danielquero.github.io/danielquero.github.io',
      codeSource: 'https://github.com/DanielQuero/danielquero.github.io',
    },
  ]
}
</script>

<style lang="sass" scoped>
.projects-list
  display: flex
  align-items: stretch
  justify-content: center
  flex-wrap: wrap
  gap: 30px
  .project-card
    flex: 1
    display: flex
    flex-direction: column
    min-width: 250px
    min-height: 70px
    padding: 10px
    border-radius: 10px
    .image-box
      flex: 3
      img
        border-radius: 10px
        width: 100%
    .info-box
      flex: 2
      .title
        font-weight: bold
        margin-bottom: 15px
        font-size: 23px
      .description
        text-wrap: balance
    .links
      display: flex
      align-items: center
      justify-content: space-between
      .source-code
        .code-source-logo
          fill: var(--text-color-altered)
          transition: .3s
          &:hover
            fill: #000
</style>