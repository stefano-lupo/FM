import React from 'react';
import { Avatar, Grid, Row, Col, List, ListItem, Divider } from 'react-native-elements';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Carousel } from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding:10,
    marginTop: 22,
  },
  avatarContainer: {
    flex: 1,
    margin: 10,
  },
  avatar: {
    resizeMode: 'cover',
    height: 80,
  },
  nameContainer: {
    flex: 3,
    margin: 5,
  },
});

export default class Profile extends React.Component {

  reviewSelected(review) {
    console.log("hit");
  }

  render() {
    const { provider } = this.props;
    return (
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{uri: provider.thumbnail}} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={{fontSize: 20}}>{ provider.getName()} </Text>
            <Divider />
            <Text style={{fontStyle: 'italic'}}>{ provider.description }</Text>
          </View>
        </View>
        {/*<Carousel ref={(carousel) => { this._carousel = carousel;}}>*/}
          {/*{ provider.images.map((image) => {*/}
            {/*return (*/}
              {/*<Image source={{uri: image.source}} />*/}
            {/*);*/}
          {/*})}*/}
        {/*</Carousel>*/}

          <List>
            {
              provider.reviews.map((review) => (
                <ListItem
                  key={review._id}
                  title={review.quickReview}
                  subtite={"by " + review.by}
                  onPress={() => this.reviewSelected(review)}
                />
              ))
            }
          </List>
      </ScrollView>


    );
  }
}
