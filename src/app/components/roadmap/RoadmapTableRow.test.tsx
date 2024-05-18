import { render, screen } from '@testing-library/react';
import React from 'react';
import { RoadmapItem } from '../../types/Editor';
import { RoadmapTableRow } from './RoadmapTableRow';

const roadmapItem: RoadmapItem = {
    type: 'text',
    column: 1,
};

describe('test RoadmapTableRow component', () => {
    it('columnに設定された数値分、列が追加されること', () => {
        render(<RoadmapTableRow id='1' roadmapItem={roadmapItem} />);
        const hierarchyColumns = document.querySelectorAll(
            '[data-testid=\'hierarchy-column\']',
        );
        console.log(hierarchyColumns);
    });
});
