import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App'
// import Increment from './components/Increment';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// function App() {
//   return (
//     <>
//       <p>Test</p>
//       <Increment />
//     </>
//   );
// };

ReactDOM.render(
  <Provider store={store}><App /></Provider> , 
  document.querySelector('#app')  
);


// console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY)
// console.log('Enviroment is', process.env.NODE_ENV)

















































// import React from 'react';
// import ReactDOM from 'react-dom';

// // enum
// const PILIHAN = {
//     komputer: 'Komputer',
//     mobile: 'Mobile',
// }

// const LIST_TODO_STORAGE = 'list-todo';


// const getLocalStorage = () => {
//     const storage = localStorage.getItem(LIST_TODO_STORAGE);
//     if (!storage) return [];
//     return JSON.parse(storage);
// }

// const saveToLocalStorage = (items) => {
//     localStorage.setItem(LIST_TODO_STORAGE, JSON.stringify(items));
// }


// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             input: '',
//             list: getLocalStorage(),
//         }
//         this._inputField = this._inputField.bind(this)
//         this._onSubmit = this._onSubmit.bind(this)
//         this._handleEnterKey = this._handleEnterKey.bind(this)
//         this._hapusList = this._hapusList.bind(this)
//     }

//     /**
//      * 
//      * @param {event} e 
//      */
//     _handleEnterKey(e) {
//         if(e.key.toLowerCase() === 'enter') {
//             this._onSubmit();
//         }
//     }

//     /**
//      * validasi
//      * return bool
//      */
//     _error() {
//         return this.state.input === '' || this.state.list.length >= 10;
//     }

//     /**
//      * handle input change
//      * @param {event} e 
//      */
//     _inputField(e) {
//         this.setState( {input: e.target.value} );
//     }

//     _onSubmit() {
//         if (this._error()) {
//             return;
//         }
//         const newList = this.state.list;
//         newList.push({id: +new Date(), input: this.state.input});

//         saveToLocalStorage(newList);

//         this.setState({
//             input: '',
//             list: newList
//         });
//     }

//     /**
//      * delete item of list and set state to list
//      * @param {id of list} id 
//      */
//     _hapusList(id) {
//         const newList = this.state.list;
//         const cariIndex = newList.findIndex(e => e.id === id);
//         if (cariIndex > -1) {
//             newList.splice(cariIndex, 1);

//             this.setState({
//                 list: newList
//             });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={this._inputField} onKeyPress={this._handleEnterKey} value={this.state.input} style={{ width: 300 }}/><br />
//                 <button onClick={this._onSubmit} disabled={this._error()} style={{ marginLeft: 264 }}>Add</button>
//                 <ListItems lists={this.state.list} hapusList={this._hapusList} />
//             </div>
//         )
//     }
// }

// class ListItems extends React.Component {
//     constructor() {
//         super()
//         this._hapusListHandler = this._hapusListHandler.bind(this)
//     }

//     /**
//      * delete handler and send to props._hapusListHandler
//      * @param {id of list from props.list} id 
//      */
//     _hapusListHandler(id) {
//         this.props.hapusList(id)
//     }

//     _renderTitle() {
//         const lists = this.props.lists;
//         if (lists.length < 10) {
//             return <h1 style={{color: 'green'}}>{lists.length}</h1>;
//         }
//         return <h1 style={{color: 'red'}}>{lists.length} Sudah terlalu banyak yang harus dikerjakan</h1>
//     }

//     render() {
//         const listItems = this.props.lists.map((list) =>
//             <li key={list.id} id={list.id}>
//                 {list.input} = {list.id} <button key={list.id} onClick={() => this._hapusListHandler(list.id)}>x</button>
//             </li>
//         );

//         return (
//             <div>
//                 {this._renderTitle()}
//                 <ul>
//                     {PILIHAN[this.props.element]}
//                     {listItems}
//                 </ul>
//             </div>            
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('app'))

// class Compiler extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             nama: 'test'
//         }
//         this.ketikaBerubah = this.ketikaBerubah.bind(this)
//         this.passClick = this.passClick.bind(this)
//     }

//     gantiNama(inputNama) {
//         this.setState({ nama: inputNama })
//     }

//     passClick(angka) {
//         this.gantiNama(angka)
//     }

//     ketikaBerubah(e) {
//         this.gantiNama(e.target.value)
//     }

//     render() {
//         return (
//             <div>
//                 <NumberList numbers={this.props.numbers} />
//                 <GreetingUser input={this.state.nama} />
//                 <h1>{this.state.nama}</h1>
//                 <input onChange={this.ketikaBerubah} />
//                 <GantiH1 passClick={this.passClick} ketikaBerubah={this.ketikaBerubah} />
//             </div>
//         )
//     }
// }

// function GreetingUser(props) {
//     const input = props.input;
//     console.log(input)

//     return(
//         <div>
//             {input.length > 3 && 
//                 <h1>
//                     Hello {input}
//                 </h1>
//             }
//         </div>
//     )
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => {
//         return (
//             <li key={number.toString()}>
//                 {number}
//             </li>
//         )
//     })

//     return (
//         <ul>{listItems}</ul>
//     )
// }

// class GantiH1 extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             input: 'test'
//         }
//         this.ketikaBerubah = this.ketikaBerubah.bind(this)
//         this.ketikaClick = this.ketikaClick.bind(this)
//     }

//     ketikaClick() {
//         this.props.passClick(this.state.input)
//     }

//     ketikaBerubah(e) {
//         this.setState({ input: e.target.value })
//     }

//     render() {
//         return (
//             <div>
//                 <input onChange={this.ketikaBerubah} /><br />
//                 <button onClick={this.ketikaClick}>Berubah</button>
//             </div>
//         )
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// ReactDOM.render(<Compiler numbers={numbers}/>, document.getElementById('app'))