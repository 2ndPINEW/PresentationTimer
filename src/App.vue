<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Super</span>
        <span class="font-weight-light">TimerSystem</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Timer from './components/SpeachTimer';
import Setting from './components/Setting';

export default {
  name: 'App',
  components: {
    Timer,
    Setting
  },
  data: () => ({
    //
  }),
};
</script>
