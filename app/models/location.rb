class Location < ActiveRecord::Base
   belongs_to :user
   validates :name, :xCoord, :yCoord, presence: true
end
