import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class LogTab extends Component {

  componentDidMount() {
    this.props.fetchLog();
  }

  getSplitedArray() {
    let objectArray = this.props.fileData ? this.props.fileData.split(/\n/) : [];
    objectArray = objectArray.map((item) => {
      const elementArray = item.split(' ');
      return [elementArray[0], elementArray[6], item];
    });
    return objectArray;
  }

  getBigestArray(obj) {
    let arr = [];
    // FIXME
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        obj[property].length > arr.length ? arr = obj[property] : null;
      }
    }
    return arr.slice(0, 5);
  }

  groupElements(arr) {
    const hostGroups = {};
    const fileGroups = {};
    // next time use regex
    arr.forEach((item) => {
      hostGroups[item[0]] ? hostGroups[item[0]].push(item) : hostGroups[item[0]] = [item];
      fileGroups[item[1]] ? fileGroups[item[1]].push(item) : fileGroups[item[1]] = [item];
    });
    return { hostGroups, fileGroups };
  }

  renderHostsList(list) {
    return list.map((item, key) => (
      <p key={key} className="host">
        {item[2]}
      </p>
      ));
  }

  renderFilesList(list) {
    return list.map((item, key) => (
      <p key={key} className="host">
        {item[2]}
      </p>
      ));
  }

  renderHosts(sortedObjects) {
    return (
      sortedObjects.hostGroups ? <div>
        {this.renderHostsList(this.getBigestArray(sortedObjects.hostGroups))}
      </div> : null
    );
  }

  renderFiles(sortedObjects) {
    return (
      sortedObjects.fileGroups ? <div>
        {this.renderFilesList(this.getBigestArray(sortedObjects.fileGroups))}
      </div> : null
    );
  }

  renderLogObject() {
    const splitedLogArray = this.getSplitedArray();
    const sortedObjects = splitedLogArray.length ? this.groupElements(splitedLogArray, 0) : {};

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
