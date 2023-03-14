import React from 'react';

const Story = ({story}) => {
    return (
        <>
            {/* <h2>{index}</h2> */}
            <li>
            {story.title}
            </li>
        </>
    );
};

export default Story;