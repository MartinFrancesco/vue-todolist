const app = new Vue({

  el: '#app',

  data: {
    dayStamp: '',
    numTodayStamp: '',
    monthStamp: '',
    toDo: '',
    time: '',
    task: '',
    newToDo: [],
  },

  created() {
               setInterval(this.getNow, 1000);
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

    },
    getNow: function() {

      const d = new Date();
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      const date = weekday[d.getDay()];
      let month = new Array(12);
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      const months = month[d.getMonth()];
      const today = d.getDate();
      const day = date;
      this.dayStamp = day;
      this.numTodayStamp = today;
      this.monthStamp = months;
    },

  }
}); // ==> FINISH VUE READY
