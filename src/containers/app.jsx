import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Tabs } from '../components/tabs/Tabs';


export class App extends Component {

  componentDidMount() {
    this.props.fetchFile();
    this.props.fetchRSS();
  }

  render() {
    return (
      <div className="test">
        <Tabs>
          <div label="test1">1</div>
          <div label="test2">2</div>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rssData: state.rssData,
    fileData: state.fileData,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchRSS: () => {
    dispatch(actions.fetchRSS()).then((response) => {
      !response.error ? dispatch(actions.fetchRSSSuccess(response.payload.data)) :
        dispatch(actions.fetchRSSFailure(response.payload.data));
    });
  },
  fetchFile: () => {
    dispatch(actions.fetchFile()).then((response) => {
      !response.error ? dispatch(actions.fetchFileSuccess(response.payload.data)) :
        dispatch(actions.fetchFileFailure(response.payload.data));
    });
  },
});

App.propTypes = {
  fetchRSS: PropTypes.func,
  fetchFile: PropTypes.func,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
