<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/partials/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
@media print {
html, body{
		height: 297mm;
		width: 210mm;
    font-size: 14px;
	}
  @page {
	margin: 10mm 10mm 10mm 20mm;
}
*, *:before, *:after { 
		color: #000;
		box-shadow: none;
		text-shadow: none;
	}
	h1 {
		font-size: 24px;
	}
	h2 {
		font-size: 20px;
	}
	h3 {
		font-size: 18px;
	}
  .noprint {
		display: none;
	}
  ul, ol, table {
		page-break-inside: avoid;
	}
  a[href^="http"]:after {
		content: " (" attr(href) ")";
	}
}
</style>