<template>
  <v-btn
    size="small"
    :href="path"
    target="_blank"
    :icon="icon"
    class="wow"
    rel="noopener noreferrer"
  >
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
    path: String,
  },
};
</script>

<style>
.wow {
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #000428, #004e92);
  background: linear-gradient(to right, #000428, #004e92);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
.wow:hover {
  color: unset;
  text-decoration: none;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
