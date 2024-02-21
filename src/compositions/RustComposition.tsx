// Copyright (c) 2024 Eray Erdin
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { interpolate, useCurrentFrame } from "remotion";
import { z } from "zod";
import RustLogo from "../logos/Rust";

export const rustCompSchema = z.object({})

export const RustComposition = () => {
  const frame = useCurrentFrame();
  const degrees = interpolate(frame, [0, 60], [0, 45/4]);

  return (
    <div className="logo-container">
      <RustLogo.Circle transform={`rotate(${degrees})`} />
      <RustLogo.Core />
    </div>
  )
}
