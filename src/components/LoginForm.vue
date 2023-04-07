<template>
    <div class="background">
        <b-container id="mainContainer" align-v="center">

            <b-row align-v="center" align-h="center">
                <b-col md="6">
                    <div>
                        <b-card id="cardLogin" class="scale-in-bl" style="background-color: aliceblue;">
                            <b-form v-if="show" id="formLogin">


                                <h1 class="text-center mb-3" style="color: #1f5a7c">Login</h1>
                                <h2 class="text-center mb-4">WELCOME!!</h2>
                                <span class="text-center mb-4 other-account">Please enter your login details</span>
                                <b-form-group id="input-group-1" style="margin-bottom: 3px;">
                                    <b-form-input id="919" class="input" v-model="login.username" type="text"
                                        placeholder="919 Number" required></b-form-input>
        
                                </b-form-group>

                                <b-form-group id="input-group-2" label-for="input-2" style="margin-bottom: 3px;">
                                    <b-form-input id="password" class="input" v-model="login.password" placeholder="password"
                                        type="password" required></b-form-input>
                                </b-form-group>

                                <div class="d-flex justify-content-between flex-wrap">
                                    <div>
                                        <router-link to="/Forgetpassword" class="forgotPassword">Forgot
                                            Password?</router-link>
                                    </div>
                                </div>

                                <!-- <div class="d-flex justify-content-center mt-3">
          <b-button type="submit" variant="primary" class="btn-login"
            >Entrar <font-awesome-icon icon="arrow-right" class="arrow"
          /></b-button>
        </div> -->
                                <div class="d-flex justify-content-center mt-3">
                                    <a href="#">
                                        <font-awesome-icon icon="arrow-right"  class="arrow-btn" @click.prevent="onSubmit"/>
                                    </a>
                                </div>

                                <div class="d-flex justify-content-center flex-wrap mt-4 register">
                                    <span class="mr-2">Not a member yet?</span>
                                    <router-link to="/register" class="createAccount" style="color: #1f5a7c">Create
                                        Account</router-link>
                                </div>
                            </b-form>
                        </b-card>
                    </div>
                </b-col>
                <b-col md="6">
                    <b-img src="https://i0.wp.com/patentbusinesslawyer.com/wp-content/uploads/2019/04/Starting-Business-in-Gurgaon-Incorporating-a-Company-Determining-Corporate-Structure-1.png?fit=1000%2C667&ssl=1" fluid class="businessImg scale-in-bottom" center />
                </b-col>

            </b-row>
        </b-container>

    </div>
</template>
  
<script>
import BlobBg from "../components/BlobBg";
export default {
    name: "LoginForm",
    created() {
        console.log("as")
        require('@/assets/background.jpg')
    },
    components: {
        BlobBg
    },
    data() {
        return {
            login: {
                username: "",
                password: "",
            },
            show: true,
        };
    },

    methods: {
       async onSubmit(event) {
if(this.login.username==""||this.login.password=="")
{
    alert('Username or password must not be empty');
}

else
{


            console.log('login', JSON.stringify(this.login));
            //alert(JSON.stringify(this.login));

            await this.$axios
          .post("http://52.22.24.58:8082/login", this.login)
          .then((res) => {
            if (res.status == 200) {
              this.data = res;

              // console.log(this.data , "res")
             

              if (this.data.data == "Login successful") {
                //console.log("Inside successfull login");
                 sessionStorage.setItem('user', this.login.username);
                 localStorage.setItem("loggedIn","true")
                //  console.log("Inside successfull login 2");
                //window.location.href = "/#/Home";
                window.location.href = "/Home";
                  // this.$router.push('/Home')

              }
              else if (this.data.data === "User is not registered, Please sign in") 
              {
                alert(this.data.data);
                this.$router.push('/register')
              }

              else
              {
                alert(this.data.data);
                this.$router.push('/')
              }

              
             
            }
            else {
              this.data = res;
              // console.log(this.data);
              alert(this.data.data);
            }

          });
        }
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
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vt93Mc8W8XsQD3ZUS3hAnJIauaHTac8zCQ&usqp=CAU");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

}

body {
    font-family: $OpenSans !important;
}

#cardLogin {
    margin-top: 30px;
    margin-left: 64px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px $gray;

    #formLogin {
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