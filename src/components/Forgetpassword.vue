<template>
  <b-container fluid  class="container mt-5">
    <b-col md="10" class="top-30 col-md-12"> </b-col>
    <b-col md="4" offset-md="4">
      <div class="forget">
        <h4 class="mt-3">Forget Password</h4>
        <hr class="mb-0" />
        <b-form class="p-4" @submit.prevent="forget">
          <b-form-group id="username" label="Enter your registered email and we will send you a OTP to reset your password" label-for="username">
            <b-form-input
              id="username"
              class="input-field"
              type="text"
              placeholder="Enter mail ID"
              v-model="email"
              required
            ></b-form-input>
          </b-form-group>     
          <br />
          <div class="btn-center">
            <b-button variant="primary" type="submit"> Submit </b-button>
          </div>
        </b-form>
      </div>
    </b-col>
  </b-container>
</template>
<script>
export default {
  name: "forget",
  data() {
      return {
      email:''
      };
    },
  methods: {
    async forget() {
      console.log('Inside forget')
      sessionStorage.setItem('resetEmail', this.email)
      this.$axios
          .post("http://52.22.24.58:8082/api/password/sendResetOtp?email="+ this.email)
          .then((res) => {
            if (res.status == 200) {
              alert('OTP is sent')
              window.location.href="/resetPassword"

            }
            else
            {
              
              alert('password is not sent')
             
            }
  
          });

      
    },
  },
};
</script>

<style scoped>
.forget {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 69px;
}
.m-t-4 {
  margin-top: 2px;
}

.top-30 {
  margin-top: 5%;
  margin-bottom: 25px;
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .top-30 {
    margin-bottom: 90px;
  }
}
</style>
