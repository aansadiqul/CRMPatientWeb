export class Caregiver {
    CaregiverID: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    PhoneNumber: string;
    SecondaryPhonNumber: string;
    Email: string;
    AddressLine1: string;
    City: string;
    State: string;
    Zip: string;
    Availibility!: number;
    HaveCar!: boolean;
    PrimaryLanguage: string;
    SecondaryLanguage: string;
    Status!: number;
    CreatedBy!: number;
    CreatedDate!: Date;
    UpdatedBy!: number;
    UpdatedDate!: Date;
}