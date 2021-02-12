<template>
  <div
    class="grid"
    style="height: 100vh !important; padding-top: 6rem !important"
  >
    <h1 class="upcomming" style="text-align: center">My Tickets</h1>
    <vs-row justify="center" style="padding-top: 4rem !important">
      <vs-col :w="8">
        <vs-row justify="space-around">
          <vs-col v-for="x in 6" :key="x" :w="4" style="padding: 1rem">
            <ticketcard />
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import ticketcard from '~/components/ticketcard'
export default {
  name: 'Tickets',
  components: {
    ticketcard,
  },
}
</script>
<style scoped>
.upcomming {
  font-size: 45px;
  text-transform: uppercase;
  /*border-left: 14px solid rgba(255, 235, 59, 0.78);*/
  padding-left: 12px;
  margin: 18px 8px;
}
</style>
