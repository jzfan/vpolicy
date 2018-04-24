<template>
	<nav class="level fixfooter is-mobile">
	  <div class="level-item has-text-centered">
	    <div>
	    	<router-link to="/" class="has-text-dark">号码分析</router-link>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	    	<router-link to="/insure" class="has-text-dark">号码投保</router-link>
	    </div>
	  </div>
	  <div class="level-item has-text-centered">
	    <div>
	    	<router-link to="/benefits" class="has-text-dark">号码福利</router-link>
	    </div>
	  </div>
	</nav>
</template>

<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 40px;
}
.fixfooter {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 40px;
  background-color: #f5f5f5;
}
</style>