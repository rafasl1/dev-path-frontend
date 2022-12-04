import { UserAPI } from "./User";

export type MentorAPI = {
    id: number;
    user: UserAPI;
    description: String;
    hourCost: number;
    payments: [];
    schedules: Array<Schedule>;
}

type Schedule = {
    id: number;
    mentorEmail: String;
    userEmail: String;
    date: String;
    status: String;
}