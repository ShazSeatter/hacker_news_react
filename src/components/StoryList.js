import React from 'react';
import Story from './Story';

const StoryList = function ({stories}) {


    const storyNodes = stories.map((story, index) => {
        return <Story key={story.id} index={index} story={story}/>
    })
    
    return (
            <div>
                <h2>Articles</h2>
            <ul>
            {storyNodes}
            </ul>
            </div>

    )
}


export default StoryList; 