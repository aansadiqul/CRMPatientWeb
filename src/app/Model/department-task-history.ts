export class DepartmentTaskHistory {
    DepartmentTaskHistoryID: number;
    DepartmentTaskID!: number;
    TaskDescription: string;
    AssignTo!: number;
    PriorityLevel!: number;
    DueDate!: Date;
    Status!: number;
    CreatedDate!: Date;
    CreatedBy!: number;
    UpdatedBy!: number;
    UpdatedDate!: Date;
}
