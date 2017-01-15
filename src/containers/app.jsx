import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Tabs } from '../components/tabs/Tabs';


export class App extends Component {

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

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(actions, dispatch),
});

App.propTypes = {
  fetchData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
