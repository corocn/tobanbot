# frozen_string_literal: true

module Api
  module V1
    class UserController < ApplicationController
      include Knock::Authenticable
      before_action :authenticate_user

      def index
        @user = {
          id: current_user.id,
          email: current_user.email
        }

        render json: @user
      end
    end
  end
end
