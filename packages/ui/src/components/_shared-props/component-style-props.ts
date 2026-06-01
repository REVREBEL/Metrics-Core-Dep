export type MetricFormat = "currency" | "percent" | "number";

export type MetricTone =
  | "default"
  | "positive"
  | "negative"
  | "warning"
  | "muted";

export type ComponentSize = "sm" | "md" | "lg";

export type WithMetricFormat = {
  format?: MetricFormat;
};

export type WithMetricTone = {
  tone?: MetricTone;
};

export type WithComponentSize = {
  size?: ComponentSize;
};

export type MetricDisplayProps = WithMetricFormat &
  WithMetricTone &
  WithComponentSize;
