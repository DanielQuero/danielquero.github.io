<template lang="pug">
section.container(
    v-motion
    :initial="{ opacity: 0, y: 50, transition: { delay: 200, duration: 500 } }"
    :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
    style="margin-top: 0px; margin-bottom: 100px; font-size: 18px;"
  )
  h1.section-title.primary-color Skills

  .skills-box
    .skill(v-for="(skill, index) in skills" :key="index")
      .xl-icon.flex.justify-center(v-if="skill.smallerIcon")
        img.lg-icon(:src="skill.icon")
      img.xl-icon(v-else :src="skill.icon")
      .title {{ skill.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component
export default class Skills extends Vue {
  skills = [
    { title: 'Vue', icon: '/images/skills/vue.svg' },
    { title: 'Hexagonal Architecture', icon: '/images/skills/hex_architecture.svg' },
    { title: 'Microfrontends', icon: '/images/skills/single-spa.svg', smallerIcon: true },
    { title: 'Git', icon: '/images/skills/git.svg' },
    { title: 'Typescript', icon: '/images/skills/typescript.svg' },
    { title: 'Javascript', icon: '/images/skills/javascript.svg' },
    { title: 'HTML', icon: '/images/skills/html.svg' },
    { title: 'CSS', icon: '/images/skills/css.svg' },
    { title: 'Sass', icon: '/images/skills/sass.svg' },
    { title: 'Pug', icon: '/images/skills/pug.svg' },
    { title: 'Leadership', icon: '/images/skills/leadership.svg' },
    { title: 'Teamwork', icon: '/images/skills/teamwork.svg' },
  ]
}
</script>

<style lang="sass" scoped>
@import '@/ui/assets/styles/_breakpoints.sass'

.skills-box
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  font-size: 16px
  gap: 15px
  .skill
    display: flex
    align-items: center
    min-width: 250px
    background: var(--card-color)
    min-height: 70px
    padding: 5px 10px
    border-radius: 10px
    .title
      margin-left: 7px

@media (max-width: $mobile-breakpoint)
  .skill
    flex: 1
</style>