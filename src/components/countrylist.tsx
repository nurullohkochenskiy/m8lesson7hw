import useCountryStore from '@/store/countryStore';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import React from 'react';

const Countrylist: React.FC = () => {
  interface Country {
    flags: {
      png: string;
    };
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string[];
  }
  
  const { countries } = useCountryStore() as { countries: Country[] }; 
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  return (
    <div className="container card-grid countrylist">
      {countries.map((country: Country, i: number) => {
        return resolvedTheme === 'light' ? (
          <div
            onClick={() => router.push(`/infocountry/${i}`)}
            key={i}
            className="card"
          >
            <img className="image" src={country.flags.png} alt="" />
            <div className="info">
              <div className="name font-extrabold">{country.name.common}</div>
              <div className="additional">
                <div>
                  Population:{' '}
                  <span>{country.population.toLocaleString()}</span>
                </div>
                <div>
                  Region: <span>{country.region}</span>
                </div>
                <div>
                  Capital: <span>{country.capital}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => router.push(`/infocountry/${i}`)}
            key={i}
            className="card darkmode"
          >
            <img className="image" src={country.flags.png} alt="" />
            <div className="info">
              <div className="name font-extrabold">{country.name.common}</div>
              <div className="additional">
                <div>
                  Population:{' '}
                  <span>{country.population.toLocaleString()}</span>
                </div>
                <div>
                  Region: <span>{country.region}</span>
                </div>
                <div>
                  Capital: <span>{country.capital[0]}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countrylist;
