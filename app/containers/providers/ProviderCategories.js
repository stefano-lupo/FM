import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories } from '../../actions/providers';
import CategoryList from '../../components/CategoryList';

class ProviderCategories extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("CDM");
    if(!this.props.categories) {
      this.props.fetchCategories();
    }
  }

  render() {
    const categories = this.props.subCategories || this.props.categories;
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
    categories: state.ProvidersReducers.categories
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchCategories}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProviderCategories);