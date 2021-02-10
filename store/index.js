export const state = () => ({
  user: null,
  web3: null,
})

export const mutations = {
  updateUser(state, payload) {
    state.user = payload
  },
  updateWeb3(state, payload) {
    state.web3 = payload
  },
}
