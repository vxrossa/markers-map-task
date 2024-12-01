<script setup lang="ts">
import MapWidget from '@/widgets/MapWidget.vue'
import MarkerList from '@/widgets/MarkerList.vue'
</script>

<template>
  <div class="w-100 d-flex h-auto">
    <div class="w-25 h-100">
      <marker-list />
    </div>
    <div class="w-75 h-100">
      <map-widget />
    </div>
  </div>
</template>
