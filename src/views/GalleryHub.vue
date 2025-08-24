<script setup>
import { useGalleries } from '@/composables/useGalleries';
import { RouterLink } from 'vue-router';

const { all: galleries } = useGalleries();

// Map galleries into columns
const columns = galleries.value.map(g => ({
  title: g.title,
  text: g.summary,
  link: `/gallery/${g.link}`,
  button: `View ${g.title}`
}));
</script>

<template>
  <article class="container">
    <div
      v-for="(col, index) in columns"
      :key="index"
      class="column"
    >
      <h2>{{ col.title }}</h2>
      <p>{{ col.text }}</p>
      <RouterLink :to="col.link" class="btn">
        {{ col.button }}
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
article{
  padding: 1rem 10% 1rem 10%;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.column {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.column h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.column p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  color: var(--color-text-accent-background);
  background-color: var(--color-background-accent);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.btn:hover {
  color: var(--color-text-accent-background);
  background-color: var(--color-text-accent);
}
</style>
