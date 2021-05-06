<template>
  <div class="angajati">
    <img alt="Vue logo" src="../assets/logo.png" />
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>firstname</td>
          <td>lastname</td>
          <td>email</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="angajat in angajati" :key="angajat.id">
          <td>{{angajat.id}}</td>
          <td>{{angajat.firstName}}</td>
          <td>{{angajat.lastName}}</td>
          <td>{{angajat.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Angajati",
  data() {
    return {
      angajati: [],
    }
  },
  created() {
    this.getEmployees()
  }, 
  methods: {
    getEmployees() {
      axios.get(`https://localhost:5001/employee/Employee`)
      .then(response => {
        this.angajati = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
};
</script>

<style scoped lang="scss">
table {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  &, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th, td {
    padding: 15px;
    text-align: left;
  }
}
</style>