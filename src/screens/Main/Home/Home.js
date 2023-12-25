import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {appImages} from '../../../assets';
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import CustomText from '../../../components/CustomText';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils';
import NavService from '../../../helpers/NavService';
import {
  _Challenges,
  _Home,
  _dailyGoal,
  homeCards,
  postData,
} from '../../../utils/dummyData';
import CustomList from '../../../components/CustomList';
import {LineChart} from 'react-native-chart-kit';
import ListComponent from '../../../components/ListComponent';
import ModalPopup from '../../../containers/Popup/modalPopup/modalPopup';
import CustomCard from '../../../components/CustomCard';
import {connect} from 'react-redux';
import {ASSETS_URL} from '../../../config/WebService';
const {height, width} = Dimensions.get('screen');
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  ItemSeparatorComponent = () => {
    return <View style={{height: 10}} />;
  };
  handleClose = () => {
    this?.setState({isVisible: false});
  };

  render() {
    const {isVisible} = this?.state;
    const {user} = this?.props;
    console.log('useeerrrr', user);
    return (
      <AppBackground
        homePress={() => NavService.navigate('MyProfile')}
        menu
        title={'Home'}
        notification
        homeTitle={'Welcome,'}
        homeSubtitle={`${user?.first_name} ${user?.last_name}`}
        // home={true}
        homeimage={
          user?.profile_image
            ? ASSETS_URL + user?.profile_image
            : appImages.profile
        }
        marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{gap: 15, }}>
            <View style={styles.ViewText}>
              {/* <CustomButton title="View Details" onPress={()=> NavService?.navigate('ChallengesParticipate')} /> */}

              <CustomText text="Daily News" style={styles.text1} />
              <TouchableOpacity onPress={() => NavService.navigate('MyGoals')}>
                {/* <CustomText text="View Details" style={styles.ViewDetails} /> */}
              </TouchableOpacity>
            </View>
            <FlatList
              bounces={false}
              contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: width * 0.32,
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={_index => _index.toString()}
              data={postData}
              ItemSeparatorComponent={this?.ItemSeparatorComponent}
              renderItem={({item}) => (
                <CustomList
                  Status
                  _item={item}
                  _title2={item?.title}
                  _title3={item?.createAt}
                  _titleUser={item?.username}
                  statusColor={colors?.secondary}
                  customContainer={{
                    borderRadius: 15,
                    backgroundColor: colors?.lightBlue,
                  }}
                  role={user?.role}
                  onPress={() => NavService?.navigate('GoDetails')}
                />
              )}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer: {user}, appReducer: {socket, stories}}) {
  return {
    user,
  };
}
export default connect(mapStateToProps, null)(Home);
