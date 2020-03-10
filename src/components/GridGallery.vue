<template>
   <v-container>
    <h1>Galeri</h1>
    <v-row>

        <!-- Image -->
        <v-container class="fill-height" fluid max-height="434px" max-width="200px" min-height="100px" min-width="100px">
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
        <v-dialog v-model="sheet" max-width="900" min-width="500" >
            <v-sheet class="text-center" max-height="600px" min-height="200px">
                <center>
                    <div v-if="selData.imgName != ''">
                        
                        <v-img :src="getImgUrl(selData.imgName)" height="250" >
                            <b><p class="mt-3 mb-2" style="color:white; font-size:100px">{{selData.imgTitle}}</p></b>
                        </v-img>

                        <v-divider></v-divider>
                        
                        <v-row style="margin:0px;padding:0px;">
                            <div v-for="(subData, i) in subDatas" :key="i" style="margin:0px;padding:0px;">
                                <v-col style="margin:0px;padding:0px;">
                                    <v-img :src="getSubImgUrl(subData.imgName)" height="150" width="180"></v-img>
                                </v-col>
                            </div>
                        </v-row>                        

                    </div>
                </center>
            </v-sheet>
        </v-dialog>
        
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
                    imgTitle: 'Body Scrub'
                },
                {
                    imgName: '4.jpg',
                    imgTitle:'Totok Wajah'
                }
            ],
            subDatas:[
                {
                    imgName: 'bodymassage/2.png',
                    imgTitle: 'test 1'
                },
                {
                    imgName: 'bodymassage/5.png',
                    imgTitle: 'test 2'
                },
                {
                    imgName: 'bodymassage/3.png',
                    imgTitle: 'test 3'
                },
                {
                    imgName: 'bodymassage/4.png',
                    imgTitle: 'test 4'
                },
                {
                    imgName: 'bodymassage/5.png',
                    imgTitle: 'test 5'
                },
                {
                    imgName: 'bodymassage/6.png',
                    imgTitle: 'test 6'
                },
                 {
                    imgName: 'bodymassage/3.png',
                    imgTitle: 'test 5'
                },
                {
                    imgName: 'bodymassage/1.png',
                    imgTitle: 'test 6'
                }
            ]
        }),
        methods:{
            getImgUrl(imgName) {
                return require('../assets/imgs/' + imgName)
            },
            getSubImgUrl(imgName) {
                return require('../assets/subimgs/' + imgName)
            },
            openBtnSheet(imgName){
                this.sheet = true
                this.selData.imgName = imgName
                this.selData.imgTitle = this.datas.find(x => x.imgName == imgName).imgTitle
            }
        }
    }
</script>