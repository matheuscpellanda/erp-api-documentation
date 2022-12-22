import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EntitySidebar from '../components/EntitySidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Entities.css';

export default class Entities extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <div className="entities">
          <EntitySidebar />
          <article>
            <span>Entities</span>
            <h1>Entity reference documentation</h1>
            <hr />
            <div className="row">
              <section>
                <p>Aqui estão as estruturas de cada entidade utilizada na API. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus sit. Libero nunc consequat interdum varius sit amet mattis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis auctor elit sed vulputate. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Magna sit amet purus gravida quis blandit turpis. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquam purus sit amet luctus. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Felis eget nunc lobortis mattis aliquam. Quis viverra nibh cras pulvinar mattis nunc sed. Facilisis magna etiam tempor orci eu. Sed elementum tempus egestas sed sed. Viverra accumsan in nisl nisi.</p>
                <p>Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vitae congue eu consequat ac felis donec. Tellus integer feugiat scelerisque varius morbi enim nunc. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Pellentesque pulvinar pellentesque habitant morbi. Congue nisi vitae suscipit tellus mauris a diam. Ultrices tincidunt arcu non sodales neque. Eget nunc lobortis mattis aliquam. Odio euismod lacinia at quis risus sed. Cursus turpis massa tincidunt dui ut ornare lectus.</p>
                <p>Pharetra magna ac placerat vestibulum lectus mauris ultrices. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Sapien nec sagittis aliquam malesuada. Libero volutpat sed cras ornare. Id faucibus nisl tincidunt eget nullam non nisi est sit. Bibendum ut tristique et egestas quis ipsum suspendisse. At urna condimentum mattis pellentesque id nibh tortor id. Sed risus pretium quam vulputate. Amet consectetur adipiscing elit pellentesque habitant. Venenatis urna cursus eget nunc. Id neque aliquam vestibulum morbi blandit cursus risus at. Sagittis purus sit amet volutpat consequat. Molestie nunc non blandit massa. Vel pharetra vel turpis nunc eget lorem.</p>
              </section>
              <section>
                <p>Aqui estão as estruturas de cada entidade utilizada na API. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus sit. Libero nunc consequat interdum varius sit amet mattis. Accumsan lacus vel facilisis volutpat est velit egestas dui. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Quis auctor elit sed vulputate. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Magna sit amet purus gravida quis blandit turpis. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquam purus sit amet luctus. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Felis eget nunc lobortis mattis aliquam. Quis viverra nibh cras pulvinar mattis nunc sed. Facilisis magna etiam tempor orci eu. Sed elementum tempus egestas sed sed. Viverra accumsan in nisl nisi.</p>
                <p>Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vitae congue eu consequat ac felis donec. Tellus integer feugiat scelerisque varius morbi enim nunc. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Pellentesque pulvinar pellentesque habitant morbi. Congue nisi vitae suscipit tellus mauris a diam. Ultrices tincidunt arcu non sodales neque. Eget nunc lobortis mattis aliquam. Odio euismod lacinia at quis risus sed. Cursus turpis massa tincidunt dui ut ornare lectus.</p>
                <p>Pharetra magna ac placerat vestibulum lectus mauris ultrices. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Sapien nec sagittis aliquam malesuada. Libero volutpat sed cras ornare. Id faucibus nisl tincidunt eget nullam non nisi est sit. Bibendum ut tristique et egestas quis ipsum suspendisse. At urna condimentum mattis pellentesque id nibh tortor id. Sed risus pretium quam vulputate. Amet consectetur adipiscing elit pellentesque habitant. Venenatis urna cursus eget nunc. Id neque aliquam vestibulum morbi blandit cursus risus at. Sagittis purus sit amet volutpat consequat. Molestie nunc non blandit massa. Vel pharetra vel turpis nunc eget lorem.</p>
              </section>
            </div>
            <div className="row">
              <button type="button" className="button-previous-entity" onClick={() => { history.push('/'); }}>
                {'<'}
                {' '}
                Home
              </button>
              <button type="button" className="button-next-entity" onClick={() => { history.push('/entities/orders'); }}>
                Orders
                {' '}
                {'>'}
              </button>
            </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

Entities.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
