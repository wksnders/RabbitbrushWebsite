<script setup>
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="row">
        <h1><span class="editor_footer_script">Rabbitbrush Studio</span></h1>
			  <nav>
			  	<RouterLink to="/">Home</RouterLink>
			  	<RouterLink to="/about-me">About</RouterLink>
			  	<RouterLink to="/class-descriptions">Class Descriptions</RouterLink>
			  	<RouterLink to="/testimonials">Testimonials</RouterLink>
			  </nav>
      </div>
      <div div class="row">
        <h2><span style="font-size:22px;">1619 W. Allegheny Drive, Taylorsville, Utah &nbsp; 801.694.1891</span></h2>
      </div>
      <div>
        <div class="row">
          <span style="color:#808080;">© All rights reserved</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<style scoped>
h1 {
  padding-top:1rem;
  display: inline-block;
	color: white;
}
h2 {
	color: white;
}

footer{
  margin-top: 3rem;
  position:relative;
  bottom: 0;
  width: 100%;
}

.footer-container{
  position: relative;
  margin: 0 10%;
  width: 80%;
  background: black;
}

.row{
  padding: 0 1rem;
  width: 100%;
}

nav {
  width: 60%;
  vertical-align:middle;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
  color: white;
  display: inline-block;
}

nav a.router-link-exact-active {
	color: lightskyblue;
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}
</style>
