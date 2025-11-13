import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CasaServiceBase } from "./base/casa.service.base";

@Injectable()
export class CasaService extends CasaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
