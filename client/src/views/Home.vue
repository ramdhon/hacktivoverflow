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
              <form>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">What is your question?</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-success" data-toggle="collapse" data-target="#formQuestion">Submit</button>
              </form>
            </div>
          </div>

          <h1 class="mt-4">World Questions</h1>
          <ul class="list-group fluid mt-3">
            <li v-for="(question, index) in Math.round(Math.random()*40)" :key="index" class="list-group-item">
              <div class="row">
                <div class="col-sm-1 px-3">
                  <span class="h2 text-muted">#{{ question }}</span>
                </div>
                <div class="col-sm">
                  <span class="h4">This is will be question list</span>
                  <br><span class="text-muted">Votes: {{ Math.round(Math.random()*10) }}</span>
                  <br><span>Answers: {{ Math.round(Math.random()*50) }}</span>
                </div>
                <div class="col-sm-2">
                  <span><strong>created by:</strong></span>
                  <br><span>@noname</span>
                  <br><span class="text-muted">{{ Math.round(Math.random()*22) + 1 }} hour/s ago</span>
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

export default {
  name: 'Home',

  computed: {
    ...mapState([
      'isLoggedIn',
    ]),
  },

  created() {
    console.log('status ==>', this.$store.state.isLoggedIn);
  },
};
</script>
