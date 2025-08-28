#!/bin/bash

# Remove target="_blank" from all TypeScript and JavaScript files in src/
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's/target="_blank" //g'

echo "All target='_blank' attributes have been removed!"