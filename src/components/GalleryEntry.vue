<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
  description: { type: String, default: null },
  images: {
    type: Array,
    required: true,
    // [{ url: 'image.jpg', title: 'My Title', description: 'Short text' }]
  },
  galleryConfig: {
    type: Object,
    default: () => ({
      itemsToShow: 1,
      wrapAround: true,
      slideEffect: 'fade',
      mouseDrag: true,
      touchDrag: true,
      pauseAutoplayOnHover: true,
      height: 320,
      autoplay: 4000,
    }),
  },
  thumbnailsConfig: {
    type: Object,
    default: () => ({
      height: 80,
      itemsToShow: 2.5,
      wrapAround: true,
      touchDrag: false,
      gap: 10,
    }),
  },
  basePath: { type: String, default: '' },
})

const currentSlide = ref(0)
const slideTo = (nextSlide) => (currentSlide.value = nextSlide)
</script>

<template>
  <div class="carousel-wrapper">
    <!-- Title + Subtitle + Description -->
    <header v-if="title || subtitle || description" class="carousel-header">
      <h2 v-if="title" class="carousel-title">{{ title }}</h2>
      <p v-if="subtitle" class="carousel-subtitle">{{ subtitle }}</p>
      <p v-if="description" class="carousel-description">{{ description }}</p>
    </header>

    <!-- Main Gallery -->
    <Carousel
      id="gallery"
      v-bind="galleryConfig"
      v-model="currentSlide"
      :breakpoints="{
        600:{ height: 380 },
        800:{ height: 440 },
        1024:{ height: 380 },
        1200:{ height: 440 },
      }"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <div class="gallery-slide">
          <img
            :src="`${basePath}${image.url}`"
            :alt="image.title || 'Gallery Image'"
            class="gallery-image"
          />
          <div class="image-caption" v-if="image.title || image.description">
            <h3 v-if="image.title" class="image-title">{{ image.title }}</h3>
            <p v-if="image.description" class="image-description">{{ image.description }}</p>
          </div>
        </div>
      </Slide>
    </Carousel>

    <!-- Thumbnails -->
    <Carousel
      id="thumbnails"
      v-bind="thumbnailsConfig"
      v-model="currentSlide"
      :breakpoints="{
        600:{ height: 90, itemsToShow: 3.5 },
        800:{ height: 120, itemsToShow: 3.8 },
        1024:{ height: 90, itemsToShow: 4.2 },
        1200:{ height: 120, itemsToShow: 4.5 },
      }"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div
            :class="['thumbnail', { 'is-active': isActive }]"
            @click="slideTo(currentIndex)"
          >
            <img
              :src="`${basePath}${image.url}`"
              alt="Thumbnail Image"
              class="thumbnail-image"
            />
          </div>
        </template>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  margin-top: 1rem;
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel-header {
  text-align: center;
  margin-bottom: 1rem;
}
.carousel-title { font-size: 1.8rem; margin-bottom: 0.3rem; }
.carousel-subtitle { font-size: 1rem; color: #666; }
.carousel-description { font-size: 0.95rem; color: #555; margin-top: 0.5rem; }

.gallery-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-image {
  border-radius: 16px;
  width: 100%;
  height: auto;
  object-fit: contain;
}
.image-caption {
  margin-top: 0.5rem;
  text-align: center;
}
.image-title { font-size: 1.2rem; font-weight: bold; }
.image-description { font-size: 0.95rem; color: #555; }

#thumbnails { margin-top: 10px; }
.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}
.thumbnail.is-active,
.thumbnail:hover { opacity: 1; }
.thumbnail-image {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
