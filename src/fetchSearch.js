import React from 'react';

async function fetchSearch({ queryKey }) {
  const { animal, location, bread } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${bread}`,
  );
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}

export default fetchSearch;
