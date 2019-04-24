<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">
        <a href="/" class="navbar-brand"><i class="fas fa-layer-group"></i> HackOverflow</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-show="isLoggedIn" class="nav-item">
            <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
          </li>
        </ul>
        
        <div class="navbar-nav nav-item" v-show="!isLoggedIn">
          <li>
            <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
          </li>
          <dd-login id="loginModal" @login="login" />

          <li>
            <a class="nav-link" href="#" data-toggle="modal" data-target="#registerModal">Register</a>
          </li>
          <dd-register id="registerModal" />
        </div>

        <form class="form-inline my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <li v-show="isLoggedIn" class="navbar-nav nav-item">
          <a @click="logout" class="nav-link" href="#">Logout</a>
        </li>
      </div>
    </nav>
    <router-view :isLoggedIn="isLoggedIn" />
  </div>
</template>

<script>
import ddLogin from '@/components/Login.vue';
import ddRegister from '@/components/Register.vue';
import Swal from '@/helpers/swal';

export default {
  name: 'App',
  components: {
    ddLogin,
    ddRegister,
  },

  data() {
    return {  
      isLoggedIn: false,
    };
  },

  created() {
    if (localStorage.token) {
      this.isLoggedIn = true;
    }
  },

  methods: {
    logout() {
      localStorage.removeItem('token');
      // this.$store.state.token = '';
      this.isLoggedIn = false;
      Swal.success('logut success');
    },
    login() {
      this.isLoggedIn = true;
    }
  },
};
</script>
