<template>
    
    <nav>
    <!-- Top Bar -->
    <div flat app>
      <v-app-bar color="blue lighten-5" flat>
        
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
        </v-app-bar-nav-icon>

        <v-toolbar-title>Pijat Jakarta Barat</v-toolbar-title>

        <v-spacer></v-spacer>

        <a href="tel:+6281384176860" style="text-decoration:none"><v-btn icon>
          <v-icon>mdi-phone</v-icon>
        </v-btn></a>

        <a href="tel:+62895330124172" style="text-decoration:none"><v-btn icon>
            <v-img src="../assets/logo/walogo.png" width="30px" height="30px"></v-img>
        </v-btn></a>

        <v-menu left bottom>
        </v-menu>

      </v-app-bar>
    </div>

    <!-- Nav Bar -->
    <v-navigation-drawer v-model="drawer" app class="blue lighten-5">
        <!-- Profile picture -->
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <v-img src="../assets/logo/avatar.png"></v-img>
                </v-avatar>
                <p class="ml-5 mt-2">Mas Aji</p>
            </v-flex>
        </v-layout>

        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon>{{link.icon}}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title >{{link.text}}</v-list-item-title>
                </v-list-item-content>
                <br>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
    </nav>
</template>

<script>
export default {

  data: () => ({
    drawer:false,
    links :[
                { icon: 'mdi-home', text: 'Home', route: '/'},
                { icon: 'mdi-account', text: 'About Me', route: '/AboutMe'}
            ],

  }),
}
</script>