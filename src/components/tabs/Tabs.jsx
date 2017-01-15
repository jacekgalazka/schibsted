import React, { Component, PropTypes } from 'react';

export class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected,
    };

    this.onLabelClick = this.onLabelClick.bind(this);
  }

  onLabelClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index,
    });
  }

  renderLabels() {
    function labels(child, index) {
      const activeClass = (this.state.selected === index ? 'active' : '');

      return (
        <li key={index}>
          <a
            href="#"
            className={activeClass}
            onClick={(event) => this.onLabelClick(index, event)}
          >
            {child.props.label}
          </a>
        </li>
      );
    }
    return (
      <ul className="tabs-labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  renderTabsContent() {
    return (
      <div className="tabs-content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this.renderLabels()}
        {this.renderTabsContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
  selected: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

Tabs.defaultProps = {
  selected: 0,
};

export default Tabs;
