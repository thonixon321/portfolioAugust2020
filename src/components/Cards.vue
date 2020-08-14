<template functional>
  <div
    class='about-section'
    id="about"
    ref="about"
  >
    <div class='info-container mx-auto'>
      <div class='info-box shadow-lg'>

        <svg
          viewBox="0 0 20 20"
          fill="white"
          class="arrow-narrow-up w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class='arrow-circle-bg arrow-circle-bg--1'></div>
        <div class='info-arrow info-arrow--1'></div>
        <div class='text-area'>
          <p class="font-bold text-2xl">Years of On-the-job Experience</p>
          <p class="text-2xl">After years of working for a credit union, I'm prepared for challenging tasks</p>
        </div>
      </div>
      <div class='info-box shadow-lg'>
        <div class='text-area'>
          <p class="font-bold text-2xl">Modern Front-end with Vue.js</p>
          <p class="text-2xl">My experience with the Vue.js framework will keep your front-end up to date</p>
        </div>
        <svg
          viewBox="0 0 20 20"
          fill="white"
          class="arrow-narrow-up w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class='arrow-circle-bg arrow-circle-bg--2'></div>
        <div class='info-arrow info-arrow--2'></div>
      </div>
      <div class='info-box shadow-lg'>
        <div class='text-area'>
          <p class="font-bold text-2xl">Powerful Back-end with PHP/Laravel</p>
          <p class="text-2xl">My knowledge of PHP and the Laravel framework will be sure to keep things running smoothly</p>
        </div>
        <svg
          viewBox="0 0 20 20"
          fill="white"
          class="arrow-narrow-up w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div class='arrow-circle-bg arrow-circle-bg--3'></div>
        <div class='info-arrow info-arrow--3'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>
