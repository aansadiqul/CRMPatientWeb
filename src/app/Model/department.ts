export class Department {
    DepartmentID: number;
    Name: string;
    Description: string;
    DepartmentType!: number;
    DepartmentLevel!: number;
    PreferredEmployee: string;
    NotifyAfter: string;
    PriorityLevel!: number;
    MoveToNextDepartmentWhenDone!: boolean;
    CreatedBy!: number;
    CreatedDate!: Date;
    UpdatedBy!: number;
    UpdatedDate!: Date;
    Status!: number;
}
