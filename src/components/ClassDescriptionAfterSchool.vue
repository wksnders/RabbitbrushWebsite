
<script setup>


</script>
<template>

<section id="after-school-art-class">
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
  </template>


<style>

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
  color: var(--color-text-accent);
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
  color: var(--color-text-accent-background);
  background-color: var(--color-background-accent);
}
.card-footer-buttons button:hover {
  color: var(--color-text-accent-background);
  background-color: var(--color-text-accent);
}

</style>
