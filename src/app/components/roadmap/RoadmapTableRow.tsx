import React from 'react';
import { RoadmapItem } from '../../types/Editor';

interface RoadmapTableProps {
    id: string;
    roadmapItem: RoadmapItem;
}

export const RoadmapTableRow: React.FC<RoadmapTableProps> = (
    { id, roadmapItem },
) => {
    return (
        <>
            {Array(roadmapItem.column).fill(0).map((_, index) => (
                <td key={index} data-testid='hierarchy-column'></td>
            ))}
            <td>
                <input />
            </td>
        </>
    );
};
