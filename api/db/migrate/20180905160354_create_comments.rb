class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :name, limit: 50
      t.text :comment
      t.integer :restaurant_id

      t.timestamps
    end
    add_index :comments, :name
  end
end
