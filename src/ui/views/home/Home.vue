<template lang="pug">
div.home
  full-header
  about-me
  projects
  skills
  contact-me

  rocket
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import FullHeader from './sections/fullHeader/FullHeader.vue'
import AboutMe from './sections/aboutMe/AboutMe.vue'
import Projects from './sections/projects/Projects.vue'
import Skills from './sections/skills/Skills.vue'
import ContactMe from './sections/contactMe/ContactMe.vue'
import Rocket from '@/ui/components/rocket/Rocket.vue'

@Component({
	components: {
		FullHeader,
		AboutMe,
		Projects,
		Skills,
		ContactMe,
		Rocket,
	},
})
export default class HomeView extends Vue {
}
</script>

<style lang="sass" scoped>
</style>