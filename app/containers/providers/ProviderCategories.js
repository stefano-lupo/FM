import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinner, H1 } from 'native-base';

import { fetchCategories } from '../../actions/providers';
import CategoryList from '../../components/CategoryList';

class ProviderCategories extends React.Component {

  componentDidMount() {
    if(!this.props.categories) {
     this.props.fetchCategories();
    }
  }

  render() {
    const categories = this.props.subCategories || this.props.categories;
    if(categories) {
      return (
        <View style={{paddingTop: 20}}>
          <H1 center>{this.props.parentCategory || "Categories"}</H1>
          <CategoryList categories={categories}/>
        </View>
      );
    } else {
        return (<Spinner />)
    }
  }
}


function mapStateToProps(store) {
  return {
    categories: store.get('providers').get('categories'),
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchCategories}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProviderCategories);