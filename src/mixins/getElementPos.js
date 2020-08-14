export const getElementPos = {
  methods: {
    // Returns given element's top, center, and bottom positions in rounded percentages
    getElementPos: function(el) {
      var rect = el.getBoundingClientRect(),
        top = rect.top,
        bottom = rect.bottom,
        center = top + rect.height / 2;

      // console.log({
      //   top: Math.round((top / this.windowHeight) * 100),
      //   center: Math.round((center / this.windowHeight) * 100),
      //   bottom: Math.round((bottom / this.windowHeight) * 100),
      // });
      // Divide value by window height then multiply by 100 to get percentage
      return {
        top: Math.round((top / this.windowHeight) * 100),
        center: Math.round((center / this.windowHeight) * 100),
        bottom: Math.round((bottom / this.windowHeight) * 100),
      };
    },
  },

  computed: {
    windowHeight() {
      return this.$store.state.windowHeight;
    },
  },
};
