<template>
  <div id="app">

    <nav
      v-anime="{ opacity: [0,1], duration: 2000, delay: 2000}"
      class='nav absolute top-0 left-0'
    >

      <div
        @click="homeRoute"
        class='nav__logo cursor-pointer text-gray-100'
      >
        Logo
        <span class="nav__logo--name">
          TomDesigns</span>
      </div>

      <ul class='nav__items text-gray-800'>

        <li
          @click="projectsRoute"
          class='nav__item'
        >
          Projects
        </li>

        <li
          @click="aboutRoute"
          class='nav__item'
        >About</li>

        <li class='nav__item'>Contact</li>

      </ul>
    </nav>
    <div class="home-page">
      <div class="hero-section text-white">

        <div class='heading text-huge font-bold'>
          Clean and <span class="underline">intuitive</span> design? I'm your huckleberry.
        </div>

        <div class='subheading text-4xl'>
          <p>I am a top-notch web developer dedicated to making the impossible possible, and having fun while doing it!</p>
          <button class='btn hover:bg-teal-300'>View my work</button>
        </div>

        <WavySvg />
      </div>
      <Cards />
      <div class='flex flex-col items-center strengths-section w-full font-bold my-32 text-gray-800 relative'>
        <div
          class='hiddenEl-1'
          ref="startRoadOne"
        ></div>
        <h1 class='text-huge mx-auto mb-4'>STRENGTHS</h1>
        <Dashes v-if="roadOne" />
        <div
          class='strength-item laptop'
          v-if="roadOne"
        >
          <figure
            class=""
            v-anime="{ rotate: '1turn', duration: 4000, delay: 3000, opacity: [0, 1], scale: [0, 1] }"
          >
            <img
              src='./assets/images/laptop.png'
              alt='laptop'
            >
          </figure>
          <p
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class="text-3xl text-center font-bold text-gray-600"
          >Always aiming for an easy and enjoyable experience for my users!</p>
          <button
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class='btn hover:bg-teal-300'
          >Show more</button>
        </div>
        <DashesTwo v-if="roadOne" />
        <div
          v-if="roadOne"
          class='strength-item phone'
        >
          <figure v-anime="{ rotate: '1turn', duration: 4000, delay: 3500, opacity: [0, 1], scale: [0, 1] }">
            <img
              src='./assets/images/me_in_phone-cut.png'
              alt='person in phone'
            >
          </figure>
          <p
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class="text-3xl font-bold text-center text-gray-600"
          >Responsive design? I'm literally into it!</p>
          <button
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class='btn hover:bg-teal-300'
          >Show more</button>
        </div>
        <div
          class='hiddenEl-2'
          ref="startRoadTwo"
        ></div>
        <DashesThree v-if="roadTwo" />
        <div
          v-if="roadTwo"
          class='strength-item notepad'
        >
          <figure v-anime="{ rotate: '1turn', duration: 4000, delay: 3000, opacity: [0, 1], scale: [0, 1] }">
            <img
              src='./assets/images/notepad.png'
              alt='notepad'
            >
          </figure>
          <p
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class="text-3xl font-bold text-center text-gray-600"
          >It all starts with a solid plan, and I've got a ton of good ones!</p>
          <button
            v-anime="{ delay: 3000, duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class='btn hover:bg-teal-300'
          >Show more</button>
        </div>
        <DashesFour v-if="roadTwo" />
        <div
          v-if="roadTwo"
          class='strength-item coffee'
        >
          <figure v-anime="{ rotate: '1turn', duration: 4000, delay: 3500, opacity: [0, 1], scale: [0, 1] }">
            <img
              src='./assets/images/coffee-real.png'
              alt='coffee'
            >
          </figure>
          <p
            v-anime="{ delay: 3000,  duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class="text-3xl font-bold text-center text-gray-600"
          >Like a good cup of coffee, I'm a welcome addition to your day!</p>
          <button
            v-anime="{ delay: 3000,  duration: 4000, opacity: [0, 1], scale: [0, 1] }"
            class='btn hover:bg-teal-300'
          >Show more</button>
        </div>
      </div>
      <Footer />

    </div>
    <transition
      v-on:enter="transitionNameEnter"
      v-on:leave="leaveFirst"
      v-bind:css="false"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import WavySvg from "./components/WavySvg";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Dashes from "./components/Dashes";
import DashesTwo from "./components/DashesTwo";
import DashesThree from "./components/DashesThree";
import DashesFour from "./components/DashesFour";
import { getElementPos } from "./mixins/getElementPos";
import { mapActions } from "vuex";
export default {
  name: "App",

  mixins: [getElementPos],

  data() {
    return {
      transitionNameEnter: "",
      transitionNameLeave: "",
      ticking: false,
      roadOne: false,
      roadTwo: false,
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/");
      const fromDepth = from.path.split("/");

      console.log(toDepth, fromDepth);

      if (toDepth[1] === "projects" || toDepth[1] === "about") {
        this.transitionNameEnter = this.enterFirst;
      } else {
        this.transitionNameEnter = this.leaveFirst;
      }
    },
  },

  methods: {
    ...mapActions(["updateWindowDimensions"]),

    homeRoute() {
      this.$router.push({ name: "Home" });
    },

    projectsRoute() {
      this.$router.push({ name: "Projects" });
    },

    aboutRoute() {
      this.$router.push({ name: "About" });
    },

    enterFirst(el, done) {
      console.log(el);
      this.$anime({
        targets: "#first",
        translateY: [-1600, 0],
        easing: "easeOutExpo",
        opacity: 1,
        complete: done,
      });
    },

    leaveFirst(el, done) {
      console.log(el);
      this.$anime({
        targets: "#first",
        translateY: -1500,
        easing: "easeOutExpo",
        complete: done,
      });
    },

    requestTick: function () {
      // Prevent initiation of another rAF if one is already requested.
      if (!this.ticking) {
        requestAnimationFrame(this.animationHandler);
      }

      this.ticking = true;
    },

    // Loops through animated elements, activates animation if in viewport.
    animationHandler: function () {
      let elemPos1 = this.getElementPos(this.$refs.startRoadOne);
      let elemPos2 = this.getElementPos(this.$refs.startRoadTwo);
      console.log(elemPos1.top, elemPos1.bottom, elemPos2.top, elemPos2.bottom);
      if (elemPos1.top >= -20 && elemPos1.bottom <= 105) {
        this.roadOne = true;
      }

      if (elemPos2.top >= -90 && elemPos2.bottom <= 245) {
        this.roadOne = true;
        this.roadTwo = true;
      }
      // Reset tick to allow further raf to be called.
      this.ticking = false;
    },
  },

  created() {
    window.addEventListener("resize", this.updateWindowDimensions);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.requestTick);
  },

  mounted() {
    let services = document.querySelectorAll(".info-box");
    let self = this;
    this.requestTick();
    window.addEventListener("scroll", this.requestTick);

    this.$anime({
      targets: ".heading",
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: 800,
      duration: 1800,
    });

    this.$anime({
      targets: ".subheading",
      translateX: [50, 0],
      opacity: [0, 1],
      delay: 1000,
      duration: 1800,
    });

    this.$anime({
      targets: "div.info-box",
      opacity: [0, 1],
      scale: [0, 1],
      easing: "easeOutQuad",
      delay: this.$anime.stagger(300, { start: 800 }),
    });

    services.forEach((service) => {
      service.addEventListener("mouseenter", () => {
        self.$anime.remove(service.querySelector(".arrow-circle-bg"));
        self.$anime.remove(service.querySelector(".info-arrow"));
        self.$anime.remove(service.querySelector("svg"));
        self.$anime({
          targets: service.querySelector(".arrow-circle-bg"),
          easing: "easeOutExpo",
          scale: 30,
        });
        self.$anime({
          targets: service.querySelector(".info-arrow"),
          easing: "easeOutExpo",
          scale: 2,
          duration: 1300,
        });
        self.$anime
          .timeline()
          .add({
            targets: service.querySelector("svg"),
            translateX: -10,
            translateY: 10,
            rotate: 45,
            easing: "easeOutExpo",
            duration: 400,
          })
          .add({
            targets: service.querySelector("svg"),
            translateX: 0,
            translateY: 0,
            rotate: 45,
            easing: "easeOutExpo",
            duration: 900,
            offset: 100,
          });
      });

      service.addEventListener("mouseleave", () => {
        self.$anime.remove(service.querySelector(".arrow-circle-bg"));
        self.$anime.remove(service.querySelector(".info-arrow"));
        self.$anime.remove(service.querySelector("svg"));
        self.$anime({
          targets: service.querySelector(".arrow-circle-bg"),
          easing: "easeOutExpo",
          scale: 1,
          duration: 900,
        });
        self.$anime({
          targets: service.querySelector(".info-arrow"),
          easing: "easeOutExpo",
          scale: 1,
          duration: 900,
        });
        self.$anime
          .timeline()
          .add({
            targets: service.querySelector("svg"),
            translateX: -10,
            translateY: 10,
            rotate: 45,
            easing: "easeOutExpo",
            duration: 400,
          })
          .add({
            targets: service.querySelector("svg"),
            translateX: 0,
            translateY: 0,
            rotate: 45,
            easing: "easeOutExpo",
            duration: 900,
            offset: 100,
          });
      });
    });
  },

  components: {
    Cards,
    Dashes,
    DashesTwo,
    DashesThree,
    DashesFour,
    Footer,
    WavySvg,
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";
#app {
  width: 100%;
  height: 100%;
  background: #f4f5f7;
  position: relative;
}
.home-page {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #f7f4f4;
}
.hero-section {
  background-image: url(./assets/images/retroBG.svg);
  background-attachment: fixed;
}

.strengths-section {
  height: 180rem;

  svg {
    height: 40rem;
  }
}

.laptop {
  position: absolute;
  left: 11%;
  top: 6%;
}
.laptop img {
  width: 40rem;
}

.phone {
  position: absolute;
  right: 14%;
  top: 32%;
}

.phone img {
  width: 40rem;
  margin-bottom: -1rem;
}

.hiddenEl-1 {
  position: absolute;
  right: 9%;
  top: -5%;
  width: 103rem;
  height: 30rem;
  opacity: 0;
  z-index: -1;
}

.hiddenEl-2 {
  position: absolute;
  right: 14%;
  top: 42%;
  width: 103rem;
  height: 100%;
  opacity: 0;
  z-index: -1;
}

.notepad {
  position: absolute;
  left: 11%;
  top: 60%;

  img {
    width: 50rem;
    margin-bottom: 2rem;
  }
}

.coffee {
  position: absolute;
  right: 17%;
  top: 75%;

  img {
    width: 37rem;
    margin-bottom: -10rem;
  }
}

.svg-dash-container {
  position: relative;
  height: 40rem;
  width: 88%;
}

.strength-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 35rem;
  z-index: 2;
}
</style>
