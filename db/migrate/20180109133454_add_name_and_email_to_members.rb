class AddNameAndEmailToMembers < ActiveRecord::Migration[5.1]
  def change
    add_column :members, :name, :string
    add_column :members, :email, :string
  end
end
