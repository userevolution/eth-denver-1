<template>
  <div>
    <Header />
    <Nuxt
      style="background-image: url('./img/dots.png'); background-size: contain"
    />
  </div>
</template>
<script>
import Web3 from 'web3'
// eslint-disable-next-line import/default
import { Biconomy } from '@biconomy/mexa'
import Header from '../components/Header'
const { config } = require('../assets/config')
export default {
  components: {
    Header,
  },
  watch: {
    '$store.state.user'() {
      const loginObj = this.$store.state.user
      if (loginObj) {
        const ADDRESS = loginObj.publicAddress
        const PRIVATE_KEY = loginObj.privateKey
        console.log({ ADDRESS, PRIVATE_KEY })
        const biconomy = new Biconomy(
          new Web3.providers.HttpProvider(
            'https://goerli.infura.io/v3/5d14f712b3c5477fb7bd4e2452eb31aa'
          ),
          {
            apiKey: 'tsk83j66r.667e64e9-447b-4363-b6ca-04e52f8851f6',
            debug: true,
          }
        )
        const web3 = new Web3(biconomy)
        biconomy
          // eslint-disable-next-line require-await
          .onEvent(biconomy.READY, async () => {
            // Initialize your dapp here like getting user accounts etc
            const contract = new web3.eth.Contract(
              config.contract.abi.Unirace,
              config.contract.address
            )
            window.contract = contract
          })
          .onEvent(biconomy.ERROR, (error, message) => {
            // Handle error while initializing mexa
            console.log(error)
          })
        window.web3 = web3
        // this.$store.commit('updateWeb3', web3)
      }
    },
  },
  mounted() {
    const loginObj = this.$store.state.user
    if (loginObj) {
      const ADDRESS = loginObj.publicAddress
      const PRIVATE_KEY = loginObj.privateKey
      console.log({ ADDRESS, PRIVATE_KEY })
      const biconomy = new Biconomy(
        new Web3.providers.HttpProvider(
          'https://goerli.infura.io/v3/5d14f712b3c5477fb7bd4e2452eb31aa'
        ),
        {
          apiKey: 'tsk83j66r.667e64e9-447b-4363-b6ca-04e52f8851f6',
          debug: true,
        }
      )
      const web3 = new Web3(biconomy)
      biconomy
        // eslint-disable-next-line require-await
        .onEvent(biconomy.READY, async () => {
          // Initialize your dapp here like getting user accounts etc
          const contract = new web3.eth.Contract(
            config.contract.abi.Unirace,
            config.contract.address
          )
          console.log('contract')
          console.log(contract)
          console.log('contract')
        })
        .onEvent(biconomy.ERROR, (error, message) => {
          // Handle error while initializing mexa
          console.log(error)
        })
      window.web3 = web3
      // this.$store.commit('updateWeb3', web3)
    }
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
