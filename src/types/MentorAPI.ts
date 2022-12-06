import { UserAPI } from "./User";

export type MentorAPI = {
    id: number;
    user: UserAPI;
    role: String;
    yearsOfExperience: number;
    hourCost: number;
    schedules: Array<Schedule>;
}

type Schedule = {
    id: number;
    mentorEmail: String;
    userEmail: String;
    date: String;
    status: String;
}