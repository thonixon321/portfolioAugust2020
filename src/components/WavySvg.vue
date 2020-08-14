<template functional>
  <svg
    class="curvedSvg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1320 500"
    preserveAspectRatio="none"
  >
    <path
      fill="#f7f4f4"
      fill-opacity="1"
    >
      <animate
        attributeName="d"
        values="
          M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500;
          M0,100 C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 500 L0 500;
          M0,192 C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 500 L0 500;
          M0,292 C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320 500 L0 500;
          M0,192 C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500
        "
        keyTimes="0; 0.25; 0.5; 0.75; 1"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>
