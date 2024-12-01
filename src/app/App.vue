<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/widgets/Layout.vue'
</script>

<template>
  <v-app>
    <layout>
      <router-view />
    </layout>
  </v-app>
</template>
