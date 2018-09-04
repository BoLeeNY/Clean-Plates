class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :camis
      t.string :name
      t.string :borough
      t.integer :building
      t.string :street
      t.integer :zip
      t.string :cuisine
      t.timestamps
    end
  end
end
