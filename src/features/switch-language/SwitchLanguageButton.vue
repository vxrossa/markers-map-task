<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@/app/store'

const store = useStore(key)

const onSwitch = () => {
  store.dispatch('switchLanguage')
}
</script>

<template>
  <button @click="onSwitch">Switch</button>
</template>

<style scoped></style>
