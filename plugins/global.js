export default (context, inject) => {
  const web3 = null
  inject('web3', web3)
  // For Nuxt <= 2.12, also add 👇
  context.$web3 = web3
}
