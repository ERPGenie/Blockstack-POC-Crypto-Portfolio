<template>
  <div class="panel-landing text-center" id="section-1">
    <h1 class="landing-heading">My Crypto Portfolio</h1>
    <h2 class="landing-heading">A simple Blockstack DApp to track your crypto portfolio</h1>
    Your data is securely and privately stored in your Gaia hub from Blockstack.
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
