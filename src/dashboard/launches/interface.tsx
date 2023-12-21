export interface iLaunchProps {
  "fairings": {
    "reused": boolean,
    "recovery_attempt": boolean,
    "recovered": boolean,
    "ships": any[]
  },
  "links": {
    "patch": {
      "small": string,
      "large": string
    },
    "reddit": object,
    "flickr": {
      "small": string[],
      "original": string[]
    },
    "presskit": string,
    "webcast": string,
    "youtube_id": string,
    "article": string,
    "wikipedia": string
  },
  "static_fire_date_utc": string,
  "static_fire_date_unix": number,
  "net": boolean,
  "window": number,
  "rocket": string,
  "success": boolean,
  "failures": object[],
  "details": string,
  "crew": string[],
  "ships": string[],
  "capsules": string[],
  "payloads": string[],
  "launchpad": string,
  "flight_number": 1,
  "name": string,
  "date_utc": string,
  "date_unix": 1143239400,
  "date_local": string,
  "date_precision": string,
  "upcoming": boolean,
  "cores": object[],
  "auto_update": boolean,
  "tbd": boolean,
  "launch_library_id": string,
  "id": string
}