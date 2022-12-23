import { v4 as uuid } from "uuid";

class Task{

    id = '';
    description = '';
    completedAt = null;
    
    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.completedAt = null;
    }
}

export default{
    Task
}
