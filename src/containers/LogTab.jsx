import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class LogTab extends Component {

  componentDidMount() {
    this.props.fetchLog();
  }

  renderLogObjectList() {
    return (
      <div>
        loooog
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
