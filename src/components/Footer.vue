<script setup>
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="row">
        <h1><span class="editor_footer_script">Rabbitbrush Studio</span></h1>
			  <nav class="footer-nav">
			  	<RouterLink to="/">Home</RouterLink>
			  	<RouterLink to="/about-me">About</RouterLink>
			  	<RouterLink to="/class-descriptions">Classes</RouterLink>
			  	<RouterLink to="/testimonials">Testimonials</RouterLink>
				  <RouterLink to="/gallery">Galleries</RouterLink>
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
	color: var(--color-box-heading);
  font-family: 'Sacramento';
  font-weight: 400;
}
h2 {
	color: var(--color-box-heading);
  font-family: 'Sacramento';
  font-weight: 400;
}

footer{
  margin-top: 3rem;
  position:relative;
  bottom: 0;
  width: 100%;
}

.footer-container{
  position: relative;
  padding-bottom: 5px;
  width: 100%;
  background: black;
}

.row{
  padding: 0 5%;
  width: 100%;
}


.footer-nav {
  width: 100%;
  vertical-align:middle;
	font-size: 12px;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
  color: white;
  display: inline-block;
}

.footer-nav a.router-link-exact-active {
	color: lightskyblue;
}

.footer-nav a.router-link-exact-active:hover {
	background-color: transparent;
}

.footer-nav a {
	display: inline-block;
	padding: 0 .6rem;
	border-left: 1px solid var(--color-box-heading);
}

.footer-nav a:first-of-type {
	border: 0;
}

@media (min-width: 650px) {
  .row:first-of-type{
    display: flex;
    justify-content: space-between;
  }
  .footer-nav {
    width: 350px;
    margin-bottom: 0;
  }

}

@media (min-width: 800px) {
  .footer-container{
    width: 80%;
    margin: 0 10% 0 10%;
	}
  .row{
    padding: 0 1rem;
  }
}

@media (min-width: 1000px) {
  .footer-nav{
    width: 70%;
  }
  .footer-nav a {
    font-size: 18px;
	  padding: 0 1rem;
  }
}
</style>
