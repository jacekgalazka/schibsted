import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class RssTab extends Component {

  componentDidMount() {
    this.props.fetchRSS();
  }

  sortRssData(object) {
    function compare(a, b) {
      if (a.published.datetime > b.published.datetime) { return -1; }
      if (a.published.datetime < b.published.datetime) { return 1; }
      return 0;
    }

    return object ? object.sort(compare) : [];
  }

  renderRssObjectList() {
    const objectList = this.sortRssData(this.props.rssData);

    return objectList.map((item, key) => (
      <div key={key}>
        <p className="rss-list_publisched-date">
          { item.published.datetime }
        </p>
        <p className="rss-list_title">
          { item.title }
        </p>
      </div>
      ));
  }

  render() {
    return (
      <div className="rss-list">
        {this.renderRssObjectList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rssData: state.rssData,
  };
}


RssTab.propTypes = {
  rssData: PropTypes.array,
  fetchRSS: PropTypes.func,
  label: PropTypes.string,

};

export default connect(
  mapStateToProps,
  null,
)(RssTab);
