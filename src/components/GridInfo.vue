<template>
   <v-container>
    <h1 style="margin-left:20px">Layanan</h1>
    <v-row no-gutters>

      <div v-for="(data, i) in datas" :key="i">
        <v-col :key="i">
          <v-card class="pa-2" outlined tile width="350px" height="450px">
            <h4>{{data.title}}</h4>
            <p>{{data.info}}</p>
          </v-card>
        </v-col>
      </div>

    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: 'GridInfo',

        data: () => ({
            datas: [
                {
                    title:'Refleksi',
                    info:'Reflexology (pijat refleksi) adalah sebuah metode pengobatan alternatif yang melibatkan praktek memijat atau tekanan pada bagian-bagian kaki, atau kadang-kadang tangan dan telinga, dengan tujuan mendorong efek yang menguntungkan pada bagian lain dari tubuh, atau untuk memperbaiki umum kesehatan (zona terapi).Pijat refleksi merupakan seni penyembuhan alami didasarkan pada prinsip bahwa adanya refleks di seluruh tubuh yang berhubungan dengan setiap bagian, kelenjar dan organ tubuh. Melalui tekanan (pijatan) pada daerah refleks ini dengan maupun tanpa menggunakan alat bertujuan mengurangi ketegangan, meningkatkan sirkulasi dan membantu meningkatkan fungsi organ tubuh yang terkait.',
                },
                {
                    title:'Body Massage',
                    info:'Body Massage, Pijat, atau urut adalah metode penyembuhan atau terapi kesehatan tradisional, dengan cara memberikan tekanan kepada tubuh – baik secara terstruktur, tidak terstruktur, menetap, atau berpindah tempat – dengan memberikan tekanan dan gerakan menggunakan tangan, jemari, sikut, lengan, atau kaki. Pijat dapat memberikan relaksasi, rasa nyaman, dan kebugaran.',
                },
                {
                    title:'Totok Wajah',
                    info:'Totok Wajah adalah cara untuk mengurangi ketegangan dan mencegah pembentukan keriput. Cara ini berguna untuk melembutkan & mengencangkan kulit, serta merangsang sirkulasi dan mengurangi stres pada wajah.',
                },
                {
                    title:'Body Scrub',
                    info:'Body scrub adalah sebuah perawatan tubuh yang di sebut juga sebagai facial untuk tubuh. Body scrub menghidrasi kulit, membuat kulit terlihat dan terasa lembut.',
                },
                {
                    title:'Kerik',
                    info:'Kerik / kerok adalah sebuah terapi pengobatan alternatif untuk gejala masuk angin dengan metode menggaruk sambil menekan bagian permukaan kulit menggunakan minyak dan benda tumpul seperti uang logam sebagai alat pengerok.',
                }
            ]
        })
    }
</script>