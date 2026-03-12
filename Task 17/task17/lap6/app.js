const list = {
    tasks:[],

    addTask:function(task){
        this.tasks.push(task);
        console.log(`task added successfully`);
    },
    removeTask:function(task){
        const idx = this.tasks.indexOf(task);
        if(idx !== -1){
            this.tasks.splice(idx,1);
            console.log(`task ${task} removed`);
        } else{
            console.log(`task not found`);
        }
    },
    listTasks:function(){
        this.tasks.map(t => console.log(t));
    }
}

list.addTask("task one");
list.addTask("task two");
list.listTasks();
list.removeTask("task one");