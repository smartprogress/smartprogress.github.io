import React from 'react';
import ReactDOM from 'react-dom';

import Hint from './Hint';
import BadHint from './BadHint';
import Dropdown from './Dropdown';
import BadDropdown from './BadDropdown';

const styles = {
  section: {
    margin: '0 0 40px',
  },
  oh: {
    position: 'relative',
    overflow: 'hidden',
    width: 100,
    height: 50,
    backgroundColor: '#F7F7F7',
  }
};

ReactDOM.render(
  <div>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th style={{ fontSize: 60, lineHeight: 1, textAlign: 'left' }}>
            <div style={{ textAlign: 'center', display: 'inline-block' }}>
              💩
              <p style={{ fontSize: 16 }}>Without react-relative-portal</p>
            </div>
          </th>
          <th style={{ fontSize: 60, lineHeight: 1, textAlign: 'left' }}>
            <div style={{ textAlign: 'center', display: 'inline-block' }}>
              😄
              <p style={{ fontSize: 16 }}>With react-relative-portal</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style={styles.section}>

              <div style={styles.oh}>
                <BadHint>Hint content</BadHint>
              </div>
            </div>
            <div style={styles.section}>

              <div style={styles.oh}>
                <BadDropdown>Dropdown content</BadDropdown>
              </div>
            </div>
            <div style={styles.section}>

              <div style={styles.oh}>
                <BadDropdown position="right">Dropdown content</BadDropdown>
              </div>
            </div>
          </td>
          <td>
            <div style={styles.section}>

              <div style={styles.oh}><Hint>Hint content</Hint></div>
            </div>
            <div style={styles.section}>

              <div style={styles.oh}><Dropdown>Dropdown content</Dropdown></div>
            </div>
            <div style={styles.section}>

              <div style={styles.oh}><Dropdown position="right">Dropdown content</Dropdown></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>,
  document.getElementById('app')
);
