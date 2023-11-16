<template lang="pug">
canvas(ref="canvas")
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-facing-decorator'
import Particle from '@/application/utils/Particle'

@Component
export default class ParticlesCanvas extends Vue {
  @Ref('canvas') canvasRef!: HTMLCanvasElement

  private canvasContext!: CanvasRenderingContext2D | null
  private particles: Particle[] = []
  numberOfParticles = parseInt((window.innerWidth * window.innerHeight / 25000).toString()) + 10

  mounted() {
    this.canvasContext = this.canvasRef.getContext('2d')

    this.setupCanvas()
    this.setupParticles()

    this.loop()
  }

  private setupCanvas() {
    if (this.canvasContext) {
      this.canvasContext.canvas.width = window.innerWidth
      this.canvasContext.canvas.height = window.innerHeight
    }
  }

  private setupParticles() {
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle())
    }
  }

  private loop() {
    this.clearCanvas()

    this.updateParticles()
    this.renderParticles()

    requestAnimationFrame(this.loop)
  }

  private clearCanvas() {
    if (this.canvasContext) {
      this.canvasContext.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height)
    }
  }

  private updateParticles() {
    for (const particle of this.particles) {
      particle.update()
    }
  }

  private renderParticles() {
    if (this.canvasContext) {
      for (const particle of this.particles) {
        particle.draw(this.canvasContext)
        this.linkPoints(particle, this.particles)
      }
    }
  }

  private linkPoints(point1: Particle, hubs: Particle[]) {
    for (const hub of hubs) {
      const distance = Math.sqrt(Math.pow(hub.x - point1.x, 2) + Math.pow(hub.y - point1.y, 2))
      const opacity = 1 - distance / 200
      if (opacity > 0) {
        this.canvasContext!.lineWidth = 0.5
        this.canvasContext!.strokeStyle = `rgba(140, 140, 140, ${opacity})`
        this.canvasContext!.beginPath()
        this.canvasContext!.moveTo(point1.x, point1.y)
        this.canvasContext!.lineTo(hub.x, hub.y)
        this.canvasContext!.closePath()
        this.canvasContext!.stroke()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
