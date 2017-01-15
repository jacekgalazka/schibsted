import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Tabs } from '../components/tabs/Tabs';
import RssTab from './RssTab';
import LogTab from './LogTab';


export class App extends Component {

  render() {
    return (
      <div className="test">
        <Tabs>
          <LogTab
            label="Varnich log"
            fetchLog={this.props.fetchFile}
          />
          <RssTab
            label="Data from RSS"
            fetchRSS={this.props.fetchRSS}
          />
        </Tabs>
      </div>
    );
  }
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
  null,
  mapDispatchToProps,
)(App);
