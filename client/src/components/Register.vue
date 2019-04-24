<template>
  <div id="login">
    <!-- Modal -->
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="exampleInputName1">Your Name</label>
                <input v-model="form.name" type="text" class="form-control" id="exampleInputName1" placeholder="Enter name">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
              </div>              
              <button type="submit" class="btn btn-success" data-toggle="modal" :data-target="`#${id}`">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/axios';
import Swal from '@/helpers/swal';

export default {
  name: 'Register',
  props: {
    id: String,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    register() {
      axios
        .post('/register', {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
        })
        .then(({ data }) => {
          this.form.name = '';
          this.form.email = '';
          this.form.password = '';
          Swal.success(data.message);
          // console.log(data);
        })
        .catch((err) => {
          const message = err.message ? err.message : 'Internal Server Error';
          Swal.fail(message);
          console.log(err);
        })
    },
  },
};
</script>
