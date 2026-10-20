<script setup>
import { onMounted } from 'vue'
import { useFetch } from '@/composables/useFetch'

const { data, error, execute } = useFetch()

onMounted(() => {
  execute('/')
})
</script>

<template>
  <p v-if="error">{{ error }}</p>

  <h1 v-else-if="data">
    {{ data.data.message }}
  </h1>
</template>