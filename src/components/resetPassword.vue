<template>
  <b-container fluid class="container">
    <b-col md="10" class="top-30 col-md-12"> </b-col>
    <b-col md="4" offset-md="4">
      <div class="login">
        <h4 class="mt-3">Reset Password</h4>
        <hr class="mb-0" />
        <b-form class="p-4" @submit.prevent="reset">
          <b-form-group id="OTP" label="OTP" label-for="OTP" class="pass">
            <b-form-input id="OTP" class="input-field" type="text" v-model="password.otp" placeholder="Enter OTP"
              required></b-form-input>
          </b-form-group>

          <b-form-group id="new" label="New Password" label-for="New password" class="pass">
            <b-form-input id="new" type="password" required placeholder="Enter new password"
              v-model="password.newPassword" autocomplete="on"></b-form-input>
          </b-form-group>
          <b-form-group id="confirm" label="Confirm Password" label-for="Confirm password" class="pass">
            <b-form-input id="confirm" type="password" required placeholder="Confirm password"
              v-model="password.confirmPassword" autocomplete="on"></b-form-input>
          </b-form-group>
          <span v-if="!passwordsMatch" class="text-danger">Passwords do not match</span>

          <br />
          <div class="col-md-11"> <b-button variant="primary" type="submit"> Reset Password </b-button></div>



        </b-form>
      </div>
    </b-col>
  </b-container>
</template>
<script>
import Menu from "./Menu.vue"

export default (
  {
    name: "resetPassword",
    components: {
      Menu
    },
    data() {
      return {
        password: {
          otp: "",
          newPassword: "",
          confirmPassword: "",
          email: ""
        },

      };
    },

    computed:
    {
      passwordsMatch() {
        return this.password.newPassword === this.password.confirmPassword;
      },
    },
    methods: {
      async reset() {


        console.log("inside method")
        this.password.email = sessionStorage.getItem('resetEmail')

        console.log('password object', JSON.stringify(this.password))
        this.$axios
          .post("http://52.22.24.58:8082/api/password/reset",this.password)
          .then((res) => {
            if (res.status == 200) {

              this.data = res;
              console.log(JSON.stringify(this.data) + "ress")
              if (this.data.data == 'New password and confirm password do not match') {
                alert(this.data.data);
                window.location.href = "/resetPassword"
              }
              else if (this.data.data == 'Invalid OTP') {
                alert(this.data.data);
                window.location.href = "/resetPassword"
              }

              else {
                alert('Password Changed')
                window.location.href = "/"
              }
            }
            else {
              this.data = res;
              console.log(this.data);

            }

          });
      }
    },
  });
</script>
<style>
.login {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 69px;
  margin-top: 25px;
}

.pass {
  font-weight: bold;
  color: gray;
}
</style>
  </style>
