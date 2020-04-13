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
        <v-dialog v-model="sheet" max-width="930" min-width="500" >
            <v-sheet class="text-center" min-height="200px">
                <center>
                    <div v-if="selData.imgName != ''">
                        
                        <v-img :src="getImgUrl(selData.imgName)" height="250" >
                            <b><p class="mt-3 mb-2" id="p_popup" style="color:white">{{selData.imgTitle}}</p></b>
                        </v-img>

                        <v-divider></v-divider>
                        
                        <v-row style="margin:0px;padding:0px;">
                            <div v-for="(subData, i) in subDatas" :key="i" style="margin:0px;padding:0px;">
                                <v-col style="margin:0px;padding:0px;">
                                    <v-img :src="getSubImgUrl(subData.imgName)" id="img_popup" height="150"></v-img>
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

<style>
    @media screen{
        #p_popup{
            font-size: 40px;
        }
        #img_popup{
            width: 90px;
        }
    }
    @media screen and (min-width:400px) {
        #img_popup{
            width: 121px;
        }
    }
    @media screen and (min-width:500px) {
        #p_popup{
            font-size:100px
        }
        #img_popup{
            width: 155px;
        }
    }

    /* exception */
    @media screen and (min-width:500px) and (min-height:700px){
        #p_popup{
            font-size:80px
        }
    }
</style>

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