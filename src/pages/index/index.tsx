import { Component } from 'react'
import { View, Text, Navigator } from '@tarojs/components'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home'>
        <Text>欢迎来到儿童乐园！</Text>
        <Navigator url='/subPage/pkgA/cat/index' hoverClass='navigator-hover'>猫</Navigator>
        <Navigator url='/subPage/pkgA/dog/index' hoverClass='navigator-hover'>狗</Navigator>
        <View className='line'></View>
        <Navigator url='/packageB/pages/apple/index' hoverClass='navigator-hover'>苹果</Navigator>
        <Navigator url='/packageB/pages/banana/index' hoverClass='navigator-hover'>香蕉</Navigator>
      </View>
    )
  }
}