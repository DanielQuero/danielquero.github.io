<template lang="pug">
wave-section(:showBottomSvg="false" topSvgId="contact-me")
  section.contact-me-section.container.centered(
    v-motion
    :initial="{ opacity: 0, y: 50, transition: { delay: 200, duration: 500 } }"
    :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
    style="margin-top: 20px; margin-bottom: 0px; font-size: 18px;"
  )
    h1.section-title Contact me

    #contact-me-form.centered
      input(name="name" v-model="emailContent.name" placeholder="Name")
      input(name="mail" v-model="emailContent.contactMail" placeholder="Contact email")
      textarea(name="message" v-model="emailContent.message" placeholder="Message")
      a.fake-button.submit-button(:href="`mailto:danielquero95@hotmail.com?subject=${mailSubject}&body=${emailContent.message}`") Enviar
</template>

<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import WaveSection from '@/ui/components/waveSection/WaveSection.vue'

@Component({
  components: {
    WaveSection,
  },
})
export default class MovieDetailView extends Vue {
  emailContent = {
    name: '',
    contactMail: '',
    message: '',
  }


  get mailSubject() {
    return 'Contacted from danielquero.github.io (' + this.emailContent.name + ' - ' + this.emailContent.contactMail + ')'
  }
}
</script>

<style lang="sass" scoped>
.contact-me-section
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  #contact-me-form
    max-width: 600px
    text-align: center
    .submit-button
      margin-top: 60px
      padding: 17px
      width: 270px !important
      font-size: 25px
</style>