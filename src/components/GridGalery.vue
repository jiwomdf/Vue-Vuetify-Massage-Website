<template>
   <v-container>
    <h1 style="margin-left:18px">Galeri</h1>
    <v-row no-gutters>

      <!-- <div v-for="(data, i) in datas" :key="i">
        <v-col :key="i">
            {{data.url}}
            <v-img :src="require(data.url)"></v-img>
        </v-col>
      </div> -->
        <v-card class="pa-1" outlined tile width="260px" height="260px" style="margin-right:20px; margin-left:20px">
            <img src="../assets/imgs/1.jpg" alt="" width="250px" height="250px">
        </v-card>
        <v-card class="pa-1" outlined tile width="260px" height="260px" style="margin-right:20px">
            <img src="../assets/imgs/2.jpg" alt="" width="250px" height="250px">
        </v-card>
        <v-card class="pa-1" outlined tile width="260px" height="260px" style="margin-right:20px">
            <img src="../assets/imgs/3.jpg" alt="" width="250px" height="250px">
        </v-card>
        <v-card class="pa-1" outlined tile width="260px" height="260px" style="margin-right:20px">
            <img src="../assets/imgs/4.jpg" alt="" width="250px" height="250px">
        </v-card>
        
    </v-row>
  </v-container>
</template>

<script>

    let staticPath = '@/assets/imgs/'
    export default {
        name: 'GridGalery',

        data: () => ({
            datas: [
                {
                    url: staticPath + '1.jpg'
                },
                {
                    url: staticPath + '2.jpg'
                },
                {
                    url: staticPath + '3.jpg'
                },
                {
                    url: staticPath + '4.jpg'
                }
            ]
        })
    }
</script>