const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },

      tasks: [
        {
          text: "ciao",
          done: true,
        },
        {
          text: "ciao",
          done: true,
        },
      ],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length == 0) {
        alert("scrivi qualcosa");
      } else {
        this.tasks.push(this.newTask);
        console.log(this.newTask);
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    done(index) {},
  },
}).mount("#app");
