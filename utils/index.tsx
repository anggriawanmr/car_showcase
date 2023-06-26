export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '5161dac412msh88855767f4dda5ep17e12ajsn57ffbcd9f2de',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
