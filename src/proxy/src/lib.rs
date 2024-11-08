#[cfg(feature = "enable-wasm-bindgen")]
use wasm_bindgen::prelude::wasm_bindgen;

#[cfg_attr(feature = "enable-wasm-bindgen", wasm_bindgen)]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}