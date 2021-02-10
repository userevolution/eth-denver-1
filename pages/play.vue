<template>
  <div class="bg-play">
    <div class="grid play-container" style="min-height: inherit !important">
      <div
        class="alert alert-default play-main"
        role="alert"
        style="text-align: center; font-size: 35px"
      >
        Next Race Starts in : 4 days, 23:54
      </div>
      <vs-row justify="center">
        <vs-col
          v-for="unicorn in unicornList"
          :key="unicorn.id"
          :lg="4"
          :sm="6"
          :xs="12"
        >
          <horse-card-vertical
            style="transform: scale(0.85)"
            :data="unicorn"
            @bet="placeBet"
          />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HorseCardVertical from '@/components/horsecardvertical.vue'
const sigUtil = require('eth-sig-util')
const { config } = require('../assets/config')
const domainData = {
  name: 'Unirace',
  version: '1',
  chainId: 5,
  verifyingContract: config.contract.address,
}
const domainType = [
  { name: 'name', type: 'string' },
  { name: 'version', type: 'string' },
  { name: 'chainId', type: 'uint256' },
  { name: 'verifyingContract', type: 'address' },
]

const metaTransactionType = [
  { name: 'nonce', type: 'uint256' },
  { name: 'from', type: 'address' },
  { name: 'functionSignature', type: 'bytes' },
]
let ADDRESS = ''
let PRIVATE_KEY = ''
export default {
  name: 'Home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HorseCardVertical,
  },
  data() {
    return {
      unicornList: [
        {
          name: 'Rainbow',
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
          name: 'Eclipse',
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
        {
          name: 'Sparkles',
          image: 'img/unicorns/sparkles.png',
          logo: 'img/matic-logo.png',
          id: '3',
          maticId: '1',
          stats: {
            exp: '30',
            speed: '24',
            stamina: '190',
          },
          slots: {
            booked: 7,
            total: 10,
          },
        },
        {
          name: 'Bubbles',
          image: 'img/unicorns/bubbles.png',
          logo: 'img/matic-logo.png',
          id: '4',
          maticId: '1',
          stats: {
            exp: '12',
            speed: '23',
            stamina: '150',
          },
          slots: {
            booked: 3,
            total: 10,
          },
        },
        {
          name: 'Daydream',
          image: 'img/unicorns/daydream.png',
          logo: 'img/matic-logo.png',
          id: '5',
          maticId: '1',
          stats: {
            exp: '10',
            speed: '27',
            stamina: '180',
          },
          slots: {
            booked: 8,
            total: 10,
          },
        },
      ],
      raceIndex: 0,
      selectedUnicorn: 0,
    }
  },
  mounted() {
    PRIVATE_KEY = this.$store.state.user.privateKey
    ADDRESS = this.$store.state.user.publicAddress
  },
  methods: {
    placeBet(value) {
      this.inAppPurchase(this.raceIndex, value, '5000000000000000')
    },
    async inAppPurchase(raceIndex, horseIndex, amount) {
      const functionSignature = window.contract.methods
        .createBet(raceIndex, horseIndex, amount)
        .send({
          from: ADDRESS,
          value: amount,
        })
        .encodeABI()
      await this.init(functionSignature, 'createBet', horseIndex)
    },
    getSignatureParameters(signature) {
      if (!window.web3.utils.isHexStrict(signature)) {
        throw new Error(
          'Given value "'.concat(signature, '" is not a valid hexstring.')
        )
      }
      const r = signature.slice(0, 66)
      const s = '0x'.concat(signature.slice(66, 130))
      let v = '0x'.concat(signature.slice(130, 132))
      v = window.web3.utils.hexToNumber(v)
      if (![27, 28].includes(v)) v += 27
      return {
        r,
        s,
        v,
      }
    },
    async init(functionSignature, func, horseIndex) {
      const vm = this
      const result = await window.contract.methods
        .getNumberOfBetsOnRace(vm.raceIndex)
        .call({ from: ADDRESS })
      console.log(result)
      const nonce = await window.contract.methods.getNonce(ADDRESS).call()
      console.log(nonce)
      const message = {}
      message.nonce = parseInt(nonce)
      message.from = ADDRESS
      message.functionSignature = functionSignature

      const dataTosign = {
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: 'MetaTransaction',
        message,
      }

      console.log(dataTosign)

      const sig = sigUtil.signTypedMessage(
        Buffer.from(PRIVATE_KEY, 'hex'),
        { data: dataTosign },
        'V4'
      )
      console.log(sig)

      const { r, s, v } = vm.getSignatureParameters(sig)
      console.log(r, s, v)
      console.log(dataTosign)
      const recovered = sigUtil.recoverTypedSignature_v4({
        data: dataTosign,
        sig,
      })
      console.log(recovered)
      console.log(functionSignature)
      const gasLimit = await window.contract.methods
        .executeMetaTransaction(ADDRESS, func, r, s, v)
        .estimateGas({ from: ADDRESS })
      const gasPrice = await window.web3.eth.getGasPrice()
      console.log(gasLimit)
      console.log(gasPrice)

      // eslint-disable-next-line no-unused-vars
      const tx = await window.contract.methods
        .executeMetaTransaction(recovered, functionSignature, r, s, v)
        .send({
          from: recovered,
          gasPrice: window.web3.utils.toHex(gasPrice),
          gasLimit: window.web3.utils.toHex(gasLimit),
        })
        .once('confirmation', async (confirmation, receipt) => {
          // eslint-disable-next-line no-unused-vars
          const result = await window.contract.methods
            .getNumberOfBetsOnUnicorn(this.raceIndex, horseIndex)
            .call({ from: ADDRESS })
          // setData(result['0'])
          // setLoading(false)

          console.log(receipt)
        })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sacramento&display=swap');

body,
html {
  height: 100%;
}
.bg-play {
  background-image: url('../assets/img/bg-play.jpeg') !important;
  background-repeat: no-repeat;
  background-size: 100% !important;
  overflow: hidden;
}
.play-container {
  padding: 6.5rem 8rem 7rem;
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    /*     color: #fccaff;
        text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
          0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
      0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    /*     color: #fccaff;
        text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
          0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
      0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

.play-main {
  line-height: calc(35px + 1vh);
  /*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
    color: #fccaff; */
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
    0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: 'Sacramento', cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
  margin-left: 2.4rem !important;
  margin-right: 2.4rem !important;
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 1520px) {
  .play-container {
    padding: 8rem 12rem 7rem;
  }
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 1280px) {
  .play-container {
    padding: 8rem 5.5rem 7rem;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 780px) {
  .play-container {
    padding: 8rem 3rem 7rem;
  }
}
</style>
