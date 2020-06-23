import React, { Component } from 'react';

import './Directory.scss';

import MenuItem from '../MenuItem';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: '',
        id: 1,
        linkUrl: 'hats',
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: '',
        id: 2,
        linkUrl: '',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: '',
        id: 3,
        linkUrl: '',
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: '',
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: '',
      },
    ],
  };

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title.toUpperCase()}
            imageUrl={section.imageUrl}
            imageSize={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
