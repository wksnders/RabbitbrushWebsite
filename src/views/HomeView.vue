<script setup>
import 'vue3-carousel/carousel.css'
import { RouterLink } from 'vue-router';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
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
  breakpoints: {
    600:{
      height: 380,
    },
    800: {
      height: 440,
    },
    1024: {
      height: 500,
    },
    1200: {
      height: 600,
    },
  },
}

const images = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  url: `home_carousel${index + 1}.jpg`,
}))

</script>

<template>
	<main>
    <article>
      <h1>Welcome to Rabbitbrush Studio!</h1>
      <h5>Taught by Annette L. Emmer</h5>
      <section>
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
          <Slide v-for="image in images" :key="image.id">
            <img :src="`${base}${image.url}`" alt="Gallery Image" class="gallery-image" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </section>
      <section>
          <div class="contact-me">
            <img class="background-top" src="/top_black_box.png">
            <div class="background-mid"></div>
            <img class="background-bottom" src="/bottom_black_box.png"/>
            <div class="contact-me-content">
              <h2 class="contact">CONTACT ME</h2>
              <div class="contact-details">
                <div>
                  <h3 class="contact">Call +1801.694.1891</h3>
                <a class="contact" href="https://www.facebook.com/RabbitbrushArtStudios" referrerpolicy="no-referrer" target="_blank" alt="Facebook page(Opens in new tab)">facebook.com/RabbitbrushArtStudios</a>
                  <p class="soft">1619 W. Allegheny Dr.</p>
                  <p class="soft">Taylorsville, UT</p>
                </div>
              </div>
            </div>
          </div>
          <p class="main-text">
              Do you have a child who loves art and needs more creative challenges than what is offered in regular school?
              Do you have a child that needs more art, creativity and artistic expression to bring balance to their education?
              Bring more fun and creative expression into your child’s education with weekly recurring art classes led by an
              experienced art teacher.  Each class includes opportunities for individual creativity. <strong>Check out the
                <RouterLink to="/class-descriptions/#after-school-art-class" class="link">Class Description</RouterLink> for the After School Art Class! </strong>
          </p>
          <p class="main-text">
          Are you looking for a creative outlet for yourself? Something just for you? Maybe you are a complete beginner,
            searching for a new adventure or a way to unwind and add creative expression to your regular weekly routine?
            Perhaps you used to paint or sketch, years ago, and long for a way back into an activity you loved; or you are
            looking for a refresher course with instruction on familiar art mediums, or instruction on new art techniques
            and new mediums you are interested in. Instead of going out and buying a bunch of new art supplies that may just
            sit in a drawer unused, consider taking an affordable evening art class.  Often, without someone to get you started,
            those art supplies become a new source of stress due to the money you spent but are not using.  Art classes for you
            are more affordable than you might think. <strong>Check out the <RouterLink to="/class-descriptions/#adult-art-class" class="link">Class Description</RouterLink> of the Adult Art Class! </strong>
          </p>
      </section>
    </article>
	</main>
</template>

<style>
.contact{
	color: var(--color-box-heading);
  text-align: center;
}

section{
  width: 100%;
}

.soft{
  color: var(--vt-c-text-dark-2);
  text-align: center;
}

.contact-me{
  position: relative;
  margin: 1rem;
  aspect-ratio: 5/3;
  width: 312px;
}

@media (min-width: 600px) {
  .contact-me{
    float: left;
  }
}


.contact-me-content{
  padding: 1rem;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.contact{
  font-weight: 400;
}

.contact-details{
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.background-top{
  top: 0;
  position: absolute;
  height: 100px;
  width: 310px;
  z-index: 1;
}
.background-mid{
  top: 10%;
  position: absolute;
  height: 80%;
  width: 310px;
  background-color: #211b1a;
}
.background-bottom{
  bottom: 0;
  position: absolute;
  height: 31px;
  width: 310px;
  z-index: 1;
}

.main-text:first-of-type{

  margin: 1rem 0 0;
  padding: 1rem 0 .5rem;
}
.link{
  color: black;
  text-decoration: underline;
}



.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

li img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
