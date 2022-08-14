<script setup lang="ts">
import ModelView from './components/model-viewer/ModelViewer.vue'
import CodeEditor from './components/code-editor/CodeEditor.vue'
import { onMounted } from "vue";

onMounted(async () => {
  const file = await window.electron.openFileDialog()
  console.log(file)

})
</script>

<template>
  <div class="container">
    <ModelView class="model-view" />
    <CodeEditor class="code-editor" />
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.model-view {
  flex-grow: 1;
}

.code-editor {
  flex-grow: 1;
  width: 100%;
}
</style>
