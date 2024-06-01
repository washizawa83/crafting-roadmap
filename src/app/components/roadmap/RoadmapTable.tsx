import React from 'react';
import { RoadmapItem } from '../../types/Editor';
import { RoadmapTableRow } from './RoadmapTableRow';
import { RoadmapTableRowInput } from './RoadmapTableRowInput';

const searchRoadmap = (
    roadmap: Map<string, RoadmapItem>,
): [string, RoadmapItem][] => {
    const roadmapItems: [string, RoadmapItem][] = [];
    const searchChildren = (
        roadmapItem: { id: string; childRoadmapItem: RoadmapItem },
    ): void => {
        roadmapItems.push([roadmapItem.id, roadmapItem.childRoadmapItem]);
        if (roadmapItem.childRoadmapItem.children === undefined) return;
        Array.from(roadmapItem.childRoadmapItem.children).forEach(
            (childRoadmapItem) => {
                searchChildren({
                    id: childRoadmapItem[0],
                    childRoadmapItem: childRoadmapItem[1],
                });
            },
        );
    };

    Array.from(roadmap).map((roadmapItem) => {
        searchChildren({
            id: roadmapItem[0],
            childRoadmapItem: roadmapItem[1],
        });
    });
    return roadmapItems;
};

interface RoadmapTableProps {
    roadmap: Map<string, RoadmapItem>;
}

export const RoadmapTable: React.FC<RoadmapTableProps> = ({ roadmap }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td className='pb-7 table-row-line-bottom'>
                        <RoadmapTableRowInput placeHolder='Start' />
                    </td>
                </tr>
                {searchRoadmap(roadmap)
                    .map((rowRoadmapItem, index) => (
                        <tr key={`tr-${index}`}>
                            <RoadmapTableRow
                                key={rowRoadmapItem[0]}
                                id={rowRoadmapItem[0]}
                                roadmapItem={rowRoadmapItem[1]}
                            />
                        </tr>
                    ))}
                <tr>
                    <td>
                        <div className='text-xl pt-6 text-center table-row-line-top'>
                            GOAL 🎉
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
