<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Pijat Panggilan Jakarta (JAVA MASSAGE)
        </h1>

        <p class="subheading font-weight-regular">
          Terapis Pijat Jakarta Barat <br>
          Buka hari ini sampai pukul 22.00
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Kontak kami pada: 
        </h2><br>
        <v-btn>
          <v-img src="../assets/logo/walogo.png" width="20px" height="20px"></v-img> <span style="padding-left:10px;">WhatsApp: 0895330124172</span>
        </v-btn>
        <br><br>
        <v-btn>
          <v-icon>mdi-phone</v-icon> <span style="padding-left:10px;">Phone: 081384176860</span>
        </v-btn>
      </v-col>

    </v-row>
    
  </v-container>
</template>

<script>

  export default {
    name: 'Welcome',

    data: () => ({
    }),

  }
</script>
