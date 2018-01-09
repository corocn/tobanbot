# frozen_string_literal: true

Rails.application.routes.draw do
  resources :members
  namespace :api do
    namespace :v1 do
      resources :user
      resources :ping
    end
  end
end
