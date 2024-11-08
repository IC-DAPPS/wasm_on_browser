# WASM bindings generate karne ke liye command
echo "Generating WASM bindings..."

wasm-pack build \
  --out-dir ../declarations/proxy \
  src/proxy \
  --target web \
  --features enable-wasm-bindgen

if [ $? -ne 0 ]; then
  echo "Error: WASM bindings generate karne mein fail ho gaya"
  exit 1
fi

echo "WASM bindings successfully generate ho gaye!"
