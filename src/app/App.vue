<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutWidget from '@/widgets/LayoutWidget.vue'
</script>

<template>
  <v-app>
    <layout-widget>
      <router-view />
    </layout-widget>
  </v-app>
</template>
