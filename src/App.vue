<template>
  <div class="app">
    <nav>
      <router-link to="/">
        <div class="logo">Twotter</div>
      </router-link>
      <div class="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return { user: { username: "_JustinEllis" } };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;
    .logo {
      font-weight: bold;
      font-size: 24px;
    }
    .user {
      font-weight: bold;
    }
  }
}
</style>
