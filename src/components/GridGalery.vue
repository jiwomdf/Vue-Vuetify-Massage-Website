<template>
   <v-container>
    <h1>Galeri</h1>
    <v-row>

      <!-- <div v-for="(data, i) in datas" :key="i">
        <v-col :key="i">
            {{data.url}}
            <v-img :src="require(data.url)"></v-img>
        </v-col>
      </div> -->
      
        <v-container class="fill-height" fluid style="min-height: 434px">
            <v-fade-transition mode="out-in">
                <v-row v-if="show" key="0">
                    <v-col cols="6">
                    <v-card>
                        <v-img src="../assets/imgs/1.jpg" height="200" class="grey darken-4"></v-img>
                        <v-card-title class="title">Refleksi</v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img src="../assets/imgs/2.jpg" height="200" class="grey darken-4"></v-img>
                        <v-card-title class="title">Body Massage</v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img src="../assets/imgs/3.jpg" height="200" class="grey darken-4"></v-img>
                        <v-card-title class="title">Body Scrub</v-card-title>
                    </v-card>
                    </v-col>

                    <v-col cols="6">
                    <v-card>
                        <v-img src="../assets/imgs/4.jpg" height="200" class="grey darken-4"></v-img>
                        <v-card-title class="title">Totok Wajah</v-card-title>
                    </v-card>
                    </v-col>
                </v-row>
            </v-fade-transition>
        </v-container>
        
    </v-row>
  </v-container>
</template>

<script>

    let staticPath = '@/assets/imgs/'
    export default {
        name: 'GridGalery',

        data: () => ({
            show: true,
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