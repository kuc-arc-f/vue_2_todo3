<template>
  <div id="app">
    <navbar />
    <div class="container">
        <br />
        <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from './components/Layouts/Navbar'

export default {
  name: 'app',
  components: {
    navbar,
  }
}
</script>
<style>
</style>
