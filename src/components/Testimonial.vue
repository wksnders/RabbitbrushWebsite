<script setup>
const props = defineProps({
  quoteObj: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div>
    <div class="testimonial-header">
      <img src="@/components/icons/bi--chat-quote-fill.svg" alt="Quote Icon" />
      <h4>{{quoteObj.name}}</h4>
    </div>
    <div class="testimonial-body">
      <p>{{quoteObj.quote}}</p>
    </div>
  </div>
</template>

<style>

</style>
