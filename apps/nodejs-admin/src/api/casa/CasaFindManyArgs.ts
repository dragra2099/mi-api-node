import { CasaWhereInput } from "./CasaWhereInput";
import { CasaOrderByInput } from "./CasaOrderByInput";

export type CasaFindManyArgs = {
  where?: CasaWhereInput;
  orderBy?: Array<CasaOrderByInput>;
  skip?: number;
  take?: number;
};
