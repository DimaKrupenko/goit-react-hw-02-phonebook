import React from 'react';

class Filter extends React.Component {
  state = {
    filter: '',
  };

  handleChangeFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });

    // this.props.formFilter(this.state);
  };

  render() {
    return (
      <label htmlFor="">
        Find contacts by names
        <input
          type="text"
          onChange={this.handleChangeFilter}
          value={this.filter}
        />
      </label>
    );
  }
}

export default Filter;
