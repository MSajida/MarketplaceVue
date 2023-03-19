<template>
  <div>
    <h4>User Registration</h4>
    <form class="col-lg-6 offset-lg-3">
      <div class="">
        <div class="form-group row">
          <label for="919 Number" class="col-sm-4 col-form-label">919 Number</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.sID " required />
          </div>
        </div>
        <div class="form-group row">
          <label for="fname" class="col-sm-4 col-form-label">First Name</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.firstName"  required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="lname" class="col-sm-4 col-form-label">Last Name</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.lastName"  required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="lname" class="col-sm-4 col-form-label">Password</label>
          <div class="col-sm-5">
            <input type="password" class="form-control" v-model="student.password" required />
          </div>
        </div>
        <div class="form-group row">
          <label for="lname" class="col-sm-4 col-form-label">Confirm Password</label>
          <div class="col-sm-5">
            <input type="password" class="form-control" v-model="student.confirmPassword" required />
          </div>
        </div>

        <div class="form-group row">
          <label for="Email" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.email" required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-4 col-form-label">Contact number</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.phoneNumber" required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-sm-4 col-form-label">Address</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.address" required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="city" class="col-sm-4 col-form-label">City</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.city" required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="state" class="col-sm-4 col-form-label">State</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.state" required/>
          </div>
        </div>
        <div class="form-group row">
          <label for="Zip" class="col-sm-4 col-form-label">Zip code</label>
          <div class="col-sm-5">
            <input type="text" class="form-control" v-model="student.zip" required/>
          </div>
        </div>
        <br>
        <br>
        <p id="paragraph" name="paragraph"></p>
        <button type="submit" v-on:click="Register" class="btn btn-primary">Register</button>
        <br>
      </div>
    </form>
  </div>
</template>
<script>
import Menu from "./Menu.vue"

export default (
  {
  name: "RegisterUser",
  components: {
        Menu
    },
  data() {
    return {
      student: {
        sID: "",
        firstName: "",
        lastName: "",
        password:"",
        confirmPassword:"",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip:""
      }
    };
  },
  methods: {
    Register() {
      console.log("inside method")
      console.log(this.student);
      console.log(this.student.sID + "sid");

      this.$axios
        .post("http://localhost:8082/register",this.student)
        .then((res) => {
          if (res.status == 200) {
            this.data=res;
            
            console.log(this.data)
            document.getElementById("paragraph").innerHTML = this.data.data;
            alert(this.data.data);
          }
          else
          {
            this.data=res;
            console.log(this.data);
            document.getElementById("paragraph").innerHTML =this.data.data;
          }

        });
    }
  },
});
</script>
<style>

</style>