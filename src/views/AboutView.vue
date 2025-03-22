<script setup>

import 'vue3-carousel/carousel.css'
import { RouterLink } from 'vue-router';
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref } from 'vue'
const base = import.meta.env.BASE_URL

const currentSlide = ref(0)

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: true,
  touchDrag: true,
  pauseAutoplayOnHover: true,
  height: 320,
  autoplay: 4000,
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 2.5,
  wrapAround: true,
  touchDrag: false,
  gap: 10,
}

const images = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  url: `about_me_carousel${index + 1}.jpg`,
}))
</script>

<template>
	<article class="about">
    <section>
		  <h1>Teaching Art is my joy</h1>
		  <p class="about-text"><strong>Rabbitbrush Studio</strong> came into existence in 2007, in Rose Canyon, UT,
        in a small studio surrounded by voluminous Rubber Rabbit Brush bushes
        that bloomed brilliant yellow every late summer and fall.
        I moved to my current location in 2014 and was able to build a larger
        studio and teach many more students.</p>

      <p class="about-text">I now have nearly 50 years of art teaching experience with ages 4 through adult.
        I attended college for a total of 4 years, studying General education,
        Art and Humanities and Early childhood education. I have an associate’s degree in
        early childhood education. I worked with pre-school and school aged students for around 17 years.
        I was juried in to The Associated Utah Artists Professional Artists’ group when I was 30,
        then served as President, Vice President, secretary and historian in that group and maintained
        membership for more than 20 years.</p>

        <p class="about-text">I love to create meaningful art. Sharing my skills and joy in art with others through teaching makes
          life so rewarding. I have been married for over 50 years. We have 4 children and 6 grandchildren that
          I am very proud of, and along with them, my life mission is to also leave something beautiful in art
          behind in this world when I am gone, a visual art and art teaching legacy.
          I believe that I am creating a connection with relatives and friends that have not even been born yet.</p>
    </section>
    <section>
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide"
        :breakpoints="{
          600:{
            height: 380,
          },
          800: {
            height: 440,
          },
          1024: {
            height: 380,
          },
          1200: {
            height: 440,
          },
        }">
    <Slide v-for="image in images" :key="image.id">
      <img :src="`${base}${image.url}`" alt="Gallery Image" class="gallery-image" />
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide"


  :breakpoints="{
      600:{
        height: 90,
        itemsToShow: 3.5,
      },
      800: {
        height: 120,
        itemsToShow: 3.8,
      },
      1024: {
        height: 90,
        itemsToShow: 4.2,
      },
      1200: {
        height: 120,
        itemsToShow: 4.5,
      },
    }"
  >
    <Slide v-for="image in images" :key="image.id">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="['thumbnail', { 'is-active': isActive }]"
          @click="slideTo(currentIndex)"
        >
          <img :src="`${base}${image.url}`" alt="Thumbnail Image" class="thumbnail-image" />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
      </section>
  </article>
</template>

<style>

.about-text{
  padding: .3rem 0;
}


@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
    justify-content: space-between;
    gap: 2rem;
	}
}


.carousel {
  margin-top: 1rem;
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

li img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-image {
  border-radius: 16px;
}

#thumbnails {
  margin-top: 10px;
}

.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
