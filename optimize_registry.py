import os
import re

index_path = "packages/ui/registry/app/demo/[name]/index.tsx"

with open(index_path, 'r') as f:
    content = f.read()

# 1. Replace static imports with dynamic ones
# Find all imports like: import { accordion } from "./ui/accordion";
import_pattern = r'import\s+\{\s*(\w+)\s*\}\s+from\s+"([^"]+)"'
imports = re.findall(import_pattern, content)

# Separate imports into sections based on comments if possible, but let's just keep them all
new_content = 'import dynamic from "next/dynamic";\nimport type { ReactElement, ReactNode } from "react";\n\n'

# We need to map the variable name to its dynamic import
dynamic_map = {}
for var_name, import_path in imports:
    dynamic_map[var_name] = f'dynamic(() => import("{import_path}").then((mod) => mod.{var_name}))'

# Reconstruct the file
new_content += "interface Demo {\n  name: string;\n  components?: {\n    [name: string]: ReactNode | ReactElement;\n  };\n}\n\n"

# Add the demos object
new_content += "export const demos: { [name: string]: any } = {\n"

# We need to parse the existing demos object to keep the keys correct
# The existing demos object looks like:
# export const demos: { [name: string]: Demo } = {
#   blank,
#   ...
#   "brand-header": brandHeader,
#   ...
# }

demos_match = re.search(r'export const demos: \{ \[name: string\]: Demo \} = \{(.*?)\};', content, re.DOTALL)
if demos_match:
    demos_entries = demos_match.group(1).strip().split('\n')
    for entry in demos_entries:
        entry = entry.strip()
        if not entry or entry.startswith('//'):
            new_content += "  " + entry + "\n"
            continue

        if ':' in entry:
            key, val = entry.split(':')
            key = key.strip()
            val = val.strip().rstrip(',')
            if val in dynamic_map:
                new_content += f'  {key}: {dynamic_map[val]},\n'
            else:
                new_content += f'  {entry}\n'
        else:
            val = entry.rstrip(',')
            if val in dynamic_map:
                new_content += f'  {val}: {dynamic_map[val]},\n'
            else:
                new_content += f'  {entry}\n'

new_content += "};\n"

with open(index_path, 'w') as f:
    f.write(new_content)
