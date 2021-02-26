import { WebSocketPacket, MainframeEvent } from "p4nth3rb0t-types";

export interface SocketOptions {
  reconnect: boolean;
}

// eslint-disable-next-line no-unused-vars
export type Callback = (data: any) => void;
export type TypedPacketCallback = (packet: WebSocketPacket) => void;

// todo move to MainframeEvent to iterate over it for the EventMap Creation
export enum AdditionalWebSocketTypes {
  raw = "raw",
  error = "error",
  close = "close",
  open = "open",
}

export type TrustedEventMap = {
  [key in keyof typeof MainframeEvent | AdditionalWebSocketTypes]: Set<Callback>;
};

export type TrustedEvent = keyof TrustedEventMap;

export enum CurrentMoods {
  Cool = "cool",
  Dolla = "dolla",
  Fire = "fire",
  Heart = "heart",
  Majick = "majick",
  PewPew = "pewpew",
  Sad = "sad",
  Star = "star",
}
