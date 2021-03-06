import { StyleSheet } from 'react-native';
import Helpers from '../../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loadMoreBtnWrapper: {
    width: Helpers.screenWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadMoreBtn: {
    borderRadius: 70,
    marginTop: 5,
    marginBottom: 11,
    width: 70,
    height: 70,
    alignSelf: 'center',
    backgroundColor: '#146fff',
    borderWidth: 2,
    borderColor: '#ddd'
  },
  loadMoreTxt: {
    color: '#fff'
  },
  shimmerImg: {
    height: 130
  }
});

export default styles;
