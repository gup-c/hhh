<template>
  <div class="app">
    <div class="main">
      <router-view/>
    </div>
    
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  components:{
    Tabbar
  }
}
</script>

<style>

</style>