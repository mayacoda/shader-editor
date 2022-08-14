<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  console.log(canvas.value)
})
</script>

<template>
  <div class="container">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  background-color: #838383;
}
canvas {
  max-width: 100%;
}
</style>
