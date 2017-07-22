import React from 'react';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';


export default class CategoryList extends React.Component {


  categorySelected(category) {
    if(category.subCategories) {
      Actions.providerCategories({subCategories: category.subCategories, parentCategory: category.category});
    } else {
      Actions.providerList({category});
    }
  }

  render() {
    const { categories } = this.props;
    console.log(categories);
    return (
      <List>
        {
          categories.map((category) => (
            <ListItem
              key={category._id}
              title={category.category}
              onPress={() => this.categorySelected(category)}
            />
          ))
        }
      </List>
    );
  }
}
