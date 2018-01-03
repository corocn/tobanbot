# frozen_string_literal: true

module Api
  module V1
    class UserController < ApplicationController
      def index
        @user = current_user

        render json: @user
      end
    end
  end
end
