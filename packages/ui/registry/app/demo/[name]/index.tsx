import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "./blocks/blank";
import { dashboard } from "./blocks/dashboard";
import { store } from "./blocks/store";

// components
import { brandHeader } from "./components/brand-header";
import { brandSidebar } from "./components/brand-sidebar";
import { hero } from "./components/hero";
import { login } from "./components/login";
import { logo } from "./components/logo";
import { productGrid } from "./components/product-grid";
import { promo } from "./components/promo";

// ui
import { accordion } from "./ui/accordion";
import { alert } from "./ui/alert";
import { alertDialog } from "./ui/alert-dialog";
import { aspectRatio } from "./ui/aspect-ratio";
import { avatar } from "./ui/avatar";
import { badge } from "./ui/badge";
import { breadcrumb } from "./ui/breadcrumb";
import { button } from "./ui/button";
import { calendar } from "./ui/calendar";
import { card } from "./ui/card";
import { carousel } from "./ui/carousel";
import { chart } from "./ui/chart";
import { checkbox } from "./ui/checkbox";
import { collapsible } from "./ui/collapsible";
import { command } from "./ui/command";
import { contextMenu } from "./ui/context-menu";
import { dataTable } from "./ui/data-table";
import { datePicker } from "./ui/date-picker";
import { dialog } from "./ui/dialog";
import { drawer } from "./ui/drawer";
import { dropdownMenu } from "./ui/dropdown-menu";
import { form } from "./ui/form";
import { hoverCard } from "./ui/hover-card";
import { input } from "./ui/input";
import { inputOtp } from "./ui/input-otp";
import { label } from "./ui/label";
import { menubar } from "./ui/menubar";
import { navigationMenu } from "./ui/navigation-menu";
import { pagination } from "./ui/pagination";
import { popover } from "./ui/popover";
import { progress } from "./ui/progress";
import { radioGroup } from "./ui/radio-group";
import { resizable } from "./ui/resizable";
import { scrollArea } from "./ui/scroll-area";
import { select } from "./ui/select";
import { separator } from "./ui/separator";
import { sheet } from "./ui/sheet";
import { sidebar } from "./ui/sidebar";
import { skeleton } from "./ui/skeleton";
import { slider } from "./ui/slider";
import { sonner } from "./ui/sonner";
import { switchComponent } from "./ui/switch";
import { table } from "./ui/table";
import { tabs } from "./ui/tabs";
import { textarea } from "./ui/textarea";
import { toggle } from "./ui/toggle";
import { toggleGroup } from "./ui/toggle-group";
import { tooltip } from "./ui/tooltip";

interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,

  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  alert,
  "alert-dialog": alertDialog,
  "aspect-ratio": aspectRatio,
  avatar,
  badge,
  breadcrumb,
  button,
  calendar,
  card,
  carousel,
  chart,
  checkbox,
  collapsible,
  command,
  "context-menu": contextMenu,
  "data-table": dataTable,
  "date-picker": datePicker,
  dialog,
  drawer,
  "dropdown-menu": dropdownMenu,
  form,
  "hover-card": hoverCard,
  input,
  "input-otp": inputOtp,
  label,
  menubar,
  "navigation-menu": navigationMenu,
  pagination,
  popover,
  progress,
  "radio-group": radioGroup,
  resizable,
  "scroll-area": scrollArea,
  select,
  separator,
  sheet,
  sidebar,
  skeleton,
  slider,
  sonner,
  switch: switchComponent,
  table,
  tabs,
  textarea,
  toggle,
  "toggle-group": toggleGroup,
  tooltip,
};
