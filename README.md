# Rust WASM + Svelte Integration Project

A full-stack application demonstrating Rust-generated WebAssembly (WASM) integration with a Svelte frontend. The project includes a simple calculator function implemented in Rust and exposed through WASM bindings.

## 🚀 Features

- Rust backend compiled to WebAssembly
- Svelte frontend with TypeScript support
- Simple addition calculator demo
- IC (Internet Computer) integration capabilities
- Anonymous identity handling
- Component testing setup

## 🛠️ Technology Stack

- **Backend:**
  - Rust
  - wasm-bindgen
  - Cargo
- **Frontend:**
  - Svelte
  - TypeScript
  - @dfinity/agent
  - @dfinity/gix-components

## 📦 Project Structure

├── backend/         # Rust backend code

├── proxy/           # Rust WASM module

├── frontend/        # Svelte frontend application

└── declarations/    # Generated declarations and bindings


## 🔧 Setup & Installation

1. **Prerequisites:**
   ```bash
   # Install Rust
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   
   # Install wasm-pack
   cargo install wasm-pack
   
   # Install Node.js dependencies
   npm install
   ```
2. **Build and Deploy:**
   ```bash
   # Start dfx
   dfx start --clean --background

   # Generate WASM bindings
   ./scripts/bindings.sh

   # Deploy local environment
   ./scripts/deploy-local.sh

   # Start frontend development server
   npm run dev
   ```
