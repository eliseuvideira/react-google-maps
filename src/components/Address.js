import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Address = ({ submitAddress }) => {
  const [address, setAddress] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    submitAddress(address);
  };

  return (
    <form
      className="address"
      onSubmit={onSubmit}
      style={{
        width: '70vw',
        maxWidth: '500px',
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <label
        htmlFor="input-address"
        style={{ display: 'block', width: '95%', margin: '10px 0' }}
      >
        Address
      </label>
      <input
        type="text"
        id="input-address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        style={{ display: 'block', width: '95%', margin: '10px 0' }}
      />
      <input
        type="submit"
        value="Submit"
        style={{
          display: 'block',
          width: '95%',
          height: '35px',
          margin: '10px 0',
        }}
      />
    </form>
  );
};

Address.propTypes = {
  submitAddress: PropTypes.func.isRequired,
};

export default Address;
