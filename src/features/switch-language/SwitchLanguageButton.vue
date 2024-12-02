<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@/app/store'
import GlobeIcon from '@/shared/icons/GlobeIcon.vue'

const store = useStore(key)

const onSwitch = () => {
  store.dispatch('i18n/switchLanguage')
}
</script>

<template>
  <v-btn class="w-6 h-6 ml-auto" @click="onSwitch"
    ><globe-icon />{{ store.state.i18n.language.toUpperCase() }}</v-btn
  >
</template>

<style scoped></style>
