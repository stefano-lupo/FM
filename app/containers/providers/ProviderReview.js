import React from 'react';
import { Image, View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon,  H1, H2, H3 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'react-native-looped-carousel';

import { fetchProvidersByCategory } from '../../actions/providers';
import Profile from '../../components/Profile';

const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  reviewTextHeader: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  reviewText: {
    textAlign: 'center',
  },
  quickReview: {
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10,

  },
  carouselContainer: {
    height: WIDTH,
    width: WIDTH,
    borderWidth: 1,
  },
  carouselImage: {
    borderWidth: 1,
    height: WIDTH,
    width: WIDTH,
    resizeMode: 'cover',
  }
})


class ProviderReview extends React.Component {

  componentDidMount() {
    // Fetch reviews etc, merge into currentPRovider?
    //this.props.fetchProvidersByCategory(this.props.category.category);
  }

  render() {
    const { review } = this.props;
    console.log(review);
    return (
      <Container style={{paddingTop: 22}}>
        <ScrollView>
          <Grid>
            <Col size={1}>
              <Text style={styles.reviewTextHeader}>Score</Text>
              <Text style={styles.reviewText}>{ review.score }</Text>
              </Col>
            <Col size={2}>
              <Text style={styles.reviewTextHeader}> Reviewer</Text>
              <Text style={styles.reviewText}>{ review.by }</Text>
            </Col>
            <Col size={1}>
              <Text style={styles.reviewTextHeader}> Review Quality</Text>
              <Text style={styles.reviewText}>{ review.helpfullScore }</Text>
            </Col>
          </Grid>
          <Text style={styles.quickReview}>{review.quickReview} </Text>
          <Carousel
            delay={3000}
            style={styles.carouselContainer}
            autoplay
            pageInfo
            onAnimateNextPage={(p) => console.log(p)}
          >
            {review.reviewerImages.map((image) => {
              console.log(image.source);
              return (
                <Image style={styles.carouselImage} source={{uri: image.source}} />
              );
            })
            }
          </Carousel>
          <H1>Full Review</H1>
          <Text>{review.fullReview} </Text>
        </ScrollView>
      </Container>
    );
  }
}


function mapStateToProps(state) {
  return {
    providers: state.ProvidersReducers.providersByCategory,
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({fetchProvidersByCategory}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ProviderReview);
