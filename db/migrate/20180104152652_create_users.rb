# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :auth
      t.string :email

      t.timestamps
    end

    add_index :users, :auth, unique: true
  end
end
