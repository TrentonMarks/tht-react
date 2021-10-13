import React from 'react'; // import React

export default class TopTopNavItem extends React.Component {

  render() {
    let data = this.props.link;

    return (
      <li className="active-trail sf-depth-1 sf-no-children">
        <a href={data.url} className="sf-depth-1">{data.title}</a>
      </li>
    );
  }

}
