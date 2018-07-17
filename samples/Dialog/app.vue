<template>
  <div id="app">
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	  <div style="padding-left:0px;" class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> 
      <ul class="nav navbar-nav" >
        <li data-toggle="collapse" ><router-link to="/dialog/ejs">Dialog Default</router-link></li>
        <li data-toggle="collapse" ><router-link to="/tag-directive/ejs">Tag Directive</router-link></li>
        <li data-toggle="collapse" ><router-link to="/dynamic-rendering/ejs">Dynamic Rendering</router-link></li>
        <li data-toggle="collapse" ><router-link to="/template-binding/ejs">Template Binding</router-link></li>
        <li data-toggle="collapse" ><router-link to="/dialog-template/ejs">Template Support</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>

</style>