export type RoadmapItem = {
    type: 'text' | 'image' 
    column: number
    children?: Map<string, RoadmapItem>
}