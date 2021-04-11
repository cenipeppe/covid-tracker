import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../api";

export default function CountryPicker({ handleCountry }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    void (async () => {
      setCountries(await fetchCountries());
    })();
  }, []);
  return (
    <div className="CountryPicker">
      <FormControl variant="filled">
        <NativeSelect
          onChange={(e) => handleCountry(e)}
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        >
          <option value="Global">Global</option>
          {countries.map((country, index) => {
            return (
              <option key={`${country.iso2}${index}`} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
