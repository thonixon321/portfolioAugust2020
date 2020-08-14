<template>

  <Drip :bgColors="bg" />

</template>

<script>
import Drip from "../components/Drip";

export default {
  name: "Projects",
  data() {
    return {
      bg: {
        svg1_col1: "#ffb75e",
        svg1_col2: "#ed8f03",
      },
    };
  },

  methods: {},

  mounted() {},

  components: {
    Drip,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>