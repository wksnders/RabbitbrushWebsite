<script setup>
import { ref } from 'vue'

const showDetails = ref(false)
</script>

<template>
	<article class="descriptions">
		<h1>Class Descriptions</h1>
    <section>
      <p class="desc-text">Through art education children begin to notice and appreciate colors and subtle details in the world around them.  With encouragement and guidance they learn to express themselves visually, building self confidence and self esteem and developing the courage to be a creator and an explorer of their world.</p>
      <p class="desc-text">In my classes, I focus on the skills necessary for students to become familiar with several different media, and learn enough control over them to be able to create their own works of art. I use a positive approach to direct and encourage my students.</p>
    </section>
    <section>
      <h3 class="desc-header">The After School Art Class</h3>
      <ul class="info-list">
        <li>
          <img src="@/components/icons/bi--people-fill.svg" alt="Group Icon" />
          <h5>For students age 9–18</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--calendar-event-fill.svg" alt="Calendar Icon" />
          <h5>Every Wednesday</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--clock-fill.svg" alt="Clock Icon" />
          <h5>4:30 – 6:00 P.M.</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--currency-dollar.svg" alt="Dollar Icon" />
          <h5>
            $65/month
          </h5>
        </li>
      </ul>
      <p class="desc-text">Tuition is due by the first class of each month. All supplies and
        clay firings are included in the monthly tuition. I keep my classes small and therefore there
        is limited seating available. Since this is a mixed age class it is emphasized that we are all
        on different levels of experience and we celebrate our individual unique vision for the art projects.
        No comparing art projects or judgements about anyone’s art and especially no negative comments about
        anyone’s project—especially their own. Students may stop attending at any time, however no refunds
        will be given for unused Wednesdays in the month.</p>
      <p class="desc-text">The After School Art Class has 3 to 5 classes per month depending on the number of Wednesdays in each month.
        November and December sometime have only 3 classes due to the holidays, but some months may have 5 Wednesdays.
        For Months with 5 Wednesdays, the 5th Wednesday will be used as a make-up class, that all students are welcome
        to attend, to make up for classes missed due to illness or family vacations etc. At the Make--up classes students
        may finish up work from previous classes, or I will also have a new project for students to do as well.
        Students will not be able to make up specific projects from the classes they have missed in the past. These
        are the only make-up classes I am able to accommodate.</p>
        <p class="desc-text">In the After School Art Class students learn to use different mediums such as Graphite and pen & ink drawing,
          Colored pencils, Watercolor pencils, Watercolors, Acrylic paints, soft pastels and oil pastels, charcoal, and
          hand building Ceramic Clay Sculpture. A schedule of classes is available twice a year, December and August,
          that lists the classes for the next season and specifically lets you know the subject we will be painting or
          drawing and tells what medium will be used for each project.  Classes are subject to change without notice when
          special circumstances arise.</p>
          <p class="desc-text">Students have the full hour and a half to complete their project each week. I do not require the students to
            clean up their space before they leave, I do all of the cleanup to give the students maximum time to finish
            their art.  Sometimes we occasionally run a few minutes late, especially on Ceramic Clay sculpting day. Please
            let me know if you need your student out exactly on time and I will see that they are ready to leave on time.</p>
    </section>
    <section>
      <h3 class="desc-header">The Adult Art Class</h3>
      <ul class="info-list">
        <li>
          <img src="@/components/icons/bi--people-fill.svg" alt="Group Icon" />
          <h5>Adult students</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--calendar-event-fill.svg" alt="Calendar Icon" />
          <h5>Every Thursday</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--clock-fill.svg" alt="Clock Icon" />
          <h5>7:00—9:30 P.M.</h5>
        </li>
        <li>
          <img src="@/components/icons/bi--currency-dollar.svg" alt="Dollar Icon" />
          <h5>
            $20.00 per class
          </h5>
        </li>
      </ul>
      <p class="desc-text">Tuition is due at the beginning of each class attended. Watercolor paper or Drawing Paper, 8 X 10 stretched
        canvases, paints, pens, etc. and other necessary supplies are provided free of charge for the projects in this class.
        <strong>You pay only for the classes you attend.</strong> You may quit at any time.
      </p>
      <p class="desc-text">Adult Class students learn various mediums such as pen & ink or graphite drawing skills, Watercolors and or Acrylic
        painting, etc.  Students may bring their own projects to work on, or join in teacher led group projects that as a class
        they decide they would like to learn.  Any student who does not want to do the project that the majority of the students
        in class want to do, will be given alternative ideas for individual teacher supervised projects instead. </p>
      <p class="desc-text">The adult class is designed to accommodate people with a busy schedule. You only pay for the classes you attend;
        tuition is due at the beginning of each class. I send out a weekly reminder text message, to people who are signed
        up for this service, and students reply to my text to let me know if they plan on attending or not. If an interested
        person is not signed up with me to receive a reminder text message, they are responsible to call or text me before
        5:00 P.M. to let me know if they plan to attend that night. <strong class="underline"> If no students have texted or called or replied to me by
        5:00 P.M. on Thursday that they plan on attending, the class may be cancelled for that night, and I will not guarantee
        that the studio will be open for that night. </strong>  </p>
    </section>

    <section class="images"></section>

		<!--<img src="https://i.imgur.com/FwnVqcr.jpeg" />-->
	</article>
</template>

<style>
.underline{
  text-decoration: underline;
}

.desc-header{
  padding: 1rem 0 0 0;
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
