<template lang="">
    <v-toolbar app>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const appTitle = ref('Teledec');

</script>
