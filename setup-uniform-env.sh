#!/bin/bash

# Set up Uniform environment variables
export UNIFORM_API_KEY="uf18l8m9t86kz9fm8cwd2gxjengwj7cdly4c2refehqq3xz9ml6gww3j5ad0vtllnnffs4e38xh6gdwcw6jv3hn7qe4c6u0py"
export UNIFORM_PROJECT_ID="f6498f5e-ba99-4267-adb3-20721aee9442"
export UNIFORM_AI_API_HOST="https://ai.uniform.global"

echo "Environment variables set:"
echo "UNIFORM_API_KEY: ${UNIFORM_API_KEY:0:10}..."
echo "UNIFORM_PROJECT_ID: $UNIFORM_PROJECT_ID"

# Try to use Uniform CLI
echo "Attempting to pull current Uniform data..."
npx @uniformdev/cli sync pull

echo "Setup complete! You can now use Uniform CLI commands or the MCP tools."
echo "Example commands:"
echo "  npx @uniformdev/cli sync pull"
echo "  npx @uniformdev/cli sync push"