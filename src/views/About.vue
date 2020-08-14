<template>

  <Drip :bgColors="bg" />

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

<style>
</style>