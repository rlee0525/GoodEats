import React from 'react';
import { connect } from 'react-redux';

import Map from '../map';
import Loading from '../loading';
import { ResultListItem } from './subcomponents';

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: this.props.query.center,
      address: this.props.query.address,
      loading: true
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.results !== newProps.results) {
      this.setState({ loading: false });
    }
  }

  renderResults() {
    let results = this.props.results;
    
    return results.filter(result => result.rating > 4.0).map((result, idx) => (
      <ResultListItem key={idx} result={result} />
    ));
  }

  render() {
    return (
      <div className="result-container">
        <div className="result-list-container">
          {(this.state.loading) ? <Loading /> : this.renderResults()}
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

export default connect(
  mapStateToProps,
  null
)(Result);