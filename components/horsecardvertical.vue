<template>
  <div class="card-wrapper">
    <div class="clash-card barbarian" style="min-height: 320px">
      <vs-row>
        <vs-col :w="6" class="desc-col">
          <div style="min-height: 240px">
            <div class="clash-card__level clash-card__level--barbarian">
              <vs-row style="padding-top: 25px">
                <vs-col :w="1"></vs-col>
                <vs-col :w="1">
                  <vs-avatar size="28" color="rgb(128,0,128)">
                    <i
                      class="tim-icons icon-single-02"
                      style="transform: scale(0.7)"
                    ></i>
                  </vs-avatar>
                </vs-col>
                <vs-col :w="3">
                  <h4 style="padding-top: 2px">
                    {{ data.slots.booked }}/{{ data.slots.total }}
                  </h4>
                </vs-col>
              </vs-row>
            </div>
            <div class="clash-card__unit-name">{{ data.name }}</div>
            <div class="clash-card__unit-description">
              <vs-row>
                <vs-col :w="6" style="padding-right: 10px">
                  <img :src="data.logo" />
                </vs-col>
                <vs-col :w="6">
                  <button class="btn btn-primary btn-round btn-sm" @click="bet">
                    Buy Ticket
                  </button>
                </vs-col>
              </vs-row>
            </div>
          </div>
          <div
            class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix"
          >
            <div class="one-third">
              <div class="stat">{{ data.stats.exp }}</div>
              <div class="stat-value">Experience</div>
            </div>

            <div class="one-third">
              <div class="stat">{{ data.stats.speed }}</div>
              <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
              <div class="stat">{{ data.stats.stamina }}</div>
              <div class="stat-value">Stamina</div>
            </div>
          </div>
        </vs-col>
        <vs-col :w="6">
          <div
            class="clash-card__image clash-card__image--barbarian"
            style="
              -webkit-transform: scaleX(-1);
              transform: scaleX(-1);
              min-height: 345px;
            "
          >
            <img
              :src="data.image"
              alt="unicorn"
              style="max-width: 400px !important"
            />
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorseCard',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  methods: {
    bet() {
      this.$emit('bet', this.data.id)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.desc-col {
  background: rgba(29, 24, 24, 0.05);
  box-shadow: 0 0px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.card-wrapper {
  padding-top: 40px;
  padding-bottom: 5px;
}
.card-wrapper:focus {
  outline: 0;
}
.clash-card {
  width: 560px;
  display: inline-block;
  margin: auto;
  position: relative;
  text-align: center;
  z-index: 9999;
  color: white;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 1px 1px 32px 12px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.clash-card__image {
  position: relative;
  height: 230px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.clash-card__image--barbarian {
  /*background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg');*/
  background: rgba(29, 24, 24, 0.08);
  box-shadow: -1px -1px 32px 0 rgba(31, 38, 135, 0.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0;
  border-radius: 0px;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
}
.clash-card__image--barbarian img {
  width: 400px;
  position: absolute;
  top: -65px;
  left: -60px;
}
.clash-card__level {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 3px;
}

.clash-card__level--barbarian {
  color: white;
}

.clash-card__unit-name {
  font-size: 30px;
  color: white;
  margin-left: -5px;
  font-weight: 900;
  margin-top: 30px;
}

.clash-card__unit-description {
  padding: 30px 20px 0;
  margin-top: 10px;
}

.clash-card__unit-stats--barbarian {
  background: #ec9b3b;
}
.clash-card__unit-stats--barbarian .one-third {
  /*border-right: 1px solid #bd7c2f;*/
  border-right: 1.5px solid rgba(0, 0, 0, 0.5);
}

.clash-card__unit-stats {
  color: white;
  font-weight: 700;
  border-bottom-left-radius: 14px;
  background: rgba(29, 24, 24, 0.05);
  box-shadow: -10px 10px 30px 4px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1.5px solid rgba(0, 0, 0, 0.5);
  border-right: 0.2px solid rgba(0, 0, 0, 0.5);
  border-bottom: 0;
}
.clash-card__unit-stats .one-third {
  width: 33%;
  float: left;
  padding: 20px 15px;
}
.clash-card__unit-stats sup {
  position: absolute;
  bottom: 4px;
  font-size: 45%;
  margin-left: 2px;
}
.clash-card__unit-stats .stat {
  position: relative;
  font-size: 24px;
  margin-bottom: 10px;
}
.clash-card__unit-stats .stat-value {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
}
.clash-card__unit-stats .no-border {
  border-right: none;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}
</style>
