# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :trackable, :omniauthable, omniauth_providers: %i[google]
  include DeviseTokenAuth::Concerns::User

  # protected
  #
  # def self.find_for_google(auth)
  #   user = User.find_by(email: auth.info.email)
  #
  #   user ||= User.create(email: auth.info.email,
  #                        provider: auth.provider,
  #                        uid: auth.uid,
  #                        token: auth.credentials.token,
  #                        password: Devise.friendly_token[0, 20],
  #                        meta: auth.to_yaml)
  #   user
  # end
end
