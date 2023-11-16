<template lang="pug">
div.home
  full-header
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import FullHeader from './sections/fullHeader/FullHeader.vue'

@Component({
	components: {
		FullHeader,
	},
})
export default class HomeView extends Vue {
}
</script>

<style lang="sass" scoped>
</style>