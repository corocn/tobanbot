# frozen_string_literal: true

class User < ApplicationRecord
  def self.from_token_payload(payload)
    find_by(email: payload['email']) || find_or_create_by(
      name: payload['name'],
      email: payload['email']
    )
  end
end
