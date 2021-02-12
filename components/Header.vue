<template>
  <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute">
    <div class="container">
      <div class="navbar-translate">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#example-header-3"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
        <a class="navbar-brand" href="javascript:;">Unirace</a>
      </div>
      <div id="example-header-3" class="collapse navbar-collapse">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a>
                BLK•
                <span> PRO </span>
              </a>
            </div>
            <div class="col-6 collapse-close text-right">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#example-header-3"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="javascript:;" @click="gotoPage('/')">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;" @click="gotoPage('/play')">
              Play
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;" @click="gotoPage('/race')">
              Race
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="javascript:;"
              @click="gotoPage('/my-tickets')"
            >
              My Tickets
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    gotoPage(page) {
      this.$router.push({
        path: page,
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
}
</style>
