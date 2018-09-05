class CreateViolations < ActiveRecord::Migration[5.2]
  def change
    create_table :violations do |t|
      t.string :grade
      t.string :inspection_date
      t.text :description
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
