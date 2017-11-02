import React from 'react';

class ResultList extends React.Component {
  render() {
    let result = this.props.result;

    return (
      <div>
        {result.name}
      </div>
    );
  }
}

export { ResultList };