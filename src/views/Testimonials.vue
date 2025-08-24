<script setup>
import Testimonial from '@/components/Testimonial.vue'
const base = import.meta.env.BASE_URL

const testimonials = [
  { name: 'Trista E.', quote: `These classes are incredible! My kids are having so much fun, and our house is filled with the beautiful art that they're creating. They're so proud to show off their artwork to everyone who comes to visit.` },
  { name: 'Nicole Nuzman Laird', quote: `My daughter is gaining a lot of confidence, while exploring a variety of mediums and techniques. I highly recommend these classes.` },
  { name: 'Petrea Harris Loertscher', quote: `My little girl can't wait to take another class.` },
  { name: 'Caitlin Stevenson', quote: `My daughter loves taking art classes from Annette.` },
  { name: 'Charity Flanagan', quote: `I was at a loss trying to find a constructive outlet for my son’s interest in art. I searched for a long time to find the perfect fit for him, and I definitely found it at Rabbitbrush Studio. Annette is perfect for my son. She’s encouraging and attentive, and stretches him without pressuring him. With her, art is fun and challenging. She is a positive teacher and I’ve loved seeing my son’s talent develop under her skilled care.` },
  { name: 'Nicole Costello', quote: `My daughter started art classes with Annette in the summer and has really enjoyed all the different classes that she attended. My daughter is very particular about her work and Annette is always so patient with her, never makes her feel rushed and is very encouraging!` },
  { name: 'Sheree Hartley', quote: `Mrs. Emmer's extensive knowledge of art in different mediums has taught my children to expand their art abilities. My children have loved taking art lessons from Annette. She provides a relaxed, fun and encouraging environment where people of all ages can express their creativity.` },
  { name: 'Former Child Student', quote: `Annette knows what she's doing, taking this art class was one of the best decisions I’ve made. I learned so many different techniques and styles of art. It really gave me a head start for future classes.` },
  { name: 'Former Child Student', quote: `I am so impressed by her classes, there's a wide range of work that we do, and Annette always helps you out so you're not left there not knowing what to do. Best class ever!` }
]
</script>

<template>
  <article class="about">
    <section>
      <h1>Why Take my classes?</h1>
      <div v-for="(t, i) in testimonials" :key="i">
        <!-- Testimonial -->
        <Testimonial :quoteObj="t" />

        <!-- Image after every 3rd testimonial -->
        <div v-if="(i + 1) % 3 === 0" class="testimonial-image">
          <img :src="`${base}full_class.jpg`" alt="Placeholder Image" />
        </div>
      </div>
    </section>
  </article>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
