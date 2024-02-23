// Copyright (c) 2024 Eray Erdin
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {interpolate, useCurrentFrame} from 'remotion';
import {z} from 'zod';
import RustLogo from '../logos/Rust';

export const rustCompSchema = z.object({
	slowness: z
		.number()
		.default(8)
		.refine(
			(n) => {
				const logBase = Math.log2(n);
				return Number.isInteger(Math.floor(logBase));
			},
			{
				message: 'Slowness must be a power of 2',
			}
		),
});

type Props = z.input<typeof rustCompSchema>;

export const RustComposition = ({slowness = 8}: Props) => {
	const frame = useCurrentFrame();
	const degrees = interpolate(frame, [0, 60], [0, 90 / slowness]);

	return (
		<div className="logo-container">
			<RustLogo.Circle transform={`rotate(${degrees})`} />
			<RustLogo.Core />
		</div>
	);
};
