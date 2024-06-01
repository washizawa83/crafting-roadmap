import React from 'react';
import { RoadmapItem } from '../../types/Editor';

interface RoadmapTableLineProps {
    index: number;
    roadmapItem: RoadmapItem;
}

export const RoadmapTableLine: React.FC<RoadmapTableLineProps> = (
    { index, roadmapItem },
) => {
    const selectionTableLineStyle = (): string => {
        if (index === 0 && roadmapItem.column === 1) {
            return 'table-line-root-child';
        }
        if (roadmapItem.column === index + 1 && roadmapItem.isLastChild) {
            return 'table-line-last-child';
        }
        if (roadmapItem.column === index + 1) {
            console.log(roadmapItem, index);
            return 'table-line table-line-left';
        }
        return 'table-line';
    };

    return <td key={index} className={selectionTableLineStyle()}></td>;
};
