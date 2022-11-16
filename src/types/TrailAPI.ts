export type TrailAPI = {
    id: number;
    name: String;
    duration: number;
    description: String;
    averageSalary: String;
    jobs: Array<JobAPI>;
    topics: Array<TopicAPI>
} 

type JobAPI = {
    id: number;
    title: String;
    location: String;
    period: String;
    role: String;
    link: String;
}

export type TopicAPI = {
    id: number;
    name: String;
    subTopics: Array<SubTopicAPI>;
}

type SubTopicAPI = {
        id: number;
        name: String;
        content: String;
}