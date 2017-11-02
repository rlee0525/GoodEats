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
    let results = this.props.results;

    return results.map((result, idx) => (
      <ResultList key={idx} result={result} />
    ));
  }

  render() {
    return (
      <div className="result-container">
        <div className="result-list">
          {this.renderResults()}
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