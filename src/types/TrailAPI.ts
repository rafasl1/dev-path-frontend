export type TrailAPI = {
    id: number,
    name: String,
    duration: number;
    description: String,
    averageSalary: String,
    jobs: [
        {
            id: number;
            title: String,
            location: String,
            period: String,
            role: String,
            link: String
        }
    ],
    topics: [
        {
            id: number;
            name: String,
            subTopics: [
            {
                id: number;
                name: String,
                content: String
            }
            ]
        }
    ]
} 