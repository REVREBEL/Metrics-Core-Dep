"use client";

import * as React from "react";

import { Tabs, TabsList, TabsTrigger } from "@tabs";
import { cn } from "@lib";

export type MetricCardTabsOption<TValue extends string = string> = {
  label: React.ReactNode;
  value: TValue;
};

export type MetricCardTabsProps<TValue extends string = string> = {
  tabs: MetricCardTabsOption<TValue>[];
  value?: TValue;
  defaultValue?: TValue;
  onValueChange?: (value: TValue) => void;
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
};

export function MetricCardTabs<TValue extends string = string>({
  tabs,
  value,
  defaultValue,
  onValueChange,
  className,
  listClassName,
  triggerClassName,
}: MetricCardTabsProps<TValue>) {
  return (
    <Tabs
      value={value}
      defaultValue={defaultValue}
      className={cn("metric-card-tabs-root", className)}
      onValueChange={(nextValue) => onValueChange?.(nextValue as TValue)}
    >
      <TabsList className={cn("metric-card-tabs", listClassName)}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn("metric-card-tab", triggerClassName)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
