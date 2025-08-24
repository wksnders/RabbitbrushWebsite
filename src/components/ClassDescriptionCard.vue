<script setup>
import { computed } from 'vue'

const props = defineProps({
  classObj: {
    type: Object,
    required: true,
  }
})

const base = import.meta.env.BASE_URL

const imageUrl = computed(() => `${base}${props.classObj.imagePath}`)
</script>

<template>

<div class="card">
 <div class="card-header">
    <h3>{{ classObj.name }}</h3>
    <p>
      <strong class="light">${{ classObj.price }}</strong> {{classObj.priceFrequency}}
    </p>
 </div>
 <div class="card-image-container">
   <img :src="imageUrl" class="card-image" :alt="classObj.name" />
 </div>
 <div class="card-footer">
   <div class="card-footer-details">
      <p>{{ classObj.day }} {{ classObj.time }}</p>
      <p>Ages {{ classObj.ages }}</p>
   </div>
   <div class="card-footer-buttons">
      <button @click="classObj.details()">Details</button>
      <button>Gallery</button>
    </div>
  </div>
</div>

</template>

<style scoped>

.card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-header {
  padding: 16px;
  background-color: var(--color-background-mute);
  border-bottom: 1px solid var(--color-border);
}

.card-header h3 {
  margin-bottom: 8px;
}

.card-header p {
  font-size: 0.95rem;
  color: var(--vt-c-text-light-2);
}

.card-header .light {
  color: var(--vt-c-text-light-2);
}

.card-image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-footer {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-footer-details{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.card-footer-details p {
  margin-bottom: 4px;
  font-size: 0.95rem;
}

.card-footer-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.card-footer-buttons button {
  flex: 1;
  padding: 8px 12px;
  font-size: 0.95rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.card-footer-buttons > button:first-child {
  color: var(--color-text);
  background-color: var(--color-background-accent);
}
.card-footer-buttons button:hover {
  color: var(--color-text-accent);
  background-color: var(--color-text-accent-background);
}

</style>
