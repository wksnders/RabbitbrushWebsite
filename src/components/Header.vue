<script setup>
</script>

<template>
  <div class="hero-section">
    <h1>Rabbitbrush Studio</h1>
    <h2>Art Classes <span class="small">for</span> All Ages</h2>
  </div>
</template>

<style scoped>

.hero-section{
  padding: 0 5% 1rem 5%;
}



h1{
  font-size:42px;
	color: var(--color-heading);
  font-family: 'Kalam';
  font-weight: 400;
}

h2{
  width: 100%;
  text-align: center;
  font-size:32px;
	color: var(--color-heading);
  font-family: 'Kalam';
  font-weight: 400;
}

.small{
  font-size:22px;
	color: var(--color-heading);
}

@media (min-width: 600px) {
  h1{
    font-size:64px;
  }

  h2{
    font-size:50px;
  }

  .small{
    font-size:36px;
  }
}

@media (min-width: 800px) {
  .hero-section{
    padding: 2rem 10% 1rem 10%;
  }
  h1{
    font-size:72px;
  }
  h2{
    font-size:64px;
  }
}
</style>
