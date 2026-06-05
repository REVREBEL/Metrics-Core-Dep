import os
import re

mappings = {
    "ArrowLeft01Icon": "IconChevronLeft",
    "ArrowLeft02Icon": "IconChevronLeft",
    "ArrowLeft03Icon": "IconArrowNarrowLeft",
    "ArrowRight01Icon": "IconChevronRight",
    "ArrowRight02Icon": "IconChevronRight",
    "ArrowRight03Icon": "IconArrowNarrowRight",
    "ArrowDown01Icon": "IconChevronDown",
    "ArrowDown02Icon": "IconChevronDown",
    "ArrowUp02Icon": "IconChevronUp",
    "MoreHorizontalCircle01Icon": "IconDots",
    "MoreHorizontalIcon": "IconDots",
    "Tick02Icon": "IconCheck",
    "UnfoldMoreIcon": "IconSelector",
    "CodeIcon": "IconCode",
    "AddCircleIcon": "IconPlus",
    "Building02Icon": "IconBuilding",
    "CreditCardIcon": "IconCreditCard",
    "Delete01Icon": "IconTrash",
    "DragDropHorizontalIcon": "IconGripHorizontal",
    "DragDropVerticalIcon": "IconGripVertical",
    "Edit02Icon": "IconEdit",
    "Link02Icon": "IconLink",
    "PinOffIcon": "IconPinOff",
    "Share01Icon": "IconShare",
    "SlidersHorizontalIcon": "IconAdjustmentsHorizontal",
    "Wallet01Icon": "IconWallet",
}

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # 1. Identify all icons imported from @hugeicons/core-free-icons
    huge_imports = re.findall(r'import\s+\{([^}]+)\}\s+from\s+"@hugeicons/core-free-icons"', content)
    if not huge_imports:
        huge_imports = re.findall(r"import\s+\{([^}]+)\}\s+from\s+'@hugeicons/core-free-icons'", content)

    if huge_imports:
        all_huge_icons = []
        for imp in huge_imports:
            all_huge_icons.extend([i.strip() for i in imp.split(',') if i.strip()])

        tabler_icons = sorted(list(set([mappings.get(i, i) for i in all_huge_icons if i != "HugeiconsFreeIcons"])))

        # Replace the import statement
        content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']@hugeicons/core-free-icons["\']',
                         f'import {{ {", ".join(tabler_icons)} }} from "@tabler/icons-react"',
                         content)

    # 2. Remove @hugeicons/react import
    content = re.sub(r'import\s+.*\s+from\s+["\']@hugeicons/react["\']', '', content)

    # 3. Replace <HugeiconsIcon icon={IconName} ... /> with <MappedIcon ... />
    for old, new in mappings.items():
        content = re.sub(rf'<HugeiconsIcon\s+icon={{{old}}}\s*', rf'<{new} ', content)
        content = re.sub(rf'<IconHugeiconsIcon\s+icon={{{old}}}\s*', rf'<{new} ', content)

    # 4. Handle remaining HugeiconsIcon or IconHugeiconsIcon cases (generic replacement if possible or just remove wrapper)
    # If we see <HugeiconsIcon ... /> it might be using a variable. But mostly it's literal.

    # Clean up empty lines from removed imports
    content = re.sub(r'\n\n\n+', '\n\n', content)

    with open(path, 'w') as f:
        f.write(content)

# Get all files using hugeicons
import subprocess
result = subprocess.run(['grep', '-r', '@hugeicons', 'packages/ui/src'], capture_output=True, text=True)
files = set()
for line in result.stdout.splitlines():
    files.add(line.split(':')[0])

for f in files:
    if os.path.exists(f) and f.endswith(('.tsx', '.ts')):
        fix_file(f)
