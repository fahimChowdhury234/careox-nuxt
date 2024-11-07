<template>
   <div>
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
   const cursor = document.querySelector(".custom-cursor__cursor");
   const cursorinner = document.querySelector(".custom-cursor__cursor-two");
   const links = document.querySelectorAll("a");

   if (cursor && cursorinner) {
      document.addEventListener("mousemove", (e) => {
         const x = e.clientX;
         const y = e.clientY;
         cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      });

      document.addEventListener("mousemove", (e) => {
         const x = e.clientX;
         const y = e.clientY;
         cursorinner.style.left = x + "px";
         cursorinner.style.top = y + "px";
      });

      document.addEventListener("mousedown", () => {
         cursor.classList.add("click");
         cursorinner.classList.add("custom-cursor__innerhover");
      });

      document.addEventListener("mouseup", () => {
         cursor.classList.remove("click");
         cursorinner.classList.remove("custom-cursor__innerhover");
      });

      links.forEach((item) => {
         item.addEventListener("mouseover", () => {
            cursor.classList.add("custom-cursor__hover");
         });
         item.addEventListener("mouseleave", () => {
            cursor.classList.remove("custom-cursor__hover");
         });
      });
   }
});
</script>

<style scoped></style>
