const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },

      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.text.length === 0) {
        alert("scrivi qualcosa");
      } else {
        this.tasks.push({ text: this.newTask.text });
        this.newTask.text = ""; // ripulisco il campo input se no tutti i task sono lo stesso task
      }
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    done(index) {
      this.tasks[index].done = !this.tasks[index].done; //toggle di done
    },
    addTaskOnEnter(event) {
      if (event.keyCode === 13) {
        this.addTask();
        //controllo se è stato premuto invio
      }
    },
  },
}).mount("#app");
