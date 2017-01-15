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

  groupElements(arr) {
    const hostGroups = {};
    const fileGroups = {};
    arr.forEach((item) => {
      hostGroups[item[0]] ? hostGroups[item[0]].push(item) : hostGroups[item[0]] = [item];
      fileGroups[item[1]] ? fileGroups[item[1]].push(item) : fileGroups[item[1]] = [item];
    });

    return { hostGroups, fileGroups };
  }

  renderHostList(sortedObjects) {
    console.log(sortedObjects.hostGroups);
  }

  renderFileList(sortedObjects) {
    console.log(sortedObjects.fileGroups);
  }

  renderLogObjectList() {
    const splitedLogArray = this.getSplitedArray();
    const sortedObjects = splitedLogArray.length ? this.groupElements(splitedLogArray, 0) : {};

    return (
      <div>
        {this.renderHostList(sortedObjects)}
        {this.renderFileList(sortedObjects)}
      </div>
    );
  }

  render() {
    return (
      <div className="logs-list">
        {this.renderLogObjectList()}
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
