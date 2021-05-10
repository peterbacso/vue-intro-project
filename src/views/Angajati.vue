<template>
  <div class="angajati">
    <div class="searchTable">
      <p>Search by firstname:</p>
      <input type="text" v-model="searchEmployee" id="filterInput" name="filterInput">
    </div>
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>firstname</td>
          <td>lastname</td>
          <td>birthdate</td>
          <td>gender</td>
          <td>email</td>
          <td>delete</td>
        </tr>
      </thead>
      <tbody v-if="angajati.length > 0">
        <tr v-for="angajat in filteredClients" :key="angajat.id">
          <td>{{angajat.id}}</td>
          <td>{{angajat.firstName}}</td>
          <td>{{angajat.lastName}}</td>
          <td>{{convertDateFormat(angajat.birthdate)}}</td>
          <td>{{angajat.gender}}</td>
          <td>{{angajat.email}}</td>
          <td @click="deleteEmployee(angajat.id)">delete</td>
        </tr>
      </tbody>
      <tbody v-else>
        <td>No angajati to display.</td>
      </tbody>
    </table>
    <div id="form">
      <!-- Nume -->
      <label for="nume">Nume: </label>
      <input type="text" v-model="newAngajat.firstName" id="nume" name="nume"><br>
      <!-- Prenume -->
      <label for="prenume">Prenume: </label>
      <input type="text" v-model="newAngajat.lastName" id="prenume" name="prenume"><br>
      <!-- Data Nasterii -->
      <label for="data-nasterii">Data nasterii:</label>
      <input type="date" v-model="newAngajat.birthdate" id="data-nasterii" name="data-nasterii"><br>
      <!-- Gender -->
      <label for="sex">Gender: </label>
      <select id="sex" v-model="newAngajat.gender" name="gender">
          <option value="" disabled selected>Select your option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
      </select><br>
      <!-- Email -->
      <label for="email">Email:</label>
      <input type="email" v-model="newAngajat.email" id="email" name="email"><br>
      <br><br>
      <!-- Submit -->
      <button type="button" @click="addEmployee()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import moment from "moment";

export default {
  name: "Angajati",
  data() {
    return {
      searchEmployee: "",
      angajati: [],
      newAngajat: {
        firstName: "",
        lastName: "",
        birthdate: "",
        gender: "",
        email: "",
        picture: "defaultPic",
      }
    }
  },
  computed: {
    filteredClients() {
      const search = this.searchEmployee.toLowerCase().trim();
      if (!search) return this.angajati;
      return this.angajati.filter(c => c.firstName.toLowerCase().indexOf(search) > -1);
    }
  },
  created() {
    this.getEmployees()
  }, 
  methods: {
    convertDateFormat(date) {
      moment.locale('ro')
      return moment(date).format('LL')
    },
    getEmployees() {
      axios.get(this.$store.state.apiUrl + "/employee/Employee")
      .then(response => {
        this.angajati = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    addEmployee() {
      for (const key of Object.entries(this.newAngajat)) {
        if(key[1] == "") {
          return this.toast.warning("Fill in all fields!", this.$store.state.toastConfig);
        }
      }
      if(this.validateEmail(this.newAngajat.email) == false) {
        return this.toast.warning("Email format not valid.", this.$store.state.toastConfig);
      }
      axios.post(this.$store.state.apiUrl + "/employee/Employee", this.newAngajat)
      .then(response => {
        this.angajati.push(response.data)
        this.toast.success("Employee added.", this.$store.state.toastConfig);
        this.newAngajat = {
          firstName: "",
          lastName: "",
          birthdate: "",
          gender: "",
          email: "",
          picture: "defaultPic",
        }
      })
      .catch(e => {
        this.toast.error("Something went wrong.", this.$store.state.toastConfig);
        this.errors.push(e)
      })
    },
    deleteEmployee(id) {
      axios.delete(this.$store.state.apiUrl + "/employee/Employee/" + id)
      .then(() => {
        const index = this.angajati.map(item => item.id).indexOf(id);
        if (index > -1) {
          this.angajati.splice(index, 1);
        }
        this.toast.success("Employee deleted.", this.$store.state.toastConfig);
      })
      .catch(e => {
        this.errors.push(e)
        this.toast.error("Something went wrong.", this.$store.state.toastConfig);
      })
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
  setup() {
    const toast = useToast();
    return { toast };
  }
};
</script>

<style scoped lang="scss">
.searchTable {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-block: 0;
    margin-right: 10px;
  }
}
table {
  width: 100%;
  max-width: 900px;
  margin: 20px auto 50px;
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