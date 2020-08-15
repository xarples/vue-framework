<template>
  <div class="div">
    Index
    <p>
      <router-link :to="{ name: 'users/index' }">Go to users</router-link>
    </p>
  </div>
</template>

<style scoped>
.div {
  height: 100px;
}
</style>
