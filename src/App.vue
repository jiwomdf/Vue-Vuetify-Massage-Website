<template>
  <v-app>
      <div>
        <v-app-bar color="blue lighten-5" flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Pijat Jakarta Barat</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-menu left bottom>

          </v-menu>
        </v-app-bar>
      </div>

  <v-content>
    <Welcome/>
    <GridGalery/>
    <GridInfo/>
  </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome';
import GridInfo from './components/GridInfo';
import GridGalery from './components/GridGalery';

export default {
  name: 'App',

  components: {
    Welcome,
    GridInfo,
    GridGalery
  },

  data: () => ({
    //
  }),
};
</script>
