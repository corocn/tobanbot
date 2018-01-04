# frozen_string_literal: true

class Users::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController

  # override
  def omniauth_success
    get_resource_from_auth_hash
    create_token_info
    set_token_on_resource
    create_auth_params

    if resource_class.devise_modules.include?(:confirmable)
      # don't send confirmation email!!!
      @resource.skip_confirmation!
    end

    if invalid_email?(@resource.email)
      return render json: { message: 'failed to login' }, status: 500
    end

    sign_in(:user, @resource, store: false, bypass: false)

    if @resource.save!
      # update_token_authをつけることでレスポンスヘッダーに認証情報を付与できる。
      update_auth_header
      yield @resource if block_given?
      render json: @resource, status: :ok
    else
      render json: { message: 'failed to login' }, status: 500
    end
  end

  private

  def invalid_email?(email)
    return false unless ENV['EMAIL_RESTRICTION']
    email !~ Regexp.new(ENV['EMAIL_RESTRICTION'])
  end
end
