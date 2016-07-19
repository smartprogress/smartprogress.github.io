import React from 'react';
import ReactDOM from 'react-dom';

import Hint from './Hint';
import Dropdown from './Dropdown';

const styles = {
  section: {
    margin: '0 0 40px',
  }
};

ReactDOM.render(
  <div>
    <div style={styles.section}>
      <h3>Hint with tooltip</h3>
      <Hint>Hint content</Hint>
    </div>
    <div style={styles.section}>
      <h3>Dropdown with left positon</h3>
      <Dropdown>Dropdown content</Dropdown>
    </div>
    <div style={styles.section}>
      <h3>Dropdown with right positon</h3>
      <Dropdown position="right">Dropdown content</Dropdown>
    </div>
  </div>,
  document.getElementById('app')
);
