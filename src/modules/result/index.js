import React from 'react';
import { connect } from 'react-redux';

import Map from '../map';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: this.props.query.center,
      address: this.props.query.address
    };
  }

  render() {
    return (
      <div className="result-container">
        <div className="result-list">
          Hi
        </div>
        <Map center={this.state.center} address={this.state.address} />
      </div>
    );
  }
}

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);