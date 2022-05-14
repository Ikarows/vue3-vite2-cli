<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="nav-btn">
    <router-link to="/"> Home</router-link> &nbsp;
    <router-link to="/contact">Contact </router-link>
  </div>

  <router-view></router-view>

  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <van-button type="primary">vant按钮示例</van-button>
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
