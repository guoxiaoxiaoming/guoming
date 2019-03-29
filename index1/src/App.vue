<template>
  <div id="app">
  	<router-link to="/">
  		<span>User</span>
  		</router-link>
  		<router-link to="/User1">
  		<span>User1</span>
  		</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
