<script setup>
import { RouterLink, RouterView } from 'vue-router';
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
</script>

<template>
	<header>
    <myHeader></myHeader>
		<div class="nav-wrapper">
      <img class="nav-background" src="/nav_background.png" />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about-me">About</RouterLink>
				<RouterLink to="/class-descriptions">Classes</RouterLink>
				<RouterLink to="/testimonials">Testimonials</RouterLink>
				<RouterLink to="/gallery">Galleries</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />

  <myFooter></myFooter>
  <div class="background">
  </div>
</template>

<style scoped>


.background{
  background-color: transparent;
  background-image: url(/background.png);
  background-position-x: center;
  background-position-y: top;
  background-position: center top;
  background-repeat: repeat;
  position: fixed; top: 0; bottom: 0; left: 0; right: 0;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  min-width:  100dvw;
  overflow: hidden;
  z-index: -1;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

header {
	line-height: 1.5;
	max-height: 100vh;
}
	header .nav-wrapper {
    margin: 0 5% 1rem 5%;
    display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
    min-height: 55px;
    position: relative;
	}
    header .nav-wrapper .nav-background{
      width: 100%;
      height: 100%;
      position: absolute; top: 0; bottom: 0; left: 0; right: 0;
    }
nav {
  vertical-align:middle;
	width: 100%;
  height: 100%;
	font-size: 14px;
	text-align: center;
	margin-top: 1rem;
  z-index: 1;

}
nav a.router-link-exact-active {
	color: var(--color-background-accent);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 .3rem;
	border-left: 1px solid var(--color-box-heading);
}

nav a:first-of-type {
	border: 0;
}


@media (min-width: 600px) {
  nav {
	  font-size: 16px;
  }
  nav a {
  	padding: 0 .5rem;
  	border-left: .1rem solid var(--color-box-heading);
  }

}

@media (min-width: 800px) {
	header .nav-wrapper {
    margin: 0 10% 1rem 10%;
  }
  nav {
	  font-size: 20px;
    min-height: 65px;
    margin-top: 2rem;
  }
  nav a {
  	padding: 0 1rem;
  }

}

@media (min-width: 1000px) {
  nav {
	  margin-top: 1.5rem;
	  font-size: 26px;
  }
}
@media (min-width: 1200px) {
  nav {
	  margin-top: 1rem;
	  font-size: 30px;
  }
}
</style>
