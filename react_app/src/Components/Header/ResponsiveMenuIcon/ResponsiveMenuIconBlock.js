import React from 'react'; // import React

export default class ResponsiveMenuIconBlock extends React.Component {

  render() {

    return (
      <div id="block-responsivemenumobileicon" className="contextual-region responsive-menu-toggle-wrapper responsive-menu-toggle block-responsive-menu block-responsivemenumobileicon">
        <a id="toggle-icon" className="toggle responsive-menu-toggle-icon" title="Menu" href="#off-canvas">
          <span className="icon"></span>
          <span className="label">Menu</span>
        </a>
      </div>
    );
  }

}
