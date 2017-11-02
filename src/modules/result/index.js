import React from 'react';
import { connect } from 'react-redux';

import Map from '../map';
import { ResultList } from './subcomponents';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: this.props.query.center,
      address: this.props.query.address
    };
  }

  renderResults() {
    
  }

  render() {
    console.log(this.props.results);
    return (
      <div className="result-container">
        <div className="result-list">
          Hi
        </div>
        <Map />
      </div>
    );
  }
}

const mapStateToProps = ({ query, results }) => ({
  query,
  results
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);