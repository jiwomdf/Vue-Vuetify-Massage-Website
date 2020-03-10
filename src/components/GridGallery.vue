<template>
   <v-container>
    <h1>Galeri</h1>
    <v-row>

        <!-- Image -->
        <v-container class="fill-height" fluid style="min-height: 434px">
            <v-fade-transition mode="out-in">
                <v-row v-if="show" key="0">
                    
                    <v-col cols="6" v-for="(data, i) in datas" :key="i">
                    <v-card v-on:click="openBtnSheet(data.imgName)">
                        <v-img :src="getImgUrl(data.imgName)" v-bind:alt="data.imgName" height="200" class="grey darken-4"></v-img>
                        <v-card-title class="title">{{data.imgTitle}}</v-card-title>
                    </v-card>
                    </v-col>

                </v-row>
            </v-fade-transition>
        </v-container>

        <!-- Bottom Sheet -->
        <v-bottom-sheet v-model="sheet" inset>
            <v-sheet class="text-center" height="600px">
                <center>
                    <div v-if="selData.imgName != ''">
                        <v-img :src="getImgUrl(selData.imgName)" height="400" ></v-img>
                        <h2 class="mt-6">{{selData.imgTitle}}</h2>
                    </div>
                </center>
            </v-sheet>
        </v-bottom-sheet>
        
    </v-row>
  </v-container>
</template>

<script>

    export default {
        name: 'GridGallery',
        data: () => ({
            show: true,
            sheet: false,
            selData: {
                imgName: '',
                imgTitle: ''
            },
            datas: [
                {
                    imgName: '1.jpg',
                    imgTitle: 'Refleksi'
                },
                {
                    imgName: '2.jpg',
                    imgTitle: 'Body Massage'
                },
                {
                    imgName: '3.jpg',
                    imgTitle: 'Totok Wajah'
                },
                {
                    imgName: '4.jpg',
                    imgTitle:'Body Scrub'
                }
            ]
        }),
        methods:{
            getImgUrl(imgName) {
                return require('../assets/imgs/' + imgName)
            },
            openBtnSheet(imgName){
                this.sheet = true
                this.selData.imgName = imgName
                this.selData.imgTitle = this.datas.find(x => x.imgName == imgName).imgTitle
            }
        }
    }
</script>