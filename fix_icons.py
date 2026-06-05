import os
import re

mappings = {
    "ArrowLeft01Icon": "IconChevronLeft",
    "ArrowRight01Icon": "IconChevronRight",
    "MoreHorizontalCircle01Icon": "IconDots",
    "ArrowDown01Icon": "IconChevronDown",
    "Tick02Icon": "IconCheck",
    "UnfoldMoreIcon": "IconSelector",
    "CodeIcon": "IconCode",
}

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Replace imports
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+"@hugeicons/core-free-icons"',
                     lambda m: 'import { ' + ', '.join([mappings.get(i.strip(), i.strip()) for i in m.group(1).split(',')]) + ' } from "@tabler/icons-react"',
                     content)
    content = re.sub(r'import\s+.*\s+from\s+"@hugeicons/react"', '', content)

    # Replace components
    for old, new in mappings.items():
        # Handle <HugeiconsIcon icon={OldIcon} ... />
        content = re.sub(rf'<HugeiconsIcon\s+icon={{{old}}}\s*([^/>]*)\s*/>', rf'<{new} \1 />', content)
        # Handle IconHugeiconsIcon (seen in grep)
        content = content.replace("IconHugeiconsIcon", "IconCheck") # Fallback for now as seen in grep

    # Clean up empty lines from removed imports
    content = re.sub(r'\n\n+', '\n\n', content)

    with open(path, 'w') as f:
        f.write(content)

files = [
    "packages/ui/src/primitives/ui/pagination.tsx",
    "packages/ui/src/primitives/ui/navigation-menu.tsx",
    "packages/ui/src/primitives/ui/day-picker.tsx"
]

for f in files:
    if os.path.exists(f):
        fix_file(f)
