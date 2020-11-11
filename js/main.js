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
    valore1: '',
    valore2: '',
    toDo: '',
    time: '',
    task: '',
    newToDo: [],
  },

  created() {
               this.getNow();
           },

  methods: {
    pushElement() {

      if ((this.toDo !== '') && (this.time !== '')) {
        this.newToDo.push({
          text: this.toDo,
          time: this.time,
        });
        this.toDo = '';
        this.time = '';
        this.task = this.newToDo.length;
      }
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
    },
    // getPrev() {
    //
    //   this.dayStamp = this.arrayDays[ this.dayNumber - 1];
    //   this.numTodayStamp = this.numTodayStamp - 1;
    //   this.monthStamp = this.arrayMonths[ this.monthNumber - 1];
    //   this.dayNumber -= 1;
    //   this.monthNumber -= 1;
    //
    //
    // },
    // getNext() {
    //
    //   this.dayStamp = this.arrayDays[ this.dayNumber + 1];
    //   this.numTodayStamp = this.numTodayStamp + 1;
    //   this.monthStamp = this.arrayMonths[ this.monthNumber + 1];
    //   this.dayNumber += 1;
    //   this.monthNumber += 1;
    //
    //
    // },
  }
}); // ==> FINISH VUE READY
