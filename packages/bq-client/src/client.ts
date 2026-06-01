import { BigQuery } from "@google-cloud/bigquery";

const bigquery = new BigQuery();

export async function runQuery<T = unknown>(query: string, params?: Record<string, unknown>): Promise<T[]> {
  const [job] = await bigquery.createQueryJob({ query, params });
  const [rows] = await job.getQueryResults();
  return rows as T[];
}
