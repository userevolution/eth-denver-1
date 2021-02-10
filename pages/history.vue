<template>
  <div class="grid" style="height: 100vh !important">
    <vs-row justify="center" style="padding-top: 11rem !important">
      <vs-col :w="8" class="play-container">
        <template>
          <div class="center">
            <vs-table>
              <template #thead>
                <vs-tr>
                  <vs-th> Name </vs-th>
                  <vs-th> Email </vs-th>
                  <vs-th> Id </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr v-for="(tr, i) in users" :key="i">
                  <vs-td>
                    {{ tr.name }}
                  </vs-td>
                  <vs-td>
                    {{ tr.email }}
                  </vs-td>
                  <vs-td>
                    {{ tr.id }}
                  </vs-td>

                  <template #expand>
                    <div class="con-content">
                      <div>
                        <vs-avatar>
                          <img
                            :src="`https://vuesax.com/avatars/avatar-${
                              i + 1
                            }.png`"
                            alt=""
                          />
                        </vs-avatar>
                        <p>
                          {{ tr.name }}
                        </p>
                      </div>
                      <div>
                        <vs-button flat icon>
                          <i class="bx bx-lock-open-alt"></i>
                        </vs-button>
                        <vs-button flat icon> Send Email </vs-button>
                        <vs-button border danger> Remove User </vs-button>
                      </div>
                    </div>
                  </template>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </template>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'History',
  data: () => ({
    editActive: false,
    edit: null,
    editProp: '',
    search: '',
    allCheck: false,
    page: 1,
    max: 3,
    active: 0,
    selected: [],
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info',
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org',
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io',
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com',
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com',
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net',
      },
    ],
  }),
}
</script>

<style scoped>
.play-container {
  border-radius: 19px;
  background: rgba(29, 24, 24, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
