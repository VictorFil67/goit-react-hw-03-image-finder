import React, { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    // const { search } = this.state;
    this.setState({ search: e.target.value });
    // let text = e.target.value;
    // console.log(text);
    // return text;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    // const { search } = this.state;
    // this.setState({ : this.handleChange() });
    // console.log(q);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            onChange={this.handleChange}
            name="q"
            value={this.state.search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// export const Searchbar = ({ q, onChange, onSubmit }) => {
//   return (
//     <header className="searchbar">
//       <form className="form" onSubmit={onSubmit}>
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           onChange={onChange}
//           name="q"
//           // value={q}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };
