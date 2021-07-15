<template>
  <div class="displayColumn poppinsFont" style="align-items: center; height: 100vh; justify-content: center; overflow: hidden;">
    <!-- TOP AREA -->
    <div class="easeInLeft">
      <AuthTitle title="Multiwallet Board" info="Authentication"/>
      <div class="displayRow selectAuth">
        <i class="arrowButton fas fa-caret-square-left hoverThis" v-on:click="switchAuthStateLeft"></i>
        <div class="selectAuthBorder">
          <transition mode="out-in" :name="[ arrowClicked === 'Left' ? 'slideLeft' : 'slideRight' ]">
            <div key="selectRegister" v-if="authState === 'Register'">Register</div>
            <div key="selectLogin" v-if="authState === 'Login'">Login</div>
          </transition>
        </div>
        <i class="arrowButton fas fa-caret-square-right hoverThis" v-on:click="switchAuthStateRight"></i>
      </div>
    </div>
    <!-- BOTTOM AREA -->
    <div class="easeInRight">
      <transition mode="out-in" :name="[ arrowClicked === 'Left' ? 'authLeft' : 'authRight' ]">
        <form class="displayColumn authArea" key="formRegister" v-if="authState === 'Register'" v-on:submit.prevent="authRegister">
          <AuthInput inputLabel="New Email" inputType="email" inputPlaceholder="Create your new account email here ..."/>
          <AuthInput inputLabel="New Password" inputType="password" inputPlaceholder="Create your new account password here ..."/>
          <input class="authBtn" type="submit" value="Register">
        </form>
        <form class="displayColumn authArea" key="formLogin" v-else v-on:submit.prevent="authLogin">
          <AuthInput inputLabel="Email" inputType="email" inputPlaceholder="Enter your account email here ..."/>
          <AuthInput inputLabel="Password" inputType="password" inputPlaceholder="Enter your account password here ..."/>
          <input class="authBtn" type="submit" value="Login">
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
  // IMPORTS
  import AuthTitle from '../components/AuthTitle.vue'
  import AuthInput from '../components/AuthInput.vue'
  import Swal from 'sweetalert2'
  // EXPORTS
  export default {
    components: {
      AuthTitle,
      AuthInput
    },
    created() {
      document.title = "MW Board - Authentication"
    },
    data() {
      return {
        authState: "Login",
        arrowClicked: null
      }
    },
    methods: {
      switchAuthStateLeft() {
        if(this.authState === "Login") { this.authState = "Register" }
        else { this.authState = "Login" }
        this.arrowClicked = "Left"
      },
      switchAuthStateRight() {
        if(this.authState === "Login") { this.authState = "Register" }
        else { this.authState = "Login" }
        this.arrowClicked = "Right"
      },
      authRegister() {
        Swal.fire("Coming soon!", "The register function is still in development!", "info")
      },
      authLogin() {
        Swal.fire("Coming soon!", "The login function is still in development!", "info")
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
  .poppinsFont {
    font-family: 'Poppins';
  }
  .displayColumn, .displayRow {
    display: flex;
  }
  .displayColumn {
    flex-direction: column;
  }
  .displayRow {
    flex-direction: row;
  }
  .hoverThis {
    transition-duration: 0.5s;
  }
  .hoverThis:hover {
    cursor: pointer;
    opacity: 0.5;
  }
  .easeInLeft {
    animation: easeInLeft 1s;
  }
  .easeInRight {
    animation: easeInRight 1s;
  }
  .authArea {
    align-items: center;
    border: 1px solid grey;
    justify-content: center;
  }
  .selectAuth {
    align-items: center;
    justify-content: space-between;
  }
  .arrowButton {
    color: indianred;
  }
  .selectAuthBorder {
    text-overflow: ellipsis;
  }
  .inputArea {
    text-align: left; 
    width: 100%;
  }
  .authBtn {
    border: none;
    background: indianred;
    color: white;
    width: 100%;
  }
  /* ANIMATIONS */
  @keyframes easeInLeft {
    from {
      opacity: 0;
      transform: translate(0, -50%);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes easeInRight {
    from {
      opacity: 0;
      transform: translate(0, 50%);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  .authLeft-leave-active, .authLeft-enter-active, 
  .authRight-leave-active, .authRight-enter-active,
  .slideLeft-leave-active, .slideLeft-enter-active,
  .slideRight-leave-active, .slideRight-enter-active
  {
    transition-duration: 0.33s;
  }
  .authLeft-leave-to, .authLeft-enter, .authRight-leave-to, .authRight-enter,
  .slideLeft-leave-to, .slideLeft-enter, .slideRight-leave-to, .slideRight-enter
  {
    opacity: 0;
  }
  .authLeft-leave-to, .authRight-enter {
    transform: rotate(-180deg) scale(0,0);
  }
  .authLeft-enter, .authRight-leave-to {
    transform: rotate(180deg) scale(0,0);
  }
  .slideLeft-leave-to, .slideRight-enter {
    transform: translate(-50%, 0);
  }
  .slideRight-leave-to, .slideLeft-enter {
    transform: translate(50%, 0);
  }
  
  /* DESKTOP */
  @media(min-width: 768px) {
    .authIcon {
      font-size: 3.3vw;
      margin-right: 1.5vw;
    }
    .authTitle {
      font-size: 1.5vw;
    }
    .authText {
      font-size: 0.75vw;
    }
    .selectAuth {
      margin: 1vw;
      margin-bottom: 3vw;
    }
    .arrowButton {
      font-size: 3vw;
    }
    .selectAuthBorder {
      border: 0.1vw solid grey;
      font-size: 1vw;
      padding: 0.5vw;
      width: 11vw;
    }
    .easeInRight {
      height: auto;
      width: 30%;
    }
    .authArea {
      border-radius: 1vw;
      height: 100%;
      padding: 3.3vw;
      width: 100%;
    }
    .inputArea {
      margin-bottom: 2.5vw;
    }
    .inputLabel {
      font-size: 0.88vw;
      margin-bottom: 0.5vw;
    }
    .inputEntry {
      border: 0.1vw solid grey;
      border-radius: 0.5vw;
      font-size: 0.88vw;
      padding: 0.88vw;
    }
    .authBtn {
      border-radius: 0.5vw;
      font-size: 1vw;
      margin-top: 5vw;
      padding: 0.88vw;
    }
  }
  /* MOBILE */
  @media(max-width: 768px) {

  }
</style>