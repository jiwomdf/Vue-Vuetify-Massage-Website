<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12"></v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold">Pijat Panggilan Kediri</h1>
        <h1>(JAVA MASSAGE)</h1>
        <br />

        <h3>JAVA MASSAGE REFLEXOLOGY & TRADITIONAL MASSAGE</h3>
        <br />
        <p class="subheading font-weight-regular">
          Khusus Panggilan
          <b>Rumah</b>,
          <b>Kost</b>,
          <b>Hotel & Apartemen.</b>
          <br />Dengan Tenaga Berpengalaman & Professional.
          <br />
          <br />Buka hari ini sampai
          <b>pukul 22.00</b>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Kontak kami pada:</h2>
        <br />
        <a href="tel:+6285774822556" style="text-decoration:none">
          <v-btn>
            <v-img src="../assets/logo/walogo.png" width="20px" height="20px"></v-img>
            <span style="padding-left:10px;">WhatsApp: +6285774822556</span>
          </v-btn>
        </a>

        <br />
        <br />

        <a href="tel:+62895330124172" style="text-decoration:none">
          <v-btn>
            <v-icon>mdi-phone</v-icon>
            <span style="padding-left:10px;">Phone: +62895330124172</span>
          </v-btn>
        </a>
      </v-col>
    </v-row>

    <v-content>
      <GridGallery />
      <GridInfo />
      <HourInfo />
      <Footer />
    </v-content>
  </v-container>
</template>

<script>
import GridInfo from "../components/GridInfo";
import GridGallery from "../components/GridGallery";
import HourInfo from "../components/HourInfo";
import Footer from "../components/Footer";

export default {
  name: "Welcome",
  components: {
    GridInfo,
    GridGallery,
    HourInfo,
    Footer
  },

  data: () => ({})
};
</script>
