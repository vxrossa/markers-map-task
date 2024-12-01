<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <v-layout full-height>
    <v-app-bar>
      <p class="text-h5 mx-4">Test task</p>
      <RouterLink to="/">
        <v-btn :active="route.matched[0]?.path === '/'" variant="text">Задание</v-btn>
      </RouterLink>

      <RouterLink to="/map">
        <v-btn :active="route.matched[0]?.path === '/map'" variant="text">Карта</v-btn>
      </RouterLink>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
