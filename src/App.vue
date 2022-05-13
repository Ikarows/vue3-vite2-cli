<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <van-button type="primary">主要按钮</van-button>

  <div class="nav-btn">
    <router-link to="/"> Home</router-link>
    <router-link to="/contact">Contact </router-link>
  </div>

  <router-view></router-view>

  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
