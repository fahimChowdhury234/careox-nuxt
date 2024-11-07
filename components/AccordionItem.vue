<template>
   <div class="accrodion" :class="{ active: isActive }" :style="{ '--accent-color': accordionItem.accentColor }" v-auto-animate="{ duration: 300 }">
      <div class="accrodion-title" @click="toggleAccordion">
         <h4>
            <span class="accrodion-title__number"></span>
            {{ accordionItem.question }}
            <span class="accrodion-title__icon"></span>
         </h4>
      </div>
      <div class="accrodion-content" v-if="isActive">
         <div class="inner">
            <p>{{ accordionItem.answer }}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   accordionItem: Object,
   isActive: Boolean,
});

const emit = defineEmits(["toggle"]);

const toggleAccordion = () => {
   emit("toggle");
};
</script>

<style scoped>
/* Scoped styles for accordion item */
</style>
