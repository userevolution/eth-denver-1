<template>
  <div class="card card-profile">
    <div class="card-image">
      <h4 class="title">Sofia Scarlett</h4>
      <div class="dropdown">
        <button
          type="button"
          class="btn btn-link dropdown-toggle btn-icon"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="tim-icons icon-settings-gear-63"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
          <a class="dropdown-item" href="javascript:;">Edit Profile</a>
          <a class="dropdown-item" href="javascript:;">Settings</a>
          <a class="dropdown-item" href="javascript:;">Log out</a>
        </div>
      </div>
      <a href="javascript:;">
        <img class="img img-raised rounded" src="img/emily.jpg" />
      </a>
    </div>
    <div class="card-body">
      <hr class="line-primary" />
      <h3 class="job-title">UX Designer</h3>
      <div class="table-responsive">
        <table id="plain-table" class="table tablesorter">
          <tbody>
            <tr>
              <td class="text-left">
                <i class="tim-icons icon-atom"></i> Skills
              </td>
              <td class="text-right">UI, UX</td>
            </tr>
            <tr>
              <td class="text-left">
                <i class="tim-icons icon-user-run"></i> Hobbies
              </td>
              <td class="text-right">Cookery</td>
            </tr>
            <tr>
              <td class="text-left">
                <i class="tim-icons icon-chart-bar-32"></i> Level
              </td>
              <td class="text-right">• • •</td>
            </tr>
          </tbody>
        </table>
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
<style scoped></style>
