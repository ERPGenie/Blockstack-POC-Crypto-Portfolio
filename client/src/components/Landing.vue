<template>
  <div class="panel-landing text-center" id="section-1">
    <h1 class="landing-heading">My Crypto Portfolio</h1>
    <h2 class="landing-heading2">A simple Blockstack DApp to track your crypto portfolio</h2>
    <p class="landing-text">
        Your data is securely and privately stored in your Gaia hub from Blockstack.
    </p>
    <p class="lead">
      <a
        href="#"
        class="btn btn-primary btn-lg"
        id="signin-button"
        @click.prevent="signIn"
      >
        Sign In with your Blockstack ID
      </a>
    </p>
        <p class="landing-text">
      <img src="screen1.png" alt="Show All Coins" height=406 width=917>
    </p>
        <p class="landing-text">
      <img src="screen2.png" alt="Show My Portfolio" height=341 width=917>
    </p>
    <hr>
    <h2 class="landing-heading2">Developer</h2>
    <p class="landing-text">
      This Blockstack DApp was developed by <a href="https://explorer.blockstack.org/name/elephantninja.id" target="_blank">elephantninja.id</a>, <a href="https://www.linkedin.com/in/erpgenie/" target="_blank">Kevin Wilson</a> (ERPGenie) and <a href="https://www.freelancer.com/u/IvaKami" target="_blank">Ivan P.</a>
    </p>
    <p class="landing-text">
      <a href="https://www.elephantninja.com/" target="_blank"><img src="en_logo.jpg" alt="Elephant Ninja"></a>
    </p>
  </div>
</template>

<script>
import { userSession } from '../userSession'
export default {
  name: 'signin',
  methods: {
    signIn () {
      userSession.redirectToSignIn()
    }
  }
}
</script>

<style lang="scss">
body {
  color: #3700FF;
  text-align: center;
}

.btn-primary {
  background-color: #3700FF;
  border: 1px solid #3700FF;
}

html, body {
  height: 100%;
  background-color: #F4F4FC;
}
</style>
