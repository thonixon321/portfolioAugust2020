<template>
  <div class="about-page">
    <Drip :bgColors="bg" />
    <div
      v-anime="{ delay: 1000, duration: 2000,  width: [0, '33%'], easing: 'easeOutExpo'}"
      class='half-bgs about-bg z-50 absolute right-0'
    ></div>
    <h1
      v-anime="{ delay: 1000, duration: 2000, translateX: [-1000, 0]}"
      class='about-me-header z-50 text-huge text-gray-200 font-bold'
    >Hi! I'm Thomas Nixon.</h1>
    <p
      v-anime="{ delay: 1000, duration: 2000, translateX: [2000, 0]}"
      class='about-me-subheader z-50 text-gray-200 text-3xl'
    >I've been doing web development for over three years. My coding journey began at Portland Community College where I earned a 4.0 GPA average. After a little over a year of college and my own personal training, I decided to apply for web design jobs and wound up getting hired as a front-end web developer by First Community Credit Union in Coquille Oregon. I have been working for them for over 2 years now.</p>
  </div>

</template>

<script>
import Drip from "../components/Drip";
export default {
  name: "About",

  data() {
    return {
      bg: {
        svg1_col1: "#4361e9",
        svg1_col2: "#9aacf8",
      },
    };
  },

  components: {
    Drip,
  },
};
</script>

<style scoped>
.about-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
h1 {
  position: absolute;
  top: 25%;
  left: 14%;
}
p {
  position: absolute;
  top: 38%;
  left: 14%;
  width: 50%;
}
.about-bg {
  background-image: url(/img/me_beach.ea282eff.png);
  background-size: cover;
  width: 38%;
  height: 100%;
}
</style>