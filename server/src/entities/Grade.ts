import { uuid } from "uuidv4";
import { Student } from "./Student";

export class Grade{
    public readonly id?: string;
    public name: string;
    public student: Student;
    public note?: string;
    public createAt: Date;

    constructor(props: Omit<Grade, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            id = uuid();
        }

        this.createAt = new Date();
    }
}