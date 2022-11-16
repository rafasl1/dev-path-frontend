import { UserAPI } from "./User";

export type MentorAPI = {
    id: number;
    user: UserAPI;
    description: String;
    hourCost: number;
    payments: [];
    schedules: [];
}