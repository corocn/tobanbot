# frozen_string_literal: true

class AuthenticatedController < ApplicationController
  include Knock::Authenticable
  before_action :authenticate_user
end
