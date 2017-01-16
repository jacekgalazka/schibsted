import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as utils from './../utils/logUtils';

export class LogTab extends Component {

  componentDidMount() {
    this.props.fetchLog();
  }

  renderHostsList(list) {
    return list.map((item, key) => (
      <p key={key} className="logs-list_element">
        {item[0]}
      </p>
      ));
  }

  renderFilesList(list) {
    return list.map((item, key) => (
      <p key={key} className="logs-list_element">
        {item[0]}
      </p>
      ));
  }

  renderHosts(sortedObjects) {
    return (
      sortedObjects.hostGroups ? <div>
        {this.renderHostsList(utils.getResultArray(sortedObjects.hostGroups))}
      </div> : null
    );
  }

  renderFiles(sortedObjects) {
    return (
      sortedObjects.fileGroups ? <div>
        {this.renderFilesList(utils.getResultArray(sortedObjects.fileGroups))}
      </div> : null
    );
  }

  renderLogObject() {
    const splitedLogArray = utils.getSplitedArray(this.props.fileData);
    const sortedObjects = splitedLogArray.length ? utils.groupElements(splitedLogArray, 0) : {};

    return (
      <div>
        <h3>Most used hosts</h3>
        {this.renderHosts(sortedObjects)}
        <h3>Most downloaded files</h3>
        {this.renderFiles(sortedObjects)}
      </div>
    );
  }

  render() {
    return (
      <div className="logs-list">
        {this.renderLogObject()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fileData: state.fileData,
  };
}


LogTab.propTypes = {
  fileData: PropTypes.string,
  fetchLog: PropTypes.func,
  label: PropTypes.string,

};

export default connect(
  mapStateToProps,
  null,
)(LogTab);
