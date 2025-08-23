<script setup>
const columns = [
  {
    title: "After School Gallery",
    text: "This is some example paragraph text for the first column. It adjusts nicely to fit the layout.",
    link: "#after-school-gallery",
    button: "Go to Section 1"
  },
  {
    title: "Adult Gallery",
    text: "Here’s another column with its own paragraph and button. Great for highlighting features or info.",
    link: "#adult-gallery",
    button: "Go to Section 2"
  },
  {
    title: "My Art Gallery",
    text: "A third column with paragraph text and a call-to-action button. Perfect for summaries or promos.",
    link: "#my-gallery",
    button: "Go to Section 3"
  }
]
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
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
