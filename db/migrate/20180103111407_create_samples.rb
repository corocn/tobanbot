# frozen_string_literal: true

class CreateSamples < ActiveRecord::Migration[5.1]
  def change
    create_table :samples, &:timestamps
  end
end
