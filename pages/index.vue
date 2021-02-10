<template>
  <div class="header header-3">
    <div class="page-header header-filter">
      <div class="content-center" style="padding-top: 11rem">
        <div class="row headercl headercl2">
          <div
            class="col-lg-5 col-md-8 ml-auto mr-auto positioned headercl2"
            style="
              text-align: left !important;
              top: 35rem !important;
              padding-left: 6rem;
            "
          >
            <h1 class="title">
              Integrated <br /><strong class="text-info"
                >Front marketing</strong
              >
            </h1>
            <p class="description">
              We aim high at being focused on building relationships with our
              clients and community. Using our creative gifts drives this
              foundation.
            </p>
            <div class="row row-input">
              <div class="col-sm-4 col-12">
                <button
                  type="submit"
                  class="btn btn-info btn-block"
                  @click="login"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-md-6 headercl2">
            <VueSlickCarousel
              class="center slider"
              v-bind="settings"
              style="top: 12rem !important"
            >
              <div>
                <horsecardhome />
              </div>
              <div>
                <horsecardhome />
              </div>
              <div>
                <horsecardhome />
              </div>
              <div>
                <horsecardhome />
              </div>
              <div>
                <horsecardhome />
              </div>
              <!--              <div>-->
              <!--                <homecard />-->
              <!--              </div>-->
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import TorusSdk from '@toruslabs/torus-direct-web-sdk'
import homecard from '../components/homecard'
import horsecardhome from '../components/horsecardhome'
const GOOGLE = 'google'
const FACEBOOK = 'facebook'
const REDDIT = 'reddit'
const DISCORD = 'discord'
const TWITCH = 'twitch'
const GITHUB = 'github'
const APPLE = 'apple'
const LINKEDIN = 'linkedin'
const TWITTER = 'twitter'
const WEIBO = 'weibo'
const LINE = 'line'
const EMAIL_PASSWORD = 'email_password'
const PASSWORDLESS = 'passwordless'
const HOSTED_EMAIL_PASSWORDLESS = 'hosted_email_passwordless'
const HOSTED_SMS_PASSWORDLESS = 'hosted_sms_passwordless'
const WEBAUTHN = 'webauthn'
export default {
  name: 'MyComponent',
  // eslint-disable-next-line vue/no-unused-components
  components: { VueSlickCarousel, homecard, horsecardhome },
  data() {
    return {
      settings: {
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        centerPadding: '230px',
        centerMode: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      torusdirectsdk: undefined,
      selectedVerifier: 'google',
      loginHint: '',
      verifierMap: {
        [GOOGLE]: {
          name: 'Google',
          typeOfLogin: 'google',
          clientId:
            '525869190472-ltrds29phj6ner44uqcmcm66854gd0gn.apps.googleusercontent.com',
          verifier: 'google-lrc',
        },
        [FACEBOOK]: {
          name: 'Facebook',
          typeOfLogin: 'facebook',
          clientId: '617201755556395',
          verifier: 'facebook-lrc',
        },
        [REDDIT]: {
          name: 'Reddit',
          typeOfLogin: 'reddit',
          clientId: 'YNsv1YtA_o66fA',
          verifier: 'torus-reddit-test',
        },
        [TWITCH]: {
          name: 'Twitch',
          typeOfLogin: 'twitch',
          clientId: 'f5and8beke76mzutmics0zu4gw10dj',
          verifier: 'twitch-lrc',
        },
        [DISCORD]: {
          name: 'Discord',
          typeOfLogin: 'discord',
          clientId: '682533837464666198',
          verifier: 'discord-lrc',
        },
        [EMAIL_PASSWORD]: {
          name: 'Email Password',
          typeOfLogin: 'email_password',
          clientId: 'sqKRBVSdwa4WLkaq419U7Bamlh5vK1H7',
          verifier: 'torus-auth0-email-password',
        },
        [PASSWORDLESS]: {
          name: 'Passwordless',
          typeOfLogin: 'passwordless',
          clientId: 'P7PJuBCXIHP41lcyty0NEb7Lgf7Zme8Q',
          verifier: 'torus-auth0-passwordless',
        },
        [APPLE]: {
          name: 'Apple',
          typeOfLogin: 'apple',
          clientId: 'm1Q0gvDfOyZsJCZ3cucSQEe9XMvl9d9L',
          verifier: 'torus-auth0-apple-lrc',
        },
        [GITHUB]: {
          name: 'Github',
          typeOfLogin: 'github',
          clientId: 'PC2a4tfNRvXbT48t89J5am0oFM21Nxff',
          verifier: 'torus-auth0-github-lrc',
        },
        [LINKEDIN]: {
          name: 'Linkedin',
          typeOfLogin: 'linkedin',
          clientId: '59YxSgx79Vl3Wi7tQUBqQTRTxWroTuoc',
          verifier: 'torus-auth0-linkedin-lrc',
        },
        [TWITTER]: {
          name: 'Twitter',
          typeOfLogin: 'twitter',
          clientId: 'A7H8kkcmyFRlusJQ9dZiqBLraG2yWIsO',
          verifier: 'torus-auth0-twitter-lrc',
        },
        [WEIBO]: {
          name: 'Weibo',
          typeOfLogin: 'weibo',
          clientId: 'dhFGlWQMoACOI5oS5A1jFglp772OAWr1',
          verifier: 'torus-auth0-weibo-lrc',
        },
        [LINE]: {
          name: 'Line',
          typeOfLogin: 'line',
          clientId: 'WN8bOmXKNRH1Gs8k475glfBP5gDZr9H1',
          verifier: 'torus-auth0-line-lrc',
        },
        [HOSTED_EMAIL_PASSWORDLESS]: {
          name: 'Hosted Email Passwordless',
          typeOfLogin: 'jwt',
          clientId: 'P7PJuBCXIHP41lcyty0NEb7Lgf7Zme8Q',
          verifier: 'torus-auth0-passwordless',
        },
        [HOSTED_SMS_PASSWORDLESS]: {
          name: 'Hosted SMS Passwordless',
          typeOfLogin: 'jwt',
          clientId: 'nSYBFalV2b1MSg5b2raWqHl63tfH3KQa',
          verifier: 'torus-auth0-sms-passwordless',
        },
        [WEBAUTHN]: {
          name: 'WebAuthn',
          typeOfLogin: 'webauthn',
          clientId: 'webauthn',
          verifier: 'webauthn-lrc',
        },
      },
    }
  },
  computed: {
    loginToConnectionMap() {
      return {
        [GOOGLE]: { login_hint: 'hello@tor.us', prompt: 'none' },
      }
    },
  },
  async mounted() {
    try {
      const url = new URL(location.href)
      const hash = url.hash.substr(1)
      const queryParams = {}
      for (const key of url.searchParams.keys()) {
        queryParams[key] = url.searchParams.get(key)
      }
      const { error, instanceParameters } = this.handleRedirectParameters(
        hash,
        queryParams
      )
      const torusdirectsdk = new TorusSdk({
        baseUrl: `${location.origin}/serviceworker`,
        enableLogging: true,
        network: 'testnet', // details for test net
      })
      await torusdirectsdk.init({ skipSw: false })
      this.torusdirectsdk = torusdirectsdk
      if (hash) {
        if (error) throw new Error(error)
        const { verifier: returnedVerifier } = instanceParameters
        this.selectedVerifier = Object.keys(this.verifierMap).find(
          (x) => this.verifierMap[x].verifier === returnedVerifier
        )
        this.login(hash, queryParams)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error, 'mounted caught')
    }
  },
  methods: {
    async login(hash, queryParameters) {
      try {
        if (!this.torusdirectsdk) return
        const jwtParams = this.loginToConnectionMap[this.selectedVerifier] || {}
        const { typeOfLogin, clientId, verifier } = this.verifierMap[
          this.selectedVerifier
        ]
        // eslint-disable-next-line no-console
        console.log(
          hash,
          queryParameters,
          typeOfLogin,
          clientId,
          verifier,
          jwtParams
        )
        const loginDetails = await this.torusdirectsdk.triggerAggregateLogin({
          aggregateVerifierType: 'single_id_verifier',
          verifierIdentifier: 'tkey-google',
          subVerifierDetailsArray: [
            {
              clientId:
                '221898609709-obfn3p63741l5333093430j3qeiinaa8.apps.googleusercontent.com',
              typeOfLogin: 'google',
              verifier: 'torus',
            },
          ],
        })
        this.$store.commit('updateUser', loginDetails)
        setTimeout(() => {
          this.$router.push({
            path: '/play',
          })
        }, 3500)
        this.console(loginDetails)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error, 'caught')
      }
    },
    console(text) {
      document.querySelector('#console>p').innerHTML =
        typeof text === 'object' ? JSON.stringify(text) : text
    },
    handleRedirectParameters(hash, queryParameters) {
      const hashParameters = hash.split('&').reduce((result, item) => {
        const [part0, part1] = item.split('=')
        result[part0] = part1
        return result
      }, {})
      // eslint-disable-next-line no-console
      console.log(hashParameters, queryParameters)
      let instanceParameters = {}
      let error = ''
      if (!queryParameters.preopenInstanceId) {
        if (Object.keys(hashParameters).length > 0 && hashParameters.state) {
          instanceParameters =
            JSON.parse(
              atob(decodeURIComponent(decodeURIComponent(hashParameters.state)))
            ) || {}
          error =
            hashParameters.error_description || hashParameters.error || error
        } else if (
          Object.keys(queryParameters).length > 0 &&
          queryParameters.state
        ) {
          instanceParameters =
            JSON.parse(
              atob(
                decodeURIComponent(decodeURIComponent(queryParameters.state))
              )
            ) || {}
          if (queryParameters.error) error = queryParameters.error
        }
      }
      return { error, instanceParameters, hashParameters }
    },
  },
}
</script>

<style>
@media only screen and (max-width: 786px) {
  .headercl {
    margin-top: 20rem !important;
  }
  .headercl2 {
    position: static !important;
  }
}
</style>
