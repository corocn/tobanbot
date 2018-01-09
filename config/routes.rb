# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :user
      resources :ping
      resources :members
      resources :tasks
    end
  end
end
