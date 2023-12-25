import React, {Component} from 'react';
import AppBackground from '../../../components/AppBackground';
import {appIcons} from '../../../assets';
import {Alert, FlatList, TextInput, View} from 'react-native';
import CustomSingleList from '../../../components/CustomSingleList';
import {
  GoalDetails,
  ProfileInfo,
  goDetailsPops,
  topicsPosts,
} from '../../../utils/dummyData';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import {colors, family, size} from '../../../utils';
import NavService from '../../../helpers/NavService';
import SocialSheetPopup from '../../../containers/Popup/socialSheetPopup/socialSheetPopup';
import ModalPopup from '../../../containers/Popup/modalPopup/modalPopup';
import CustomText from '../../../components/CustomText';
import {TouchableOpacity} from 'react-native';

export class GoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isModal: false,
    };
  }
  handleClosed = () => {
    this.setState({isModal: false});
  };
  handleSuccess = () => {
    this.setState({isModal: false});
    NavService?.navigate('BottomTabs', {screen: 'MyGoals'});
  };

  render() {
    const {completed} = this.props.route.params;
    console.log(completed, 'completed');
    const {isVisible, isModal} = this.state;
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const handleClose = () => {
      this.setState({isVisible: false});
    };
    const handleModalOption = _id => {
      if (_id == 0) {
        this?.setState({isVisible: false});
        NavService?.navigate('EditGoal');
      } else {
        this?.setState({isVisible: false});
        setTimeout(() => {
          this?.setState({isModal: true});
        }, 650);
        // NavService?.navigate('EditGoal');
      }
    };
    return (
      <AppBackground
        title={'Comments'}
        back
        resizeMode={'contain'}
        Rightimage
        OnPressRight={() => {
          this.setState({isVisible: true});
        }}
        rightIcon={completed == 0 && appIcons.dots}
        marginHorizontal={false}>
        <FlatList
          data={topicsPosts}
          style={{marginTop: 20}}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({item}) => (
            <View style={{alignItems: 'flex-end'}}>
              <View
                style={{
                  backgroundColor: colors?.lightBlue,
                  borderRadius: 10,
                  gap: 2,
                  padding: 10,
                  width: '100%',
                }}>
                <CustomText
                  text={'Alex'}
                  size={size?.xxsmall}
                  color={colors?.lightGray}
                  font={family?.Poppins_SemiBold}
                />
                <CustomText
                  text={item.text}
                  size={size?.xxsmall}
                  color={colors?.lightGray}
                  font={family?.Poppins_Italic}
                />
              </View>
            </View>
          )}
        />
        {/* <View>
          <FlatList
            contentContainerStyle={[
              styles.containerstyle,
              {
                backgroundColor:
                  completed == 0 ? colors.white : colors.lightBlue,
              },
            ]}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={GoalDetails}
            renderItem={({item}) => (
              <CustomSingleList GoalDetails item={item} />
            )}
          />
        </View> */}
        {/* {completed == 0 && (
          <CustomButton
            onPress={() =>
              NavService.navigate('BottomTabs', {screen: 'Mygoal'})
            }
            title="Mark as Completed"
            buttonStyle={[styles.pressAble]}
            textStyle={{fontSize: size.small, color: colors.white}}
          />
        )} */}

        {/* <ModalPopup
          modalActive
          value={'Confirmation'}
          isVisible={isModal}
          desc="Are you sure you want to delete
          this goal?"
          sucessText="Yes"
          unsuccessText="No"
          title={'Logout'}
          handleClose={this?.handleClosed}
          onBackButtonPress={this?.handleClosed}
          onBackdropPress={this?.handleClosed}
          onYesPress={this?.handleSuccess}
          onNoPress={this?.handleClosed}
        />
        <SocialSheetPopup
          isVisible={isVisible}
          data={goDetailsPops}
          onPress={handleModalOption}
          handleClose={handleClose}
          onBackButtonPress={handleClose}
          onBackdropPress={handleClose}
        /> */}
        <View style={{flexDirection: 'row', width: '100%', gap: 10}}>
          <TextInput
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 20,
              paddingHorizontal: 15,
            }}
            placeholder="Enter Comment"
          />
          <TouchableOpacity style={styles?.btn} onPress={() => {}}>
            <CustomText
              text="Post"
              color={colors?.white}
              font={family?.Poppins_Medium}
              size={size?.xsmall}
            />
          </TouchableOpacity>
        </View>
      </AppBackground>
    );
  }
}

export default GoDetails;
