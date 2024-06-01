import React from 'react';
import { RoadmapItem } from '../../types/Editor';
import { RoadmapTableLine } from './RoadmapTableLine';
import { RoadmapTableRowInput } from './RoadmapTableRowInput';

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
                <RoadmapTableLine
                    key={index}
                    index={index}
                    roadmapItem={roadmapItem}
                />
            ))}
            <td
                className={`pb-7 ${
                    roadmapItem.children && 'table-row-line-bottom'
                }`}
            >
                <RoadmapTableRowInput />
            </td>
        </>
    );
};
