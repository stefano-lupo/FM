import React from 'react';
import { Button, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories } from '../actions/providers';
import CategoryList from '../components/CategoryList';

class FindProvider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return null;
    return (
      <List>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
        }
      </List>
    );
  }
}


function mapStateToProps(state) {
  return {
    categories: state.ProvidersReducers.categories,
    categoriesFetched: state.ProvidersReducers.categoriesFetched
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchCategories}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FindProvider);