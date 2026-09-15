#!/bin/bash

# Replace orange colors with blue/amber in all TSX files
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-50/blue-50/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-100/blue-100/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-200/blue-200/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-300/blue-300/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-400/amber-400/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-500/blue-600/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-600/blue-700/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-700/blue-800/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-800/blue-900/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/orange-900/blue-950/g' {} +

# Replace from-orange gradients
find client/src -name "*.tsx" -type f -exec sed -i 's/from-orange-/from-blue-/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/to-orange-400/to-amber-500/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/to-orange-500/to-blue-700/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/to-orange-600/to-indigo-600/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/to-orange-700/to-blue-800/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/to-orange-800/to-blue-900/g' {} +
find client/src -name "*.tsx" -type f -exec sed -i 's/via-orange-/via-blue-/g' {} +

echo "Color replacement complete!"
