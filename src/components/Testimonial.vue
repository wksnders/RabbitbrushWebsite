<script setup>
import UserIcon from "@/components/icons/UserIcon.vue";

const props = defineProps({
  quoteObj: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="testimonial">
    <div class="testimonial-header">
      <UserIcon class="icon" />
      <h4>{{quoteObj.name}} Says:</h4>
    </div>
    <div class="testimonial-body">
      <p>{{quoteObj.quote}}</p>
    </div>
  </div>
</template>

<style scoped>
.testimonial {
  margin: 1rem 0;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}
.icon {
  max-height: 24px;
  aspect-ratio: 1;
}
@media (min-width: 800px) {
	.icon {
    max-height: 28px;
  }
}

@media (min-width: 1000px) {
	.icon {
    max-height: 32px;
  }
}

</style>
