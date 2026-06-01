import sys

with open('packages/ui/src/primitives/layouts/sidebar.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    if 'return (' in line and i + 1 < len(lines) and 'data-slot="sidebar-group-label"' in lines[i+1]:
        new_lines.append('  return (\n')
        new_lines.append('    <Comp\n')
    else:
        new_lines.append(line)

with open('packages/ui/src/primitives/layouts/sidebar.tsx', 'w') as f:
    f.writelines(new_lines)
