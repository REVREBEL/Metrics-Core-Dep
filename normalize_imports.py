import os
import re

mapping = {
    "accordion": "@ui",
    "alert": "@ui",
    "alert-dialog": "@ui",
    "aspect-ratio": "@ui",
    "avatar": "@ui",
    "badge": "@ui",
    "breadcrumb": "@ui",
    "button": "@buttons",
    "calendar": "@ui",
    "card": "@ui",
    "carousel": "@ui",
    "chart": "@charts",
    "checkbox": "@ui",
    "collapsible": "@ui",
    "command": "@ui",
    "context-menu": "@ui",
    "dialog": "@ui",
    "drawer": "@ui",
    "dropdown-menu": "@dropdowns",
    "form": "@ui",
    "hover-card": "@ui",
    "input": "@inputs",
    "input-otp": "@inputs",
    "label": "@ui",
    "menubar": "@ui",
    "navigation-menu": "@ui",
    "pagination": "@ui",
    "popover": "@popovers",
    "progress": "@ui",
    "radio-group": "@ui",
    "resizable": "@ui",
    "scroll-area": "@ui",
    "select": "@ui",
    "separator": "@ui",
    "sheet": "@ui",
    "sidebar": "@ui",
    "skeleton": "@skeleton",
    "slider": "@ui",
    "sonner": "@ui",
    "switch": "@ui",
    "table": "@tables",
    "tabs": "@tabs",
    "textarea": "@textarea",
    "toggle": "@ui",
    "toggle-group": "@ui",
    "tooltip": "@ui",
}

def normalize_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Find all "@/components/ui/X" imports
    matches = re.findall(r'from\s+["\']@/components/ui/([^"\']+)["\']', content)
    for component in matches:
        if component in mapping:
            alias = mapping[component]
            content = content.replace(f'@/components/ui/{component}', alias)
        else:
            # Fallback to @ui if not specifically mapped
            content = content.replace(f'@/components/ui/{component}', '@ui')

    with open(path, 'w') as f:
        f.write(content)

demo_dir = "packages/ui/registry/app/demo"
for root, dirs, files in os.walk(demo_dir):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            normalize_file(os.path.join(root, f))
