"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePartidoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_partido_dto_1 = require("./create-partido.dto");
class UpdatePartidoDto extends (0, mapped_types_1.PartialType)(create_partido_dto_1.CreatePartidoDto) {
}
exports.UpdatePartidoDto = UpdatePartidoDto;
//# sourceMappingURL=update-partido.dto.js.map