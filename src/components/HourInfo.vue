<template>
   <v-container>
       <h1>Jam Buka</h1>
       <v-row>
        <div v-for="(data, i) in datas" :key="i">
            <v-col>
                <v-card class="pa-2" outlined max-width="300" >
                    <h4>{{data.title}}</h4>
                    <p>{{data.info}}</p>
                </v-card>
            </v-col>
        </div>
       </v-row>
       <br/>
   </v-container>
</template>

<script>
    export default {
        name: 'HourInfo',
        data: () => ({
            datas: [
                {
                    title:'Senin',
                    info:'07.00–21.00',
                },
                {
                    title:'Selasa',
                    info:'07.00–21.00',
                },
                {
                    title:'Rabu',
                    info:'07.00–21.00',
                },
                {
                    title:'Kamis',
                    info:'07.00–21.00',
                },
                {
                    title:'Jumat',
                    info:'07.00–21.00',
                },
                {
                    title:'Sabtu',
                    info:'07.00–21.00',
                },
                {
                    title:'Minggu',
                    info:'07.00–21.00',
                }
            ]
        }),
    }
</script>