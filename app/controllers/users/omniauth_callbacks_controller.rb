# frozen_string_literal: true

class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def google
    auth = request.env['omniauth.auth']

    # FIXME: 指定ドメイン以外の場合
    if invalid_domain?(auth)
      return head :not_found
    end

    @user = User.find_for_google(auth)
    if @user.persisted?
      # flash[:notice] = I18n.t 'devise.omniauth_callbacks.success', kind: 'Google'
      sign_in_and_redirect @user, event: :authentication
    else
      session['devise.google_data'] = auth
      redirect_to new_user_registration_url
    end
  end

  private

  def invalid_domain?(auth)
    return false unless ENV['EMAIL_RESTRICTION']
    !(auth.info.email =~ Regexp.new(ENV['EMAIL_RESTRICTION']))
  end
end
