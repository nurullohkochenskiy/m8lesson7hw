import useCountryStore from "@/store/countryStore";
import React from "react";

interface InfocontentProps {
  index: number;
}

const Infocontent: React.FC<InfocontentProps> = ({ index }) => {
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
  }

  const { countries } = useCountryStore() as CountryStore;
  const country = countries[index];

  console.log(country);

  return (
    <div className="main flex gap-[6%]">
      <div>
        <img src={country?.flags?.png} width={560} alt="pic" />
      </div>
      <div className="my-12 infos-wrapper">
        <div className="name">{country?.name?.common}</div>
        <div className="infos">
          <div>
            <div>
              Population: <span>{country?.population?.toLocaleString()}</span>
            </div>
            <div>
              Region: <span>{country?.region}</span>
            </div>
            <div>
              Sub Region: <span>{country?.subregion}</span>
            </div>
          </div>
          <div>
            <div>
              Capital: <span>{country?.capital?.[0]}</span>
            </div>
            <div>
              Top Level Domain: <span>{country?.tld?.[0]}</span>
            </div>
            <div>
              Languages:{" "}
              <span>
                {country?.languages &&
                  Object.values(country.languages).join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="font-bold">
          Border Countries:{" "}
          <span className="font-normal">{country?.borders?.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default Infocontent;
