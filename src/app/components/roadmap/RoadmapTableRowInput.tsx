import React, { CSSProperties } from 'react';

interface RoadmapTableRowInputProps {
    content?: string;
    placeHolder?: string;
}

// field-sizingがCSSPropertiesに存在せず、エラーになってしまうため型を強制
const textareaProperties = {
    fieldSizing: 'content',
} as CSSProperties;

export const RoadmapTableRowInput: React.FC<RoadmapTableRowInputProps> = (
    { content, placeHolder },
) => {
    return (
        <textarea
            name=''
            id=''
            cols={30}
            rows={1}
            className='w-[350px] text-lg outline-none resize-none box-border self-start border-solid border-2 p-1 `'
            style={textareaProperties}
            value={content}
            placeholder={placeHolder}
        >
        </textarea>
    );
};
