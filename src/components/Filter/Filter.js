import React from 'react';

// class Filter extends React.Component {
//   state = {
//     filter: '',
//   };

//   handleChangeFilter = evt => {
//     this.setState(prevState => {
//       return {
//         filter: evt.target.value,
//       };
//     });
//   };

//   render() {
//     return (
//       <label htmlFor="">
//         Find contacts by names
//         <input
//           type="text"
//           onChange={this.handleChangeFilter}
//           value={this.state.filter}
//         />
//       </label>
//     );
//   }
// }

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by names
      <input type="text" onChange={onChange} value={value} />
    </label>
    //     );
  );
};

export default Filter;
