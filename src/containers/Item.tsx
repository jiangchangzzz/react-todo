import * as React from 'react';
import { connect } from 'react-redux';

import { TodoStore } from '../models/TodoStore';

export class Item extends React.Component {
  render() {
    return (
      <div>
        item
      </div>
    )
  }
}

const mapStateToProps = (state: TodoStore) => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Item)
