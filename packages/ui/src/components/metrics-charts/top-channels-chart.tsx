"use client";

import { MoreVertical } from "lucide-react";
import { useMemo, useState } from "react";

import {
  AgodaCircle as AgodaIcon,
  BookingCircle as BookingIcon,
  ExpediaCircle as ExpediaIcon,
  HopperCircle as HopperIcon,
  HotelbedsCircle as HotelbedsIcon,
  PricelineCircle as PricelineIcon,
} from "@icons";
import {
  MetricCard,
  MetricCardTabs,
} from "@shared-ui";

type ChannelMetric = "rooms" | "adr" | "revenue" | "alos";
type ChannelKey =
  | "expedia"
  | "booking"
  | "agoda"
  | "priceline"
  | "hotelbeds"
  | "hopper";

interface ChannelData {
  key: ChannelKey;
  name: string;
  Icon: any;
  rooms: number;
  adr: number;
  revenue: number;
  alos: number;
}

const CHANNEL_DATA: ChannelData[] = [
  {
    key: "expedia",
    name: "Expedia",
    Icon: ExpediaIcon,
    rooms: 1245,
    adr: 185.5,
    revenue: 231000,
    alos: 3.2,
  },
  {
    key: "booking",
    name: "Booking.com",
    Icon: BookingIcon,
    rooms: 1102,
    adr: 192.2,
    revenue: 211800,
    alos: 2.8,
  },
  {
    key: "agoda",
    name: "Agoda",
    Icon: AgodaIcon,
    rooms: 856,
    adr: 165.8,
    revenue: 141900,
    alos: 4.1,
  },
  {
    key: "priceline",
    name: "Priceline",
    Icon: PricelineIcon,
    rooms: 642,
    adr: 178.4,
    revenue: 114500,
    alos: 2.4,
  },
  {
    key: "hotelbeds",
    name: "Hotelbeds",
    Icon: HotelbedsIcon,
    rooms: 423,
    adr: 155.2,
    revenue: 65600,
    alos: 3.5,
  },
  {
    key: "hopper",
    name: "Hopper",
    Icon: HopperIcon,
    rooms: 285,
    adr: 142.6,
    revenue: 40500,
    alos: 1.9,
  },
];

const CHANNEL_TABS = [
  { label: "Rooms", value: "rooms" as const },
  { label: "ADR", value: "adr" as const },
  { label: "Revenue", value: "revenue" as const },
  { label: "ALOS", value: "alos" as const },
];

export function TopChannelsChart() {
  const [activeMetric, setActiveMetric] = useState<ChannelMetric>("rooms");
  const [hoveredKey, setHoveredKey] = useState<ChannelKey | null>(null);

  const totals = useMemo(() => {
    return CHANNEL_DATA.reduce(
      (acc, curr) => ({
        rooms: acc.rooms + curr.rooms,
        revenue: acc.revenue + curr.revenue,
      }),
      { rooms: 0, revenue: 0 },
    );
  }, []);

  const getMetricValue = (item: ChannelData, metric: ChannelMetric) => {
    return item[metric];
  };

  const getMetricLabel = (metric: ChannelMetric) => {
    switch (metric) {
      case "rooms":
        return "Total Rooms";
      case "adr":
        return "Avg. Daily Rate";
      case "revenue":
        return "Total Revenue";
      case "alos":
        return "Avg. LOS";
    }
  };

  const getBarLabel = (item: ChannelData, metric: ChannelMetric) => {
    const val = getMetricValue(item, metric);
    switch (metric) {
      case "adr":
        return `$${val.toLocaleString()}`;
      case "revenue":
        return `$${(val / 1000).toFixed(1)}k`;
      case "alos":
        return `${val.toFixed(1)}d`;
      default:
        return val.toLocaleString();
    }
  };

  const getSideMetric = (
    item: ChannelData,
    metric: ChannelMetric,
    totals: { rooms: number; revenue: number },
  ) => {
    if (metric === "rooms") {
      const share = ((item.rooms / totals.rooms) * 100).toFixed(1);
      return { label: `${share}%`, value: item.rooms };
    }
    if (metric === "revenue") {
      const share = ((item.revenue / totals.revenue) * 100).toFixed(1);
      return { label: `${share}%`, value: item.revenue };
    }
    return { label: getBarLabel(item, metric), value: item[metric] };
  };

  const displayData = useMemo(() => {
    const maxValue = Math.max(
      ...CHANNEL_DATA.map((item) => getMetricValue(item, activeMetric)),
    );

    return CHANNEL_DATA.map((item) => {
      const value = getMetricValue(item, activeMetric);
      const sideMetric = getSideMetric(item, activeMetric, totals);

      return {
        ...item,
        value,
        width: maxValue ? Math.max((value / maxValue) * 100, 4) : 0,
        barLabel: getBarLabel(item, activeMetric),
        sideLabel: sideMetric.label,
        sideValue: sideMetric.value,
      };
    });
  }, [activeMetric, totals]);

  return (
    <MetricCard
      title="Top Channels"
      description="OTA production ranked by rooms, ADR, revenue, and length of stay."
      metric="total"
      sourceType="indicator"
      source="total"
      headerAction={
        <MoreVertical className="h-5 w-5 cursor-pointer text-primary" />
      }
    >
      <MetricCardTabs
        tabs={CHANNEL_TABS}
        value={activeMetric}
        onValueChange={setActiveMetric}
      />

      <div className="top-channels-chart">
        <div
          className="top-channels-chart__bars"
          aria-label="Top OTA channel bars"
        >
          {displayData.map((channel, index) => {
            const isMuted = hoveredKey !== null && hoveredKey !== channel.key;
            const labelInside = channel.width >= 24;

            return (
              <div
                key={channel.key}
                className="top-channels-chart__row"
                data-source-type="channel"
                data-source={channel.key}
                data-muted={isMuted ? "true" : undefined}
                onMouseEnter={() => setHoveredKey(channel.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <span className="top-channels-chart__rank">{index + 1}</span>

                <div className="top-channels-chart__bar-track">
                  <div
                    className="top-channels-chart__bar"
                    style={{ width: `${channel.width}%` }}
                  >
                    <span className="top-channels-chart__bar-name">
                      {channel.name}
                    </span>
                    {labelInside && (
                      <span className="top-channels-chart__bar-value top-channels-chart__bar-value--inside">
                        {channel.barLabel}
                      </span>
                    )}
                  </div>
                  {!labelInside && (
                    <span
                      className="top-channels-chart__bar-value top-channels-chart__bar-value--outside"
                      style={{ left: `calc(${channel.width}% + 0.5rem)` }}
                    >
                      {channel.barLabel}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="top-channels-chart__metrics"
          aria-label="Channel comparison metrics"
        >
          {displayData.map((channel) => {
            const Icon = channel.Icon;
            const isMuted = hoveredKey !== null && hoveredKey !== channel.key;

            return (
              <div
                key={channel.key}
                className="top-channels-chart__metric"
                data-source-type="channel"
                data-source={channel.key}
                data-muted={isMuted ? "true" : undefined}
                onMouseEnter={() => setHoveredKey(channel.key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                <Icon className="top-channels-chart__icon" aria-hidden="true" />
                <div>
                  <div className="top-channels-chart__metric-value">
                    {channel.sideLabel}
                  </div>
                  <div className="top-channels-chart__metric-label">
                    {getMetricLabel(activeMetric)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MetricCard>
  );
}
