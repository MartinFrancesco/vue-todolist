const app = new Vue({

  el: '#app',

  data: {
    toDo: '',
    time: '',
    task: '',
    newToDo: [],
    newTime: [],

  },
  methods: {
    saveElement() {

      this.newToDo.push(this.toDo);
      this.toDo = null;
      this.task = this.newToDo.length;
      //
      // if (newToDo.includes(this.toDo)) {
      //   this.newTime.push(this.time);
      // }

    },
    removeToDo(index) {

      this.newToDo.splice(index, 1);
      this.task = this.newToDo.length;
    },

  }
}); // ==> FINISH VUE READY
