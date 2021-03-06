# frozen_string_literal: true

module Api
  module V1
    class UserController < AuthenticatedController
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
