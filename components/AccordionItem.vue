<template>
   <client-only>
      <div class="accrodion" :class="{ active: isActive }"
         :style="{ '--accent-color': accordionItem?.accentColor || '#000' }" v-auto-animate="{ duration: 300 }">
         <div class="accrodion-title" @click="toggleAccordion">
            <h4>
               <span class="accrodion-title__number"></span>
               {{ accordionItem?.question || 'Loading...' }}
               <span class="accrodion-title__icon"></span>
            </h4>
         </div>
         <div class="accrodion-content" v-if="isActive">
            <div class="inner">
               <p>{{ accordionItem?.answer || 'Loading answer...' }}</p>
            </div>
         </div>
      </div>
   </client-only>

</template>

<script setup>
const props = defineProps({
   accordionItem: {
      type: Object,
      required: true,
      default: () => ({ question: "", answer: "", accentColor: "" }),
   },
   isActive: {
      type: Boolean,
      default: false,
   },
});


const emit = defineEmits(["toggle"]);

const toggleAccordion = () => {
   emit("toggle");
};
</script>

<style scoped>
/* Scoped styles for accordion item */
</style>
