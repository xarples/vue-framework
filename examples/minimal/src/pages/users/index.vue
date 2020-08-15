<template>
  <div class="div">
    Users Index
    <p>
      <router-link :to="{ name: 'users/me' }">Go to users me</router-link>
    </p>
  </div>
</template>

<style scoped>
.div {
  color: red;
  height: 100px;
}
</style>
