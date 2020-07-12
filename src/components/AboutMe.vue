<template>
  <v-container>
    <center>
      <h1>About Me</h1>

      <v-layout column>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <v-img src="../assets/logo/clipart.jpg"></v-img>
          </v-avatar>
          <p class="ml-2 mt-2">Mas Aji</p>
        </v-flex>
      </v-layout>
    </center>

    <v-layout column>
      <v-row>
        <v-col v-for="(data, i) in datas" :key="i">
          <v-card class="pa-2" outlined min-width="100px" height="100px">
            <h4>{{data.title}}</h4>
            <p>{{data.info}}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
  data: () => ({
    datas: [
      {
        title: "Nama",
        info: "Mas Aji"
      },
      {
        title: "Lokasi",
        info: "Kediri"
      },
      {
        title: "Nomor Telp",
        info: "+62895330124172"
      },
      {
        title: "WhatsApp",
        info: "+62895330124172"
      }
    ]
  })
};
</script>