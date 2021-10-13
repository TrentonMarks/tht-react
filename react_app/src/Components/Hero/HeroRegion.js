import React from 'react'; // import React
import HeroBlock from "./HeroBlock"; // import component

export default class HeroRegion extends React.Component {

  render() {
    let hero = this.props.hero;
    
    return (
      <div id="page-hero" className='hero'>
        <div className="container">
          <div>
            {
              hero !== null &&
              hero !== undefined
              ?
              <HeroBlock data={hero} />
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }

}
