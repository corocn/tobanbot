# frozen_string_literal: true

module Api
  module V1
    class UserController < ApplicationController
      include Knock::Authenticable
      before_action :authenticate_user

      def index
        @user = {
          id: 'test_id',
          email: 'test_email'
        }

        render json: @user
      end
    end
  end
end
