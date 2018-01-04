# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user
    end
  end
  mount_devise_token_auth_for 'User', at: '/api/v1/auth', controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks'
  }
end
