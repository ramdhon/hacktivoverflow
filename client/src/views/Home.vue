<template>
  <div class="home">
    <div class="container-fluid mt-4 pl-5">
      <div class="row">
        <div class="col-sm px-0" style="background-color:">
          <p class="text-right">
            <button class="btn btn-primary" type="button" :data-toggle="isLoggedIn?'collapse':'modal'" :data-target="isLoggedIn?'#formQuestion':'#loginModal'" aria-expanded="false" aria-controls="collapseExample">
              Ask a question
            </button>
          </p>
          <div class="collapse" id="formQuestion">
            <div class="card card-body">
              <form @submit.prevent="addQuestion">
                <div class="form-group">
                  <label for="exampleFormControlText1">What is your question?</label>
                  <input type="text" v-model="form.question" class="form-control" id="exampleFormControlText1" rows="3"></input>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Any description?</label>
                  <textarea v-model="form.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-success" data-toggle="collapse" data-target="#formQuestion">Submit</button>
              </form>
            </div>
          </div>

          <h1 class="mt-4">World Questions</h1>
          <ul class="list-group fluid mt-3">
            <li v-for="(question, index) in questions" :key="index" class="list-group-item">
              <div class="row">
                <div class="col-sm-1 px-3">
                  <span class="h2 text-muted">#{{ index+1 }}</span>
                </div>
                <div class="col-sm">
                  <span class="h4">{{ question.title }}</span>
                  <br><span class="text-muted">Votes: 0</span>
                  <br><span>Answers: 0</span>
                </div>
                <div class="col-sm-2">
                  <span><strong>created by:</strong></span>
                  <br><span>@{{ question.creator.email.slice(0, question.creator.email.indexOf('@')) }}</span>
                  <br><span class="text-muted">0 hour/s ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-sm-4" style="background-color:">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import axios from '@/api/axios';
import Swal from '@/helpers/swal';

export default {
  name: 'Home',

  computed: {
    ...mapState([
      'isLoggedIn',
    ]),
  },

  created() {
    this.fetchQuestions();
  },

  data() {
    return {
      form: {
        question: '',
        description: '',
      },
      questions: [],
    };
  },

  methods: {
    fetchQuestions() {
      axios
        .get('/questions')
        .then(({ data }) => {
          this.questions = data.questions;
        })
    },

    addQuestion() {
      axios
        .post('/questions',{
          title: this.form.question,
          description: this.form.description,
        }, {
          headers: {
            token: localStorage.token,
          }
        })
        .then(({ data }) => {
          this.form.question = '';
          this.form.description = '';
          Swal.success(data.message);
          this.fetchQuestions();
          // console.log(data);
        })
        .catch((err) => {
          const message = err.message ? err.message : 'Internal Server Error';
          Swal.fail(message);
          console.log(err);
        });
    },
  },
};
</script>
