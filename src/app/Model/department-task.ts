export class DepartmentTask {
    DepartmentTaskID: number;
    DepartmentID!: number;
    TaskDescription: string;
    AssignTo!: number;
    PriorityLevel!: number;
    DueDate!: Date;
    Status!: number;
    CreatedBy!: number;
    CreatedDate!: Date;
    UpdatedBy!: number;
    UpdatedDate!: Date;
}
