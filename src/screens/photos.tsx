import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Carousel from './carousel';

import image1 from "../assests/pexels-todd-trapani-1535162.jpg";
import image2 from "../assests/pexels-giorgio-de-angelis-1413412.jpg";
import image3 from "../assests/pexels-vlad-chețan-1595655.jpg";
import image4 from "../assests/pexels-guillaume-meurice-1544376.jpg";
import image5 from "../assests/pexels-oleg-magni-2033997.jpg";

const Photos = () => {
  const items = [image1, image2, image3, image4, image5];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Carousel
          itemsPerInterval={1}
          items={items}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: "#232A31"
  },
});

export default Photos;
