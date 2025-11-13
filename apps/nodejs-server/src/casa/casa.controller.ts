import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CasaService } from "./casa.service";
import { CasaControllerBase } from "./base/casa.controller.base";

@swagger.ApiTags("casas")
@common.Controller("casas")
export class CasaController extends CasaControllerBase {
  constructor(protected readonly service: CasaService) {
    super(service);
  }
}
