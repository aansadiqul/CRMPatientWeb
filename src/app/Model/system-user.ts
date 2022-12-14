export class SystemUser {
    SystemUserID: number;
    UserName: string;
    FullName: string;
    PhoneNumber: string;
    Email: string;
    Password: string;
    Role!: number;
    Status!: number;
    TaskCapacity!: number;
    Supervisor: string;
    CreatedBy!: number;
    CreatedDate!: Date;
    UpdatedBy!: number;
    UpdatedDate!: Date;
}
