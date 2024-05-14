import { RoadmapItem } from "../../types/Editor";

interface RoadmapTableProps {
    id: string,
    roadmapItem:  RoadmapItem
}

export const RoadmapTableRow: React.FC<RoadmapTableProps> = ({id, roadmapItem}) => {
    return (
        <>
            {
                Array(roadmapItem.column).fill(0).map((_, index) => (
                    <td key={index}></td>
                ))
            }
            <td>
                <div contentEditable={true}>AAAAA</div>
            </td>
        </>
    )
}