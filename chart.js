export default {
  create(options) {
    const { values, colors, radius, hole, stroke } = options
    this.canvas = document.createElement('canvas')
    this.canvas.width = radius * 2
    this.canvas.height = radius * 2
    this.ctx = this.canvas.getContext('2d')
    this.radius = radius
    let startAngle = 0
    values.forEach((value, index) => {
      const sliceAngle = 2 * Math.PI * value / Object.values(values).reduce((acc, curr) => acc + curr, 0)
      this.pieSlice(radius, startAngle, startAngle + sliceAngle, colors[index%colors.length])
      if (stroke) {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = stroke
        this.ctx.stroke()
      }
      startAngle += sliceAngle
    })
    this.pieSlice((hole ?? 0) * radius, 0, 2 * Math.PI, 'white')
    return this.canvas
  },
  pieSlice(radius, startAngle, endAngle, color) {
    const centerX = this.radius
    const centerY = this.radius
    this.ctx.fillStyle = color
    this.ctx.beginPath()
    this.ctx.moveTo(centerX, centerY)
    this.ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    this.ctx.closePath()
    this.ctx.fill()
  }
}