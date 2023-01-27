/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
// import EntitySidebar from '../components/EntitySidebar';
import { Header, Footer } from '../components';
import entities from '../assets/variables/entities.json';
import './css/Entities.css';

function Entities({ history, history: { location: { pathname } } }) {
  const pageObj = entities.find((e) => e.path === pathname);

  const handlePreviousPage = (pageTitle) => {
    console.log(pageTitle);
    history.push('/entities');
  };

  const handleNextPage = (pageTitle) => {
    console.log(pageTitle);
    history.push('/entities');
  };

  const previousPageName = (pageTitle) => {
    console.log(pageTitle);
    return pageTitle;
  };

  return (
    <>
      <Header acao />
      <div className="entities">
        <span className="label">Entities</span>
        <h1 className="entities-title">{pageObj.title}</h1>
        <button
          type="button"
          onClick={() => { handlePreviousPage(pageObj.title); }}
        >
          {previousPageName(pageObj.title)}
        </button>
        <button type="button" onClick={() => { handleNextPage(pageObj.title); }}>Previous Page</button>
      </div>
      <Footer />
    </>
  );
}

// export default class Entities extends Component {
//   render() {
//     const { history, history: { location: { pathname } } } = this.props;
//     console.log(pathname);
//     return (
//       <>
//         <Header acao />
//         <div className="entities">
//           <EntitySidebar selected="none" />
//           <article>
//             <span>Entities</span>
//             <h1>Entity reference documentation</h1>
//             <hr />
//             <p>
//               In this section, the documentation of this API&apos;s entities can be found.
//               <br />
//               <br />
//               This documentation was created to assist in working with the existing entities. Knowing the properties of each entity, as well as the types of data they store, it is possible to use all avaiable features.
//               <br />
//               <br />
//               Access to the entity is restricted according to its availability in Use Cases.
//             </p>
//             <hr />
//             <div className="row">
//               <button type="button" className="button-previous-entity" onClick={() => { history.push('/'); }}>
//                 {'<'}
//                 {' '}
//                 Home
//               </button>
//               <button type="button" className="button-next-entity" onClick={() => { history.push('/entities/orders'); }}>
//                 Orders
//                 {' '}
//                 {'>'}
//               </button>
//             </div>
//           </article>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

export default Entities;

Entities.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape().isRequired,
  }).isRequired,
};
