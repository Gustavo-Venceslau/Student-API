import { uuid } from 'uuidv4';

export class Student {
    public readonly ids?: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<Student, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            id = uuid();
        }
    }
}