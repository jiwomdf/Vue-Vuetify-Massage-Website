<template>
  <v-app>

    

    <!-- Content -->
    <v-content>
      <NavBar/>
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
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    Welcome,
    GridInfo,
    GridGalery,
    NavBar
  }
};
</script>
