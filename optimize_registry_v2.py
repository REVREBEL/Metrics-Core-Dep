import os
import re

index_path = "packages/ui/registry/app/demo/[name]/index.tsx"

with open(index_path, 'r') as f:
    content = f.read()

# We want the dynamic imports to be accessible, but we also want the page to work.
# If we make the demos object contain dynamic components that render the demo, it might be easier.

# Let's find all the var names again
import_pattern = r'import\s+\{\s*(\w+)\s*\}\s+from\s+"([^"]+)"'
# Use the original content if possible, but I already overrode it.
# I'll have to reconstruct the imports from the dynamic calls I made.
dynamic_pattern = r'(\w+):\s*dynamic\(\(\)\s*=>\s*import\("([^"]+)"\)\.then\(\(mod\)\s*=>\s*mod\.(\w+)\)\)'
matches = re.findall(dynamic_pattern, content)

new_content = 'import dynamic from "next/dynamic";\nimport type { ReactElement, ReactNode } from "react";\n\n'

new_content += """
export const demos: { [name: string]: any } = {
"""

for key, path, var_name in matches:
    new_content += f'  "{key}": dynamic(() => import("{path}").then((mod) => mod.{var_name})),\n'

# Handle some manual keys that might have been lost
if '"brand-header"' not in new_content:
    # Re-extracting from current content which has "brand-header"
    manual_dynamic_pattern = r'"([^"]+)":\s*dynamic\(\(\)\s*=>\s*import\("([^"]+)"\)\.then\(\(mod\)\s*=>\s*mod\.(\w+)\)\)'
    manual_matches = re.findall(manual_dynamic_pattern, content)
    for key, path, var_name in manual_matches:
        if key not in [m[0] for m in matches]:
            new_content += f'  "{key}": dynamic(() => import("{path}").then((mod) => mod.{var_name})),\n'

new_content += "};\n"

with open(index_path, 'w') as f:
    f.write(new_content)
