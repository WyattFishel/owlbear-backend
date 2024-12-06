import { DrawingState } from "./Drawing";
import { FogState } from "./Fog";
import { Notes } from "./Note";
import { TokenStates } from "./TokenState";

export type EditFlag = "drawing" | "tokens" | "notes" | "fog";

export type MapState = {
  tokens: TokenStates;
  drawings: DrawingState;
  fogs: FogState;
  editFlags: Array<EditFlag>;
  notes: Notes;
  mapId: string;
};
