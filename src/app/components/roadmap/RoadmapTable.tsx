import React from 'react';
import { RoadmapItem } from '../../types/Editor';
import { RoadmapTableRow } from './RoadmapTableRow';

const allSearch = (
    roadmapItemObj: { id: string; roadmap: RoadmapItem },
): Map<string, RoadmapItem> => {
    if (!roadmapItemObj.roadmap.children) {
        return new Map([[roadmapItemObj.id, roadmapItemObj.roadmap]]);
    }

    let result: Map<string, RoadmapItem> = new Map<string, RoadmapItem>([[
        roadmapItemObj.id,
        roadmapItemObj.roadmap,
    ]]);

    Array.from(roadmapItemObj.roadmap.children).forEach((child) => {
        const childRoadmapItem = allSearch({ id: child[0], roadmap: child[1] });
        result = result.set(
            childRoadmapItem.keys().next().value,
            childRoadmapItem.values().next().value,
        );
    });

    return result;
};

interface RoadmapTableProps {
    roadmap: Map<string, RoadmapItem>;
}

export const RoadmapTable: React.FC<RoadmapTableProps> = ({ roadmap }) => {
    const test = '';
    console.log(test);
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <input type='text' placeholder='作りたいもの・目標' />
                    </tr>
                    {Array.from(roadmap).map((roadmapItem) => (
                        Array.from(
                            allSearch({
                                id: roadmapItem[0],
                                roadmap: roadmapItem[1],
                            }),
                        )
                            .map((rowRoadmapItem, index) => (
                                <tr key={`tr-${index}`}>
                                    <RoadmapTableRow
                                        key={roadmapItem[0]}
                                        id={rowRoadmapItem[0]}
                                        roadmapItem={rowRoadmapItem[1]}
                                    />
                                </tr>
                            ))
                    ))}
                    <tr>
                        <div className='crafting-form-goal'>ゴール</div>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
