// Copyright (c) 2024 Eray Erdin
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { z } from "zod";
import RustLogo from "../logos/Rust";

export const rustCompSchema = z.object({})

export const RustComposition = () => {
  return (
    <div className="logo-container">
      <RustLogo />
    </div>
  )
}
