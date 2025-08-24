<script setup>
const base = import.meta.env.BASE_URL

</script>

<template>
	<article class="about">
    <section>
		  <h1>Teaching Art is my joy</h1>
      <img
        :src="`${base}full_class.jpg`"
        alt="Placeholder left"
        class="float-left-img"
      />
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
      <img
        :src="`${base}full_class.jpg`"
        alt="Placeholder right"
        class="float-right-img"
      />
        <p class="about-text">I love to create meaningful art. Sharing my skills and joy in art with others through teaching makes
          life so rewarding. I have been married for over 50 years. We have 4 children and 6 grandchildren that
          I am very proud of, and along with them, my life mission is to also leave something beautiful in art
          behind in this world when I am gone, a visual art and art teaching legacy.
          I believe that I am creating a connection with relatives and friends that have not even been born yet.</p>
    </section>

  </article>
</template>

<style>
h1{
  padding-bottom: 1rem;
}

.about-text{
  padding: .3rem 0;
  text-align: justify;
}
/* Floated left image */
.float-left-img {
  float: left;
  margin: 0 1rem 1rem 0;
  width: 50%;
  aspect-ratio: 4/3;
  height: auto;
  border-radius: 8px;
}

/* Floated right image */
.float-right-img {
  float: right;
  margin: 0 0 1rem 1rem;
  width: 50%;
  aspect-ratio: 4/3;
  height: auto;
  border-radius: 8px;
  margin-bottom: 3rem;
}
</style>
