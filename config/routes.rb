# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
      omniauth_callbacks: "users/omniauth_callbacks",
  }

  namespace :api do
    namespace :v1 do
      resources :user
    end
  end

end
