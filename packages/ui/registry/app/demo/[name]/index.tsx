import dynamic from "next/dynamic";
import { Renderer } from "./renderer";

export const demos: { [name: string]: any } = {
  "blank": dynamic(() => import("./blocks/blank").then((mod) => {
    const demo = mod.blank;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "store": dynamic(() => import("./blocks/store").then((mod) => {
    const demo = mod.store;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "dashboard": dynamic(() => import("./blocks/dashboard").then((mod) => {
    const demo = mod.dashboard;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "hero": dynamic(() => import("./components/hero").then((mod) => {
    const demo = mod.hero;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "login": dynamic(() => import("./components/login").then((mod) => {
    const demo = mod.login;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "promo": dynamic(() => import("./components/promo").then((mod) => {
    const demo = mod.promo;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "logo": dynamic(() => import("./components/logo").then((mod) => {
    const demo = mod.logo;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "accordion": dynamic(() => import("./ui/accordion").then((mod) => {
    const demo = mod.accordion;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "alert": dynamic(() => import("./ui/alert").then((mod) => {
    const demo = mod.alert;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "avatar": dynamic(() => import("./ui/avatar").then((mod) => {
    const demo = mod.avatar;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "badge": dynamic(() => import("./ui/badge").then((mod) => {
    const demo = mod.badge;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "breadcrumb": dynamic(() => import("./ui/breadcrumb").then((mod) => {
    const demo = mod.breadcrumb;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "button": dynamic(() => import("./ui/button").then((mod) => {
    const demo = mod.button;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "calendar": dynamic(() => import("./ui/calendar").then((mod) => {
    const demo = mod.calendar;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "card": dynamic(() => import("./ui/card").then((mod) => {
    const demo = mod.card;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "carousel": dynamic(() => import("./ui/carousel").then((mod) => {
    const demo = mod.carousel;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "chart": dynamic(() => import("./ui/chart").then((mod) => {
    const demo = mod.chart;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "checkbox": dynamic(() => import("./ui/checkbox").then((mod) => {
    const demo = mod.checkbox;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "collapsible": dynamic(() => import("./ui/collapsible").then((mod) => {
    const demo = mod.collapsible;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "command": dynamic(() => import("./ui/command").then((mod) => {
    const demo = mod.command;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "dialog": dynamic(() => import("./ui/dialog").then((mod) => {
    const demo = mod.dialog;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "drawer": dynamic(() => import("./ui/drawer").then((mod) => {
    const demo = mod.drawer;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "form": dynamic(() => import("./ui/form").then((mod) => {
    const demo = mod.form;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "input": dynamic(() => import("./ui/input").then((mod) => {
    const demo = mod.input;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "label": dynamic(() => import("./ui/label").then((mod) => {
    const demo = mod.label;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "menubar": dynamic(() => import("./ui/menubar").then((mod) => {
    const demo = mod.menubar;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "pagination": dynamic(() => import("./ui/pagination").then((mod) => {
    const demo = mod.pagination;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "popover": dynamic(() => import("./ui/popover").then((mod) => {
    const demo = mod.popover;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "progress": dynamic(() => import("./ui/progress").then((mod) => {
    const demo = mod.progress;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "resizable": dynamic(() => import("./ui/resizable").then((mod) => {
    const demo = mod.resizable;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "select": dynamic(() => import("./ui/select").then((mod) => {
    const demo = mod.select;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "separator": dynamic(() => import("./ui/separator").then((mod) => {
    const demo = mod.separator;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "sheet": dynamic(() => import("./ui/sheet").then((mod) => {
    const demo = mod.sheet;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "sidebar": dynamic(() => import("./ui/sidebar").then((mod) => {
    const demo = mod.sidebar;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "skeleton": dynamic(() => import("./ui/skeleton").then((mod) => {
    const demo = mod.skeleton;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "slider": dynamic(() => import("./ui/slider").then((mod) => {
    const demo = mod.slider;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "sonner": dynamic(() => import("./ui/sonner").then((mod) => {
    const demo = mod.sonner;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "switch": dynamic(() => import("./ui/switch").then((mod) => {
    const demo = mod.switchComponent;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "table": dynamic(() => import("./ui/table").then((mod) => {
    const demo = mod.table;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "tabs": dynamic(() => import("./ui/tabs").then((mod) => {
    const demo = mod.tabs;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "textarea": dynamic(() => import("./ui/textarea").then((mod) => {
    const demo = mod.textarea;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "toggle": dynamic(() => import("./ui/toggle").then((mod) => {
    const demo = mod.toggle;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "tooltip": dynamic(() => import("./ui/tooltip").then((mod) => {
    const demo = mod.tooltip;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "brand-header": dynamic(() => import("./components/brand-header").then((mod) => {
    const demo = mod.brandHeader;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "brand-sidebar": dynamic(() => import("./components/brand-sidebar").then((mod) => {
    const demo = mod.brandSidebar;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "product-grid": dynamic(() => import("./components/product-grid").then((mod) => {
    const demo = mod.productGrid;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "alert-dialog": dynamic(() => import("./ui/alert-dialog").then((mod) => {
    const demo = mod.alertDialog;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "aspect-ratio": dynamic(() => import("./ui/aspect-ratio").then((mod) => {
    const demo = mod.aspectRatio;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "context-menu": dynamic(() => import("./ui/context-menu").then((mod) => {
    const demo = mod.contextMenu;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "data-table": dynamic(() => import("./ui/data-table").then((mod) => {
    const demo = mod.dataTable;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "date-picker": dynamic(() => import("./ui/date-picker").then((mod) => {
    const demo = mod.datePicker;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "dropdown-menu": dynamic(() => import("./ui/dropdown-menu").then((mod) => {
    const demo = mod.dropdownMenu;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "hover-card": dynamic(() => import("./ui/hover-card").then((mod) => {
    const demo = mod.hoverCard;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "input-otp": dynamic(() => import("./ui/input-otp").then((mod) => {
    const demo = mod.inputOtp;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "navigation-menu": dynamic(() => import("./ui/navigation-menu").then((mod) => {
    const demo = mod.navigationMenu;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "radio-group": dynamic(() => import("./ui/radio-group").then((mod) => {
    const demo = mod.radioGroup;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "scroll-area": dynamic(() => import("./ui/scroll-area").then((mod) => {
    const demo = mod.scrollArea;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
  "toggle-group": dynamic(() => import("./ui/toggle-group").then((mod) => {
    const demo = mod.toggleGroup;
    return function DemoWrapper() {
      return (
        <>
          {demo.components &&
            Object.entries(demo.components).map(([key, node]) => (
              <div className="relative w-full" key={key}>
                <Renderer>{node as any}</Renderer>
              </div>
            ))}
        </>
      );
    };
  })),
};
