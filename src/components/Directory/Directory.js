import React, { Component } from 'react';

import './Directory.scss';

import MenuItem from '../MenuItem';
import SECTIONS_DATA from '../../data/sectionsData';

class Directory extends Component {
  state = {
    sections: SECTIONS_DATA,
  };

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu directory-menu_display">
        {sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title.toUpperCase()}
            imageUrl={section.imageUrl}
            imageSize={section.size}
            linkUrl={section.linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
