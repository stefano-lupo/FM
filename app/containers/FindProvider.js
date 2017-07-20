import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCategories } from '../actions/providers';

class FindProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categoriesToRender: props.categories
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({categoriesToRender: nextProps.categories});
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  recurseCategory(category) {
    console.log(`Recursing Category`);
    console.log(category);
    this.setState({categoriesToRender: category.subCategories})
  }

  renderCategories() {
    const {categoriesToRender} = this.state;
    if(categoriesToRender) {
      return categoriesToRender.map((category) => {
        return (<Button key={category._id} onPress={() => this.recurseCategory(category)} title={category.category} />);
      })
    }
  }

  render() {
    console.log(this.state.categoriesToRender);
    return (
      <View>
        <Text>Welcome to FindProvider</Text>
        { this.renderCategories() }
      </View>
    );
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

export default connect(mapStateToProps, matchDispatchToProps)(FindProvider);