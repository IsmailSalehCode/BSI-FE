<template>
  <v-app-bar
    :collapse="isCollapsed"
    density="compact"
    elevation="0"
    :class="isAtTop ? 'bg-black' : 'black-gradient-bg'"
  >
    <v-app-bar-title>
      <v-img :src="logo" alt="SpaceNGC logo" class="logo-img" />
    </v-app-bar-title>
    <template v-slot:append v-if="!isCollapsed">
      <v-col class="hidden-xs" v-for="item in menuItems" :key="item.title">
        <v-btn style="font-size: smaller" @click.prevent="item.action" text>{{
          item.title
        }}</v-btn>
      </v-col>
    </template>
    <v-spacer></v-spacer>
    <div :class="isCollapsed ? '' : 'd-flex d-sm-none'">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isAtTop: true,
      startY: 0,
      isCollapsed: false,
      logo: require("../assets/biggerngc.png"),
      //   logo: require("../assets/astronaut.png"),
      menuItems: [
        {
          title: "Публикации",
          action: this.blank,
        },
        {
          title: "Участвай",
          action: this.blank,
        },
        {
          title: "За автора",
          // tuka shte bude i about
          action: this.blank,
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      /**https://gist.github.com/takuboy93/95a03f9ec34e7e45a0c80891666898cb */
      let clamp = 50;
      // clamp is distance from top to when the 'collapsed' prop activates
      let scrollY = window.scrollY;
      // let direction = null;
      if (scrollY > this.startY && scrollY > clamp) {
        // direction = "going down...";
        this.isCollapsed = true;
      } else {
        // direction = "going up!";
        this.isCollapsed = false;
      }
      this.startY = scrollY;
      clamp = scrollY;
      // console.log(direction);

      const clampIsFullColor = 45;
      if (scrollY <= clampIsFullColor) {
        this.isAtTop = true;
      } else {
        this.isAtTop = false;
      }
    },
    blank() {
      alert("blank");
    },
    toggleAuthModal() {
      this.$refs.login_modal.toggleModal();
    },
  },
};
</script>

<style scoped>
.logo-img {
  max-height: 18px;
}
.black-gradient-bg {
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 2%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0.7) 51%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 2%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0.7) 51%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 2%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0.7) 51%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
</style>
