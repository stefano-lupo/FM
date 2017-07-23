/**
 * Created by stefano on 23/07/17.
 */
import React from 'react';
import { Avatar, Grid, Row, Col, List, ListItem, Divider } from 'react-native-elements';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

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

<Carousel
  delay={2000}
  style={{width:400, height: 400}}
  autoplay
  pageInfo
  onAnimateNextPage={(p) => console.log(p)}
>
  <View style={{ backgroundColor: '#BADA55', width:400, height:400 }}><Text>1</Text></View>
  <View style={{ backgroundColor: 'red', width:400, height:400 }}><Text>2</Text></View>
  <View style={{ backgroundColor: 'blue',width:400, height:400 }}><Text>3</Text></View>
</Carousel>


export default class Profile extends React.Component {

  reviewSelected(review) {
    console.log("hit");
  }

  render() {
    const { provider } = this.props;
    return (
      <View>
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
        </ScrollView>
        <Carousel
          ref={(carousel) => { this._carousel = carousel; }}
          sliderWidth={400}
          itemWidth={400} >
          <Text>1</Text>
          <Text>2 </Text>
          <Text>3 </Text>
        </Carousel>
        <ScrollView>
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
      </View>
    );
  }
}
