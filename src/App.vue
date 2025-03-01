<script setup>
import { RouterLink, RouterView } from 'vue-router';
import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';
</script>

<template>
	<header>
    <myHeader></myHeader>
		<div class="nav-wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about-me">About</RouterLink>
				<RouterLink to="/class-descriptions">Class Descriptions</RouterLink>
				<RouterLink to="/testimonials">Testimonials</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />

  <myFooter></myFooter>
  <div class="background">
  </div>
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.background{
  background-color: transparent;
  background-image: url(//web.archive.org/web/20190318203231im_/http://nebula.wsimg.com/da90134618f8b12e6373006658897328?AccessKeyId=531592D248B589D87A56&alloworigin=1);
  background-position-x: center;
  background-position-y: top;
  background-position: center top;
  background-repeat: repeat;
  position: fixed; top: 0; bottom: 0; left: 0; right: 0;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  z-index: -1;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
  vertical-align:middle;
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
  min-height: 65px;
}
	header .nav-wrapper {
    /*background-image: url(//web.archive.org/web/20190111063157im_/http://nebula.wsimg.com/06b0d62c0f126fbdf14ca3e278865e58?AccessKeyId=764A40C494058CC0EF34&amp;disposition=0&amp;alloworigin=1);
		background-position-x: center;
    background-position-y: top;*/
    background-color: black;
    margin: 0 10%;
    display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
    min-height: 65px;
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

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .nav-wrapper {
    background-image: url(//web.archive.org/web/20190111063157im_/http://nebula.wsimg.com/06b0d62c0f126fbdf14ca3e278865e58?AccessKeyId=764A40C494058CC0EF34&amp;disposition=0&amp;alloworigin=1);
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
    min-height: 65px;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
