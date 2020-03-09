<template>
  <v-app>

    <!-- Content -->
    <v-content>
      <NavBar/>
      <router-view></router-view>
    </v-content>
    
    </v-app>

</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    NavBar,
  }
};
</script>
