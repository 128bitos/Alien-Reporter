import { FormData } from './form.model';

export class DataModel {
    public userId: number;
    public formId: string;
    public form: FormData[] = new Array<FormData>();
    public lastChangedDate: Date;
    public lastChangedBy: string;
}