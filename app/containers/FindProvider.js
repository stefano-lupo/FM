import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories } from '../actions/providers';
import CategoryList from '../components/CategoryList';

class FindProvider extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(!this.props.categoriesFetched) {
      this.props.fetchCategories();
    }
  }

  render() {
    console.log("Rerendering");
    const categories = this.props.subCategories || this.props.categories;
    console.log(categories);
    if(categories) {
      return (
        <View style={{paddingTop: 20}}>
          <Text>{this.props.parentCategory || "Categories"}</Text>
          <CategoryList categories={categories}/>
        </View>
      );
    } else {
      return (<Text>Loading..</Text>)
    }
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