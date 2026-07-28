export type DataLibraryTableKey =
  | "metrics_core.lkp_segment"
  | "metrics_core.map_segment"
  | "metrics_core.lkp_channel"
  | "metrics_core.map_channel"
  | "metrics_core.map_roomtype"
  | "metrics_core.map_source"
  | "metrics_core.map_market"
  | "metrics_core.map_rate"
  | "metrics_core.dim_property"
  | "metrics_core.lkp_event_category"
  | "metrics_core.lkp_event_impact"
  | "metrics_core.map_hotel"

export type MappingTableKey = DataLibraryTableKey

export interface BigQueryTableRef {
  projectId: string
  datasetId: string
  tableId: string
  fullyQualified: string
}

const DEFAULT_PROJECT_ID = "devrebel-big-query-database"
const DEFAULT_DATASET_ID = "dev_hotel_analytics"
const DEFAULT_DATA_LOCATION = "us-central1"

export function getProjectId(): string {
  return process.env.BQ_PROJECT_ID ?? DEFAULT_PROJECT_ID
}

export function getDatasetId(): string {
  return process.env.BQ_DATASET_ID ?? DEFAULT_DATASET_ID
}

export function getDataLocation(): string {
  return process.env.BQ_DATA_LOCATION ?? DEFAULT_DATA_LOCATION
}

const TABLE_NAME_MAP: Record<DataLibraryTableKey, string> = {
  "metrics_core.lkp_segment": "lkp_segment",
  "metrics_core.map_segment": "map_segment",
  "metrics_core.lkp_channel": "lkp_channel",
  "metrics_core.map_channel": "map_channel",
  "metrics_core.map_roomtype": "map_roomtype",
  "metrics_core.map_source": "map_source",
  "metrics_core.map_market": "map_market",
  "metrics_core.map_rate": "map_rate",
  "metrics_core.dim_property": "dim_property",
  "metrics_core.lkp_event_category": "lkp_event_category",
  "metrics_core.lkp_event_impact": "lkp_event_impact",
  "metrics_core.map_hotel": "map_hotel",
}

export function getMappingTableRef(tableKey: DataLibraryTableKey): BigQueryTableRef {
  const tableId = TABLE_NAME_MAP[tableKey] ?? tableKey.split(".").pop() ?? tableKey
  const projectId = getProjectId()
  const datasetId = getDatasetId()

  return {
    projectId,
    datasetId,
    tableId,
    fullyQualified: `\`${projectId}.${datasetId}.${tableId}\``,
  }
}

export function isMappingTableKey(key: string): key is DataLibraryTableKey {
  return key in TABLE_NAME_MAP
}

export const MAPPING_TABLE_KEYS: DataLibraryTableKey[] = Object.keys(
  TABLE_NAME_MAP
) as DataLibraryTableKey[]
