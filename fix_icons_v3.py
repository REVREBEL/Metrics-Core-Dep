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
    "TaskDaily01Icon": "IconCalendarCheck",
    "GoogleMapsIcon": "IconMapPin",
    "ReminderIcon": "IconBell",
    "Appointment01Icon": "IconCalendarEvent",
    "ZoomIcon": "IconVideo",
    "BalloonsIcon": "IconConfetti",
    "FilterHorizontalIcon": "IconFilter",
    "ChevronDown": "IconChevronDown",
}

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # 1. Collect all icons that were used with HugeiconsIcon
    used_icons = re.findall(r'icon=\{([^}]+)\}', content)

    # 2. Identify all icons imported from @hugeicons/core-free-icons
    huge_imports = re.findall(r'import\s+\{([^}]+)\}\s+from\s+["\']@hugeicons/core-free-icons["\']', content)

    all_huge_icons = []
    for imp in huge_imports:
        all_huge_icons.extend([i.strip() for i in imp.split(',') if i.strip()])

    # Also add used icons if they are not in imports (might be imported differently)
    all_huge_icons.extend(used_icons)
    all_huge_icons = list(set(all_huge_icons))

    # 3. Clean up existing Tabler imports to avoid duplication
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']@tabler/icons-react["\']', '', content)
    # Remove IconHugeiconsIcon from anywhere
    content = content.replace("IconHugeiconsIcon", "")

    # 4. Map everything to Tabler
    tabler_icons = sorted(list(set([mappings.get(i, i) for i in all_huge_icons if i not in ["HugeiconsFreeIcons", "HugeiconsIcon", ""] and not i.startswith("Icon")])))
    # Add back any existing Tabler icons that were removed but NOT in the huge list
    # (This is simplified, assuming we want a fresh start for Tabler imports in these files)

    # Create new Tabler import
    if tabler_icons:
        tabler_import = f'import {{ {", ".join(tabler_icons)} }} from "@tabler/icons-react"'
        content = tabler_import + "\n" + content

    # 5. Remove @hugeicons imports
    content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+["\']@hugeicons/core-free-icons["\']', '', content)
    content = re.sub(r'import\s+.*\s+from\s+["\']@hugeicons/react["\']', '', content)

    # 6. Replace <HugeiconsIcon icon={IconName} ... /> with <MappedIcon ... />
    for old, new in mappings.items():
        content = re.sub(rf'<HugeiconsIcon\s+icon={{{old}}}\s*', rf'<{new} ', content)
        content = re.sub(rf'<IconHugeiconsIcon\s+icon={{{old}}}\s*', rf'<{new} ', content)
        # Also handle cases where it's just the icon name as a component (if any)

    # 7. Final cleanup of HugeiconsIcon wrapper if still present with a variable
    # e.g. <HugeiconsIcon icon={item.Icon} /> -> <item.Icon />
    # This is tricky, but let's try a common pattern
    content = re.sub(r'<HugeiconsIcon\s+icon=\{([^}]+)\}\s*([^/>]*)\s*/>', r'<\1 \2 />', content)

    # Remove empty lines and redundant semicolons
    content = re.sub(r'\n\s*;\s*\n', '\n', content)
    content = re.sub(r'\n\n\n+', '\n\n', content)

    with open(path, 'w') as f:
        f.write(content)

# Get all files using hugeicons OR the wrappers
import subprocess
result = subprocess.run(['grep', '-rE', '@hugeicons|HugeiconsIcon|IconHugeiconsIcon', 'packages/ui/src'], capture_output=True, text=True)
files = set()
for line in result.stdout.splitlines():
    files.add(line.split(':')[0])

for f in sorted(list(files)):
    if os.path.exists(f) and f.endswith(('.tsx', '.ts')):
        print(f"Fixing {f}")
        fix_file(f)
