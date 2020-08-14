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
          d="M -67.917284,-2.3344456 C 77.061958,127.77681 -136.62781,1460.3155 121.99723,1418.6564 c 187.4864,-84.167 299.22749,-312.0442 493.07467,-327.3147 161.85319,3.1555 367.13585,207.9825 461.7339,229.6337 172.2296,39.4192 275.9046,-87.3263 347.4561,-49.0847 150.8476,80.6223 327.956,146.5765 442.1284,65.3793 C 2091.9865,1211.7225 1806.4192,100.79167 2029.241,-2.9202549 Z"
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