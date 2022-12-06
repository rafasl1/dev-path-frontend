export type Schedule = {
    id: number;
    mentorEmail: String;
    userEmail: String;
    date: String;
    status: any;
}

export enum ScheduleStatus {
    PENDING = "PENDING",
    AVAILABLE = "AVAILABLE",
    RESERVED = "RESERVED",
    CANCELLED = "CANCELLED"
}