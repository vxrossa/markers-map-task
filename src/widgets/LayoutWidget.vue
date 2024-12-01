<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useTranslation } from '@/shared/lib/i18n'
import SwitchLanguageButton from '@/features/switch-language/SwitchLanguageButton.vue'

const route = useRoute()
const t = useTranslation()
</script>

<template>
  <v-layout full-height>
    <v-app-bar>
      <p class="text-h5 mx-4">{{ t('name') }}</p>
      <ul class="d-flex align-center ga-2">
        <li class="d-inline">
          <RouterLink to="/">
            <v-btn
              :active="route.matched[0]?.path === '/'"
              variant="text"
              :text="t('taskButton')"
            ></v-btn>
          </RouterLink>
        </li>
        <li class="d-inline">
          <RouterLink to="/map">
            <v-btn
              :active="route.matched[0]?.path === '/map'"
              variant="text"
              :text="t('mapButton')"
            ></v-btn>
          </RouterLink>
        </li>
      </ul>
      <switch-language-button />
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
