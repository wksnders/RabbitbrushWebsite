<script setup>
import { ref } from 'vue'
import router from '@/router';
import ClassDescriptionCard from '@/components/ClassDescriptionCard.vue';
import ClassDescriptionAdultArt from '@/components/ClassDescriptionAdultArt.vue';
import ClassDescriptionAfterSchool from '@/components/ClassDescriptionAfterSchool.vue';

const showDetails = ref(false);

const components = ref([ClassDescriptionAfterSchool,ClassDescriptionAdultArt,]);

function moveToFront(obj) {
  const index = components.value.indexOf(obj);

  if (index !== -1) {
    components.value.splice(index, 1);
  }

  components.value.unshift(obj);
}
</script>

<template>
	<article class="descriptions">
		<h1>Availible Classes</h1>
    <section class="cards">
      <ClassDescriptionCard :classObj="{
        name: 'After School Art Class',
        price: 65,
        priceFrequency: 'per month',
        imagePath: 'adult_class/IMG_6993.JPG',
        day: 'Wed',
        time: '4:30pm-6:00pm',
        ages: '9-18',
        details: ()=>{
          moveToFront(ClassDescriptionAfterSchool);
          router.push({ name: 'Class Descriptions', hash:'#after-school-art-class'});
        },
      }" />
      <ClassDescriptionCard :classObj="{
        name: 'The Adult Art Class',
        price: 20,
        priceFrequency: 'per class',
        imagePath: 'adult_class/IMG_6993.JPG',
        day: 'Thu',
        time: '7:00—9:30pm',
        ages: '18+',
        details: ()=>{
          moveToFront(ClassDescriptionAdultArt)
          router.push({ name: 'Class Descriptions', hash:'#adult-art-class'});
        },
      }" />

    </section>
    <section>
      <p class="desc-text">Through art education children begin to notice and appreciate colors and subtle details in the world around them.  With encouragement and guidance they learn to express themselves visually, building self confidence and self esteem and developing the courage to be a creator and an explorer of their world.</p>
      <p class="desc-text">In my classes, I focus on the skills necessary for students to become familiar with several different media, and learn enough control over them to be able to create their own works of art. I use a positive approach to direct and encourage my students.</p>
    </section>

    <component :is="components[0]"/>
    <component :is="components[1]"/>


    <section class="images"></section>

		<!--<img src="https://i.imgur.com/FwnVqcr.jpeg" />-->
	</article>
</template>

<style>
.underline{
  text-decoration: underline;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px 20px;
}

.desc-header{
  padding: 1rem 0 0.5rem 0;
}

.desc-img-container{
  padding: 0;
  width: 100%;
  height: auto;
}

.desc-img{
  width: 100%;
  height: auto;
}

.desc-text{
  padding: .3rem 0;
}
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}

.info-list {
  list-style: none;
  padding: 0;
}
.info-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.info-list img {
  width: 24px;
  height: 24px;
}
.tuition-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0.25rem;
}
.tuition-details {

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
