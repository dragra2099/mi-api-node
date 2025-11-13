import * as graphql from "@nestjs/graphql";
import { CasaResolverBase } from "./base/casa.resolver.base";
import { Casa } from "./base/Casa";
import { CasaService } from "./casa.service";

@graphql.Resolver(() => Casa)
export class CasaResolver extends CasaResolverBase {
  constructor(protected readonly service: CasaService) {
    super(service);
  }
}
