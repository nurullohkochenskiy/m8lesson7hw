import { create } from "zustand";
import axios from "axios";

interface Country {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  languages: { [key: string]: string };
  borders: string[];
}

interface CountryStoreState {
  loading: boolean;
  error: string;
  countries: Country[];
  info: Country | null;
  fetchCountries: () => Promise<void>;
  getCountryInfo: (index: number) => void;
}

export const useCountryStore = create<CountryStoreState>((set, get) => ({
  loading: false,
  error: "",
  countries: [],
  info: null,
  fetchCountries: async () => {
    try {
      set({ loading: true });
      const response = await axios.get("https://countries-restapi.vercel.app/all");
      set({ loading: false, countries: response.data.data });
    } catch (error: any) {
      set({ loading: false, error: error.message });
    }
  },
  getCountryInfo: (index: number) => {
    const { countries } = get();
    if (countries.length > 0) {
      const info = countries[index];
      set({ info });
    }
  },
}));

export type { Country };
export default useCountryStore;
