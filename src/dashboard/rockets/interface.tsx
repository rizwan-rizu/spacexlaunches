interface iHeight {
  meters: number,
  feet: number
}

interface iDiameter {
  meters: number,
  feet: number
}

interface iMass {
  kg: number,
  lb: number
}

export interface iRocketsProps {
  height: iHeight,
  diameter: iDiameter,
  mass: iMass,
  first_stage: {
    thrust_sea_level: object,
    thrust_vacuum: object,
    reusable: boolean,
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number
  },
  second_stage: {
    thrust: object,
    payloads: {
      composite_fairing: {
        height: iHeight,
        diameter: iDiameter,
      },
      option_1: string,
    },
    reusable: boolean,
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number
  },
  engines: {
    [key: string]: string | number
  },
  landing_legs: {
    number: number,
    material: null
  },
  payload_weights: [
    {
      id: string,
      name: string,
      kg: number,
      lb: number
    }
  ],
  flickr_images: string[],
  name: string,
  type: string,
  active: false,
  stages: number,
  boosters: number,
  cost_per_launch: number,
  success_rate_pct: number,
  first_flight: string,
  country: string,
  company: string,
  wikipedia: string,
  description: string,
  id: string
}