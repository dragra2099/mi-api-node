import { Casa as TCasa } from "../api/casa/Casa";

export const CASA_TITLE_FIELD = "id";

export const CasaTitle = (record: TCasa): string => {
  return record.id?.toString() || String(record.id);
};
