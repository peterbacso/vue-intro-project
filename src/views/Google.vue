<template>
  <div class="google">
    <Header />
    <SearchBar />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Google",
  components: {
    Header,
    SearchBar,
    Footer
  },
};
</script>
