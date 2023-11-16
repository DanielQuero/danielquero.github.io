<template lang="pug">
div.home
  full-header
  about-me
  projects

  rocket
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import FullHeader from './sections/fullHeader/FullHeader.vue'
import AboutMe from './sections/aboutMe/AboutMe.vue'
import Projects from './sections/projects/Projects.vue'
import Rocket from '@/ui/components/rocket/Rocket.vue'

@Component({
	components: {
		FullHeader,
		AboutMe,
		Projects,
		Rocket,
	},
})
export default class HomeView extends Vue {
}
</script>

<style lang="sass" scoped>
</style>