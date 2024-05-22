"use client";

import Infocontent from "@/components/Infocontent";
import useCountryStore from "@/store/countryStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
interface ProductDetailsProps {
  params: {
    index: number;
  };
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
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
  
  interface CountryStore {
    countries: Country[];
    fetchCountries: () => void;
    loading: boolean;
  }
  const router = useRouter();
  const { fetchCountries, loading } = useCountryStore() as CountryStore;

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="infowrapper container w-full">
      <div onClick={() => router.back()} className="backbtn my-12"> {"<--"}Back</div>
      <Infocontent index={params.index} />
    </div>
  );
};

export default ProductDetails;
