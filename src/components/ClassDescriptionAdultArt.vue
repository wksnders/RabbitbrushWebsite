<script setup>


</script>

<template>

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
