import React, { useState } from 'react';
import { RoadmapTable } from '../components/roadmap/RoadmapTable';
import { RoadmapItem } from '../types/Editor';

const initialForms = new Map<string, RoadmapItem>([
    ['1', { type: 'text', column: 1, isLastChild: false }],
    ['2', {
        type: 'image',
        column: 1,
        isLastChild: false,
        children: new Map<string, RoadmapItem>([
            ['2-1', { type: 'text', column: 2, isLastChild: false }],
            ['2-2', {
                type: 'text',
                column: 2,
                isLastChild: false,
                children: new Map<string, RoadmapItem>([
                    ['2-2-1', { type: 'text', column: 3, isLastChild: true }],
                ]),
            }],
            ['2-3', { type: 'text', column: 2, isLastChild: true }],
        ]),
    }],
]);

export const EditorForm = () => {
    const [forms, setForms] = useState<Map<string, RoadmapItem>>(initialForms);
    return (
        <div className='p-3'>
            <form action=''>
                <RoadmapTable roadmap={forms} />
            </form>
        </div>
    );
};
