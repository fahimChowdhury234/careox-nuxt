<template>
   <section class="donate-info">
      <div class="donate-info__shape" :style="{ backgroundImage: `url(${donateData.donateInfo.shapeImage})` }"></div>
      <div class="container">
         <div class="row">
            <div class="col-lg-4">
               <div class="donate-info__left" :style="{ backgroundImage: `url(${donateData.donateInfo.leftBackground})` }">
                  <div class="donate-info__left__icon"><span class="icon-charity-two"></span></div>
                  <h5 class="donate-info__left__title">Donate Now</h5>
                  <p class="donate-info__left__text">24/7 Support</p>
               </div>
            </div>
            <div class="col-lg-8">
               <div class="donate-info__area" :style="{ backgroundImage: `url(${donateData.donateInfo.areaBackground})` }">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right">
                        <span class="sec-title__tagline__border"></span>
                        {{ donateData.donateInfo.titles.tagline }}
                     </h6>
                     <h3 class="sec-title__title bw-split-in-left" v-html="donateData.donateInfo.titles.mainTitle"></h3>
                  </div>
                  <div class="donate-info__area__date"><i class="icofont-ui-calendar"></i>{{ donateData.donateInfo.date }}</div>
                  <div class="donate-info__area__progress">
                     <div class="donate-info__area__progress__bar" v-observe-visibility="visibilityChanged">
                        <div class="donate-info__area__progress__inner count-bar" :style="{ width: startCounter ? donateData.donateInfo.progress.percent + '%' : '0%' }">
                           <div class="donate-info__area__progress__number count-text">
                              <count-up :startVal="0" :endVal="startCounter ? donateData.donateInfo.progress.percent : 0"></count-up>
                              %
                           </div>
                        </div>
                     </div>

                     <div class="donate-info__area__progress__text">
                        <span>{{ donateData.donateInfo.progress.goals }}</span>
                        <span>{{ donateData.donateInfo.progress.donate }}</span>
                     </div>
                  </div>
                  <form action="#" class="donate-info__form">
                     <div class="donate-info__form__top">
                        <div class="donate-info__form__amount">
                           <span class="donate-info__form__amount__sign">$</span>
                           <input
                              type="text"
                              :value="donateData.donateInfo.form.defaultAmount"
                              name="donate_amount"
                              id="donate_amount"
                              placeholder="Amount"
                              class="donate-info__form__amount__input"
                              ref="donateInput"
                           />
                        </div>
                        <div class="donate-info__form__buttons">
                           <button
                              v-for="amount in donateData.donateInfo.form.buttonAmounts"
                              :key="amount"
                              type="button"
                              class="donate-info__form__buttons__item"
                              :class="{ active: selectedAmount === amount }"
                              @click="setAmount(amount)"
                           >
                              $<span class="donate-info__form__buttons__amount">{{ amount }}</span>
                           </button>
                           <button type="button" class="donate-info__form__buttons__item" @click="focusInput">
                              {{ donateData.donateInfo.form.buttonLabels[0] }}
                           </button>
                        </div>
                     </div>
                     <div class="donate-info__form__submit">
                        <button type="submit" class="careox-btn">
                           <span>{{ donateData.donateInfo.form.buttonLabels[1] }}</span>
                        </button>
                        <img :src="donateData.donateInfo.form.arrowImage" alt="careox" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { donateData } from "~/data/DonationOne";
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};

const selectedAmount = ref(donateData.donateInfo.form.defaultAmount); // Reactive variable for selected amount

const setAmount = (amount) => {
   selectedAmount.value = amount; // Update selected amount
   donateData.donateInfo.form.defaultAmount = amount; // Set input value
};

const focusInput = () => {
   const input = document.querySelector("#donate_amount");
   if (input) {
      input.focus(); // Focus on the input field
      selectedAmount.value = "";
      donateData.donateInfo.form.defaultAmount = "";
   }
};
</script>

<style scoped>
/* Add any necessary custom styles here */
</style>
