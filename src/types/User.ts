import { TrailAPI } from "./TrailAPI";

export type UserAPI = {
    id: number;
    name: String;
    email: String;
    password: String;
    mentorStatus: MentorStatus;
    trails: Array<TrailAPI>;
}

export enum MentorStatus {
    INACTIVE = "INACTIVE",
    ACTIVE = "ACTIVE",
    PENDING = "PENDING"
}