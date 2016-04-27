class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :designation
      t.float :xCoord
      t.float :yCoord

      t.timestamps null: false
    end
  end
end
