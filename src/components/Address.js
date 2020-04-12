import React, { useState } from 'react';

const Address = () => {
  const [address, setAddress] = useState('');

  return (
    <form className="address">
      <label htmlFor="input-address">Address</label>
      <input
        type="text"
        id="input-address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Address;
