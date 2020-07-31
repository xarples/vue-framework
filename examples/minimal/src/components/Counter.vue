<template>
  <div>
    <div>Count {{ count }}</div>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++

    return {
      count,
      increment,
    }
  },
}
</script>
