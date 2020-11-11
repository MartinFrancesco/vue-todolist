const app = new Vue({

  el: '#app',

  data: {
    dayStamp: '',
    numTodayStamp: '',
    monthStamp: '',
    arrayMonths: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",  "November",  "December",],
    arrayDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",],
    dayNumber: 0,
    monthNumber: 0,
    valore1: null,
    valore2: null,
    toDo: '',
    time: '',
    task: '',
    newToDo: [],
  },

  created() {
               this.getNow();
           },

  methods: {
    saveToDo() {

      this.toDo = this.valore1;
      pushElement();
      this.toDo = null;

    },
    saveTime() {

      this.time = this.valore2;
      pushElement();
      this.time = null;

    },
    pushElement() {

      if ((this.valore1 !== null) || (this.valore2 !== null)) {
        this.newToDo.push({
          text: this.valore1,
          time: this.valore2,
        });
      }

      this.task = this.newToDo.length;
    },
    removeToDo(index) {

      this.newToDo.splice(index, 1);
      this.task = this.newToDo.length;
    },
    getNow: function() {

      const d = new Date();
      const date = this.arrayDays[d.getDay()];
      const months = this.arrayMonths[d.getMonth()];
      const today = d.getDate();
      this.dayStamp = date;
      this.numTodayStamp = today;
      this.monthStamp = months;
      this.dayNumber = d.getDay();
      this.monthNumber = d.getMonth();

      // if (this.prev === true) {
      //   this.dayStamp = weekday[d.getDay() - 1];
      //   this.numTodayStamp = today - 1;
      //   this.monthStamp = month[d.getMonth() - 1];
      // };
    },
    getPrev() {

      this.prev = true;
      // const d = new Date();
      // const today = d.getDate();

      this.dayStamp = this.arrayDays[ this.dayNumber - 1];
      this.numTodayStamp = this.numTodayStamp - 1;
      this.monthStamp = this.arrayMonths[ this.monthNumber - 1];
      this.dayNumber -= 1;
      this.monthNumber -= 1;


    },
  }
}); // ==> FINISH VUE READY
