export type RoadmapItem = {
    type: 'text' | 'image';
    column: number;
    isLastChild: boolean;
    children?: Map<string, RoadmapItem>;
};

export type RoadmapItemViewModel = RoadmapItem & { atEndItem: boolean };
