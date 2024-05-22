"use client";
import Filterdropdown from "@/components/Filterdropdown";
import Countrylist from "@/components/countrylist";
import useCountryStore from "@/store/countryStore";

import React, { useEffect } from "react";

const Dashboard = () => {
  interface Country {
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
  }
  interface CountryStore {
    countries: Country[];
    fetchCountries: () => void;
    loading: boolean;
  }
  const { fetchCountries, loading } = useCountryStore() as CountryStore;
  useEffect(() => {
    fetchCountries();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="container dashwrapper flex justify-between w-full my-10">
          <input
            className="searchinp"
            type="text"
            placeholder="Search for a country…"
          />
          <div>
            <Filterdropdown />
          </div>
        </div>
      </div>
      <Countrylist/>
    </>
  );
};

export default Dashboard;
