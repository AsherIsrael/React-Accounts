class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.float :xCoord
      t.float :yCoord
      t.string :name
      t.string :designation

      t.timestamps null: false
    end
  end
end
