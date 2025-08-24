<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from 'vue-router';
import GalleryCarousel from '@/components/GalleryEntry.vue';
import { useCarousels } from "@/composables/useCarousels";
import { useGalleries } from "@/composables/useGalleries";

const base = import.meta.env.BASE_URL;

const route = useRoute();
const galleryName = route.params.galleryName; // from router

// Pull gallery info (title, subtitle, description, folder) from useGalleries
const { getGallery } = useGalleries();
const galleryInfo = getGallery(galleryName) || {
  folder: galleryName,
  title: galleryName.replace(/_/g, ' '),
  subtitle: '',
  description: ''
};

// Load carousels
const { carousels, loaded, loadCarousels } = useCarousels();
onMounted(loadCarousels);

// Map each carousel (subfolder or top-level folder) to images and metadata
const galleryData = computed(() => {
  if (!loaded.value || !carousels.value) return [];

  const folderData = carousels.value[galleryInfo.folder];
  if (!folderData) return [];

  // Single carousel case
  if (Array.isArray(folderData.images)) {
    return [{
      name: galleryInfo.folder,
      meta: folderData.meta || {},
      images: folderData.images
        .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
        .map(img => ({
          url: img.filename,
          title: img.title ?? null,
          description: img.description ?? null
        }))
    }];
  }

  // Multiple sub-carousel case
  return Object.entries(folderData).map(([subName, subData]) => ({
    name: `${galleryInfo.folder}/${subName}`,
    meta: subData.meta || {},
    images: subData.images
      .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
      .map(img => ({
        url: img.filename,
        title: img.title ?? null,
        description: img.description ?? null
      }))
  }))
  .sort((a, b) => (a.meta.order ?? 9999) - (b.meta.order ?? 9999));
});
</script>

<template>
  <article class="gallery-page">
    <h1>{{ galleryInfo.title }}</h1>
    <p v-if="galleryInfo.subtitle">{{ galleryInfo.subtitle }}</p>
    <p v-if="galleryInfo.description">{{ galleryInfo.description }}</p>

    <div v-if="loaded && galleryData.length">
      <GalleryCarousel
        v-for="carousel in galleryData"
        :key="carousel.name"
        :title="carousel.meta.title || carousel.name.replace(`${galleryInfo.folder}/`, '').replace(/_/g, ' ')"
        :subtitle="carousel.meta.subtitle || null"
        :description="carousel.meta.description || null"
        :images="carousel.images"
        :base-path="`${base}images/carousels/${carousel.name}/`"
      />
    </div>
    <p v-else-if="loaded">No galleries found in "{{ galleryInfo.folder }}"</p>
    <p v-else>Loading galleries...</p>
  </article>
</template>

<style scoped>
article{
  padding: 1rem 10% 1rem 10%;
}

.gallery-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  text-align: center;
}

p {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
