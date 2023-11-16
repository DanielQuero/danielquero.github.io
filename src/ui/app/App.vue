<template lang="pug">
main
  RouterView
footer
  .container.footer-container
    .extra &copy; {{ year }} Daniel Quero
    .social-box
      a(target="_blanc" href="https://es.linkedin.com/in/danielquero" class="social-link")
        svg(version="1.1" role="presentation" width="27.428571428571427" height="32" viewBox="0 0 1536 1792" class="fa-icon" style="font-size: 2em;")
          path(d="M349 625v991h-330v-991h330zM370 319q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zM1536 1048v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z")
      a.social-link(target="_blanc" href="https://github.com/DanielQuero")
        svg(version="1.1" role="presentation" width="27.428571428571427" height="32" viewBox="0 0 1536 1792" class="fa-icon" style="font-size: 2em;")
          path(d="M768 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 0.5-76.5t0.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 0.5 88.5t0.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zM291 1231q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zM322 1265q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zM352 1310q9-7 0-19-8-13-17-6-9 5 0 18t17 7zM394 1352q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zM451 1377q3-11-13-16-15-4-19 7t13 15q15 6 19-6zM514 1382q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zM572 1372q-2-11-18-9-16 3-14 15t18 8 14-14z")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component
export default class App extends Vue {
  year = (new Date()).getFullYear()
}
</script>

<style lang="sass">
footer
  background: #042544
  color: var(--text-color-altered)
  min-height: 80px
  font-size: 20px !important
  .footer-container
    display: flex
    align-items: center
    justify-content: space-between

  .social-link
    color: #888
    transition-duration: .4s
    font-size: 35px !important
    margin: 0px 5px

    svg
      fill: var(--text-color-altered)
      transition: .3s
      &:hover
        fill: var(--accent-color)

    .fa-icon
      max-width: 4vmin
      min-width: 20px

  .social-link:hover
    color: #CCC
    transition-duration: .4s
</style>