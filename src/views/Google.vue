<template>
  <div class="google">
    <SearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Google",
  components: {
    SearchBar
  },
};
</script>
