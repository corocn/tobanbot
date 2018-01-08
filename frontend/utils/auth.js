import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'
import config from '~/auth0.config'

const getLock = (options) => {
  return new Auth0Lock(config.clientID, config.domain, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = (container) => {
  return {
    container,
    closable: false,
    auth: {
      responseType: config.responseType,
      redirectUrl: getBaseUrl() + config.redirectUri,
      params: {
        scope: config.scope
      }
    }
  }
}

export const show = (container) => getLock(getOptions(container)).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })

export const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

/* eslint-disable camelcase */
export const setToken = ({access_token, id_token, expires_in}) => {
  window.localStorage.setItem('accessToken', access_token)
  window.localStorage.setItem('idToken', id_token)
  window.localStorage.setItem('expiresAt', expires_in * 1000 + new Date().getTime())
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(id_token)))
}
/* eslint-enable camelcase */

export const unsetToken = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('idToken')
  window.localStorage.removeItem('expiresAt')
  window.localStorage.removeItem('user')
}

export const isAuthenticated = () => {
  const expiresAt = localStorage.getItem('expiresAt')
  console.log(expiresAt)
  return new Date().getTime() < expiresAt
}

export const getIdToken = () => {
  if (isAuthenticated()) {
    return localStorage.getItem('idToken')
  } else {
    return null
  }
}

export const getAccessToken = () => {
  if (isAuthenticated()) {
    return localStorage.getItem('accessToken')
  } else {
    return null
  }
}

export const getUser = () => {
  if (isAuthenticated()) {
    return localStorage.getItem('user')
  } else {
    return null
  }
}
