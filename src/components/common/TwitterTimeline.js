import React from 'react';
import { Timeline } from 'react-twitter-widgets'

export default class TwitterTimeline extends React.Component {
	render () {
		return (
            <aside class="comp-twitter-timeline">
							<Timeline
								dataSource={{
								  sourceType: 'profile',
								  screenName: 'flaudlogic'
								}}
								options={{
								  username: 'flaudlogic',
								  height: '600',
								  theme: 'dark',
								  width: '320'
								}}
								onLoad={() => console.log('Timeline is loaded!')}
							  />
            </aside>
        );
    }
}
