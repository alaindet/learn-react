import React, { useState, useEffect } from 'react';

import { Box, Lightbulb } from './../theme/theme';

const LightbulbFunction = () => {

  const [lightbulb, setLightbulb] = useState(true);

  return (
    <Box switch={lightbulb}>
      <h2>Lightbulb Function</h2>
      <Lightbulb switch={lightbulb} onClick={() => setLightbulb(!lightbulb)}>
        {lightbulb ? 'On' : 'Off'}
      </Lightbulb>
    </Box>
  );
};

export default LightbulbFunction;
