<script setup lang="ts">
import PlusIcon from '@/shared/icons/PlusIcon.vue'
import { computed } from 'vue'
import CrossIcon from '@/shared/icons/CrossIcon.vue'

const props = defineProps<{
  isEditMode: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleEdit'): void
}>()

const color = computed(() => (props.isEditMode ? 'red' : 'green'))
</script>

<template>
  <v-btn
    :color="color"
    @click="emit('toggleEdit')"
    class="position-absolute bottom-0 right-0 mr-10 mb-10"
    size="50"
    variant="elevated"
    ><plus-icon v-if="!isEditMode"></plus-icon> <cross-icon v-if="isEditMode"></cross-icon
  ></v-btn>
</template>

<style scoped></style>
