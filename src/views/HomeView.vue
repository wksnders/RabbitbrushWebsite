<script setup>

</script>

<template>
	<main>
    <article>
      <section> Carousel placeholder </section>
      <section>
        <img class="class-img" src="" alt="">
        <div class="contact-me">
          <img class="background-top" src="/top_black_box.png">
          <img class="background-bottom" src="/bottom_black_box.png"/>
          <div class="contact-me-content">
            <h1 class="contact">CONTACT ME</h1>
            <div>
              <h1 class="contact">+1801.694.1891</h1>
              <p class="contact">facebook.com/RabbitbrushArtStudios</p>
              <p class="contact">annetteemmer@yahoo.com</p>
              <p class="soft">1619 W. Allegheny Dr.</p>
              <p class="soft">Taylorsville, UT</p>
            </div>
          </div>
        </div>
      </section>
    </article>
	</main>
</template>

<style>
.contact{
	color: var(--color-box-heading);
  text-align: center;
}

.soft{
  color: var(--vt-c-text-dark-2);
  text-align: center;
}

.contact-me-content{
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.contact-me{
  position: relative;
  padding: 1rem;
  aspect-ratio: 5/3;
  width: 50%;
}

.background-top{
  top: 0;
  position: absolute;
  height: 80%;
  width: 100%;
}
.background-bottom{
  bottom: 0;
  position: absolute;
  height: 20%;
  width: 100%;
}



</style>
