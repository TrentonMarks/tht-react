import React from 'react'; // import React

export default class HeaderLogoBlock extends React.Component {

  render() {

    return (
      <div id="block-th-base2-branding" className="contextual-region block-system block-th-base2-branding">
        <a href="/" title="Home" rel="home" className="site-logo">
          <img src="http://localhost:3000/files/images/th-logo.png" alt="Home"></img>
        </a>
      </div>
    );
  }

}
