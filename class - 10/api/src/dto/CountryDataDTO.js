export const formatCountryDataDTO = (countries) => {
  return countries.map((country) => {
    return {
      name: country.name.common ?? "",
      flag: country.flags.png ?? "",
    };
  });
};
