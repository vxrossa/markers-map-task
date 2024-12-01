<script setup lang="ts">
import { onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'ready'): void
}>()

onMounted(() => {
  const ymapsScript = document.createElement('script')

  const key = import.meta.env.VITE_YMAPS_API_KEY

  ymapsScript.setAttribute('src', `https://api-maps.yandex.ru/v3/?apikey=${key}&lang=ru_RU`)
  document.head.appendChild(ymapsScript)

  emit('ready')
})
</script>
