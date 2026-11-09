import type { ComponentType } from "react";
import {
  KarachiIdentity,
  OttawaIdentity,
  TorontoIdentity,
} from "../components/places/regional-identities";
import { VancouverIdentity } from "../components/places/vancouver-identity";

export type PlaceRegion = "northAmerica" | "southAsia";

type City = {
  id: string;
  name: string;
  country: string;
  coordinates: { latitude: number; longitude: number };
  region: PlaceRegion;
  Identity: ComponentType;
  description?: string;
  residencePeriod?: string;
  highlights?: readonly string[];
};

export const cities: readonly City[] = [
  { id: "vancouver", name: "Vancouver", country: "Canada", coordinates: { latitude: 49.2827, longitude: -123.1207 }, region: "northAmerica", Identity: VancouverIdentity,
    description: "Where it all began. A city of familiar faces, endless coastlines, and the kind of roots that make anywhere else feel like an adventure.",
  },
  { id: "ottawa", name: "Ottawa", country: "Canada", coordinates: { latitude: 45.4215, longitude: -75.6972 }, region: "northAmerica", Identity: OttawaIdentity,
    description: "A new city, a new pace, and a chance to find my own rhythm. A chapter that pushed me outside the familiar, both personally and professionally.",
  },
  { id: "toronto", name: "Toronto", country: "Canada", coordinates: { latitude: 43.6532, longitude: -79.3832 }, region: "northAmerica", Identity: TorontoIdentity,
    description: "A city that never seems to run out of things to discover. From the energy of its streets to the people and perspectives around every corner, there's always something new to take in.",
  },
  { id: "karachi", name: "Karachi", country: "Pakistan", coordinates: { latitude: 24.8607, longitude: 67.0011 }, region: "southAsia", Identity: KarachiIdentity,
    description: "A familiar kind of chaos, in the best way. Long days with family, streets full of life, and a welcome change of perspective from the everyday.",
  },
];
