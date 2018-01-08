# frozen_string_literal: true

class User < ApplicationRecord
  def self.from_token_payload(payload)
    find_by(auth: payload['sub']) ||
      create!(auth: payload['sub'], email: payload['email'])
  end
end
