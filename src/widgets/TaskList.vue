<script setup lang="ts">
import { useTranslation } from '@/shared/lib/i18n'

const t = useTranslation()
</script>

<template>
  <div class="w-100 mx-4 mt-4 mb-10 d-flex flex-column ga-4">
    <h2 class="text-h4">{{ t('taskHeading') }}</h2>
    <p class="text-md">
      {{ t('taskDescription') }}
    </p>
    <h5 class="text-h5">{{ t('aboutTask') }}</h5>
    <p class="text-md">{{ t('aboutTaskContent') }}</p>
    <h5 class="text-h5">{{ t('aboutMap') }}</h5>
    <p class="text-md">{{ t('aboutMapContent') }}</p>
    <ol>
      <li>
        {{ t('map1') }}
      </li>
      <li>
        <ol>
          <li>
            {{ t('map2a') }}
          </li>
          <li>
            {{ t('map2b') }}
          </li>
        </ol>
      </li>
      <li>{{ t('map3') }}</li>
      <li>{{ t('map4') }}</li>
      <li>{{ t('map5') }}</li>
      <li>{{ t('map6') }}</li>
    </ol>
    <p class="text-md">
      {{ t('lsDescription') }}
    </p>
    <h5 class="text-h6">{{ t('additionally') }}</h5>
    <ol>
      <li>{{ t('addition1') }}</li>
      <li>{{ t('addition2') }}</li>
      <li>{{ t('addition3') }}</li>
    </ol>
    <h5 class="text-h6">{{ t('noted') }}</h5>
    <p class="text-md">
      {{ t('notedContent') }}
    </p>
  </div>
</template>

<style scoped>
ol {
  margin-left: 24px;

  & ol {
    list-style-type: lower-latin;
  }
}
</style>
