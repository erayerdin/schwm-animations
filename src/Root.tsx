// Copyright (c) 2024 Eray Erdin
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {Composition} from 'remotion';
import {RustComposition, rustCompSchema} from './compositions/RustComposition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="RustComposition"
				component={RustComposition}
				durationInFrames={60}
				fps={60}
				width={1080}
				height={1080}
				schema={rustCompSchema}
				defaultProps={
					{
						// slowness: 8,
					}
				}
			/>
		</>
	);
};
