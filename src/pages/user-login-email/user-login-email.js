import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import md5 from 'blueimp-md5'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import { ButtonItem, InputItem } from '@components'
import { CDN } from '@constants/api'
import './user-login-email.scss'

const LOGO = `${CDN}/6dbf208804386f12aa9e662d82abe563.png`
const EMAIL_SUFFIX = [
  '163.com', '126.com', 'yeah.net', 'vip.163.com', 'vip.126.com'
]

@connect(state => state.user, actions)
class UserLoginEmail extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  state = {
    username: '',
    password: '',
    isShowSuggest: false,
    loading: false
  }

  componentDidMount() {
    Taro.showToast({
      title: '注意，严选小程序的登录有变动，目前无法正常登录',
      icon: 'none',
      duration: 5000
    })
  }

  handleInput = (key, value) => {
    this.setState({ [key]: value })
    if (key === 'username') {
      const isFinish = /\.(com|net)$/.test(value)
      if (!this.state.isShowSuggest && value && !isFinish) {
        this.setState({ isShowSuggest: true })
      } else if (this.state.isShowSuggest && (!value || isFinish)) {
        this.setState({ isShowSuggest: false })
      }
    }
  }

  handleSuggest = (value) => {
    this.handleInput('username', value)
  }

  handleLogin = () => {
    const payload = {
      username: this.state.username,
      password: md5(this.state.password)
    }
    this.setState({ loading: true })
    this.props.dispatchLogin(payload).then(() => {
      this.setState({ loading: false })
      Taro.navigateBack({ delta: 2 })
      // TODO RN 的 navigateBack 参数 delta 无效，暂时用如下方式解决
      if (process.env.TARO_ENV === 'rn') {
        setTimeout(() => Taro.navigateBack(), 1000)
      }
    }).catch(() => {
      this.setState({ loading: false })
    })
  }

  render () {
    const { username, password, isShowSuggest, loading } = this.state
    const isBtnDisabled = !username || !password

    // XXX 暂未实现 input 的 autoFocus 的逻辑
    return (
      <View className='user-login-email'>
        <View className='user-login-email__logo'>
          <Image src={LOGO} className='user-login-email__logo-img' />
        </View>
        <View className='user-login-email__wrap'>
          <InputItem
            value={username}
            placeholder='邮箱账号'
            onInput={this.handleInput.bind(this, 'username')}
          />
          <InputItem
            password
            value={password}
            placeholder='密码'
            onInput={this.handleInput.bind(this, 'password')}
          />
          {isShowSuggest &&
            <View className='user-login-email__suggest'>
              {EMAIL_SUFFIX.map((suffix) => {
                const name = username.split('@')[0]
                const value = `${name}@${suffix}`
                return (
                  <View
                    key={suffix}
                    className='user-login-email__suggest-item'
                    onClick={this.handleSuggest.bind(this, value)}
                  >
                    <Text className='user-login-email__suggest-item-txt'>{value}</Text>
                  </View>
                )
              })}
            </View>
          }
        </View>
        <View className='user-login-email__btn'>
          <ButtonItem
            text='登录'
            disabled={isBtnDisabled}
            loading={loading}
            onClick={this.handleLogin}
            compStyle={{
              background: '#b59f7b',
              borderRadius: Taro.pxTransform(4)
            }}
            textStyle={{
              color: isBtnDisabled ? 'rgba(255, 255, 255, 0.4)' : '#ffffff'
            }}
          />
        </View>
      </View>
    )
  }
}

export default UserLoginEmail
