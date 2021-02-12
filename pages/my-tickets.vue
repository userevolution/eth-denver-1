<template>
  <div
    class="grid"
    style="height: 100vh !important; padding-top: 6rem !important"
  >
    <div class="container">
      <h1 class="upcomming">My Tickets</h1>
      <div class="item">
        <div class="item-right">
          <img
            src="img/unicorns/rainbow.png"
            style="
              max-width: inherit !important;
              width: 10rem;
              margin-left: -3rem;
            "
          />
          <span class="up-border"></span>
          <span class="down-border"></span>
        </div>
        <!-- end item-right -->

        <div class="item-left">
          <p class="event">Fire race</p>
          <h2 class="title">Maticorn</h2>

          <div class="sce">
            <div class="icon">
              <i class="fa fa-table"></i>
            </div>
            <p>
              Monday 15th 2021 <br />
              15:20Pm
            </p>
          </div>

          <div class="fix"></div>
          <button class="tickets">Sell</button>
        </div>
        <!-- end item-right -->
      </div>
      <!-- end item -->
    </div>
  </div>
</template>
<script>
import ticketcard from '~/components/ticketcard'
export default {
  name: 'Tickets',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ticketcard,
  },
  data() {
    return {
      raceList: [
        {
          name: 'Maticorn',
          raceName: '',
          image: 'img/unicorns/rainbow.png',
          logo: 'img/matic-logo.png',
          id: '1',
          maticId: '1',
          stats: {
            exp: '20',
            speed: '28',
            stamina: '140',
          },
          slots: {
            booked: 4,
            total: 10,
          },
        },
        {
          name: 'Nearcorn',
          raceName: '',
          image: 'img/unicorns/eclipse.png',
          logo: 'img/matic-logo.png',
          id: '2',
          maticId: '1',
          stats: {
            exp: '15',
            speed: '25',
            stamina: '160',
          },
          slots: {
            booked: 2,
            total: 10,
          },
        },
      ],
    }
  },
}
</script>
<style scoped>
div.container {
  max-width: 1350px;
  margin: 0 auto;
  overflow: hidden;
}
.upcomming {
  font-size: 45px;
  text-transform: uppercase;
  /*border-left: 14px solid rgba(255, 235, 59, 0.78);*/
  padding-left: 12px;
  margin: 18px 8px;
  padding-bottom: 1.2rem;
}
.container .item {
  width: 48%;
  float: left;
  padding: 0 20px;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.57);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  overflow: hidden;
  margin: 10px;
}
.container .item-right,
.container .item-left {
  float: left;
  padding: 20px;
}
.container .item-right {
  padding: 79px 50px;
  margin-right: 20px;
  width: 25%;
  position: relative;
  height: 286px;
}
.container .item-right .up-border,
.container .item-right .down-border {
  padding: 14px 15px;
  background-color: #171941;
  border-radius: 50%;
  position: absolute;
}
.container .item-right .up-border {
  top: -8px;
  right: -35px;
}
.container .item-right .down-border {
  bottom: -13px;
  right: -35px;
}
.container .item-right .num {
  font-size: 60px;
  text-align: center;
  color: #111;
}
.container .item-right .day,
.container .item-left .event {
  color: #f0f0f0;
  font-size: 20px;
  margin-bottom: 9px;
}
.container .item-right .day {
  text-align: center;
  font-size: 25px;
}
.container .item-left {
  width: 71%;
  padding: 34px 0px 19px 46px;
  border-left: 3px dotted #999;
}
.container .item-left .title {
  color: #f0f0f0;
  font-size: 34px;
  margin-bottom: 28px;
}
.container .item-left .sce {
  margin-top: 5px;
  display: block;
}
.container .item-left .sce .icon,
.container .item-left .sce p,
.container .item-left .loc .icon,
.container .item-left .loc p {
  float: left;
  word-spacing: 5px;
  letter-spacing: 1px;
  color: #f0f0f0;
  margin-bottom: 10px;
}
.container .item-left .sce .icon,
.container .item-left .loc .icon {
  margin-right: 10px;
  font-size: 20px;
  color: #666;
}
.container .item-left .loc {
  display: block;
}
.fix {
  clear: both;
}
.container .item .tickets,
.booked,
.cancel {
  color: #fff;
  padding: 6px 14px;
  float: right;
  margin-top: 10px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}
.container .item .tickets {
  background: #777;
}
.container .item .booked {
  background: #3d71e9;
}
.container .item .cancel {
  background: #df5454;
}
.linethrough {
  text-decoration: line-through;
}
@media only screen and (max-width: 1150px) {
  .container .item {
    width: 100%;
    margin-right: 20px;
  }
  div.container {
    margin: 0 20px auto;
  }
}
</style>
