
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';

//Redux
import { connect } from 'react-redux';
import { yerEkle } from './src/redux/actions/yer';

class App extends Component {

  state = {
    yerAdi: '',
    yerler: []
  }

  buttonClicked = () => {
    //console.log('buttonClicked');
    //console.log(this.state.yerAdi);
    if (this.state.yerAdi.trim() === '') {
      return;
    }
    //console.log(this.props);  
    this.props.ekle(this.state.yerAdi);
  }

  textChanged = (value) => {
    this.setState({
      yerAdi: value
    });
  }

  renderList() {
    return (
      <FlatList 
        style={styles.listStyle}
        data={this.props.listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={data => (<Text>{data.item.value}</Text>)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Gezdiğim Yerler"
            style={styles.yerInput}
            onChangeText={this.textChanged}       
          />
          <Button 
            title="Ekle"
            style={styles.ekleButton}
            onPress={this.buttonClicked}
          />
        </View>
        <View style={styles.listStyle}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  yerInput: {
    width: '70%'
  },
  ekleButton: {
    width: '30%'
  },
  listStyle: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  console.log('mapStateToProps');
  console.log(state);
  return {
    listData: state.tumYerler.yerler
  };
};

const mapDispatchToProps = dispatch => {
  //console.log('mapDispatchToProps');
  //console.log(dispatch);
  return {
    ekle: (yerAdi) => {
      dispatch(yerEkle(yerAdi));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
