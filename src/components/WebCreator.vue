<template>
   <v-container>
     <center>

      <h1>About Web Creator</h1>
      
      <v-layout column>
          <v-flex class="mt-5">
              <v-avatar size="100">
                  <v-img src="../assets/logo/avatar.png"></v-img>
              </v-avatar>
              <p class="ml-2 mt-2">Katili Jiwo Adi Wiyono</p>
          </v-flex>
      </v-layout>
     </center>
      
      <v-layout column>
        <v-row>
            <v-col v-for="(data, i) in datas" :key="i">
              <v-card class="pa-2" outlined min-width="100px" height="100px">
                
                <h4>{{data.title}}</h4>

                <div v-if="data.title == 'Linkedin'">
                    <a v-on:click="hrefClick">{{data.info}}</a>
                </div>
                <div v-else>
                    <p>{{data.info}}</p>
                </div>

              </v-card>
            </v-col>
        </v-row>
      </v-layout>
      


  </v-container>
</template>

<script>
    export default {
        name: 'AboutMe',
        data: () => ({

            datas: [
                {
                    title:'Nama',
                    info:'Katili Jiwo Adi Wiyono',
                },
                {
                    title:'Lokasi',
                    info:'Jakarta & Bogor',
                },
                {
                    title:'Email',
                    info:'mdf.jiwo@outlook.com',
                },
                {
                    title:'Linkedin',
                    info:'link',
                }
            ]
        }),
        methods:{
            hrefClick: function(){
                window.open("http://www.linkedin.com/in/katili-jiwo-adi-wiyono-380a31162", '_blank')
            }
        }
    }
</script>