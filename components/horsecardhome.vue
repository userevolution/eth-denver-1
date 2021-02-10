<template>
  <div class="card-wrapper" style="margin-top: 6rem !important">
    <div class="clash-card barbarian">
      <div class="clash-card__image clash-card__image--barbarian">
        <img
          src="img/unicorns/eclipse.png"
          alt="barbarian"
          style="max-width: 400px !important"
        />
      </div>
      <div class="clash-card__level clash-card__level--barbarian">Level 4</div>
      <div class="clash-card__unit-name">The Barbarian</div>
      <div class="clash-card__unit-description">
        The Barbarian is a kilt-clad Scottish warrior with an angry,
        battle-ready expression, hungry for destruction. He has Killer yellow
        horseshoe mustache.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorseCard',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-wrapper {
  padding-top: 40px;
  padding-bottom: 40px;
}
.card-wrapper:focus {
  outline: 0;
}
.clash-card {
  width: 290px;
  display: inline-block;
  margin: auto;
  position: relative;
  text-align: center;
  z-index: 9999;
  color: white;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.clash-card__image {
  position: relative;
  height: 230px;
  margin-bottom: 35px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.clash-card__image--barbarian {
  background: rgba(29, 24, 24, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.clash-card__image--barbarian img {
  width: 350px;
  position: absolute;
  top: -90px;
  left: -58px;
}

.clash-card__image--archer {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg');
}
.clash-card__image--archer img {
  width: 400px;
  position: absolute;
  top: -34px;
  left: -37px;
}

.clash-card__image--giant {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg');
}
.clash-card__image--giant img {
  width: 340px;
  position: absolute;
  top: -30px;
  left: -25px;
}

.clash-card__image--goblin {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg');
}
.clash-card__image--goblin img {
  width: 370px;
  position: absolute;
  top: -21px;
  left: -37px;
}

.clash-card__image--wizard {
  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg');
}
.clash-card__image--wizard img {
  width: 345px;
  position: absolute;
  top: -28px;
  left: -10px;
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

.clash-card__level--archer {
  color: white;
}

.clash-card__level--giant {
  color: white;
}

.clash-card__level--goblin {
  color: white;
}

.clash-card__level--wizard {
  color: white;
}

.clash-card__unit-name {
  font-size: 26px;
  color: white;
  font-weight: 900;
  margin-bottom: 5px;
}

.clash-card__unit-description {
  padding: 20px;
  margin-bottom: 10px;
}

.clash-card__unit-stats--barbarian {
  background: #ec9b3b;
}
.clash-card__unit-stats--barbarian .one-third {
  /*border-right: 1px solid #bd7c2f;*/
  border-right: 1px solid rgba(255, 255, 255, 0.18);
}

.clash-card__unit-stats--archer {
  background: #ee5487;
}
.clash-card__unit-stats--archer .one-third {
  border-right: 1px solid #d04976;
}

.clash-card__unit-stats--giant {
  background: #f6901a;
}
.clash-card__unit-stats--giant .one-third {
  border-right: 1px solid #de7b09;
}

.clash-card__unit-stats--goblin {
  background: #82bb30;
}
.clash-card__unit-stats--goblin .one-third {
  border-right: 1px solid #71a32a;
}

.clash-card__unit-stats--wizard {
  background: #4facff;
}
.clash-card__unit-stats--wizard .one-third {
  border-right: 1px solid #309eff;
}

.clash-card__unit-stats {
  color: white;
  font-weight: 700;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  background: rgba(29, 24, 24, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
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
