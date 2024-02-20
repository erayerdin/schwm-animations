// Copyright (c) 2024 Eray Erdin
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Composition } from 'remotion';
import { RustComposition, rustCompSchema } from './compositions/RustComposition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={RustComposition}
				durationInFrames={240}
				fps={60}
				width={1080}
				height={1080}
				schema={rustCompSchema}
				defaultProps={{}}
			/>
		</>
	);
};
