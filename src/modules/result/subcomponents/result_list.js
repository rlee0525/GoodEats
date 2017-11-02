import React from 'react';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

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