import { Module } from "@nestjs/common";
import { CasaModuleBase } from "./base/casa.module.base";
import { CasaService } from "./casa.service";
import { CasaController } from "./casa.controller";
import { CasaResolver } from "./casa.resolver";

@Module({
  imports: [CasaModuleBase],
  controllers: [CasaController],
  providers: [CasaService, CasaResolver],
  exports: [CasaService],
})
export class CasaModule {}
