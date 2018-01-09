# frozen_string_literal: true

Rails.application.routes.draw do
  resources :tasks
  namespace :api do
    namespace :v1 do
      resources :user
      resources :ping
      resources :members
    end
  end
end
