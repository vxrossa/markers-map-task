<script setup lang="ts">
import { useTranslation } from '@/shared/lib/i18n'
import PlusIcon from '@/shared/icons/PlusIcon.vue'

defineProps<{
  isEditMode: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleEdit'): void
}>()

const t = useTranslation()
</script>

<template>
  <div class="w-100 h-100">
    <div v-if="isEditMode" class="select-notification position-absolute w-100 h-5 bg-red z-10">
      {{ t('selectMode') }}
    </div>
    <div id="map"></div>
    <v-btn
      @click="emit('toggleEdit')"
      color="red"
      class="position-absolute bottom-0 right-0 mr-10 mb-10"
      size="50"
      variant="elevated"
      ><plus-icon
    /></v-btn>
  </div>
</template>

<style scoped>
#map {
  height: 95vh;
  width: 100%;
}

.select-notification {
  z-index: 10;
}
</style>
