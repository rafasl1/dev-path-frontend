import { TrailAPI } from "./TrailAPI";

export type UserAPI = {
    id: number;
    name: String;
    email: String;
    password: String;
    isMentor: boolean;
    userTrails: Array<TrailAPI>;
}