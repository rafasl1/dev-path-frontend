export type TrailInfo = {
    title: String;
    hours: number;
    levels: number;
    topics: Array<String>;
    carrerInfo: String;
    salaryRange: Array<number>;
    opportunities: Array<Opportunity>;
}

export type Opportunity = {
    title: String;
    location: String;
    seniority: String;
    type: String;
}