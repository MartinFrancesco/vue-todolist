const app = new Vue({

  el: '#app',

  data: {
    toDo: '',
    time: '',
    newToDo: [],

  },
  methods: {
    saveElement: () => {

      this.newToDo.push(toDo);

    }
  }
}); // ==> FINISH VUE READY
