<template>
  <div>
    <b-container id="mainContainer" align-v="center">

      <b-row align-v="center" align-h="center">
        <b-col md="6">
          <div>
            <b-card id="cardLogin" style="background-color: aliceblue;">
              <b-form v-if="show" id="formRegister">
                <h2 class="text-center mb-3" style="color: #1f5a7c">Update Profile</h2>
                <b-form-group id="input-group-1" label="919 Number" label-for="919 Number" style="color: palevioletred">
                  <b-form-input id="919" class="input" v-model="student.sID" type="text" placeholder="919 Number" required
                    readonly></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='First Name' label-for="FirstName" style="color: palevioletred">
                  <b-form-input id="first" class="input" v-model="student.firstName" type="text" placeholder="First Name"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='Last Name' label-for="LastName" style="color: palevioletred">
                  <b-form-input id="last" class="input" v-model="student.lastName" type="text" placeholder="Last Name"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='Email' label-for="email" style="color: palevioletred">
                  <b-form-input id="email" class="input" v-model="student.email" type="text" placeholder="Email address"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='Phone Number' label-for="phoneNumber" style="color:palevioletred">
                  <b-form-input id="phone" class="input" v-model="student.phoneNumber" type="text"
                    placeholder="Phone Number" required></b-form-input>
                </b-form-group>
                <br>
                <!-- <div class="d-flex justify-content-center mt-3">
        <b-button type="submit" variant="primary" class="btn-login"
          >Entrar <font-awesome-icon icon="arrow-right" class="arrow"
        /></b-button>
      </div> -->
              </b-form>
            </b-card>
            <br>
            
              <!--<b-button variant="primary" class="a2" @click="onSubmit" type="submit">Save Profile</b-button> -->
            
          </div>
        </b-col>

      <b-col md="6">
        <div>
          <b-card id="cardLogin" style="background-color: aliceblue;">
              <b-form v-if="show" id="formRegister">
                <h2 class="text-center mb-3" style="color: #1f5a7c">Update Address</h2>
                <b-form-group id="input-group-1" label="Address" label-for="Address" style="color: palevioletred">
                  <b-form-input id="address" class="input" v-model="student.address" type="text" placeholder="Address"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='City' label-for="City" style="color: palevioletred">
                  <b-form-input id="city" class="input" v-model="student.city" type="text" placeholder="City"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='State' label-for="State" style="color: palevioletred">
                  <b-form-input id="state" class="input" v-model="student.state" type="text" placeholder="State"
                    required></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label='ZipCode' label-for="Zip" style="color: palevioletred">
                  <b-form-input id="zip" class="input" v-model="student.zip" type="text" placeholder="ZipCode"
                    required></b-form-input>
                </b-form-group>
                <br>
                <!-- <div class="d-flex justify-content-center mt-3">
        <b-button type="submit" variant="primary" class="btn-login"
          >Entrar <font-awesome-icon icon="arrow-right" class="arrow"
        /></b-button>
      </div> -->
              </b-form>
            </b-card>
        </div>
      </b-col>
      </b-row>
    </b-container>
    <b-button variant="primary" class="a2" @click="onSubmit" type="submit">Save Profile</b-button>
  </div>

  
</template>

<script>
import Menu from "./Menu.vue"
export default {
  name: "MyAccount",
  components: {
    Menu,

  },

  mounted() {
    this.getUser();

  },
  created() {
    console.log("as")
    require('@/assets/background.jpg')
  },
  data() {
    return {
      student: {
        sID: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      },
      show: true,
    };
  },

  methods: {

    async getUser() {
      let id = sessionStorage.getItem("user")
      console.log("user in myacount", id)

      this.$axios
        .get(
          "http://localhost:8082/student/" + id
        )
        .then((res) => {
          if (res.status == 200) {
            this.data = res;

            console.log(this.data)
            this.student = this.data.data

          }
          else {
            this.data = res;
            console.log(this.data);

          }

        });
    },
    async onSubmit(event) {
      console.log("submit profile")

      let id = sessionStorage.getItem("user")
      this.$axios
        .put("http://localhost:8082/updateProfile/" + id, this.student)

        .then((res) => {
          if (res.status == 200) {
            this.data = res;

            console.log(this.data)
            alert('Profile Updated Successfully')
            this.student = this.data.data
            this.read = true

          }
          else {
            this.data = res;
            console.log(this.data);
          }
        });

    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/animations.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/fonts.scss";
@import "node_modules/bootstrap/scss/bootstrap.scss";

.background {
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

}

body {
  //font-family: $OpenSans !important;
}

#cardLogin {
  margin-top: 30px;
  margin-left: 64px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px $gray;

#cardAddress {
  margin-top: 20px;
  margin-left: 64px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px $gray;
}

  #formRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    position: relative;

    h1 {
      color: $primary;
      font-weight: 700;
      font-family: $Poppins;
    }

    h2 {
      font-size: 1.2rem;
      color: $lightBlack;
      font-weight: 600;
      font-family: $Poppins;
    }

    .other-account {
      color: $gray;
    }

    .a2 {
      margin-left: 100px;
    }

    .icons {
      width: 30px;
      cursor: pointer;
    }

    .input {
      border-radius: 10px;
    }

    .remember {
      color: $lightBlack;
    }

    .blob {
      position: absolute;
      top: -15%;
      left: -12%;
      width: 150px;
      opacity: 0.2;
    }
  }

  /* .logoLogin {
    margin: 0 auto;
    width: 100px;
  } */

  .forgotPassword {
    color: $gray;
    text-decoration: none;

    &:hover {
      color: #1f5a7c;
      transition: 0.5s ease-in-out;
    }
  }

  /* .btn-login {
    width: 200px;
    background-color: $primary;
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 10px;

    &:hover {
      background-color: $secondary;
      transition: 0.5s ease-in-out;
    }
  } */

  .arrow-btn {
    width: 100px;
    border-radius: 15px;
    background: $primary;
    color: #fff;
    font-size: 60px;
    padding: 5px;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background: $secondary;
      transition: 0.5s ease-in-out;
      box-shadow: none;
    }
  }

  .register {
    span {
      color: $lightBlack;
    }

    .createAccount {
      color: $primary;
      text-decoration: none;
    }
  }

  #mainContainer {
    width: 100%;
    height: auto;
    position: relative;
  }


}
</style>
