import os
import re

index_path = "packages/ui/registry/app/demo/[name]/index.tsx"

# Let's get the mapping again from the file I just wrote
with open(index_path, 'r') as f:
    content = f.read()

dynamic_pattern = r'["\']?(\w+[\w-]*)["\']?:\s*dynamic\(\(\)\s*=>\s*import\("([^"]+)"\)\.then\(\(mod\)\s*=>\s*mod\.(\w+)\)\)'
matches = re.findall(dynamic_pattern, content)

new_content = """import dynamic from "next/dynamic";
import { Renderer } from "./renderer";

export const demos: { [name: string]: any } = {
"""

for key, path, var_name in matches:
    new_content += f'''  "{key}": dynamic(() => import("{path}").then((mod) => {{
    const demo = mod.{var_name};
    return function DemoWrapper() {{
      return (
        <>
          {{demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={{key}}>
                <Renderer>{{node as any}}</Renderer>
              </div>
            ))}}
        </>
      );
    }};
  }})),
'''

new_content += "};\n"

with open(index_path, 'w') as f:
    f.write(new_content)
