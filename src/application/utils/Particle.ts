export default class Particle {
	x: number
	y: number
	speed: number
	directionAngle: number
	color: string
	radius: number
	vector: { x: number; y: number }

	constructor() {
		this.x = Math.random() * window.innerWidth
		this.y = Math.random() * window.innerHeight
		this.speed = 0.3 + Math.random() * 0.3
		this.directionAngle = Math.floor(Math.random() * 360)
		this.color = 'rgb(140,140,140)'
		this.radius = 2 + Math.random() * 2
		this.vector = {
			x: Math.cos(this.directionAngle) * this.speed,
			y: Math.sin(this.directionAngle) * this.speed,
		}
	}

	border() {
		if (this.x >= window.innerWidth || this.x <= 0) {
			this.vector.x *= -1
		}
		if (this.y >= window.innerHeight || this.y <= 0) {
			this.vector.y *= -1
		}
		if (this.x > window.innerWidth) this.x = window.innerWidth
		if (this.y > window.innerHeight) this.y = window.innerHeight
		if (this.x < 0) this.x = 0
		if (this.y < 0) this.y = 0
	}

	update() {
		this.border()
		this.x += this.vector.x
		this.y += this.vector.y
	}

	draw(context: CanvasRenderingContext2D) {
		context.beginPath()
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
		context.closePath()
		context.fillStyle = this.color
		context.fill()
	}
}
