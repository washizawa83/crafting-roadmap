import React, { useState } from 'react';
import { RoadmapTable } from '../components/roadmap/RoadmapTable';
import { RoadmapItem } from '../types/Editor';

const initialForms = new Map<string, RoadmapItem>([
    ['1', { type: 'text', column: 1 }],
    ['2', {
        type: 'text',
        column: 1,
        children: new Map<string, RoadmapItem>([
            ['2-1', { type: 'text', column: 2 }],
        ]),
    }],
]);

export const EditorForm = () => {
    const [forms, setForms] = useState<Map<string, RoadmapItem>>(initialForms);
    return (
        <>
            <form action=''>
                <RoadmapTable roadmap={forms} />
            </form>
        </>
    );
};
