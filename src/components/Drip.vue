<template>
  <div class="liquid">
    <div class="first-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="linear-gradient">
            <stop
              offset="0"
              :stop-color="bgColors.svg1_col1"
            />
            <stop
              offset="1"
              :stop-color="bgColors.svg1_col2"
            />
          </linearGradient>
        </defs>
        <filter id="f4">
          <feOffset
            result="offOut"
            in="SourceGraphic"
            dx="0"
            dy="20"
          />
          <feColorMatrix
            result="matrixOut"
            in="offOut"
            type="matrix"
            values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
          />
          <feGaussianBlur
            result="blurOut"
            in="matrixOut"
            stdDeviation="30"
          />
          <feBlend
            in="SourceGraphic"
            in2="blurOut"
            mode="normal"
          />
        </filter>
        <path
          id="first"
          fill="url(#linear-gradient)"
          filter="url(#f4)"
          d="M -81.821551,-21.906142 C 65.217481,-19.222113 -99.173025,5136.9933 163.12643,5136.1341 372.98928,5085.4865 333.24842,3444.9806 712.9158,3778.3806 c 213.21531,95.6165 325.0284,-3028.36006 492.2741,-1999.0982 46.9236,288.7764 87.1916,953.0775 261.9843,1044.7244 204.8859,107.4258 186.4583,-1543.2399 366.031,-1310.0585 228.8013,-2.5899 -14.0606,-1533.727083 211.9269,-1535.866526 z"
        />
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  name: "Drip",
  props: {
    bgColors: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
.liquid {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}
</style>