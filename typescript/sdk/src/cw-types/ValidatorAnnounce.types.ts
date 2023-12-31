/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  hrp: string;
  mailbox: string;
}
export type ExecuteMsg = {
  announce: {
    signature: HexBinary;
    storage_location: string;
    validator: HexBinary;
  };
};
export type HexBinary = string;
export type QueryMsg =
  | {
      get_announce_storage_locations: {
        validators: HexBinary[];
      };
    }
  | {
      get_announced_validators: {};
    };
export interface GetAnnounceStorageLocationsResponse {
  storage_locations: [string, string[]][];
}
export interface GetAnnouncedValidatorsResponse {
  validators: string[];
}
