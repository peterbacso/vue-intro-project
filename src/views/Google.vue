<template>
  <div class="google">
    <SearchBar />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Google",
  components: {
    SearchBar,
    Footer
  },
};
</script>
