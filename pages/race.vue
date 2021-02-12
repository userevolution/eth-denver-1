<template>
  <div class="grid" style="height: 100vh !important">
    <vs-row justify="center" style="padding: 8rem 8rem 2rem !important">
      <vs-col :w="7" style="padding: 40px">
        <div class="play-container">
          <div
            id="p5Canvas"
            class="d-flex justify-content-center"
            style="padding: 0.5rem 0 0"
          ></div>
        </div>
      </vs-col>
      <vs-col :w="4" style="padding: 40px">
        <div class="play-container" style="padding: 3rem 3rem 4rem">
          <h1 style="text-align: center; margin-bottom: 4rem">Leaderboard</h1>
          <transition-group
            name="flip-list"
            tag="ul"
            style="
              list-style-type: none;
              padding-inline-start: 0;
              padding: 0 20px 0;
            "
          >
            <li v-for="x in leaderboard" :key="x.name" class="leaderboard-item">
              <vs-row justify="space-around">
                <vs-col :w="2">
                  <vs-avatar
                    style="margin-top: -0.27rem"
                    size="40"
                    color="rgba(40,40,40,0.1)"
                  >
                    <img
                      :src="'img/unicorns/' + x.name.toLowerCase() + '.png'"
                      alt=""
                    />
                  </vs-avatar>
                </vs-col>
                <vs-col :w="8">
                  <h3 style="font-size: 20px">
                    {{ x.pos }} &nbsp;:&nbsp; {{ x.name }}
                  </h3>
                </vs-col>
              </vs-row>
            </li>
          </transition-group>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import p5 from 'p5'
// eslint-disable-next-line no-unused-vars
class Sprite {
  constructor(animation, x, y, speed, ob) {
    this.x = x
    this.y = y
    this.animation = animation
    this.w = this.animation.width
    this.speed = speed
    this.index = 0
    this.ob = ob
  }

  show() {
    this.ob.image(this.animation, this.x, this.y)
  }

  animate() {
    this.index += this.speed
    this.x += this.speed * 15

    if (this.x > this.ob.width) {
      this.x = -this.w
    }
  }
}
export default {
  name: 'History',
  data: () => ({
    animate: true,
    names: ['Rainbow', 'Eclipse', 'Sparkles', 'Bubbles', 'Daydream'],
    pos: ['1st', '2nd', '3rd', '4rth', '5th'],
    leaderboard: null,
  }),
  mounted() {
    this.leaderboard = []
    for (let x = 0; x < 5; x++) {
      this.leaderboard.push({
        name: this.names[x],
        pos: '',
      })
    }
    function shuffle(array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
    this.leaderboard = shuffle(this.leaderboard)

    for (let x = 0; x < 5; x++) {
      this.leaderboard[x].pos = this.pos[x]
    }
    const vm = this
    const script = function (ob) {
      const images = []
      const unicorns = []
      // eslint-disable-next-line no-unused-vars
      const x = 0
      // eslint-disable-next-line no-unused-vars
      const y = 0
      // eslint-disable-next-line no-unused-vars
      const dim = 80.0
      ob.preload = (_) => {
        images.push(ob.loadImage('img/unicorns/bubbles.png'))
        images.push(ob.loadImage('img/unicorns/daydream.png'))
        images.push(ob.loadImage('img/unicorns/eclipse.png'))
        images.push(ob.loadImage('img/unicorns/rainbow.png'))
        images.push(ob.loadImage('img/unicorns/sparkles.png'))
      }
      // NOTE: Set up is here
      ob.setup = (_) => {
        const canvas = ob.createCanvas(880, 640)
        canvas.parent('p5Canvas')
        // p5.ellipse(p5.width / 2, p5.height / 2, 500, 500)
        ob.noStroke()
        for (let i = 0; i < 5; i++) {
          unicorns.push(
            new Sprite(images[i], 0, i * 85, ob.random(0.05, 0.15), ob)
          )
        }
      }
      // NOTE: Draw is here
      ob.draw = (_) => {
        if (vm.animate) {
          ob.clear()
          // const y = 0
          for (let i = 0; i < 5; i++) {
            for (const unicorn of unicorns) {
              unicorn.show()
              unicorn.animate()
            }
          }
        }
      }
    }
    // eslint-disable-next-line no-unused-vars,new-cap
    const sketchInstance = new p5(script)
    setTimeout(() => {
      vm.animate = false
    }, 6500)
    setInterval(() => {
      let data = vm.leaderboard
      vm.leaderboard = null
      data = shuffle(data)
      for (let x = 0; x < 5; x++) {
        data[x].pos = vm.pos[x]
      }
      vm.leaderboard = data
    }, 2800)
  },
}
</script>

<style scoped>
.li {
  display: inline;
}
.flip-list-move {
  transition: transform 1.5s ease;
}
.play-container {
  height: 68vh;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.leaderboard-item {
  padding: 0.9rem 2.5rem 1rem 0;
  height: 6.5vh;
  margin-bottom: 30px;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
