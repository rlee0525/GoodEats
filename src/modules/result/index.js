import React from 'react';
import { connect } from 'react-redux';

import Map from '../map';
import Loading from '../loading';
import { queryPlaces } from '../search/actions';
import { ResultListItem } from './subcomponents';
import { SearchBar } from '../search/subcomponents';

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
    let { query, results } = this.props;
    
    return results.filter(result => result.rating > 4.0).map((result, idx) => (
      <ResultListItem key={idx} result={result} query={query} />
    ));
  }

  render() {
    return (
      <div className="result-container">
        <div id="result-list-container">
          <div id="search-again-container"><SearchBar {...this.props} /></div>
          <div id="result-list-direction-container"></div>
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

const mapDispatchToProps = (dispatch) => ({
  queryPlaces: query => dispatch(queryPlaces(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);