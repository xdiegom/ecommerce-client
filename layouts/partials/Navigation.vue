<template>
    <nav class="navbar is-white">
  <div class="container">
  <div class="navbar-brand">
    <nuxt-link 
    :to="{name: 'index'}"
    class="navbar-item">
    cart
    </nuxt-link>
    <div class="navbar-burger burger" data-target="nav">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="nav" class="navbar-menu">
    <div class="navbar-end">
      <a href="" class="navbar-item">
        Sign in
      </a>
    </div>
  </div>
  </div>
</nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navigation',
  computed: {
    ...mapState({
      categories: state => state.categories
    })
  }
}
</script>
