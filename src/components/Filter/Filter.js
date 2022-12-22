import React from 'react';
import styles from './Filter.module.css';

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
    <label className={styles.filter__label} htmlFor="">
      Find contacts by names
      <input
        className={styles.filter__input}
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
    //     );
  );
};

export default Filter;
