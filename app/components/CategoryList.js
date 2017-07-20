import React from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight, Text, View, ListView } from 'react-native';


export default class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.categories),
      ds,
    };
  }

  categorySelected(category) {
    if(category.subCategories) {
      console.log("hit");
      Actions.providers({subCategories: category.subCategories, parentCategory: category.category});
    }
  }

  renderRow(category) {
    return (
      <TouchableHighlight style={{padding: 15,borderColor:'gray', borderTopWidth:1, borderBottomWidth: 1, backgroundColor: 'white', margin: 2}}
                          onPress={() => this.categorySelected(category)}>
        <View key={category._id}>
          <Text style={{ fontSize:24}}>{ category.category }</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => this.renderRow(rowData)}
      />
    );
  }
}
